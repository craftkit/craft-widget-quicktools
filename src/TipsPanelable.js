
import * as Craft from '@craftkit/craft-uikit';

import { TipsPanel } from './TipsPanel.js';
import { ActionPanel } from './ActionPanel.js';

/** 
 * Wrapping your component with tip
 * 
 * @packagename Craft.Widget.QuickTools.TipsPanelable
 * 
 * @example
 * 
 * let tipable_component = Craft.Widget.QuickTools.TipsPanelable({
 *     content : component,
 *     tip     : "This is info"
 * });
 * this.appendView(tipable_component);
 * 
 */
export class TipsPanelable extends Craft.UI.View {
	
	/**
	 * TipsPanelProtocol constructor : (never used)
	 * 
	 * @param {String} tips - place on the element
	 * @param {Object} options - options
	 * @param {String} options.tips - tips text (optional)
	 * @param {Craft.UI.View} options.content - content of panelable element (optional)
	 * @param {Craft.UI.View} options.text - text content of panelable element (optional)
	 * @param {Craft.UI.View} options.panelClass - Class of tips (optional)
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.QuickTools.TipsPanelable';
		
		if( !options ){ options = {}; }
		
		this.tips       = options.tips;
		this.content    = options.content;
		this.text       = options.text;
		this.panelClass = options.panelClass || TipsPanel;
	}
	
	/** 
	 * viewDidLoad setup panel and its content
	 * @protected
	 */
	viewDidLoad(callback){
		this.tipsPanel = new this.panelClass({
			text : this.tips
		});
		this.tipsPanel.setViewController(this.viewController);
		this.tipsPanel.loadView();
		
		if( this.content ){
			this.setContent(this.content);
		}else{
			this.setText(this.text);
		}
		
		if( callback ){ callback(); }
	}
	
	/** 
	 * Hide tips
	 */
	hideTipsPanel(){
		if( this.tipsPanel ){
			this.tipsPanel.closePanel();
		}
	}
	
	/** 
	 * Set inner content
	 * 
	 * @param {Craft.UI.View} content
	 */
	setContent(content){
		if( !content.isViewLoaded ){
			content.loadView();
		}
		this.content = content;
		this.root.appendChild(content.view);
	}
	
	/** 
	 * Set inner text
	 * 
	 * @param {String} text
	 */
	setText(text){
		this.content = new Craft.UI.View();
		this.content.loadView();
		this.content.root.innerHTML = text;
		this.root.appendChild(this.content.view);
	}
	
	/** 
	 * Show tips
	 */
	showTipsPanel(){
		this.actionPanel = new ActionPanel({
			base : this
		});
		this.actionPanel.setViewController(this.viewController);
		this.actionPanel.loadView();
		
		this.actionPanel.setContent(this.tipsPanel);
		this.actionPanel.showPanel({
			target : this.root
		});
		
		this.tipsPanel.panel = this.actionPanel; // inject the panel object to be able to call actionPanel.unloadView()
		
		this.actionPanel.viewWillAppear();
		Craft.Core.Context.getRootViewController().appendView(this.actionPanel);
		this.actionPanel.viewDidAppear();
		
		this.locatePanel();
	}
	
	/** 
	 * locate panel
	 */
	locatePanel(){
		let content_rect = this.content.root.getBoundingClientRect(); // this.content is the hover target
		
		let panel_posY = content_rect.bottom;
		let panel_posX = content_rect.left;
		
		this.actionPanel.view.style['top']  = String( panel_posY )+'px';
		this.actionPanel.view.style['left'] = String( panel_posX )+'px';
		
		// adjust to the screen
		let doc_width = window.innerWidth;
		let panel_width = this.actionPanel.view.clientWidth;
		if( panel_posX + panel_width > doc_width ){
			this.actionPanel.view.style['left'] = String( doc_width - panel_width )+'px';
		}
		let doc_height = window.innerHeight;
		let panel_height = this.actionPanel.view.clientHeight;
		if( panel_posY + panel_height > doc_height ){
			this.actionPanel.view.style['top'] = String( content_rect.top - panel_height )+'px';
		}
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return `
			:host {
				display: inline-block;
			}
			.root {
				cursor: pointer;
			}
		`;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		if( 'ontouchend' in window ){
			// ignore mobile device
			return `<div class="root"></div>`;
		}else{
			return `
				<div class="root" 
					onclick="${componentId}.hideTipsPanel();" 
					onmouseover="${componentId}.showTipsPanel();" 
					onmouseout="${componentId}.hideTipsPanel();" 
					onblur="${componentId}.hideTipsPanel();">
				</div>
			`;
		}
	}
	
}
