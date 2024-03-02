import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  persistObservable,
  configureObservablePersistence,
} from "@legendapp/state/persist";
import { Auth } from "@/types/auth";

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

const state = observable<Auth>({
  isLoggedIn: false,
  username: "",
});

persistObservable(state, {
  local: "todo-auth",
});

export { state };
