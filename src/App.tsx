import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";

import { AuthState } from "@/stores";

import "./app/globals.css";

import { Auth } from "./types/auth";
import { AuthForm } from "./auth/auth";
import { TodoApp } from "./todo/todo";

enableReactUse();
enableReactComponents();
enableReactTracking({
  auto: true,
});

function App() {
  const { isLoggedIn }: Auth = AuthState.get();
  return (
    <section className="flex-1 space-y-4 p-8 pt-6">
      {isLoggedIn ? <TodoApp /> : <AuthForm />}
    </section>
  );
}

export default App;
