
import * as Craft from 'craft-uikit';

/** 
 * PlainButton 
 * 
 * @packagename Craft.Widget.QuickTools.PlainButton
 * 
 * @example
 * 
 * const btn = new Craft.Widget.QuickTools.PlainButton({
 *     label   : "My first button",
 *     handler : () => { alert("Wow"); }
 * });
 * btn.loadView();
 * 
 */
export class PlainButton extends Craft.UI.View {
	
	/**
	 * PlainButton constructor
	 * 
	 * @param {Object} options - options
	 * @param {String} options.label - label
	 * @param {Function} options.handler - click handler
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.QuickTools.PlainButton';
		
		if( !options ){ options = {}; }
		
		this.label   = options.label;
		this.handler = options.handler;
	}
	
	/**
	 * Invoke your handler
	 */
	action(){
		this.handler();
	}
	
	/**
	 * style
	 * @protected
	 */
	style(componentId){
		return `
			.root {
				box-sizing: border-box;
				display: block;
				height: 44px;
				margin-top: 5px;
				border-radius: 5px;
				color: #007aff;
				line-height: 44px;
				text-align: center;
				background-color: #fff;
				border-color: #ccc;
				border-width: 1px;
				border-style: solid;
				cursor: pointer;
			}
			.root:hover {
				background-color: #f0f0f0;
			}
		`;
	}
	
	/**
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root" onclick="Craft.Core.ComponentStack.get('${componentId}').action();">
				${this.label}
			</div>
		`;
	}
	
}
