import { spawnIt } from "@b08/spawn";
import { TemplateDriverOptions } from "../TemplateDriverOptions";
import { TDContext } from "./TDContext";
import { defaultOptions } from "./defaultOptions";
import { greenPrint, redPrint } from "./colorPrint";

export function createContext(options: TemplateDriverOptions): TDContext {
  return {
    options: defaultOptions(options),
    greenPrint,
    redPrint,
    spawn: spawnIt
  };
}
