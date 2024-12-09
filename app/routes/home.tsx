import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ChatList from "~/chat/LeftSide";
import ChatRoom from "~/chat/RightSide";
import { Outlet, redirect } from "react-router";
import store from "~/redux/store";


export async function clientLoader() {
  const { auth } = store.getState()

  if (!auth.token) {
    return redirect("/login")
  }
  return {};
}


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Friend Connect" },
    { name: "description", content: "Chat and connect with people" },
  ];
}

export default function Home() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-4">
        <ChatList />
      </div>
      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
  );
}
