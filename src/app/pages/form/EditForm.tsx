import CodeMirror from "@uiw/react-codemirror";
import { jsonLanguage } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { TypeQuestionModal } from "@app/components/edit-form/TypeQuestionModal";
import { useCallback, useEffect, useState } from "react";
import "./temp.css";
import { useParams } from "react-router-dom";
import formApi from "@app/service/form.service";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

let styles = {
  input_title: {
    Appearance: "none",
    cursor: "text",
    border: "1px solid rgb(206, 214, 221)",
    borderRadius: "4px",
    fontSize: "14px",
    padding: "10px 12px",
    height: "20px",
    width: "100%",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "rgb(0, 0, 0)",
    BoxSizing: "border-box",
    transition:
      "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
    backgroundColor: "white",
    boxShadow: "rgb(50 50 93 / 5%) 0px 1px 3px",
  },
};

export function EditForm(props: any) {
  const [modalAddQuestion, setModalAddQuestion] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [template, setTemplate] = useState("");
  const [title, setTitle] = useState("");
  const [isEditTitle, setIsEditTitle] = useState(false);
  const { id } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const fetchData = useCallback(async (id) => {
    const data = await formApi.get(id);
    setData(data);
    setTemplate(JSON.stringify(data.template, null, 2));
    setTitle(data.title);
  }, []);

  const editForm = useCallback(async (id, data) => {
    await formApi.editForm(id, data);
  }, []);

  const btn_add_question = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalAddQuestion(!modalAddQuestion);
  };

  const btn_save = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let data = {
      title: title,
      // workspace: workspace
      template: template,
    };
    editForm(id, data);
    addToast("Saved Successfully", { appearance: "success" });
  };

  const btn_cancel_modal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalAddQuestion(false);
  };

  const btn_prev_form = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(`http://localhost:3000/form/${id}`, "_blank");
  };

  const edit_title = (event: React.MouseEvent<any>) => {
    event.preventDefault();
    setIsEditTitle(true);
  };

  const change_template = (value: any) => {
    setTemplate(value);
  };

  const change_title = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const close_title = (event: any) => {
    event.preventDefault();
    setIsEditTitle(false);
  };

  const back_homepage = (event: React.MouseEvent<any>) => {
    event.preventDefault();
    navigate('/');
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <>
      <div className="zf-edit-container">
        <div className="zf-edit-wrapper">
          <div className="zf-edit-content">
            <div
              className="zf-edit-header"
              style={{ padding: "0px 8px", position: "fixed", zIndex: 100 }}
            >
              <div
                style={{ position: "absolute", left: "16px" }}
                onClick={back_homepage}
              >
                <div className="sc-oeezt OJJCp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="#2200FF"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                </div>
              </div>
              <div className="zf-edit-title" style={{ padding: "0px 24px" }}>
                {isEditTitle ? (
                  <>
                    <div
                      style={{
                        marginBottom: "0px",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <div style={{ display: "flex", width: "100%" }}>
                        <input
                          maxLength={2500}
                          style={styles.input_title}
                          value={title}
                          onChange={change_title}
                        />
                      </div>
                    </div>
                    <div
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      onClick={close_title}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="#0F9D58"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <span>{title}</span>
                    <div
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      onClick={edit_title}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#8A96A3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
              <button
                className="zf-btn-save"
                style={{ right: "16px" }}
                onClick={btn_save}
              >
                Save
              </button>
            </div>
            <div className="zf-toolbox">
              <button className="zf-btn-prev" onClick={btn_prev_form}>
                Preview
                <div className="zf-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="#7b0099"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z" />
                  </svg>
                </div>
              </button>
              <button
                className="zf-btn-share"
                style={{ marginLeft: "8px" }}
                onClick={btn_prev_form}
              >
                Share Form
                <div className="zf-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="#2200FF"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </button>
            </div>
            <div style={{ overflow: "auto" }}>
              <div className="zf-container-list">
                <div className="zf-wrapper-list">
                  <div className="zf-list-box">
                    <svg
                      width={36}
                      height={36}
                      fill="#2200FF"
                      viewBox="0 0 256 256"
                    >
                      <path d="M58 16h12v40h42v12H70v40H58V68H14V56h44V16zM146 16h92v92h-92V16m12 11v71h68V27h-68zM18 144h92v92H18v-92m12 12v70h68v-70H30zM146 144h92v92h-92v-92m12 12v70h68v-70h-68z" />
                    </svg>
                    <div className="zf-list-title-content">
                      <span className="zf-title">Add or edit questions</span>
                      <span className="zf-description">
                        Add, remove and edit questions in the form.
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="#2200FF"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <div className="zf-list-box-extend">
                    <div className="zf-box-question">
                      <button
                        className="zf-btn-add-question"
                        onClick={btn_add_question}
                      >
                        <div className="sc-dIsUp efyZNy">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="#0F9D58"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </div>
                        Add Question
                      </button>

                      <CodeMirror
                        value={template}
                        height="600px"
                        width="100%"
                        style={{ marginTop: "24px", width: "100%" }}
                        theme={oneDark}
                        extensions={[jsonLanguage]}
                        onChange={(value, viewUpdate) => change_template(value)}
                      />

                      {/* <div className="zf-box-wrapper-submit">
                        <div className="zf-box-submit">
                          <div className="zf-box-content-submit">
                            <label className="zf-label-input">
                              Submit Button:{" "}
                            </label>
                            <div className="zf-input-box">
                              <input
                                maxLength={2500}
                                className="zf-input-tag"
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal" className="">
        {modalAddQuestion && (
          <TypeQuestionModal btn_cancel_modal={btn_cancel_modal} />
        )}
      </div>
    </>
  );
}
