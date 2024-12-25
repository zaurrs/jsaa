import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

export const getDatas = createAsyncThunk(
    "products/getDatas",
    async () => {
        const res = await axios("https://dummyjson.com/products")
        return res.data.products
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [], // Başlangıçta boş dizi
        status: 'idle', // Durum, örneğin 'loading', 'succeeded', 'failed'
        error: null // Hata mesajı
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDatas.fulfilled, (state, action) => {
                state.status = "succeeded"; // Veri başarıyla alındığında 'succeeded' durumuna geç
                state.products = action.payload; // API'den gelen veriyi 'products' dizisine ekle
            })
    }
})


export default productsSlice.reducer;
