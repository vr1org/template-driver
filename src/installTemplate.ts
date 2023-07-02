import { TemplateDriverOptions } from "./TemplateDriverOptions";
import { greenPrint } from "./colorPrint";
import { spawnIt } from "@b08/spawn";
import fse from "fs-extra";

export async function installTemplate(template: string, options: TemplateDriverOptions): Promise<void> {
  await preserveFolder(async () => {
    greenPrint(`installing template package ${template} to ${options.templatesFolder}`);
    await fse.ensureDir(options.templatesFolder);
    await spawnIt("npm", ["install", template], { cwd: options.templatesFolder });
  });
}