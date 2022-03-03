import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RattingQuestionState = {
  id: string;
  type: string;
  value: number;
  is_required: boolean;
};

const initialState: RattingQuestionState[] = [];

export const ratting_question_slice = createSlice({
  name: "ratting_question",
  initialState: initialState,
  reducers: {
    input_action: (
      state: RattingQuestionState[],
      action: PayloadAction<RattingQuestionState>
    ) => {
      if (state.some((item) => item.id === action.payload.id)) {
        state = state.map((item) => {
          if (item.id === action.payload.id) {
            item.value = action.payload.value;
          }
          return item;
        });
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const {
  reducer: ratting_question_reducer,
  actions: { input_action },
} = ratting_question_slice;
