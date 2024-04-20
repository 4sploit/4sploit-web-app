import { ApiClient } from "common/clients";
import { FooterData } from "common/models";
import { ApiConstants } from "features/Footer/Footer.consts";

class FooterApi {
  constructor(private _apiClient: ApiClient) {}

  getFooterData = async () => {
    const response = await this._apiClient.get<FooterData>(
      ApiConstants.FooterDBFile,
    );

    return response;
  };
}

export default FooterApi;
