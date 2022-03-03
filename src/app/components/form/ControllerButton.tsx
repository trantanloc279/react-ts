import * as React from "react";
import { useAppSelector } from "@app/hooks";
import formApi from "@app/service/form.service";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

export interface IControllerButtonProps {
  total_pages: number;
  current_page: number;
  next_page: any;
  prev_page: any;
  btn_submit: any;
  title: string;
}

export default function ControllerButton(props: IControllerButtonProps) {
  

  return (
    <div className="nf-question">
      <div className="nf-page-controller" style={{ paddingBottom: "16px" }}>
        {props.current_page !== 0 && (
          <button
            type="button"
            onClick={props.prev_page}
            className="nf-arrow-button nf-left-arrow-button"
            style={{
              opacity: 1,
              border: "1px solid rgb(206, 214, 221)",
              backgroundColor: "rgb(255, 255, 255)",
              fill: "rgb(0, 0, 0)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="inherit"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
            <span
              className="nf-arrow-left-text"
              style={{
                lineHeight: 1,
                fontSize: "14px",
                color: "rgb(0, 0, 0)",
                paddingRight: "4px",
                paddingLeft: "2px",
              }}
            >
              Back
            </span>
          </button>
        )}

        <div className="nf-progress-container">
          <span className="nf-progress-text" style={{ color: "rgb(0, 0, 0)" }}>
            {/* 56% */}
          </span>
          <div
            className="nf-progress-line-container"
            style={{ backgroundColor: "rgba(34, 0, 255, 0.133)" }}
          >
            {/* <div
              className="nf-progress-line"
              style={{ backgroundColor: "rgb(34, 0, 255)", width: "56%" }}
            /> */}
          </div>
        </div>

        {props.total_pages - 1 === props.current_page ? (
          <button
            onClick={props.btn_submit}
            type="button"
            className="nf-arrow-button nf-right-arrow-button"
            style={{
              opacity: 1,
              border: "1px solid rgb(34, 0, 255)",
              backgroundColor: "rgb(34, 0, 255)",
              fill: "rgb(255, 255, 255)",
            }}
          >
            <span
              className="nf-arrow-right-submit-text"
              style={{
                lineHeight: 1,
                fontSize: "14px",
                paddingRight: "8px",
                paddingLeft: "4px",
                color: "rgb(255, 255, 255)",
                fontWeight: "bold",
              }}
            >
              {props.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="inherit"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={props.next_page}
            className="nf-arrow-button nf-right-arrow-button"
            style={{
              opacity: 1,
              border: "1px solid rgb(206, 214, 221)",
              backgroundColor: "rgb(255, 255, 255)",
              fill: "rgb(0, 0, 0)",
            }}
          >
            <span
              className="nf-arrow-right-text"
              style={{
                lineHeight: 1,
                fontSize: "14px",
                paddingRight: "2px",
                paddingLeft: "4px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Next
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="inherit"
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
