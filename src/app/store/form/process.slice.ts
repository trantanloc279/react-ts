import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProcessState = {
  value: number;
};

const initialState: ProcessState = {value: 0};

export const process_slice = createSlice({
  name: "process_form",
  initialState: initialState,
  reducers: {
    update_process: (
      state: ProcessState,
      action: PayloadAction<ProcessState>
    ) => {
      state.value = action.payload.value;
    },
  },
});

export const {
  reducer: process_reducer,
  actions: { update_process },
} = process_slice;
