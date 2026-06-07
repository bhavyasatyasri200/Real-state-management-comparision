import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: "light",
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    }
  }
});

export const { setTheme, setNotification, clearNotification } = uiSlice.actions;
export default uiSlice.reducer;
