async function preserveFolder<T extends void | any>(action: () => Promise<T>): Promise<T> {
  const folder = process.cwd();
  const result = await action();
  if (process.cwd() !== folder) process.chdir(folder);
  return result;
}
