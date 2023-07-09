import { TemplateDriverOptions } from "../types/TemplateDriverOptions";
import { TemplateInfo } from "./TemplateInfo";
import { getExistingTemplateInfo } from "./getExistingTemplateInfo";
import { installTemplate } from "./installTemplate";
import { loadTemplateInfo } from "./loadTemplateInfo";

export async function getTemplateInfo(template: string, options: TemplateDriverOptions): Promise<TemplateInfo> {
  return await getExistingTemplateInfo(template, options)
    ?? await installAndGetTemplateInfo(template, options);
}

async function installAndGetTemplateInfo(template: string, options: TemplateDriverOptions): Promise<TemplateInfo> {
  await installTemplate(template, options);
  return await loadTemplateInfo(template, options);
}


