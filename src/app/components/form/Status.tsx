import * as React from "react";

export interface IStatusProps {
    title: string;
    description: string;
}

export default function Status(props: IStatusProps) {
  return (
    <div
      className="nf-status-container"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <div className="nf-status-wrapper" style={{ padding: "80px 20px" }}>
        <div className="nf-status-icon-wrapper">
          <svg
            width={80}
            height={80}
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#b9d3b0"
              d="M59.45 3.6a59.83 59.83 0 0145 15.08 60.03 60.03 0 0119.57 37.33 59.16 59.16 0 01-10.87 42.12 59.67 59.67 0 01-38.12 23.77 59.81 59.81 0 01-43.01-8.92A59.81 59.81 0 018.03 81.62a59.89 59.89 0 014.71-47.82C22.12 16.88 40.15 5.16 59.45 3.6m-3.26 5.58a54.31 54.31 0 00-33.93 20.15 54.12 54.12 0 00-10.18 45.44 54.31 54.31 0 0064.09 41.21 54.25 54.25 0 0035.49-25.27 54.31 54.31 0 00-17-73.45 54.55 54.55 0 00-38.47-8.08z"
            />
            <path
              fill="#76a964"
              d="M86.49 48.49c3.05-3.12 6.12-6.23 9.44-9.08 1.85.55 3.72 1.68 4.18 3.7.24 1.64-1.15 2.83-2.14 3.92-13.68 13.6-27.27 27.29-40.95 40.9a8.4 8.4 0 01-4.4-2.54c-5.99-6.05-12.07-12.02-18.03-18.09-3.27-2.42 1.42-8.29 4.3-5.15 5.96 5.46 11.27 11.6 17.4 16.88 9.72-10.51 20.17-20.33 30.2-30.54z"
            />
          </svg>
        </div>
        <span className="nf-status-header" style={{ color: "rgb(0, 0, 0)" }}>
          {props.title}
        </span>
        <span
          className="nf-status-description"
          style={{ color: "rgb(0, 0, 0)" }}
        >
          {props.description}
        </span>
      </div>
    </div>
  );
}
