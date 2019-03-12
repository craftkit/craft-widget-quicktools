
import * as Craft from 'craft-uikit';

/** 
 * TipsPanel : small tip on the element 
 * 
 * @packagename Craft.Widget.QuickTools.TipsPanel
 */
export class TipsPanel extends Craft.UI.View {
	
	/**
	 * BackButton constructor
	 * @param {Object} options - options
	 * @param {Object} options.text - tip text
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.QuickTools.TipsPanel';
		
		if( !options ){ options = {}; }
		
		this.panel = ''; // will be injected by TipPanelProtocol
		this.text  = options.text;
	}
	
	/** 
	 * Close tips view
	 */
	closePanel(){
		this.panel.hidePanel(); // call the injected panel method
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return `
			:host {
				position: relative;
			}
			.root {
				box-sizing: border-box;
				width: 100%;
				padding-left: 11px;
				padding-right: 11px;
				padding-top: 5px;
				padding-bottom: 5px;
				color: #fff;
				background-color: #444;
			}
		`;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root">${this.text}</div>
		`;
	}

}
