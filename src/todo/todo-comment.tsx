import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from "@/types/todo";
import { CommentState } from "@/stores";
import { useState } from "react";
import TodoCommentItem from "./todo-comment-item";

export function TodoComment({ todo }: { todo: Todo }) {
  const [comment, setComment] = useState<string>("");
  const handleComment = () => {
    CommentState.comments.push({
      id: crypto.randomUUID(),
      todo_id: todo.id,
      text: comment,
    });
    setComment("");
  };

  const { comments } = CommentState.get();
  return (
    <div key={todo.id}>
      <div className="border border-top my-2"></div>
      <section className="flex w-full max-w-lg  mx-auto items-center space-x-2 justify-center mt-8">
        <Input
          type="text"
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />

        <Button onClick={handleComment} disabled={!comment}>
          Comment
        </Button>
      </section>
      <section className="mt-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-y-2 ">
          {comments
            .filter((comment) => comment.todo_id === todo.id)
            .map((comment) => (
              <TodoCommentItem comment={comment} />
            ))}
        </div>
      </section>
    </div>
  );
}
