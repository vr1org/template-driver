export interface TemplateInfo {
  name: string;
  version: string;
}

export interface UpdateRules {
  // globs
  filesToUpdate: string[];
  filesToDelete: string[];
}