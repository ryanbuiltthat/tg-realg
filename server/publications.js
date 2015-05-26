/**
 * Publish all guarantees
 */
Meteor.publish('guarantees', function () {
  return Guarantees.find();
});


/**
 * Publish all pledges
 */
Meteor.publish('pledges', function () {
  return Pledges.find();
});

/**
 * Publish all footer menu items
 */
Meteor.publish('footerlinks', function () {
  return FooterLinks.find();
});
/**
 * Publish all receipts
 */
Meteor.publish('receipts', function () {
  return Receipts.find();
});

// server
// Meteor.publish("repData", function () {
//   if(){
// 	  var rep = Receipts.find({_id:})
// 	  if (this.userId) {
// 	    return Meteor.users.find({_id: this.userId},
// 	                             {fields: {'other': 1, 'things': 1}});
// 	  } else {
// 	    this.ready();
// 	  }
// 	}
// });