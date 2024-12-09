export interface SignupRequest {
    email: string;
    username: string;
    password: string;
    dateOfBirth: string;
    gender: string;
    profilePicture?: string;
}

export interface SignupResponse {
    status: string;
    token: string;
    data: {
        user: {
            id: string;
            email: string;
            username: string;
            dateOfBirth: string;
            gender: string;
            profilePicture: string;
        };
    };
}


export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    status: string;
    token: string;
    data: {
        user: {
            id: string | null;
            email: string | null;
            username: string | null;
            dateOfBirth: string | null;
            gender: string | null;
            profilePicture: string | null;
        }
    };
}