import { Menu } from "@app/components/layout/menu";
import { CreateFormModal } from "@app/components/modal/create-form.modal";
import workspaceService from "@app/service/workspace.service";
import { useCallback, useEffect, useState } from "react";

export function Home(props: any) {
  const [workspace, setWorkspace] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  // const [selectedWorkspace, setSelectedWorkspace] = useState(0);

  const find_workspace_by_uid = useCallback(async (uid: number) => {
    let workspace = await workspaceService.find_workspace_by_uid(uid);
    setWorkspace(workspace);
  }, []);

  const open_create_form = (event: any) => {
    event.preventDefault();
    setCreateModal(true);
  };

  const close_create_form = (event: any) => {
    event.preventDefault();
    setCreateModal(false);
  };

  useEffect(() => {
    find_workspace_by_uid(280671989);
  }, []);

  return (
    <div>
      <div className="zf-body">
        <div className="zf-body-wrapper">
          <div className="zf-header">
            <h2 className="zf-logo-text">Zalo Form</h2>
            <button className="zf-btn-new-form" onClick={open_create_form}>
              <div className="zf-btn-icon-plus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              New Form
            </button>
          </div>
          <div className="zf-header-workspace">
            <div className="zf-workspace-content">
              {workspace.map((item, index) => (
                <div
                  className="zf-workspace-item"
                  style={{
                    backgroundColor: "rgb(138, 150, 163)",
                  }}
                  key={index}
                >
                  {item["name"]}
                  <div>
                    <div style={{ margin: "0px 0px 0px 4px" }}></div>
                  </div>
                </div>
              ))}

              <div
                className="zf-workspace-item"
                style={{
                  backgroundColor: "rgb(34, 0, 255)",
                }}
              >
                My Forms
                <div>
                  <div style={{ margin: "0px 0px 0px 4px" }}></div>
                </div>
              </div>
              <div
                style={{
                  fontWeight: 500,
                  cursor: "pointer",
                  color: "rgb(34, 0, 255)",
                  fontSize: "13px",
                  transition: "opacity 200ms ease-out 0s",
                  padding: "4px 6px",
                }}
              >
                + New Folder
              </div>
            </div>
          </div>

          <div
            className="zf-wrapper-list-radio"
            style={{ width: "95%", margin: "10px auto" }}
          >
            <div className="zf-list-radio">
              <div className="zf-radio">
                <strong>name</strong>
              </div>
            </div>
            <div className="zf-list-radio">
              <div className="zf-radio">
                <strong>name</strong>
              </div>
            </div>
            <div className="zf-list-radio">
              <div className="zf-radio">
                <strong>name</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
      {createModal && <CreateFormModal close_create_form={close_create_form} workspace={workspace} />}
    </div>
  );
}
