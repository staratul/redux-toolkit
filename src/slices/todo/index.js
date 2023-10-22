const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todoSlice = createSlice({
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  name: "todo",
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Error ", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
