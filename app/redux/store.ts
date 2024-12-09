import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './chat/chatReducer'
import authReducer from './auth/authReducer'

const store = configureStore({
    reducer: {
        chat: chatReducer,
        auth: authReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;