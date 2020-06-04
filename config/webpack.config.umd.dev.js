
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-quicktools.umd.dev.js',
		library: 'QuickTools',
		libraryTarget: 'umd',
	},
	externals: {
		'@craftkit/craft-uikit' : 'Craft'
	}
};
