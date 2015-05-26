Template.home.onRendered(function(){
	this.subscribe('footerlinks');
});
Template.footer.helpers({
	referrer:function(){
	return document.referrer;
	},
	footerLinks:function(){
		return FooterLinks.find();
	}
});