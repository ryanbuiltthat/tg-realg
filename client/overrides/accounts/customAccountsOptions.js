/**
 * Modify AdminUsersButton Schema
 * icon: for use with materialize icons
 * customClass: can be used for anything, meant for custom color scheme
 */
orion.accounts.addAdminUsersButton = function(button) {
  check(button, {
    title: String,
    icon: String,
    action: Match.Optional(String),
    customClass: String,
    route: Match.Optional(String),
    meteorMethod: Match.Optional(String),
    shouldShow: Match.Optional(Function)
  });
  orion.accounts._adminUsersButtons.push(button);
}


/**
* Remove default Edit Roles Button
*/
orion.accounts._adminUsersButtons.splice(0,1);


/**
* Add NEW Edit Roles Button
*/
orion.accounts.addAdminUsersButton({
  title: 'Edit Roles',
  icon: 'mdi-action-done-all',
  customClass: 'blue-grey-text text-darken-2',
  route: 'accounts.update.roles',
  shouldShow: function() {
    return Roles.userHasPermission(Meteor.userId(), 'accounts.update.roles');
  }
});



/**
* Add password reset button
*/
orion.accounts.addAdminUsersButton({
  title: 'Reset Password',
  icon: 'mdi-action-autorenew',
  customClass: 'blue-grey-text text-darken-2',
  meteorMethod: 'resetUser',
  shouldShow: function() {
  	// Figured if the current user can send invites,
    // they must be an admin....
    return Roles.userHasPermission(Meteor.userId(), 'accounts.invite');
  }
});

/**
* Remove User
*/
orion.accounts.addAdminUsersButton({
  title: 'Remove User',
  icon: 'mdi-action-delete',
  customClass: 'red-text text-darken-2',
  meteorMethod: 'removeUser',
  shouldShow: function() {
    // Figured if the current user can send invites,
    // they must be an admin....
    return Roles.userHasPermission(Meteor.userId(), 'accounts.invite');
  }
});