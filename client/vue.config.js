var nib = require('nib')

module.exports = {
	lintOnSave: false,
	runtimeCompiler: true,
	assetsDir: 'src/assets/',
	css: {
		sourceMap: false,
		extract: true,
		loaderOptions: {
			stylus: {
				use: [nib()]
			},
		}
	}
}
