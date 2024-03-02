import { Todos } from "./../types/todo";
import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  persistObservable,
  configureObservablePersistence,
} from "@legendapp/state/persist";

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

const state = observable<Todos>({
  todos: [],
});

persistObservable(state, {
  local: "todo-data",
});

export { state };
