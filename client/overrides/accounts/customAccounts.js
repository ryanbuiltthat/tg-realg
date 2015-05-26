// Not exactly sure why but when replacing a template with Orion, we need to use the ReactiveTemplates
// property to hook into callbacks.
ReactiveTemplates.onRendered('accounts.index', function() {
  var dropdownInit = function(){
    return $(".user-dropdown-btn").dropdown({ hover: true});
  };
  // When initializing the dropdown, only the last user was set...adding a timeout fixed this
  Meteor.setTimeout(function(){
    $(".user-dropdown-btn").dropdown({ hover: true});
    $('.tooltipped').tooltip({});
  },500);
})

ReactiveTemplates.events('accounts.index', {
  // 'click .user-btn-action': function (event, template) {
  //   var button = this;
  //   var userId = $(event.currentTarget).attr('data-user');
  //   var user = Meteor.users.findOne(userId);
  //   if (button.meteorMethod) {
  //     Meteor.call(button.meteorMethod, user);
  //   } else if (button.route) {
  //     Router.go(button.route, user);
  //   }
  //   //console.log("clicked!")
  // },

  'click .user-mini-action': function(event, template){
    var button = this;
    var userId = $(event.currentTarget).attr('data-user');
    var user = Meteor.users.findOne(userId);
    //var action = $(event.currentTarget).attr('data-action');
    var method = button.meteorMethod;
    var options = {};
    if (button.route) {
      Router.go(button.route, user);
    }
    if(button.meteorMethod){
    switch(method){
      case "removeUser":
        options = {
          heading: 'Confirm User Removal',
          body: 'Remove <strong>'+user.profile.name+'</strong> from the system?',
          icon: 'mdi-alert-warning',
          button: {
            label: 'Confirm',
            color: 'red-text text-darken-2',
            action: method
          },
          //modal: '#'+method+'Modal',
          meta:{
            userid: userId
          }
        };
        break;
        case "resetUser":
        options = {
          heading: 'Confirm Password Reset',
          body: 'Reset <strong>'+user.profile.name+'&apos;s</strong> password?',
          icon: 'mdi-alert-warning',
          button: {
            label: 'Confirm',
            color: 'red-text text-darken-2',
            action: method
          },
          //modal: '#'+method+'Modal',
          meta:{
            userid: userId
          }
        };
          // do nothing at the moment
        break;
      
      };
      var userActionConfirmModal = new Telstar(options);
      userActionConfirmModal._buildModal();
    }//end if method
      
      
      return false;
    },
    // At some point I need to refactor this better. Use a data attribute
    // and pass the mthod through so we can use just one event map
    'click .removeUser-btn': function(event, template){
      var userId = $(event.currentTarget).attr('data-user');
      Meteor.call('removeUser', userId);
      $('#userActionModal').closeModal();
      return false;

    },
    'click .resetUser-btn': function(event, template){
      var userId = $(event.currentTarget).attr('data-user');
      var user = Meteor.users.findOne(userId);
      Meteor.call('resetUser', user);
      $('#userActionModal').closeModal();
      return false;

    }
});

var Telstar = function(data){
  this.heading = data.heading;
  this.body = data.body;
  this.btnData = data.button;
  this.icon = data.icon;
  this.button = '#userActionModal .modal-custom-action';
  this.userId = data.meta.userid;
}
Telstar.prototype._buildModal = function(){
  $('#userActionModal h4').text(this.heading);
  $('#userActionModal i').addClass(this.icon+' '+this.btnData.color);
  $('#userActionModal p').html(this.body);
  if(this.userId){
    $(this.button).attr('data-user', this.userId);
  }
  $(this.button).addClass(' '+this.btnData.color+' '+this.btnData.action+'-btn');
  $(this.button).text(this.btnData.label);
  $('#userActionModal').openModal({
    opacity: .7,
    complete: function(){
      //empty 
    }
  });
}



/*
ReactiveTemplates.events('accounts.index', {
  'click .user-btn-action': function (event, template) {
    var button = this;
    var userId = $(event.currentTarget).attr('data-user');
    var user = Meteor.users.findOne(userId);
    if (button.meteorMethod) {
      Meteor.call(button.meteorMethod, user);
    } else if (button.route) {
      Router.go(button.route, user);
    }
  }
});
ReactiveTemplates.helpers('accounts.update.roles', {
  user: function() {
    var userId = Router.current().params._id;
    return Meteor.users.findOne(userId);
  },
  roles: function() {
    return _.keys(Roles._roles);
  },
  hasRole: function() {
    var userId = Router.current().params._id;
    var role = String(this);
    return Roles.userHasRole(userId, role);
  }
});


*/


// Template.customAccounts.helpers({
//   users: function () {
//     return Meteor.users.find({}, { sort: { createdAt: -1 } });
//   },
//   buttons: function() {
//     var self = this;
//     return _.filter(orion.accounts._adminUsersButtons, function(value, key, list){
//       if (typeof value.shouldShow != 'function') {
//         return true;
//       }
//       return value.shouldShow(self);
//     });
//   }
// });

// Template.customAccounts.events({
//   'click .user-btn-action': function (event, template) {
//     var button = this;
//     var userId = $(event.currentTarget).attr('data-user');
//     var user = Meteor.users.findOne(userId);
//     if (button.meteorMethod) {
//       Meteor.call(button.meteorMethod, user);
//     } else if (button.route) {
//       Router.go(button.route, user);
//     }
//   }
// });
// Template.customAccounts.onRendered(function() {
//   var userId = Router.current().params._id;
//   this.subscribe('adminAccountsUpdateRoles', userId);
// })
// Template.customAccounts.helpers({
//   user: function() {
//     var userId = Router.current().params._id;
//     return Meteor.users.findOne(userId);
//   },
//   roles: function() {
//     return _.keys(Roles._roles);
//   },
//   hasRole: function() {
//     var userId = Router.current().params._id;
//     var role = String(this);
//     return Roles.userHasRole(userId, role);
//   }
// });

// Template.customAccounts.events({
//   'submit form.roles': function (event, template) {
//     var userId = Router.current().params._id;
//     var roles = [];
//     template.$('input[role]').each(function(index, val) {
//        var role = $(this).attr('role');
//        if ($(this).is(':checked')) {
//         roles.push(role);
//        }
//     });
//     Meteor.call('updateRoles', userId, roles, function (error, result) {
//       if (error) {
//         alert(error.reason) 
//       } else {
//         Router.go('accounts.index');
//       }
//     });
//     return false;
//   }
// });
Template.customAccounts.replaces("orionMaterializeAccountsIndex");