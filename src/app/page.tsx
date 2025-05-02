import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>Down on earth</main>
    </HydrateClient>
  );
}
