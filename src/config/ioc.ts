import "reflect-metadata";
import HeaderApi from "features/Header/Header.api";
import { ApiClient } from "common/clients";
import { Container, decorate, inject, injectable } from "inversify";
import FooterApi from "features/Footer/Footer.api";
import AboutApi from "features/AboutMe/AboutMe.api";

export enum TypeNames {
  ApiClient = "ApiClient",
  HeaderApi = "HeaderApi",
  FooterApi = "FooterApi",
  AboutApi = "AboutApi",
}

export const Types: Record<TypeNames, symbol> = {
  [TypeNames.ApiClient]: Symbol.for("ApiClient"),
  [TypeNames.HeaderApi]: Symbol.for("HeaderApi"),
  [TypeNames.FooterApi]: Symbol.for("FooterApi"),
  [TypeNames.AboutApi]: Symbol.for("AboutApi"),
};

const ioContainer = new Container({ defaultScope: "Singleton" });

decorate(injectable(), ApiClient);
decorate(injectable(), HeaderApi);
decorate(inject<ApiClient>(Types.ApiClient), HeaderApi, 0);
decorate(injectable(), FooterApi);
decorate(inject<ApiClient>(Types.ApiClient), FooterApi, 0);
decorate(injectable(), AboutApi);
decorate(inject<ApiClient>(Types.ApiClient), AboutApi, 0);

ioContainer
  .bind<ApiClient>(Types.ApiClient)
  .toDynamicValue(() => new ApiClient({}));
ioContainer.bind<HeaderApi>(Types.HeaderApi).to(HeaderApi);
ioContainer.bind<FooterApi>(Types.FooterApi).to(FooterApi);
ioContainer.bind<AboutApi>(Types.AboutApi).to(AboutApi);
export default ioContainer;
