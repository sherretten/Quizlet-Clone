import { db } from "~/server/db";
import { tickets } from "~/server/db/schema";

type ticket = typeof tickets.$inferInsert;

export async function GET() {
  try {
    const tickets = await db.query.tickets.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
    return tickets;
  } catch (err) {}
}

export async function POST(ticket: ticket) {
  try {
    const newTicket = await db.insert(tickets).values(ticket).returning();
    return Response.json(newTicket);
  } catch (err) {}
}
