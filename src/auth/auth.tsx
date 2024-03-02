import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { state as AuthState } from "@/stores/auth";
import { FormEvent } from "react";

export function AuthForm() {
  const state = AuthState.get();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state.username) AuthState.isLoggedIn.set((prevState) => !prevState);
  };
  return (
    <Card className="w-[350px] mx-auto">
      <form onSubmit={handleFormSubmit}>
        <CardHeader>
          <CardTitle>Login to To-Do App</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Type any username"
                onChange={(e) => AuthState?.username?.set(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Type any password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Login</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
