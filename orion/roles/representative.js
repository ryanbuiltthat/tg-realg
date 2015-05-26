/**
 * We will create a new role that will allow
 * not-admin users to edit receipts
 */
RepRole = new Roles.Role('representative');

/**
 * We will allow users to edit the dictionary
 */
RepRole.allow('dictionary.update', false);

/**
 * This will make users only can edit this fields in the dictionary
 */
RepRole.helper('dictionary.allowedCategories', ['public']);

/**
 * Users can see receipts in the admin
 */
RepRole.allow('collection.receipts.index', true);

/**
 * And we will make that the users only see their receipts in the index
 */
RepRole.helper('collection.receipts.indexFilter', function() {
  return { createdBy: this.userId };
})

/**
 * Users can create receipts
 */
RepRole.allow('collection.receipts.insert', false);

/**
 * Users can update receipts
 */
RepRole.allow('collection.receipts.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId; // Will be allowed to edit his own receipts
});

/**
 * Users can't change the createdBy attribute
 */
RepRole.deny('collection.receipts.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId');
});

/**
 * Users can remove receipts
 */
RepRole.allow('collection.receipts.remove', function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own receipts
});

/**
 * Users can see the create post button
 */
RepRole.allow('collection.receipts.showCreate', true);

/**
 * Users can see the update post button if they created the doc
 */
RepRole.allow('collection.receipts.showUpdate', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users can see the delete post button if they created the doc
 */
RepRole.allow('collection.receipts.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});

