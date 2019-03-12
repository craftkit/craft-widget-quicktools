
import * as Craft from 'craft-uikit';

/** 
 * IconButton 
 * 
 * @packagename Craft.Widget.QuickTools.IconButton
 * 
 * @example
 * 
 * this.btn = new IconButton({
 *     href    : "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
 *     icon    : "fa-ellipsis-v",
 *     handler : () => { this.action(); }
 * });
 * 
 */
export class IconButton extends Craft.UI.View {
	
	/**
	 * IconButton constructor
	 * 
	 * @param {Object} options - options
	 * @param {String} options.iconSource - link target style sheet
	 * @param {String} options.icon - font-awesome icon name
	 * @param {Function} options.handler - click handler
	 */
	constructor(options){
		super();
		
		this.packagename = 'Craft.Widget.QuickTools.IconButton';
		
		this.icon    = options.icon; // font-awesome icon name
		this.handler = options.handler;
		
		this.link = document.createElement('link');
		this.link.href = options.iconSource;
		this.link.rel = 'stylesheet';
		this.shadow.appendChild(this.link);
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
				float: left;
				width: 44px;
				height: 44px;
				margin-left: 0px;
				color: #007aff;
				font-size: 36px;
				line-height: 44px;
				cursor: pointer;
			}
		`;
	}
	
	/**
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root" onclick="window.Craft.Core.ComponentStack.get('${componentId}').action();">
				<i class="${this.icon}"></i>
			</div>
		`;
	}
	
}
