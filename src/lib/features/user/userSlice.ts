import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

type User = {
  _id: string;
  fullName: string;
  email: string;
};

type UserState = User | null

const initialState = null as UserState

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (_, action: PayloadAction<User>) => {
      return action.payload
    },
  },
});
