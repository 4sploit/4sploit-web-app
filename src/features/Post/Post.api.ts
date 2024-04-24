import { ApiClient } from "common/clients";
import { ApiClientRequestConfig } from "common/types";
import { ApiConstants } from "features/Post/Post.consts";

class PostApi {
  constructor(private _apiClient: ApiClient) {}

  getPostData = async (name: string) => {
    const requestConfig: ApiClientRequestConfig = {
      baseUrl: "/",
      headers: undefined,
    };

    const response = await this._apiClient.get<string>(
      `${ApiConstants.PostsPath}/${name}.md`,
      requestConfig,
    );

    return response;
  };
}

export default PostApi;
