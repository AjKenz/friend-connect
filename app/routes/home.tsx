import React, { useEffect } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ChatList from "~/chat/LeftSide";
import ChatRoom from "~/chat/RightSide";
import { Outlet, redirect } from "react-router";
import store, { type RootState } from "~/redux/store";
import { initSocket, useSocket } from "utils/socket";
import { useSelector } from "react-redux";


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
  const { user } = useSelector((state: RootState) => state.auth)


  useEffect(() => {
    if (user && user._id) {
      initSocket(user._id);

      return () => {
        const socket = useSocket();
        if (socket) {
          socket.disconnect();
        }
      };
    }
  }, [user]);

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
