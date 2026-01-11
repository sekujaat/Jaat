const isDev = __DEV__;

export function logInfo(...args) {
  if (isDev) {
    console.log("[INFO]", ...args);
  }
}

export function logError(...args) {
  if (isDev) {
    console.log("[ERROR]", ...args);
  }
}