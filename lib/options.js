/**
 * To allow the creation of users
 */
Options.set('forbidClientAccountCreation', true);

/**
 * To set the community role to all new users
 */
Options.arrayPush('defaultRoles', 'representative');

/**
* Allow front-end receipt generation
*/
Template.registerHelper("receiptbuilder", orion.collections.receipts);
if(Meteor.isClient){
	// Let's add a session variable to hold our selected
 	// guarantees
 	 if (this.userId) {
 	 	if(Session.equals("selected", {}) || Session.equals("selected","")){
 	 		Session.set("selected",{});	
 	 	}
 	 }else {
	 	Accounts.onLogin(function(){
			//var usr = Meteor.users.findOne({_id: Meteor.userId()},{fields: {isAdmin: 1}});
			Session.set("selected",{});
		});
 	 }
	// Template.adminLayout.onRendered = function() {
	//  	 	$('.drawer').hide();
	// };
	// Template.adminConfigUpdate.onRendered = function(){
	// 	$('.editor').editable({key: 'WdryuA-7nA-21oD-16qtdgpH3fij=='});
	// }
}