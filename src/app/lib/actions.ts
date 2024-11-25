"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTicket, updateTicket } from "~/server/queries";

export async function addTicket(formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    desc: formData.get("description"),
  };

  await createTicket(rawData);
  revalidatePath("/");
}

export async function editTicket(id: number, formData: FormData) {
  const rawData = {
    id,
    title: formData.get("title"),
    desc: formData.get("description"),
  };

  await updateTicket(rawData);
  revalidatePath("/");
  redirect("/");
}
