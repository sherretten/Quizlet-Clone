import "server-only"; //Needed to only ever use on the server side "use-server" doesn't do that.
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { tickets } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getTickets() {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const tickets = await db.query.tickets.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return tickets;
}

export async function deleteTicket(id: number) {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(tickets)
    .where(and(eq(tickets.id, id), eq(tickets.userId, user.userId)));

  redirect("/");
}
