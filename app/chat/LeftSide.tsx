import React from "react";
import type { ChatTypes } from "types/chat";
import UserItem from "~/components/chat-list/UserItem";



const chats: ChatTypes[] = [
    {
        id: 1,
        name: "Daisy Forandus",
        username: "@daisy",
        message: "Lorem Ipsum is simply dummy text.",
        time: "08:38",
        unreadCount: 23,
        avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    {
        id: 2,
        name: "Luther Rin",
        username: "@luther",
        message: "Lorem Ipsum is simply dummy text.",
        time: "02 Apr",
        unreadCount: 0,
        avatar: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Ram Kumar",
        username: "@ram",
        message: "Lorem Ipsum is simply dummy text.",
        time: "08:38",
        unreadCount: 0,
        avatar: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Waxy Mento",
        username: "@waxy",
        message: "Lorem Ipsum is simply dummy text.",
        time: "08:38",
        unreadCount: 16,
        avatar: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "John Hatter",
        username: "@john",
        message: "Lorem Ipsum is simply dummy text.",
        time: "08:36",
        unreadCount: 0,
        avatar: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "Morsy Vijay",
        username: "@morsy",
        message: "Lorem Ipsum is simply dummy text.",
        time: "22",
        unreadCount: 22,
        avatar: "",
    },
];

const ChatList: React.FC = () => {


    return (
        <div className="h-screen flex justify-center p-4 w-full">
            <div className="w-full max-w-md bg-white rounded-lg flex flex-col overflow-hidden border border-white">
                {/* User Header */}
                <div className="flex items-center p-4 bg-blue-100">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                        <h1 className="text-lg font-semibold text-gray-900">Ralph Hitman</h1>
                        <p className="text-sm text-gray-500">@ralph-hitman</p>
                    </div>
                    <button className="ml-auto text-red-500 hover:text-red-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m9 0h-9m9 0a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 014.5 18V11.25A2.25 2.25 0 016.75 9h9z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Chat List */}
                <div className="overflow-y-auto scrollbar-hide flex-1">
                    {chats.map((chat) => (
                        <UserItem chat={chat} key={chat.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatList;
