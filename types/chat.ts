export interface ChatTypes {
    id: number;
    name: string;
    username: string;
    message: string;
    time: string;
    unreadCount: number;
    avatar?: string; // Optional avatar image
}

export interface MessageType {
    id: string;
    text: string;
    isSentByUser: boolean;
    timestamp: string;
}