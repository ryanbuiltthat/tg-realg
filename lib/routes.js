/**
 * Iron routes
 */
Router.route('/', {
	name: 'home',
	layoutTemplate: 'userlayout',
	loadingTemplate: 'userLoading',
	waitOn: function() {
		return [
			Meteor.subscribe('guarantees'),
		]

	},
	data: function() {
		return {}
	},
	fastRender: true
});
Router.route('/:_id',{
	name: 'homereferral',
	template: 'home',
	layoutTemplate: 'userlayout',
	loadingTemplate: 'userLoading',
	waitOn: function() {
		return [
			Meteor.subscribe('guarantees'),
		]

	},
	data: function() {
		return {}
	},
	fastRender: true
});

/**
* Webview of receipt
*/
Router.route('/receipt/:_id', {
	name: 'viewreceiptonline',
	loadingTemplate: 'userLoading',
});
//Iron.Location.configure({useHashPaths: true});
//http://localhost:3000/items/5?q=s#hashFrag
//http://localhost:3000/#/reset-password/w5eAawk_4jBFo82h19sYamNbVxznoXkt
// Router.route('/reset-password/:_id',{
// 	name: 'resetPassword',
// 	loadingTemplate: 'userLoading',
// });
/**
* Printview of receipt
*/
// Router.route('/print-receipt/:_id',{
// 	name: 'receipttopdf',
// 	loadingTemplate: 'userLoading',
// });















// Configure obj
//Router.Location.configure({useHashPaths: true});
//Sample URL
//http://localhost:3000/#/reset-password/w5eAawk_4jBFo82h19sYamNbVxz
// Router.route('/password-reset/:_id',function(){
// 	Iron.Location.configure({useHashPaths: true});
// 	var token = this.params._id; // "token"
// 	// var query = this.params.query; // {q: "s"}
// 	// var hash = this.params.hash; // "hashFrag"
// 	console.log("token grabbed?" +token);
// 	this.render('passwordReset');
//		"_id" : "uNFiBK6XW66ugdd7D"
// });