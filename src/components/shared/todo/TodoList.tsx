"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from "@/slices";

const TrashIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

const UploadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
    />
  </svg>
);

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const { data: todos = [], isLoading, isSuccess, isError, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ id: (Math.random() * 100).toString(36).slice(2), title: newTodo, completed: false, createdAt: Date.now() });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center justify-between rounded-lg border border-gray-600 p-4">
      <div className="w-full pr-7">
        <Input type="text" id="new-todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter new todo" />
      </div>
      <Button type="submit" className="bg-blue-500 p-2.5">
        {UploadIcon}
      </Button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos.map((todo) => {
      return (
        <article key={todo.id} className="flex items-center justify-between gap-2 rounded-lg border border-gray-600 p-4">
          <div className="flex items-center justify-start">
            <Checkbox
              id={todo.id}
              checked={todo.completed}
              className="size-6 border border-gray-700"
              onCheckedChange={() => updateTodo({ ...todo, completed: !todo.completed })}
            />
            <Label className="mb-0 ml-2" htmlFor={todo.id}>
              {todo.title}
            </Label>
          </div>
          <Button
            className="flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-600 bg-white p-2.5 text-red-600 hover:bg-gray-300"
            onClick={() => deleteTodo(todo.id)}
          >
            {TrashIcon}
          </Button>
        </article>
      );
    });
  }

  if (error) {
    // 2) Checking if error is FetchBaseQueryError based on
    // discriminated property 'status':
    if ("status" in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = "error" in error ? error.error : JSON.stringify(error.data);

      content = (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
      // 3) We're left with the 3rd case, SerializedError:
    } else {
      // you can access all properties of `SerializedError` here
      content = <div>{error.message}</div>;
    }
  }

  return (
    <main className="m-auto max-w-[600px]">
      <h1 className="my-4 text-2xl font-bold">Todo List</h1>
      {newItemSection}
      <div className="flex flex-col gap-2">{content}</div>
    </main>
  );
};
export default TodoList;
