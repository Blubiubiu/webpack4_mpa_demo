# webpack4_mpa_demo
webpack4搭建多页面多环境demo

## v 1.0.6 改动
#### 删除冗余代码
#### 解决深层目录无法使用问题，现在可以在src/pages 文件中录入深层次文件夹，添加新文件需要重新npm run local
#### 解决html热更新问题，无需再在js文件中require

## v 1.0.5 改动
#### 添加html---hot reload，您需要在js文件中require，可查看index文件中index.js

## v 1.0.4 改动
#### 减少部分代码
#### 升级webpack到4.29.6
#### 更改部分依赖位置
##### 个人觉得一般情况下，无需env-config文件（请求地址可以从window.location.origin中获取到），留着只是为了一些特殊情况。
##### 当你不需要env-config文件时，只需区分是npm run dev或npm run build就可以
##### 例如当我在dev、test环境应该执行的是npm run dev，在staging、灰度、master的时候是npm run build
##### 而你们在服务器build的时候，无论是自动部署还是手动部署，只要知道了环境也就能分清是应该运行哪个命令

## v 1.0.3 改动
#### 增加本地调试方法 npm run local, 其余方法npm run dev, npm run test等均为build方法，如需变更，请去package.json中以及env-config中自行修改

## v 1.0.2 改动
#### 添加公共代码提取，minChunks: 2

## v 1.0.1 改动
#### 增加px2rem，以及rem.js文件（以750设计稿为准）使用时引入rem.js，设计稿多少px，css就写多少px，自动转换为rem

