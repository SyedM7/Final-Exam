"use server";

import prisma from "@/lib/db";
import { taskSchema } from "../schema/taskSchema";
import { z } from "zod";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  const validatedValues = taskSchema.safeParse(values);

  if (!validatedValues.success) {
    return { err: "Invalid values" };
  }

  const tasks = await prisma.task.create({
    data: {
      name: validatedValues.data?.name,
      
    },
  });

  console.log(tasks);
};