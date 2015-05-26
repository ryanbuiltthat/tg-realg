Template.viewReceiptBtn.events({
  'click #viewReceiptBtn': function (event, template) {
    Router.go('/receipt/'+this._id);
    event.preventDefault();
  }
});