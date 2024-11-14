import { db } from "~/server/db";
import { tickets } from "~/server/db/schema";

export function GET() {
  return new Response("Hello World");
}

export async function POST(ticket) {
  await db.insert(tickets).values(ticket);
}
