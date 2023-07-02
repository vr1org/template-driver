import { TemplateDriverOptions } from "./TemplateDriverOptions";
import { defaultOptions } from "./defaultOptions";

export async function createFromTemplate(targetName: string, templateName: string, options: TemplateDriverOptions): Promise<void> {
  options = defaultOptions(options);
}