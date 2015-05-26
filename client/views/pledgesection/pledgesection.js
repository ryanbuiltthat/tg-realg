/*
*	Pledge Section Callbacks
*/
Template.pledgesection.onCreated(function(){
	this.subscribe('pledges');
});
/*
*	Pledge Section Helpers
*/
Template.pledgesection.helpers({
	pledgetext: function(){
		return orion.dictionary.get('pledge.text', 'no pledge text defined');
	},
	pledges: function(){
		return Pledges.find();
	},
});