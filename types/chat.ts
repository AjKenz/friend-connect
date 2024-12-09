
export interface ChatTypes {
    _id: string;
    username: string;
    email: string;
    isOnline: boolean;
    profilePicture?: string;
    _v?: number;
    message: string;
    time: string;
    unreadCount: number;
}

export interface MessageType {
    id: string;
    text: string;
    isSentByUser: boolean;
    timestamp: string;
}