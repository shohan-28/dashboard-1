import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch("/Data/RoutineDsm.json");
    return res.json();
  }
);

const RoutineSlice = createSlice({
  name: "RoutineDsm",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.schedule;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default RoutineSlice.reducer;