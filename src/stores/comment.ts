import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  persistObservable,
  configureObservablePersistence,
} from "@legendapp/state/persist";
import { Comments } from "@/types/comment";

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

const state = observable<Comments>({
  comments: [],
});

persistObservable(state, {
  local: "todo-comments",
});

export { state };
