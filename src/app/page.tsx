import { getServerSession } from "next-auth";
import TodoList from "../components/TodoList";
import { serverClient } from "@/trpc/serverClient";
import { HomeHero } from "@/components/Hero";

export default async function Home() {
  const session = await getServerSession();
  const caller = serverClient(session);
  const data = await caller.todo.getTodos();
  return (
    <div>
      <HomeHero />
    </div>
  );
}
