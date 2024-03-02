import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CommentState, AuthState } from "@/stores";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Comment } from "@/types/comment";

const TodoCommentItem = ({ comment }: { comment: Comment }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const { username } = AuthState.get();
  const handleUpdateComment = () => {
    CommentState.comments.set(
      CommentState.comments.get().map((data) => ({
        ...data,
        ...(data.id === comment.id && {
          text: value,
        }),
      }))
    );
    setValue("");
    setIsEdit(false);
  };
  const handleRemoveTodo = () => {
    CommentState.comments.set((comments) =>
      comments.filter((t) => t.id !== comment?.id)
    );
  };
  useEffect(() => {
    setValue(comment.text);
  }, [comment]);
  return (
    <Card
      className="p-6 pt-0 pb-0 grid gap-1 hover:bg-accent hover:text-accent-foreground relative"
      key={comment.id}
    >
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
        <div className="space-y-1 w-full">
          <p className="text-sm font-medium leading-none">{username}</p>
          {!isEdit ? (
            <p className="text-sm text-muted-foreground">{comment.text}</p>
          ) : (
            <div className="flex w-full items-center space-x-2 justify-center mt-3">
              <Input
                type="text"
                autoFocus
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <Button onClick={handleUpdateComment} disabled={!comment}>
                Update
              </Button>
              <Button variant="outline" onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
      {!isEdit && (
        <div className=" absolute top-3 right-3 flex gap-2">
          <Button size="sm" onClick={() => setIsEdit(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[16px] h-[16px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
          <Button size="sm" variant="destructive" onClick={handleRemoveTodo}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-[16px] h-[16px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
          </Button>
        </div>
      )}
    </Card>
  );
};

export default TodoCommentItem;
