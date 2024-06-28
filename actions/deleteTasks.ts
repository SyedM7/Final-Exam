"use server";

import prisma from "@/lib/db";

export const deleteTasks = async (taskId: String) => {
  if (!taskId) {
    throw new Error("taskId is required");
  }
  return await prisma.task.delete({
    where: { id: taskId },
  });
};