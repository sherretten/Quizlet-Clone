import "server-only"; //Needed to only ever use on the server side "use-server" doesn't do that.
import { db } from "./db";
// import { auth } from "@clerk/nextjs/server";
import { mechanics } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getMechanics() {
  // const user = await auth();

  // if (!user.userId) throw new Error("Unauthorized");

  const mechanics = await db.query.mechanics.findMany({
    // where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return mechanics;
}

export async function deleteMechanic(id: number) {
  // const user = await auth();

  // if (!user.userId) throw new Error("Unauthorized");

  await db.delete(mechanics).where(eq(mechanics.id, id));

  redirect("/");
}

type Mechanic = typeof mechanics.$inferInsert;

export async function createMechanic(mechanic: Mechanic) {
  const newMechanic = await db.insert(mechanics).values(mechanic).returning();
  return newMechanic;
}

export async function updateMechanic(mechanic: Mechanic) {
  if (mechanic.id) {
    const updatedMechanic = await db
      .update(mechanics)
      .set({ maxHours: mechanic.maxHours, hoursWorked: mechanic.hoursWorked })
      .where(eq(mechanics.id, +mechanic.id))
      .returning();

    return updatedMechanic;
  }
}
