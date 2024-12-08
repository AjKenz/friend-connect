import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ChatList from "~/chat/LeftSide";
import ChatRoom from "~/chat/RightSide";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-4">
        <ChatList />
      </div>
      <div className="col-span-6">
        <ChatRoom />
      </div>
    </div>
  );
}
