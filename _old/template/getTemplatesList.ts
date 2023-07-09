import { TemplateDriverOptions } from "../../src/types/TemplateDriverOptions";
import { getPackageJson } from "./getPackageJson";

export async function getTemplatesList(options: TemplateDriverOptions): Promise<string[]> {
    const pojo = await getPackageJson(options.templatesFolder);
    return Object.keys(pojo.dependencies);
}

