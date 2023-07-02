import { TemplateDriverOptions } from "./TemplateDriverOptions";
import os from "os";
import path from "path/posix";

function pathSlash(path: string): string {  
    return path.replace(/\\/g, "/");  
}

export function defaultOptions(options: TemplateDriverOptions): TemplateDriverOptions {
  return {
    templatesFolder: path.join(pathSlash(os.homedir()), "template-driver"),
    targetFolder: process.cwd(),
    ...(options ?? {})
  }
}