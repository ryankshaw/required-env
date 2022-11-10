/**
 * Ensures environment variable exists and returns it
 * @param {string} name Name of environment variable you want to make sure exists
 * @returns {string} the value of that environment variable
 */
module.exports = function requiredEnvVar(name) {
  const val = process.env[name]
  if (!val) throw new Error(`Required env var is missing: ${name}`)
  return val
}
