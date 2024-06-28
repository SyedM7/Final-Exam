"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { taskSchema } from "../../schema/taskSchema"


const Home = () => {

  
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
    },
  })
  
  function onSubmit(values: z.infer<typeof taskSchema>) {
 
    console.log(values)
  }
  return (
    <div className='flex  bg-yellow-200 items-center justify-center p-8 '>
      <div className='grid grid-cols-3 gap-8'>
        <div className='flex flex-col  bg-pink-300 p-4 h-[100px] w-[150px] items-center '>
          <h1>Total Tasks</h1>
          <h1 className='text-4xl font-bold'>04</h1>
        </div>
        <div className='flex flex-col bg-green-300 p-4 h-[100px] w-[150px] items-center '>
          <h1>Completed</h1>
          <h1 className='text-4xl font-bold'>02</h1>
        </div>
        <div className='flex flex-col bg-blue-300 p-4 h-[100px] w-[150px] items-center '>
          <h1>Pending</h1>
          <h1 className='text-4xl font-bold'>02</h1>
        </div>
      </div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter task here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Task <IoMdAdd size={25}/></Button>
      </form>
    </Form>
      <Card >
    <CardContent>
      <p></p>
    </CardContent>
    <CardFooter className="flex flex-col justify-between">
      <Button>Mark as completed</Button>
    <MdOutlineDeleteForever size={25} />
    </CardFooter>
    </Card>
        
      
    </div>
  )
 
}

export default Home