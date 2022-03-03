import "./edit-form.css";
import CodeMirror from "@uiw/react-codemirror";
import { jsonLanguage } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";

let struct = `{
  // câu hỏi dạng text
  "type": "text",
  "question": "câu hỏi dạng input text",
  "badge": "Write in the box below",
  "isRequired": true,
  "page": 1
}`;

export function EditTextQuestion(props: any) {
  return (
    <CodeMirror
      value={struct}
      height="200px"
      width="100%"
      style={{ marginTop: "24px", width: "100%" }}
      theme={oneDark}
      extensions={[jsonLanguage]}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
    // <div className="zf-box-edit">
    //   <div className="zf-box-edit-header">
    //     <span className="sc-bYwzuL jHlHzC">1.</span>
    //     <span className="sc-bYwzuL hkTfbh">Open</span>
    //     <div className="zf-center-page">
    //       <div className="sc-cjzNjn cIJaKN">
    //         Page 1
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={16}
    //           height={16}
    //           fill="#424d57"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    //           <path d="M0 0h24v24H0z" fill="none" />
    //         </svg>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //       }}
    //     >
    //       <div
    //         className="sc-hKFxyN hUxgVa"
    //         style={{ margin: "0px 0px 0px 4px", zIndex: 1 }}
    //       >
    //         <div className="sc-bkbkJK fnJoDb">
    //           <svg
    //             width={20}
    //             height={20}
    //             fill="#647384"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M11 4h2v12h3l-4 4-4-4h3V4z" />
    //           </svg>
    //         </div>
    //       </div>
    //       <div
    //         className="sc-hKFxyN hUxgVa"
    //         style={{ margin: "0px 0px 0px 4px", zIndex: 1 }}
    //       >
    //         <div className="sc-bkbkJK fnJoDb">
    //           <svg
    //             width={20}
    //             height={20}
    //             fill="#E0E0E0"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M8 8l4-4 4 4h-3v12h-2V8H8z" />
    //           </svg>
    //         </div>
    //       </div>
    //       <div
    //         className="sc-hKFxyN hUxgVa"
    //         style={{ margin: "0px 0px 0px 6px", zIndex: 1 }}
    //       >
    //         <div className="sc-bkbkJK fnJoDb">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={18}
    //             height={18}
    //             fill="#647384"
    //             viewBox="0 0 24 24"
    //           >
    //             <path fill="none" d="M0 0h24v24H0z" />
    //             <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" />
    //           </svg>
    //         </div>
    //       </div>
    //       <div
    //         className="sc-hKFxyN hUxgVa"
    //         style={{ margin: "0px 0px 0px 6px", zIndex: 1 }}
    //       >
    //         <div className="sc-bkbkJK fnJoDb">
    //           <svg
    //             viewBox="0 0 128 128"
    //             width={20}
    //             height={20}
    //             fill="#647384"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M47 27l5-5h24l5 5h16v10H31V27h16zM35 41h57v57c0 5-5 10-10 10H45c-5 0-10-5-10-10V41z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="zf-box-edit-body">
    //     <div className="sc-cBoqAE jqlPNl">
    //       <div className="sc-jOFryr egeLzW">
    //         <label className="sc-eKYRIR llyViG">Question: </label>
    //         <div className="sc-hmbstg iriXCP">
    //           <input maxLength={2500} className="sc-dsXzNU bwJhjo" />
    //         </div>
    //       </div>
    //       <div>
    //         <div
    //           className="sc-hKFxyN hUxgVa"
    //           style={{ margin: "12px 0px 0px 8px" }}
    //         >
    //           <div className="sc-bkbkJK fnJoDb">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width={18}
    //               height={18}
    //               fill="#647384"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M0 0h24v24H0z" fill="none" />
    //               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    //             </svg>
    //           </div>
    //           <div className="sc-eCApnc gVDhPi">
    //             <div className="sc-jSFjdj jcTaHb">
    //               <div className="sc-gKAaRy bMezxI" />
    //               More options
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="sc-fTFMiz PIJDq" />
    //     </div>
    //     <div className="sc-hfVBHA cUtlan">
    //       <div className="sc-dIvrsQ kbiqLP">
    //         <div className="sc-hHEiqL kIlCyB">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={12}
    //             height={12}
    //             fill="white"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M0 0h24v24H0z" fill="none" />
    //             <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    //           </svg>
    //         </div>
    //         Required
    //       </div>
    //       <div>
    //         <div className="sc-hKFxyN hUxgVa" style={{ zIndex: 9999 }}>
    //           <div className="sc-bkbkJK fnJoDb">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width={18}
    //               height={18}
    //               fill="#647384"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M0 0h24v24H0z" fill="none" />
    //               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    //             </svg>
    //           </div>
    //           <div className="sc-eCApnc gVDhPi">
    //             <div className="sc-jSFjdj jcTaHb">
    //               <div className="sc-gKAaRy bMezxI" />
    //               Edit error text
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
