import { ApiClient } from "common/clients";
import { HeaderData } from "common/models";
import { ApiConstants } from "features/Header/Header.consts";

class HeaderApi {
  constructor(private _apiClient: ApiClient) {}

  getHeaderData = async () => {
    const response = await this._apiClient.get<HeaderData>(
      ApiConstants.HeaderDBFile,
    );

    return response;
  };
}

export default HeaderApi;
