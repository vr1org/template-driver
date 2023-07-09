import path from "path/posix";
import { TemplateDriverOptions } from "../types/TemplateDriverOptions";
import { getPackageJson } from "./getPackageJson";
import { TemplateInfo } from "./TemplateInfo";

export async function loadTemplateInfo(template: string, options: TemplateDriverOptions): Promise<TemplateInfo> {
  const pkg = await getPackageJson(path.join(options.templatesFolder, template));
  return {
    name: template,
    version: pkg["version"]
  };
}
