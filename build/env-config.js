
'use strict'

const path = require('path')
/*
 * 环境列表，第一个环境为默认环境
 * envName: 指明现在使用的环境
 * dirName: 打包的路径，只在build的时候有用
 * baseUrl: 这个环境下面的api 请求的域名
 * assetsPublicPath: 静态资源存放的域名，未指定则使用相对路径
 * */
const ENV_LIST = [
    {
        //开发环境
        envName: 'dev',
        dirName: 'dev',
        baseUrl: 'http://100.xxx.xxx',
        assetsPublicPath:'/'
    },
    {
        //测试环境
        envName: 'test',
        dirName: path.resolve(__dirname, '../dist'),
        baseUrl: 'http://111.xxx.xxx',
        assetsPublicPath: '/'
    },
    {
        //生产环境（命令行参数（process.arg）中prod是保留字，所以使用pro）
        envName: 'pro',
        dirName: path.resolve(__dirname, '../dist'),
        baseUrl: 'http://122.xxx.xxx',
        assetsPublicPath:'/'
    },
 
]

const argv = JSON.parse(process.env.npm_config_argv).original || process.argv
const HOST_ENV = argv[2] ? argv[2].replace(/[^a-z]+/ig,"") : ''
//没有设置环境，则默认为第一个
const HOST_CONF = HOST_ENV  ? ENV_LIST.find(item => item.envName === HOST_ENV) : ENV_LIST[0]
// 把环境常量挂载到process.env方便客户端使用
process.env.BASE_URL = HOST_CONF.baseUrl
// process.env.ENV_NAME = HOST_CONF.envName

module.exports.HOST_CONF = HOST_CONF
module.exports.ENV_LIST = ENV_LIST