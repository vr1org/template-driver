import { TemplateDriverOptions } from "../TemplateDriverOptions";

export interface TDContext {
  spawn: (cmd: string, parameters?: string[], options?: any) => Promise<string>;
  greenPrint: (line: string) => void;
  redPrint: (line: string) => void;
  options: TemplateDriverOptions;
}
