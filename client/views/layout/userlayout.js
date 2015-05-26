Template.userlayout.onCreated(function(){
	// Subscribe to footerlinks
    this.subscribe('footerlinks');
    
});
Template.userlayout.onRendered(function(){
	$('.status-wrapper').hide();
	//$('.drawer').hide();
	$('.modal-trigger').leanModal();
	 
    //$.fn.fullpage.reBuild();
});
//Iron.Location.configure({useHashPaths: true});