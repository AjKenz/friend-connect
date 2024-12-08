import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './chat/chatReducer'

const store = configureStore({
    reducer: {
        chat: chatReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;