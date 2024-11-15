import { eq } from "drizzle-orm";
import { type NextApiRequest, type NextApiResponse } from "next";
import { db } from "~/server/db";
import { tickets } from "~/server/db/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "GET":
      const { ticketId } = req.query;
      const ticket = await db.select;
      res.status(200).json({});
      return;
  }
}
