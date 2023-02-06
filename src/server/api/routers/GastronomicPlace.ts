import { createTRPCRouter, publicProcedure } from "../trpc";

export const GastronomicPlaceRouter = createTRPCRouter({
  getMostPopular: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.gastronomicPlace.findMany();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
