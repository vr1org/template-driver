import { TemplateDriverOptions } from "./TemplateDriverOptions";
import { createFromTemplate as createFromTemplateImpl } from "./createFromTemplate/createFromTemplate";
import { createContext } from "./context/createContext";

// template can be a full template name like @b08/ts-library-template
// or short alias like ts-library
// target is a newly created package
export async function createFromTemplate(target: string, template: string, options: TemplateDriverOptions): Promise<void> {
  await preserveFolder(async () => {
    await createFromTemplateImpl(target, template, createContext(options));
  });
}
