export enum Status {
  New = "new",
  Open = "open",
  Done = "done",
}
export type Todo = {
  id: string;
  text: string;
  status: Status;
};

export type Todos = {
  todos: Todo[];
};
