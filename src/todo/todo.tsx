import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Status } from "@/types/todo";
import { TodoState, AuthState } from "@/stores";
import TodoItem from "./todo-item";
import { useState } from "react";

export function TodoApp() {
  const [value, setValue] = useState("");
  const handleAddToDo = () => {
    TodoState.todos.push({
      id: crypto.randomUUID(),
      status: Status.Open,
      text: value,
    });
    setValue("");
  };
  const { username } = AuthState.get();
  return (
    <>
      <section className="flex w-full max-w-lg  mx-auto items-start space-x-2 justify-between my-8">
        <h1 className="text-xl">
          Hi <span className="font-bold">{username}</span>, welcome to To-Do
          App.
        </h1>
        <Button variant="ghost" onClick={() => AuthState.isLoggedIn.set(false)}>
          Logout
        </Button>
      </section>
      <section className="flex w-full max-w-lg  mx-auto items-center space-x-2 justify-center mt-8">
        <Input
          type="text"
          placeholder="Start typing..."
          autoFocus
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Button onClick={handleAddToDo} disabled={!value}>
          Add
        </Button>
      </section>
      <section className="mt-8 max-w-lg mx-auto">
        <div className="border border-top my-2"></div>
        <div className="flex flex-col gap-y-2">
          {TodoState.get().todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </section>
    </>
  );
}
