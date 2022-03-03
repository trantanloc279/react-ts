import { useAppDispatch, useAppSelector } from "@app/hooks";
import { input_action } from "@app/store/form/ratting.slice";
import { useEffect, useState } from "react";
import { IRattingQuestion } from "../../common/interfaces";

export default function RattingQuestion(props: IRattingQuestion) {
  const [selected, setSelected] = useState<number>(0);
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.ratting_question);
  const clickHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    noStar: number
  ) => {
    event.preventDefault();
    setSelected(0);
    if (selected !== noStar) {
      setSelected(noStar);
    }
  };

  useEffect(() => {
    let is_exits = selector.some((item) => item.id === props.id);
    if (is_exits) {
      let index = selector.findIndex((item) => item.id === props.id);
      setSelected(selector[index].value);
    }
  }, []);

  useEffect(() => {
    dispatch(
      input_action({
        type: props.type,
        id: props.id,
        value: selected,
        is_required: props.is_required || false
      })
    );
  }, [selected]);

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
          Tap stars to rate
        </span>
      </div>
      <div className="nf-stars-container">
        {Array.from({ length: Number(props.value) }, (v, i) => i + 1).map(
          (item) => (
            <div
              className="nf-star-container"
              onClick={(e) => clickHandler(e, item)}
              style={{ margin: "4px" }}
            >
              <div
                style={item <= selected ? { opacity: 1 } : {}}
                className={`${item <= selected && "nf-star-animation"} `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="57.6"
                  height="57.6"
                  fill={`${item <= selected ? "#f6b745" : "#eeeeee"}`}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              {item === 1 && (
                <span
                  className="nf-star-label"
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  {props.min}
                </span>
              )}
              {item === Number(props.value) && (
                <span
                  className="nf-star-label"
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  {props.max}
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
