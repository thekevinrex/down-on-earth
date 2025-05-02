# Project Down on earth

## Main stack

- T3 Stack (NextJs, tRpc, TailwindCss, Prisma, React Query, Zod)
- OpenAi SKD with Gemini ai from Google
- Stripe for payment in USD
- Enzona form paymen in CUP
- Zustand, Nuqs
- Supabase for autentication, storage, database (PostgreSql), Cron Jobs
- React Hook Form
- Shadcn for Ui librery
- etc

## Project Structure

- Prisma // Database schema
- public // Only accessible folder for assets
- src // Root folder
    - app // Router forlder organized by modules
        - api
        - (auth)
        - (clients)
        - (seller)
        - (admin)
    - modules // All components and other element for each module
        - core // The common module
            - components
                - ui
            - hooks
            - lib
            - providers
            - types
            - stores
            - utils
        - etc
    - server
        - api
            - routers // All api routers divided by modules
            - schemas // All schemas divided by modules
            - root.ts // The api app router
            - trpc.ts // Middleware and context of the trpc
        - db.ts // db client
    - styles
    - supabase
        - clients.ts
        - middleware.ts
        - server.ts
    - trpc
        - query-client.ts
        - react.ts
        - server.ts
    - env.js // Enviroment variables with typecheck
    - middleware.ts
