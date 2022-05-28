import "reflect-metadata";
import HeaderApi from "features/Header/Header.api";
import { ApiClient } from "common/clients";
import { Container, decorate, inject, injectable } from "inversify";

export enum TypeNames {
  ApiClient = "ApiClient",
  HeaderApi = "HeaderApi",
}

export const Types: Record<TypeNames, symbol> = {
  [TypeNames.ApiClient]: Symbol.for("ApiClient"),
  [TypeNames.HeaderApi]: Symbol.for("HeaderApi"),
};

const ioContainer = new Container({ defaultScope: "Singleton" });

decorate(injectable(), ApiClient);
decorate(injectable(), HeaderApi);
decorate(inject<ApiClient>(Types.ApiClient), HeaderApi, 0);

ioContainer
  .bind<ApiClient>(Types.ApiClient)
  .toDynamicValue(() => new ApiClient({}));
ioContainer.bind<HeaderApi>(Types.HeaderApi).to(HeaderApi);

export default ioContainer;
