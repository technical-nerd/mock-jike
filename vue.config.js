const resolve=require('./alias.config')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports={
    configureWebpack:{
        ...resolve
    }
}
