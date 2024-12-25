import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../redux/features/TodoSlice";
import productsSlice from "../../redux/features/ProductsSlice"

const store = configureStore({
    reducer: {
        todos: todoReducer,
        products: productsSlice,
    },
});

export default store;
