import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatTypes, MessageType } from "types/chat";
import { chatsData } from "~/chat/LeftSide";

export interface ChatState {
    chatMode: boolean;
    chatList: ChatTypes[];
    messages: {
        [chatId: string]: MessageType[]; // Mapping of chat IDs to their respective messages
    };
}

const initialState: ChatState = {
    chatMode: false,
    chatList: [],
    messages: {},
};


const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {

        toggleChatMode: (state, action: PayloadAction<boolean>) => {
            state.chatMode = action.payload
        },
        // Action to add a new message to a specific chat room
        addMessage: (state, action: PayloadAction<{ chatId: string; message: MessageType, isMine?: boolean, chatItem: ChatTypes }>) => {
            const { chatId, message, isMine, chatItem } = action.payload;

            console.log('the payload : ', action.payload)

            // Add the message to the specific chat room
            if (!state.messages[chatId]) {
                state.messages[chatId] = [];
            }
            state.messages[chatId].push(message);

            // Update the last message and time in the chatList
            const chat = state.chatList.find((chat) => chat._id === chatId);

            if (isMine) {
                state.chatMode = true
            }
            if (chat) {
                chat.message = message.text;
                chat.time = message.timestamp;
                if (!message.isSentByUser) {
                    chat.unreadCount += 1;
                }
            } else {
                const chat: ChatTypes = {
                    ...chatItem,
                    message: message.text,
                    time: message.timestamp,
                    ...(!message.isSentByUser ? { unreadCount: 1 } : {})
                }
                state.chatList.push(chat)
            }
        },

        // Action to mark messages as read in a specific chat room
        markMessagesAsRead: (state, action: PayloadAction<{ chatId: string }>) => {
            const { chatId } = action.payload;

            const chat = state.chatList.find((chat) => chat._id === chatId);
            if (chat) {
                chat.unreadCount = 0; // Reset unread count
            }
        },

        // Action to initialize or update the chat list
        setChatList: (state, action: PayloadAction<ChatTypes[]>) => {
            state.chatList = action.payload;
        },
    },
});

export const { addMessage, markMessagesAsRead, setChatList, toggleChatMode } = chatSlice.actions;

export default chatSlice.reducer;