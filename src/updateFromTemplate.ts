import { TemplateDriverOptions } from "./TemplateDriverOptions";
import { createContext } from "./context/createContext";
import { updateFromTemplate as updateFromTemplateImpl } from "./updateFromTemplate/updateFromTemplate";

export async function updateFromTemplate(options: TemplateDriverOptions): Promise<void> {
  await preserveFolder(async () => {
    await updateFromTemplateImpl(createContext(options));
  });
}
