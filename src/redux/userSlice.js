import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userData: (state, actions) => {
      state.user = actions.payload;
    },
    userLogout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userData, userLogout } = userSlice.actions;

export default userSlice.reducer;
