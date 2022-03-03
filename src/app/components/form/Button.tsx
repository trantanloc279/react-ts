export default function Button({ title, btn_submit }: any) {
  return (
    <div className="nf-question">
      <div
        className="nf-submit-button-container"
        style={{ paddingBottom: "12px" }}
      >
        <button
          onClick={btn_submit}
          className="nf-submit-button"
          id="nf-submit-button"
          style={{
            backgroundColor: "rgb(34, 0, 255)",
            color: "rgb(255, 255, 255)",
          }}
        >
          {title}
        </button>
      </div>
    </div>
  );
}
