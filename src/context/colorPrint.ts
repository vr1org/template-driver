export function greenPrint(...args: any[]): void {
  console.log("\x1b[92m", ...args, "\x1b[0m");
}

export function redPrint(...args: any[]): void {
  console.log("\x1b[31m", ...args, "\x1b[0m");
}
