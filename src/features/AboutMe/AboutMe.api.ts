import { ApiClient } from "common/clients";
import { AboutData } from "common/models";
import { ApiConstants } from "features/AboutMe/AboutMe.consts";

class AboutApi {
  constructor(private _apiClient: ApiClient) {}

  getAboutData = async () => {
    const response = await this._apiClient.get<AboutData>(
      ApiConstants.AboutDBFile,
    );

    return response;
  };
}

export default AboutApi;
