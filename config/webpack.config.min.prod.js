
var path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.min.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-quicktools.min.js',
		library: 'QuickTools',
		libraryTarget: 'window',
		globalObject: 'window'
	},
	externals: {
		'craft-uikit' : 'Craft',
	}
};
