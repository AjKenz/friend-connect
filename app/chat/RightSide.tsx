import React, { useState, useEffect, useRef } from 'react';
import MessageItem from '~/components/chat-room/MessageItem';
import type { MessageType as Message } from 'types/chat';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '~/redux/store';
import { addMessage } from '~/redux/chat/chatReducer';

const ChatRoom = ({ params }: { params: { roomId: string } }) => {
    const { roomId } = params ?? {}

    const dispatch = useDispatch()
    const messages = useSelector((state: RootState) => state.chat.messages[roomId]) ?? []
    const chatList = useSelector((state: RootState) => state.chat.chatList)
    const userIndex = chatList.findIndex(user => user.id === roomId)
    const { name, avatar, username } = chatList[userIndex]
    const inputRef = useRef<HTMLInputElement>(null)

    // const [messages, setMessages] = useState<Message[]>([]);

    const [text, setText] = useState('');

    const handleSendMessage = () => {
        if (text.trim() === '') return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            isSentByUser: true,
            timestamp: new Date().toUTCString(),
        };

        dispatch(addMessage({ chatId: roomId, message: newMessage }))
        // setMessages([...messages, newMessage]);
        setText('');
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [roomId])


    return (
        <div className="flex flex-col h-screen w-full bg-gray-100 p-4">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 shadow">
                <h1 className="text-lg font-semibold">{name}</h1>
                <div className="flex space-x-2">
                    <button className="text-blue-500">📞</button>
                    <button className="text-blue-500">📷</button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 flex flex-col justify-end overflow-y-auto my-4 space-y-2 scrollbar-hide">
                {messages.map((message) => (
                    <MessageItem
                        id={message.id}
                        key={message.id}
                        text={message.text}
                        isSentByUser={message.isSentByUser}
                        timestamp={message.timestamp}
                    />
                ))}
            </div>

            {/* Input Field */}
            <div className="flex items-center space-x-2 bg-white p-4 shadow">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type a message..."
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        // Check if the key pressed is Enter (keyCode 13)
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSendMessage();
                        }
                    }}
                    className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </div>

        </div>
    );
};

export default ChatRoom;
