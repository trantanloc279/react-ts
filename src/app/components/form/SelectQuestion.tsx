import { useAppDispatch, useAppSelector } from "@app/hooks";
import { input_action } from "@app/store/form/selection.slice";
import { useEffect, useState } from "react";
import { ISelectionQuestion } from "../../common/interfaces";
import { styles } from "./Styles";

export default function SelectQuestion(props: ISelectionQuestion) {
  const [clickedButton, setClickedButton] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.selection_question);

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    if (!props.multi_select) {
      if (clickedButton.includes(button.innerText)) {
        setClickedButton([]);
      } else {
        clickedButton.length = 0;
        setClickedButton([...clickedButton, button.innerText]);
      }
    } else {
      if (!clickedButton.includes(button.innerText)) {
        setClickedButton([...clickedButton, button.innerText]);
      } else {
        setClickedButton(
          clickedButton.filter((item) => item !== button.innerText)
        );
      }
    }
  };

  useEffect(() => {
    let is_exits = selector.some((item) => item.id === props.id);
    if (is_exits) {
      let index = selector.findIndex((item) => item.id === props.id);
      setClickedButton(selector[index].value);
      setText(selector[index].other);
    }
  }, []);

  useEffect(() => {
    dispatch(
      input_action({
        type: props.type,
        value: clickedButton,
        id: props.id,
        is_other: clickedButton.includes("Other"),
        other: text,
        is_required: props.is_required || false
      })
    );
  }, [clickedButton, text]);

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
              {props.stt})
            </span>
            <span>{props.question}</span>
            {props.is_required && (
              <span className="nf-question-required">*</span>
            )}
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
          Select answer
        </span>
      </div>
      <div className="nf-selection-container">
        {props.answers?.map((answer) => (
          <button
            type="button"
            onClick={buttonHandler}
            key={answer}
            className={`nf-selection-answer answer-selection ${
              clickedButton.includes(answer)
                ? "nf-selection-selected-answer"
                : ""
            }`}
            style={
              clickedButton.includes(answer)
                ? styles.selected
                : styles.notSelected
            }
          >
            <div
              className={`nf-selection-checkbox checkbox-selection ${
                clickedButton.includes(answer) && "background-checked"
              }`}
              style={
                props.multi_select
                  ? clickedButton.includes(answer)
                    ? styles.multiSelected
                    : styles.multiSelect
                  : clickedButton.includes(answer)
                  ? styles.notMultiSelected
                  : styles.notMultiSelect
              }
            >
              {clickedButton.includes(answer) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
              )}
            </div>
            <div
              className="nf-answer-label label-selection"
              style={{ fontWeight: 400, color: "rgb(0, 0, 0)" }}
            >
              {answer}
            </div>
          </button>
        ))}

        {props.other && props.other.hasOwnProperty("isOther") && (
          <>
            <button
              type="button"
              onClick={buttonHandler}
              key="other"
              className={`nf-selection-answer answer-selection ${
                clickedButton.includes("Other")
                  ? "nf-selection-selected-answer"
                  : ""
              }`}
              style={
                clickedButton.includes("Other")
                  ? styles.selected
                  : styles.notSelected
              }
            >
              <div
                className="nf-selection-checkbox checkbox-selection"
                style={
                  props.multi_select
                    ? clickedButton.includes("Other")
                      ? styles.multiSelected
                      : styles.multiSelect
                    : clickedButton.includes("Other")
                    ? styles.notMultiSelected
                    : styles.notMultiSelect
                }
              >
                {clickedButton.includes("Other") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                )}
              </div>
              <div
                className="nf-answer-label label-selection"
                style={{ fontWeight: 400, color: "rgb(0, 0, 0)" }}
              >
                Other
              </div>
            </button>

            {clickedButton.includes("Other") && (
              <div className="nf-input-container container-multiline">
                <label
                  htmlFor={props.other.label}
                  className="nf-input-label label-multiline"
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  <span>{props.other.label}</span>{" "}
                  <span className="nf-input-required required-multiline">
                    *
                  </span>
                </label>
                <textarea
                  rows={4}
                  maxLength={25000}
                  className="nf-textarea textarea-multiline"
                  style={{
                    color: "rgb(0, 0, 0)",
                    borderColor: "rgb(206, 214, 221)",
                    backgroundColor: "rgb(255, 255, 255)",
                    WebkitTextFillColor: "rgba(0, 0, 0, 0.6)",
                  }}
                  defaultValue={text}
                  onChange={textAreaChange}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
