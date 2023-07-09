import { spawnIt } from "@b08/spawn";

export async function build() :Promise<void> {
  await spawnIt("eslint", ["-c .eslintrc.js --ext .ts src"]);
}