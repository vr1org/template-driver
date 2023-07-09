import { TemplateDriverOptions } from "../types/TemplateDriverOptions";
import { spawnIt } from "@b08/spawn";
import fse from "fs-extra";

export async function installTemplate(template: string, options: TemplateDriverOptions): Promise<void> {
  await fse.ensureDir(options.templatesFolder);
  await spawnIt("npm", ["install", template], { cwd: options.templatesFolder });
}
