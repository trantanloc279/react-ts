import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectionQuestionState = {
  id: string;
  type: string;
  value: string[];
  is_other: boolean;
  other: string;
  is_required: boolean;
};

const initialState: SelectionQuestionState[] = [];

export const selection_question_slice = createSlice({
  name: "selection_question",
  initialState: initialState,
  reducers: {
    input_action: (
      state: SelectionQuestionState[],
      action: PayloadAction<SelectionQuestionState>
    ) => {
      if (state.some((item) => item.id === action.payload.id)) {
        state = state.map((item) => {
          if (item.id === action.payload.id) {
            item.value = action.payload.value;
            item.is_other = action.payload.is_other;
            item.other = action.payload.other;
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
  reducer: selection_question_reducer,
  actions: { input_action },
} = selection_question_slice;
