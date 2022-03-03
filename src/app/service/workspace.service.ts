import http from "./http-common";
import IResponse from "./response.interface";

class WorkspaceService {
  async find_workspace_by_uid(uid: number) {
    let res = await http.get<IResponse, IResponse>(`workspace?uid=${uid}`);
    if (res.data.error === 0) {
      return res.data.data;
    }
    return;
  }
}

export default new WorkspaceService();