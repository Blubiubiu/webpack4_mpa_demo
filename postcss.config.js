module.exports = {
	plugins: [
		//自动添加css前缀
        require('autoprefixer')
        //转换rem  需 install postcss-plugin-px2rem
        // require("postcss-plugin-px2rem")({'remUnit': 75,'baseDpr':2})
	]
};