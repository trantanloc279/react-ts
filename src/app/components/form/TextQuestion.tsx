import { ITextQuestion } from "@app/common/interfaces";
import { input_action } from "@app/store/form/text.slice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/index";

export default function TextQuestion(props: ITextQuestion) {
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.text_question);

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    let is_exits = selector.some((item) => item.id === props.id);
    if (is_exits) {
      let index = selector.findIndex((item) => item.id === props.id);
      setText(selector[index].value)
    }
  }, []);

  useEffect(() => {
    dispatch(
      input_action({
        type: props.type,
        value: text,
        id: props.id,
        is_required: props.is_required || false
      })
    );
  }, [text]);

  return (
    <div className="nf-question">
      <div
        className="nf-question-wrapper wrapper-header-BQOfNW"
        style={{
          marginBottom: "0px",
          borderBottom: "1px solid rgb(206, 214, 221)",
          borderTop: "0px solid rgb(206, 214, 221)",
        }}
      >
        <div className="nf-question-container container-header-BQOfNW">
          <span
            className="nf-question-header header-BQOfNW"
            style={{ color: "rgb(0, 0, 0)", textAlign: "center" }}
          >
            <span
              className="nf-question-number number-header-BQOfNW"
              style={{ color: "rgb(34, 0, 255)" }}
            >
              {props.stt}){" "}
            </span>
            <span>{props.question}</span>
            <span className="nf-question-required required-header-BQOfNW">
              *
            </span>
          </span>
        </div>
      </div>
      <div className="nf-badge-container container-badge-BQOfNW">
        <span
          className="nf-badge badge-BQOfNW"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "rgb(206, 214, 221)",
            borderWidth: "1px",
            borderStyle: "solid",
            color: "rgb(34, 0, 255)",
          }}
        >
          Write in the box below
        </span>
      </div>
      <div className="nf-open-container container-open-BQOfNW">
        <div className="nf-input-container container-multiline-BQOfNW">
          <label
            className="nf-input-label label-multiline-BQOfNW"
            style={{ color: "rgb(0, 0, 0)" }}
          >
            <span />
          </label>
          <textarea
            onChange={textAreaChange}
            rows={5}
            maxLength={25000}
            className="nf-textarea textarea-multiline-BQOfNW"
            style={{
              color: "rgb(0, 0, 0)",
              borderColor: "rgb(206, 214, 221)",
              backgroundColor: "rgb(255, 255, 255)",
              WebkitTextFillColor: "rgba(0, 0, 0, 0.6)",
            }}
            defaultValue={text}
          />
        </div>
      </div>
    </div>
  );
}
