import { createAsyncThunk } from "@reduxjs/toolkit";
import type { GetUsersResponse } from "types/auth";


const apiUrl = "http://172.20.10.4:5000"

export const getUsers = createAsyncThunk<GetUsersResponse, string>('users/getAll', async (token, { rejectWithValue }) => {
    try {
        const response = await fetch(`${apiUrl}/api/v1/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
            },
        });

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        const data = await response.json() as GetUsersResponse;

        console.log('data; ', data)
        if (data.status === 'success') {
            return data;
        } else {
            throw new Error(data?.status || "Something went wrong");
        }
    } catch (error: any) {
        return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});