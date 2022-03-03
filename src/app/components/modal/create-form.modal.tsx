import { ReactChild, ReactFragment, ReactPortal } from "react";
import "./create-form.css";

export function CreateFormModal(props: any) {
  return (
    <div className="wrapper-modal">
      <div className="create-modal">
        <div className="create-modal-header">
          <p>New Form</p>
          <div className="close-icon-modal" onClick={props.close_create_form}>
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
        <div className="create-modal-body">
          <div className="create-modal-body-content">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "16px",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(0, 0, 0)",
                  lineHeight: "1.5",
                  textAlign: "left",
                  marginBottom: "8px",
                }}
              >
                Form name: <span style={{ color: "rgb(234, 16, 52)" }}>*</span>
              </label>
              <div style={{ display: "flex", width: "100%" }}>
                <input maxLength={2500} className="create-modal-body-input" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "16px",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(0, 0, 0)",
                  lineHeight: "1.5",
                  textAlign: "left",
                  marginBottom: "8px",
                }}
              >
                WorkspaceId:{" "}
              </label>
              <select className="create-modal-body-select">
                {props.workspace.map((item: any) => (
                  <option key={item.id} value={item["id"]}>{item["name"]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="create-modal-footer">
          <button className="create-modal-btn">
            Create Form
            <div className="create-modal-btn-icon">
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
