import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "John Doe",
  isLoggedIn: true
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
