import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSliceS'

export const store = configureStore({
    reducer: todoReducer
})