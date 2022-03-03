import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TextQuestionState = {
  id: string;
  type: string;
  value: string;
  is_required: boolean;
};

const initialState: TextQuestionState[] = [];

export const text_question_slice = createSlice({
  name: "text_question",
  initialState: initialState,
  reducers: {
    input_action: (
      state: TextQuestionState[],
      action: PayloadAction<TextQuestionState>
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
  reducer: text_question_reducer,
  actions: { input_action },
} = text_question_slice;
