import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MatrixQuestionState = {
  id: string;
  value: MatrixResponse[];
  is_required: boolean;
  type: string;
};

type MatrixResponse = {
  answer: string;
  value: string;
};

const initialState: MatrixQuestionState[] = [];

export const matrix_question_slice = createSlice({
  name: "matrix_question",
  initialState: initialState,
  reducers: {
    input_action: (
      state: MatrixQuestionState[],
      action: PayloadAction<MatrixQuestionState>
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
  reducer: matrix_question_reducer,
  actions: { input_action },
} = matrix_question_slice;
