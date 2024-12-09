import { createAsyncThunk } from '@reduxjs/toolkit';
import type { SignupRequest, SignupResponse, LoginRequest, LoginResponse } from 'types/auth';


const apiUrl = "http://172.20.10.4:5000"

export const signup = createAsyncThunk<SignupResponse, SignupRequest>('auth/signup', async (payload, { rejectWithValue }) => {
    try {
        const response = await fetch(`${apiUrl}/api/v1/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        const data = await response.json() as SignupResponse

        if (data.status === 'success') {
            return data;
        } else {
            throw new Error(data?.status || "Something went wrong")
        }

    } catch (error: any) {
        return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}
);


export const login = createAsyncThunk<LoginResponse, LoginRequest>('auth/login', async (payload, { rejectWithValue }) => {
    try {
        const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        const data = await response.json() as LoginResponse;

        if (data.status === 'success') {
            return data;
        } else {
            throw new Error(data?.status || "Something went wrong");
        }
    } catch (error: any) {
        return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});