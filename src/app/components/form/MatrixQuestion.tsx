import { IMatrixQuestion } from "@app/common/interfaces";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { input_action } from "@app/store/form/matrix.slice";
import { update_process } from "@app/store/form/process.slice";
import { useEffect, useState } from "react";
import { styles } from "./Styles";

interface IMatrix {
  answer: string;
  value: string;
}

export default function MatrixQuestion(props: IMatrixQuestion) {
  const [matrix, setMatrix] = useState<IMatrix[]>([]);

  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.matrix_question);

  const clickHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    answer: string,
    value: string
  ) => {
    event.preventDefault();

    if (checkExits(answer, value)) {
      setMatrix(matrix.filter((item) => item.answer !== answer));
    } else {
      setMatrix([
        ...matrix.filter((item) => item.answer !== answer),
        { answer, value },
      ]);
    }
  };

  let checkExits = (answer: string, value: string): boolean => {
    return matrix.some(
      (item) => item.answer === answer && item.value === value
    );
  };

  useEffect(() => {
    let is_exits = selector.some((item) => item.id === props.id);
    if (is_exits) {
      let index = selector.findIndex((item) => item.id === props.id);
      setMatrix(selector[index].value);
    }
  }, []);

  useEffect(() => {
    dispatch(
      input_action({
        type: props.type,
        id: props.id,
        value: matrix,
        is_required: props.is_required || false,
      })
    );
    dispatch(update_process({value: 10}))
  }, [matrix]);

  return (
    <div className="nf-question">
      <div
        className="nf-question-wrapper"
        style={{
          marginBottom: "0px",
          borderBottom: "1px solid rgb(206, 214, 221)",
          borderTop: "1px solid rgb(206, 214, 221)",
        }}
      >
        <div className="nf-question-container">
          <span
            className="nf-question-header"
            style={{ color: "rgb(0, 0, 0)", textAlign: "center" }}
          >
            <span
              className="nf-question-number"
              style={{ color: "rgb(34, 0, 255)" }}
            >
              {props.stt}){" "}
            </span>
            <span>{props.question}</span>{" "}
          </span>
        </div>
      </div>
      <div className="nf-badge-container">
        <span
          className="nf-badge"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "rgb(206, 214, 221)",
            borderWidth: "1px",
            borderStyle: "solid",
            color: "rgb(34, 0, 255)",
          }}
        >
          Select one answer per row
        </span>
      </div>
      <div className="nf-matrix-container">
        <div className="nf-matrix-columns-container">
          <div className="nf-matrix-column" />
          {props.values?.map((value) => (
            <div
              className="nf-matrix-column"
              style={{
                color: "rgb(0, 0, 0)",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              {value}
            </div>
          ))}
        </div>

        {props.answers?.map((answer) => (
          <div className="nf-matrix-rows-container">
            <div
              className="nf-matrix-row"
              style={{
                color: "rgb(0, 0, 0)",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              <span className="nf-matrix-row-text">
                <span>{answer}</span>{" "}
              </span>
            </div>
            {props.values?.map((value) => (
              <div
                className="nf-matrix-column"
                style={{
                  backgroundColor: "rgba(34, 0, 255, 0.02)",
                  padding: "16px 0px",
                }}
              >
                <div
                  onClick={(e) => clickHandler(e, answer, value)}
                  className="nf-matrix-checkbox"
                  style={
                    checkExits(answer, value)
                      ? styles.notMultiSelected
                      : styles.notMultiSelect
                  }
                >
                  {checkExits(answer, value) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffffff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
