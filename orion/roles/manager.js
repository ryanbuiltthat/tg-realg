/**
 * We will create a new role that will allow
 * not-admin users to edit guarantees
 */
ManagerRole = new Roles.Role('manager');

/**
 * We will allow users to edit the dictionary
 */
ManagerRole.allow('dictionary.update', true);

/**
 * This will make users only can edit this fields in the dictionary
 */
ManagerRole.helper('dictionary.allowedCategories', ['Site']);

/**
 * Users can see guarantees in the admin
 */
ManagerRole.allow('collection.guarantees.index', true);
ManagerRole.allow('collection.receipts.index', true);

/**
 * And we will make that the users only see their guarantees in the index
 */
// ManagerRole.helper('collection.guarantees.indexFilter', function() {
//   return { createdBy: this.userId };
// })

/**
 * Users can create guarantees
 */
ManagerRole.allow('collection.guarantees.insert', true);
ManagerRole.allow('collection.receipts.insert', true);

/**
 * Users can update guarantees
 */
// ManagerRole.allow('collection.guarantees.update', function(userId, doc, fields, modifier) {
//   return doc.createdBy === userId; // Will be allowed to edit his own guarantees
// });
ManagerRole.allow('collection.guarantees.update', true);
ManagerRole.allow('collection.receipts.update', false);
/**
 * Users can't change the createdBy attribute
 */
ManagerRole.deny('collection.guarantees.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId');
});
ManagerRole.deny('collection.receipts.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId');
});

/**
 * Users can remove guarantees
 */
// ManagerRole.allow('collection.guarantees.remove', function(userId, doc) {
//   return doc.createdBy === userId; // Will be allowed to edit his own guarantees
// });
ManagerRole.allow('collection.guarantees.remove', true);
ManagerRole.allow('collection.receipts.remove', true);

/**
 * Users can see the create post button
 */
ManagerRole.allow('collection.guarantees.showCreate', true);
ManagerRole.allow('collection.receipts.showCreate', true);

/**
 * Users can see the update post button if they created the doc
 */
// ManagerRole.allow('collection.guarantees.showUpdate', function(doc) {
//   return doc.createdBy == this.userId;
// });
ManagerRole.allow('collection.guarantees.showUpdate', true);

/**
 * Users can see the delete post button if they created the doc
 */
// ManagerRole.allow('collection.guarantees.showRemove', function(doc) {
//   return doc.createdBy == this.userId;
// });
ManagerRole.allow('collection.guarantees.showRemove', true);
ManagerRole.allow('collection.receipts.showRemove', true);

