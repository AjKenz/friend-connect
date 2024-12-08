import React from 'react';
import type { MessageType } from 'types/chat';

const MessageItem: React.FC<MessageType> = ({ text, isSentByUser, timestamp, id }) => {
    return (
        <div className={`flex flex-col max-w-[75%] w-fit  ${isSentByUser ? 'ml-auto' : ''} my-2`}>
            <div
                className={`w-full p-3 rounded-full ${isSentByUser ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            >
                <p className="text-sm">{text}</p>
            </div>
            <p className="text-xs text-gray-400 text-right mt-1">{timestamp}</p>
        </div>
    );
};

export default MessageItem;
