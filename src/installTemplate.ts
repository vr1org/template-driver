import { createContext } from "./context/createContext";
import { installTemplate as installTemplateImpl } from "./installTemplate/installTemplate";
import { TemplateDriverOptions } from "./TemplateDriverOptions";

export async function installTemplate(template: string, options: TemplateDriverOptions): Promise<void> {
  await preserveFolder(async () => {
    await installTemplateImpl(template, createContext(options));
  });
}
