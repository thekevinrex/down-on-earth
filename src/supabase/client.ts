import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "prisma/database";

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_API_URL!,
    process.env.NEXT_PUBLIC_API_KEY!,
  );
