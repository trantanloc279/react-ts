import { useAppDispatch, useAppSelector } from "@app/hooks";
import { input_action } from "@app/store/form/nps.slice";
import { useEffect, useState } from "react";
import { INPSQuestion } from "../../common/interfaces";
import { styles } from "./Styles";

export default function NPSQuestion(props: INPSQuestion) {
  const [selected, setSelected] = useState<number>(0);
  
  const dispatch = useAppDispatch();
  const selector = useAppSelector(state => state.nps_question);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const div: HTMLDivElement = event.currentTarget;
    let noSelected = Number(div.innerText);
    if (selected === noSelected) {
      setSelected(0);
    } else {
      setSelected(noSelected);
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
        value: selected,
        type: props.type,
        id: props.id,
        is_required: props.is_required || false
      })
    );
  }, [selected]);

  return (
    <div className="nf-question">
      <div
        className="nf-question-wrapper wrapper-header-4eeKD7"
        id="4eeKD7"
        style={{
          marginBottom: "0px",
          borderBottom: "1px solid rgb(206, 214, 221)",
          borderTop: "1px solid rgb(206, 214, 221)",
        }}
      >
        <div className="nf-question-container container-header-4eeKD7">
          <span
            className="nf-question-header header-4eeKD7"
            style={{ color: "rgb(0, 0, 0)", textAlign: "center" }}
          >
            <span
              className="nf-question-number number-header-4eeKD7"
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
          Pick number
        </span>
      </div>
      <div className="nf-number-scale-container">
        {props.scale?.map((item, index) => (
          <div
            className="nf-number-container"
            onClick={clickHandler}
            style={
              selected === index + 1 ? styles.boxSelected : styles.boxSelect
            }
          >
            <span
              className="nf-number number-number-scale-4eeKD7"
              style={
                selected === index + 1 ? styles.textSelected : styles.textSelect
              }
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="nf-number-scale-legend legend-number-scale-4eeKD7">
        <span
          className="nf-number-scale-text min-text-number-scale-4eeKD7"
          style={{ color: "rgb(0, 0, 0)" }}
        >
          <strong style={{ color: "rgb(34, 0, 255)", fontWeight: "bold" }}>
            {props.scale && Math.min(...props.scale)}
          </strong>{" "}
          {props.min}
        </span>
        <span
          className="nf-number-scale-text max-text-number-scale-4eeKD7"
          style={{ color: "rgb(0, 0, 0)" }}
        >
          <strong style={{ color: "rgb(34, 0, 255)", fontWeight: "bold" }}>
            {props.scale && Math.max(...props.scale)}
          </strong>{" "}
          {props.max}
        </span>
      </div>
    </div>
  );
}
