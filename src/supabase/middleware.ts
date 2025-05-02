import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const public_routes = [
	"/",
	"/auth/sign-in",
	"/auth/email-verificated",
	"/auth/callback",
];

export const updateSession = async (request: NextRequest) => {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	if (request.nextUrl.pathname.includes("/api/trpc")) {
		return response;
	}

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_API_URL!,
		process.env.NEXT_PUBLIC_API_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) =>
						request.cookies.set(name, value),
					);
					response = NextResponse.next({
						request,
					});
					cookiesToSet.forEach(({ name, value, options }) =>
						response.cookies.set(name, value, options),
					);
				},
			},
		},
	);

	const user = await supabase.auth.getUser();

	console.log({ us: user });

	if (request.nextUrl.pathname.includes("/auth") && !user.error) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	if (public_routes.includes(request.nextUrl.pathname)) {
		return response;
	}

	if (user.error) {
		return NextResponse.redirect(new URL("/auth/sign-in", request.url));
	}

	return response;
};
