
import * as Craft from 'craft-uikit';

/** 
 * ActionPanel : panel on the element  
 * 
 * NOTE:  
 * This widget does not work well in mobile device mode of desktop browser, 
 * because of UIEvent object in desktop browser does not have pageX/pageY.
 * 
 * NOTE:
 * If your click target have margin or padding, you should adjust panel position by setting top_margin argument.
 * This module does not treat target structure.
 * 
 * This widget requires touch(or click) event named as "ContentTapped" fired by Craft.Core.NotificationCenter.  
 * Craft.UI.DefaultRootViewController supports it.
 * 
 * @packagename Craft.Widget.QuickTools.ActionPanel
 * 
 * @example
 * 
 * viewDidLoad(callback){
 *     this.actionPanel = new Craft.Widget.QuickTools.ActionPanel();
 *     this.actionPanel.loadView();
 *     this.actionPanel.setContent(new PanelContent());
 *     if(callback){ callback(); }
 * }
 * 
 * showPanel(target){
 *     this.actionPanel.showPanel({
 *         target : target
 *     });
 * }
 * 
 * template(cid){
 *     return `<div onclick="${cid}.showPanel(this)">click me</div>`;
 * }
 * 
 */
export class ActionPanel extends Craft.UI.View {
	
	/**
	 * BackButton constructor
	 * 
	 * @param {Object} options - options
	 * @param {Element} options.target - click source element
	 */
	constructor(options){
		super();
		
		this.packagename = 'Craft.Widget.QuickTools.ActionPanel';
		
		if( !options ){ options = {}; }
		
		this.target  = options.target;
		this.content = options.content; // content
		
		this.right_margin  = 22; // default: save 22px at right
		this.top_margin    = 0;  // default: no margin
		this.bottom_margin = 7;  // default: save 7px at bottom
		
		this.listener_serial = ''; // listener with serial number
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
	 * Hide panel if the outside of the panel was tapped : work with ContentTapped event fired by Craft.Core.DefaultRootViewController
	 * @private
	 * @panel {UIEvent|MouseEvent} event - TouchEvent|MouseEvent
	 */
	handleTouch(event){
		if( !event ){
			// unexpected, but might be called from user program, force close panel and return.
			this.hidePanel();
			return false;
		}
		
		let pageX = event.pageX;
		let pageY = event.pageY;
		
		let panel_rect = this.view.getBoundingClientRect();
		let panel_width = this.view.clientWidth;
		let panel_height = this.view.clientHeight;
		
		if( panel_rect.left < pageX && pageX < panel_rect.left + panel_width && panel_rect.top < pageY && pageY < panel_rect.top + panel_height ){
			// the tap is inside of this panel
			return false;
		}
		// the tap is outside of this panel
		this.hidePanel();
		return false; // false: no more event propagation, true: continue to propagate event
	}
	
	/** 
	 * Clean up memory
	 */
	unloadView(){
		this.content.unloadView();
		super.unloadView();
	}
	
	/** 
	 * Show panel
	 * 
	 * @param {Object} options - options
	 * @param {Element} options.target - place on the element (optional)
	 * @param {Number} options.right_margin - margin right side (optional)
	 * @param {Number} options.left_margin - margin left side (optional)
	 */
	showPanel(options){
		this.target = options.target || this.target; // clicked element
		
		this.right_margin  = options.right_margin  || this.right_margin;
		this.top_margin    = options.top_margin    || this.top_margin;
		this.bottom_margin = options.bottom_margin || this.bottom_margin;
		
		this.content.viewWillAppear();
		Craft.Core.Context.getRootViewController().appendView(this);
		this.content.viewDidAppear();
		
		this.locatePanel();
		
		this.listener_serial = Craft.Core.NotificationCenter.listen("ContentTapped",(ev) => {
			this.handleTouch(ev);
		});
		this.listener_serial = Craft.Core.NotificationCenter.listen("Craft.Widget.QuickTools.ActionPanel.hidePanel",(ev) => {
			this.hidePanel(ev);
		});
		Craft.Core.Transition.animate({
			element    : this.view,
			properties : { opacity: 1 },
			duration   : 50,
		});
	}
	
	/** 
	 * locate panel
	 */
	locatePanel(){
		let target_rect = this.target.getBoundingClientRect(); // this.content is the click target
		
		let panel_posY = target_rect.bottom;
		let panel_posX = target_rect.left;
		
		this.view.style['top']  = String( panel_posY )+'px';
		this.view.style['left'] = String( panel_posX )+'px';
		
		// adjust to the screen
		let doc_width = window.innerWidth;
		let panel_width = this.view.clientWidth;
		if( panel_posX + panel_width > doc_width ){
			this.view.style['left'] = String( doc_width - panel_width )+'px';
		}
		let doc_height = window.innerHeight;
		let panel_height = this.view.clientHeight;
		if( panel_posY + panel_height > doc_height ){
			this.view.style['top'] = String( target_rect.top - panel_height )+'px';
		}
	}
	
	/** 
	 * Hide panel
	 */
	hidePanel(){
		Craft.Core.NotificationCenter.remove("ContentTapped",this.listener_serial);
		Craft.Core.Transition.animate({
			element    : this.view,
			properties : { opacity: 1 },
			duration   : 50,
			callback   : () => {
				this.content.viewWillDisappear();
				this.view.remove();
				this.content.viewDidDisappear();
			}
		});
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return `
			:host {
				display: block;
				box-sizing: border-box;
				position: absolute;
				top: 0px;
				color: #aaa;
				background-color: #fff;
				border-radius: 3px;
				-webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
				-moz-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
				box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
				-webkit-overflow-scrolling: touch;
				overflow: auto;
				opacity: 0;
			}
		`;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root"></div>
		`;
	}

}
