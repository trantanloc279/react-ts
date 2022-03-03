import { Link } from "react-router-dom";
import "./layout.css";

export function Menu(props: any) {
  return (
    <div id="nf-side-menu">
      <div className="zf-menu-list">
        <div className="zf-menu-item">
          <Link
            aria-current="page"
            className="zf-menu-iem-a"
            to="/"
            style={{ backgroundColor: "#ffffff" }}
          >
            <svg
              width={22}
              height={22}
              fill="inherit"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21a1 1 0 0 1 1-1 2 2 0 0 0 2-2V8.5l-9-6.3-9 6.3V18a2 2 0 0 0 2 2h3v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-5H9v5a1 1 0 0 1-1 1H4a4 4 0 0 1-4-4V8a1 1 0 0 1 .4-.8l10-7a1 1 0 0 1 1.2 0l10 7a1 1 0 0 1 .4.8v10a4 4 0 0 1-4 4 1 1 0 0 1-1-1zm-9-9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
            </svg>
            <span style={{ fontSize: "10px", marginTop: "5px" }}>Forms</span>
          </Link>
        </div>
        <div className="zf-menu-item">
          <Link aria-current="page" className="zf-menu-iem-a" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="inherit"
            >
              <path d="M19 22h-2a1 1 0 110-2h2a1 1 0 001-1V3a1 1 0 00-1-1h-3a1 1 0 00-1 1v2a1 1 0 01-2 0V3a3 3 0 013-3h3a3 3 0 013 3v16a3 3 0 01-3 3zm-7 0h-2a1 1 0 110-2h2a1 1 0 001-1v-9a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-2 0v-2a3 3 0 013-3h3a3 3 0 013 3v9a3 3 0 01-3 3zm-7 0H3a3 3 0 01-3-3v-2a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3zm-2-6a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1z"></path>
            </svg>
            <span
              style={{ fontSize: "10px", marginTop: "5px", color: "black" }}
            >
              Reports
            </span>
          </Link>
        </div>
      </div>
      <Link to="/" style={{ padding: "11px" }}>
        <div className="zf-menu-item">
          <div className=".zf-menu-item-img">
            <img
              width={42}
              height={42}
              src="https://lh3.googleusercontent.com/a/AATXAJzjO98bYGssMuclVdBvfB7ULrs8fllGnHXXJysN1g=s96-c"
              title="Tan Loc Tran"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="sc-eCApnc gVDhPi" />
        </div>
      </Link>
    </div>
  );
}
