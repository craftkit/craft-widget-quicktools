
import * as Craft from '@craftkit/craft-uikit';

/** 
 * ActionSheet 
 * 
 * @packagename Craft.Widget.QuickTools.ActionSheet
 * 
 * @example
 * 
 * this.actionSheet = new Craft.Widget.QuickTools.ActionSheet({
 *     iconSource : "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
 *     closeHandler : () => { modalViewController.unloadView(); },
 *     actions : [{
 *         icon        : "fa fa-thumbs-o-up",          // icon font
 *         title       : "Wow",                        // button title
 *         handler     : () => { console.log("wow") }, // action handler
 *         destructive : false,                        // true to show as RED
 *     }]
 * });
 * 
 */
export class ActionSheet extends Craft.UI.View {
	
	/**
	 * ActionSheet constructor
	 * 
	 * @param {Object} options - options
	 * @param {String} options.iconSource - icon font location
	 * @param {Function} options.closeHandler - close handler (optional)
	 * @param {Object} options.actions - array of action
	 * @param {String} options.actions.icon - icon font: ex) 'fa-sort-numeric-desc'
	 * @param {String} options.actions.title - button title
	 * @param {Function} options.actions.handler - action handler
	 * @param {Boolean} options.actions.destructive - true to show as RED
	 */
	constructor(options){
		super();
		
		this.packagename = 'Craft.Widget.QuickTools.ActionSheet';
		
		if( !options ){ options = {}; }
		
		this.handlers = {};
		for( let i=0; i<options.actions.length; i++ ){
			options.actions[i]["num"] = i;
			this.handlers[i] = options.actions[i].handler;
		}
		this.actions = options.actions;
		
		this.closeHandler = options.closeHandler;
		
		this.link = document.createElement('link');
		this.link.href = options.iconSource;
		this.link.rel = 'stylesheet';
		this.shadow.appendChild(this.link);
	}
	
	/** 
	 * Invoke action
	 * @param {Number} num - num(index) of target action
	 */
	action(num){
		this.handlers[num]();
		this.closeActionSheet();
	}
	
	/** 
	 * Close the sheet
	 */
	closeActionSheet(){
		this.viewController.hideContent( () => {
			if( this.closeHandler ){ this.closeHandler(); }
		});
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){ 
		return `
			* { 
				box-sizing:border-box; margin:0; padding:0;
			}
			:host {
				width: 100vw;
				height: 100vh;
				overflow: hidden;
				margin:0;
				padding-left: 0px;
				padding-right: 0px;
				touch-action: manipulation;
			}
			.root {
				display: block;
				position: absolute;
				width: 100vw;
				height: calc( 100vh - env(safe-area-inset-bottom) - env(safe-area-inset-top) ); /* should be fit in the safe area */
				overflow-x: hidden;
				overflow-y: hidden;
			}
			.container {
				display: block;
				position: absolute;
				bottom: 0px;
				width: 100vw;
				overflow-x: hidden;
				overflow-y: hidden;
			}
			.list {
				display: block;
				margin-left: auto;
				margin-right: auto;
				border: 0px;
				border-radius: 10px;
				background-color: #ffffff;
				overflow-x: hidden;
				overflow-y: hidden;
				width: calc( 95% - env(safe-area-inset-left) - env(safe-area-inset-right) );
			}
			.btn {
				display: block;
				overflow-x: hidden;
				overflow-y: hidden;
				width: 100%;
				height: 44px;
				margin-left: auto;
				margin-right: auto;
				color: #2facff;
				font-size: 20px;
				line-height: 30px;
				border-top: 0px;
				border-left: 0px;
				border-right: 0px;
				border-bottom: 1px solid rgba(0,0,0,0.1);
				background-color: #ffffff;
				cursor: pointer;
				-webkit-tap-highlight-color:rgba(0,0,0,0);
				-webkit-touch-callout: none;
			}
			.btn:active {
				background-color: #ffffff;
			}
			.btn:focus {
				outline: 0px;
			}
			.btn:active {
				background-color: #f0f0f0;
			}
			.btn-cancel {
				display: block;
				overflow-x: hidden;
				overflow-y: hidden;
				height: 44px;
				margin-left: auto;
				margin-right: auto;
				border:0px;
				border-radius: 10px;
				margin-top: 10px;
				margin-bottom: 10px;
				color: #2facff;
				font-size: 20px;
				line-height: 30px;
				font-weight: bold;
				background-color: #ffffff;
				cursor: pointer;
				-webkit-tap-highlight-color:rgba(0,0,0,0);
				-webkit-touch-callout: none;
				${ Craft.UI.Device.hasDisplayCutout() 
					? `width: calc( 95% - env(safe-area-inset-left) - env(safe-area-inset-right) );`
					: `width: 95%;`
				}
			}
			.btn-cancel:active {
				background-color: #ffffff;
			}
			.btn-cancel:focus {
				outline: 0px;
			}
			.btn-cancel:active {
				background-color: #f0f0f0;
			}
			.btn-destructive {
				display: block;
				overflow-x: hidden;
				overflow-y: hidden;
				width: 100%;
				height: 44px;
				margin-left: auto;
				margin-right: auto;
				color: #eb6767;
				font-size: 20px;
				line-height: 30px;
				border-top: 0px;
				border-left: 0px;
				border-right: 0px;
				border-bottom: 1px solid rgba(0,0,0,0.1);
				background-color: #ffffff;
				cursor: pointer;
				-webkit-tap-highlight-color:rgba(0,0,0,0);
				-webkit-touch-callout: none;
			}
			.btn-destructive:active {
				background-color: #ffffff;
			}
			.btn-destructive:focus {
				outline: 0px;
			}
			.btn-destructive:active {
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
			<div class="root">
				<div class="container">
					<div class="list">
						${this.actions.map( action => 
							`${action.destructive ? 
								`<button type="submit" class="btn-destructive" 
									onclick="Craft.Core.ComponentStack.get('${componentId}').action(${action.num});">
									${action.icon ? `<i class="${action.icon}" style="margin-right:22px;"></i>` : `` }
									${action.title}
								</button>`
							:
								`<button type="submit" class="btn" 
									onclick="Craft.Core.ComponentStack.get('${componentId}').action(${action.num});">
									${action.icon ? `<i class="${action.icon}" style="margin-right:22px;"></i>` : `` }
									${action.title}
								</button>`
							}`
						).join('')}
					</div>
					<button type="submit" class="btn-cancel" 
						onclick="Craft.Core.ComponentStack.get('${componentId}').closeActionSheet();">Cancel</button>
				</div>
			</div>
		`;
	}

}
