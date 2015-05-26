/*
*	Helpers
*/
Template.guarantee.helpers({
    prettyId:function(){
        return this._id.replace(/[0-9]/g, '');
    },
});

Template.guarantee.onRendered(function(){
	// $('.collapsible').collapsible({
	//  accordion : false
	// });
});