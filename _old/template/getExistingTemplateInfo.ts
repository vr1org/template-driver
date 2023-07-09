import { TemplateDriverOptions } from "../types/TemplateDriverOptions";
import { TemplateInfo } from "./TemplateInfo";

export async function getExistingTemplateInfo(template: string, options: TemplateDriverOptions): Promise<TemplateInfo> {
  const templates = await getAllTemplates(options);
}


