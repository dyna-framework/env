/**
 * Get environment value
 * @param key variable key
 * @param defaultValue if undefined
 * @returns value
 */
export function env(key: string, defaultValue?: any) {
  return process.env[key] || defaultValue
}
