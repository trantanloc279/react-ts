import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NpsQuestionState = {
  id: string;
  type: string;
  value: number;
  is_required: boolean;
};

const initialState: NpsQuestionState[] = [];

export const nps_question_slice = createSlice({
  name: "nps_question",
  initialState: initialState,
  reducers: {
    input_action: (
      state: NpsQuestionState[],
      action: PayloadAction<NpsQuestionState>
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
  reducer: nps_question_reducer,
  actions: { input_action },
} = nps_question_slice;
