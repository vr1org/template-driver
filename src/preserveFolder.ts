async function preserveFolder(action: () => Promise<void>): Promise<void> {
  const folder = process.cwd();
  await action();
  if (process.cwd() !== folder) process.chdir(folder);
}