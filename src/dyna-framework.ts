import { Autoimport } from "@dyna/core";
import { EnvFilesInitializer } from "./env-files.initializer";

export const DynaAutoimport: Autoimport = {
  initializers: [ EnvFilesInitializer ],
};
