import http from "./http-common";
import IResponse from "./response.interface";

class FormData {
  async get(id: number) {
    let res = await http.get<IResponse, IResponse>(`form?id=${id}`);
    if (res.data.error === 0) {
      return res.data.data;
    }
    return;
  }

  async postResponse(data: any) {
    let res = await http.post<any, any>(`answer`, data);
    return res.data;
  }

  async editForm(id: number, data: any){
    let res = await http.put<any, any>(`form?id=${id}`, data);
    return res.data;
  }
}

export default new FormData();
