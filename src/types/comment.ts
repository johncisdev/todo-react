export type Comment = {
  id: string;
  todo_id: string;
  text: string;
};

export type Comments = {
  comments: Comment[];
};
