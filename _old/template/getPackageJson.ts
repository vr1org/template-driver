import fse from "fs-extra";
import path from "path/posix";

export async function getPackageJson(folder: string): Promise<any> {
  const file = path.join(folder, "package.json");
  if (!fse.existsSync(file)) { return null; }
  const fileContents = await fse.readFile(file, "utf-8");
  const pojo = JSON.parse(fileContents);
  return pojo;
}
