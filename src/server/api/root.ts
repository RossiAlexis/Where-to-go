import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { GastronomicPlaceRouter } from "./routers/GastronomicPlace";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  gastronomicPlace: GastronomicPlaceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
