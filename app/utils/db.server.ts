import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export function db(url: string) {
  const client = new PrismaClient({
    datasources: { db: { url } },
  });
  client.$extends(withAccelerate());
  return client;
}
