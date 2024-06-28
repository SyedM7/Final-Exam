"use client"

import { z } from "zod"

export const taskSchema = z.object({
  name: z.string().min(10, { message: 'it should contain atleast 10 characters'}),
})
