const fs = require('fs')

const mode = process.env.NODE_ENV || 'development'
const isProduction = mode === 'production'

const logFileExist = (filePath) => {
  if (!filePath) {
    console.info('file path is missing')
  }

  fs.access(filePath, fs.constants.F_OK, err => {
    if (err) {
      console.warn(err.message)
      console.warn('it is possible that the enviroment variables are provided for Docker and not for webpack. Please check if the env file path is required')
      return false
    }
    return true
  })
}

module.exports = {
  mode,
  isProduction,
  logFileExist
}
