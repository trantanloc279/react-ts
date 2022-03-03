import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@app/store/auth/slice";
import { text_question_reducer } from "./form/text.slice";
import { selection_question_reducer } from "./form/selection.slice";
import { matrix_question_reducer } from "./form/matrix.slice";
import { ratting_question_reducer } from "./form/ratting.slice";
import { nps_question_reducer } from "./form/nps.slice";
import { process_reducer } from "./form/process.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    text_question: text_question_reducer,
    selection_question: selection_question_reducer,
    matrix_question: matrix_question_reducer,
    ratting_question: ratting_question_reducer,
    nps_question: nps_question_reducer,
    process: process_reducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
