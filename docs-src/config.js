import config from '../package.json'
const upName = config.name.replace(/(^\w|-\w)/g, m => m.replace('-', '').toUpperCase())
export { config, upName }