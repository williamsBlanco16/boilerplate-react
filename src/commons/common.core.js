export const getReactAppVersion = () => {
  console.log('process.env.npm_package_version', process.env.npm_package_version)
  return process.env.npm_package_version
}

export const getEnviroment = () => {
  return process.env.NODE_ENV || 'development'
}
