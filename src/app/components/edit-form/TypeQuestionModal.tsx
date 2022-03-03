import { useState } from "react";

export function TypeQuestionModal(props: any) {
  let type_question = ["select", "matrix", "ratting", "nps", "text"];
  const [selected, setSelected] = useState(0);

  const choose_question = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    event.preventDefault();
    setSelected(index);
  };

  return (
    <div className="zf-wrapper-modal">
      <div className="zf-modal">
        <div className="zf-modal-header">
          <p>Select a Type</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="#424d57"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
        <div className="zf-modal-body">
          <div className="zf-wrapper-list-radio">
            {type_question.map((field, index) => (
              <>
                {selected != index ? (
                  <div className="zf-list-radio" key={index} onClick={e => choose_question(e, index)}>
                    <div className="zf-radio">
                      <div className="zf-btn-radio"></div>
                      <strong>{field}</strong>
                    </div>
                  </div>
                ) : (
                  <div
                    className="zf-list-radio"
                    style={{ backgroundColor: "rgba(34, 0, 255, 0.063)" }}
                  >
                    <div className="zf-radio">
                      <div className="zf-btn-radio zf-checked">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <strong>{field}</strong>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="zf-modal-footer">
          <button
            color="#000000"
            className="zf-btn-cancel"
            onClick={props.btn_cancel_modal}
          >
            Cancel
          </button>
          <button className="zf-btn-add-question" style={{ margin: "0px 4px" }}>
            Add Question
            <div className="sc-crzoAE PVZEh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                <path fill="none" d="M0 0h24v24H0V0z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
