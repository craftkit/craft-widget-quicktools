
import { PlainButton } from './src/PlainButton.js';
import { IconButton } from './src/IconButton.js';
import { ActionSheet } from './src/ActionSheet.js';
import { ActionPanel } from './src/ActionPanel.js';
import { TipsPanel } from './src/TipsPanel.js';
import { TipsPanelable } from './src/TipsPanelable.js';

const Packages = {
	PlainButton   : PlainButton,
	IconButton    : IconButton,
	ActionSheet   : ActionSheet,
	ActionPanel   : ActionPanel,
	TipsPanel     : TipsPanel,
	TipsPanelable : TipsPanelable
};

Packages.inject = function(Craft){
	Craft.Widget = Craft.Widget || {};
	if( !Craft.Widget.QuickTools ){
		Craft.Widget.QuickTools = Packages;
	}
};

export default Packages;

