import React, { useState } from 'react';
import MessageItem from '~/components/chat-room/MessageItem';
import type { MessageType as Message } from 'types/chat';

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hi! How are you?', isSentByUser: false, timestamp: '02:45' },
        { id: '2', text: 'I’m good, how about you?', isSentByUser: true, timestamp: '02:46' },
    ]);

    const [text, setText] = useState('');

    const handleSendMessage = () => {
        if (text.trim() === '') return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            isSentByUser: true,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, newMessage]);
        setText('');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-gray-100 p-4">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 shadow">
                <h1 className="text-lg font-semibold">Ram Kumar</h1>
                <div className="flex space-x-2">
                    <button className="text-blue-500">📞</button>
                    <button className="text-blue-500">📷</button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto my-4 space-y-2 scrollbar-hide">
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
                    type="text"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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