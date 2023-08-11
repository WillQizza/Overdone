export function logInfo(message: string) {
  console.log(`[INFO] ${message}`);
}

export function logWarning(message: string) {
  console.warn(`[WARN] ${message}`);
}

export function logError(message: string, error: Error) {
  console.error(`[ERROR] ${message}`, error);
}