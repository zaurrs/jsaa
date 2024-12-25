import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); 
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id); 
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    },
    resetTodos: () => {
      return [];
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, resetTodos, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
