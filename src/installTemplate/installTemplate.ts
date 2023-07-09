import { TDContext } from "../context/TDContext";

export async function installTemplate(template: string, context: TDContext): Promise<void> {
  context.greenPrint(`installing template package ${template} to ${context.options.templatesFolder}`);
  await context.spawn("npm", ["install", template], { cwd: context.options.templatesFolder });
}
