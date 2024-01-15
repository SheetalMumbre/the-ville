import { authenticationModule } from "./layout/authentication/logic/authentication.module";
import { applicationModule } from "./components/application/logic/application.module";
import { stringResourcesModule } from "./components/string-resources/logic/string-resources.module";
import { myPreferencesModule } from "./components/settings/my-preference/logic/my-preferences.modules";
import { companyDetailsModule } from "./components/settings/company-details/logic/company-details.module";
import { configureUserModule } from "./components/settings/configure-user/logic/configure-user.module";

export const modules = [
    authenticationModule,
    applicationModule,
    stringResourcesModule,
    myPreferencesModule,
    companyDetailsModule,
    configureUserModule,
];
