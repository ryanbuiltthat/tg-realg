Meteor.methods({
  // process receipt build
   procReceipt: function (doc) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    check(doc.customerName, String);
    check(doc.customerEmail, String);
    check(doc.guaranteesSelected, String);
    var data = getGauarantees(doc.guaranteesSelected);
    id = Receipts.insert(doc);
    //return Receipts.insert(doc)
      var html = SSR.render("receiptEmail", {emailedGuarantees: data,customer: doc.customerName,dId: id});
      Email.send({
        from: "Thornton & Grooms <noreply@realguarantees.com>",
        to: doc.customerEmail,
        subject: "Your Thornton & Grooms Real Guarantees",
        html: html
      }); 
      return true;    
  },
  resetUser: function(user){
    this.unblock();
    Accounts.emailTemplates.siteName = "T&G Real Guarantees";
    Accounts.emailTemplates.from = "Administrator <noreply@realguarantees.com>";
    Accounts.emailTemplates.resetPassword.subject = function (user) {
        return user.profile.name + ", let\'s reset your password!";
    };
    Accounts.emailTemplates.resetPassword.text = function (user, url) {
      //url = url.replace('#/', '');
       return "You have been selected to participate in building a better future!"
         + " To activate your account, simply click the link below:\n\n"
         + url;
    };
    Accounts.sendResetPasswordEmail(user._id);
  },
  removeUser: function(userId){
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    check(userId, String);
    Meteor.users.remove(userId);
  },
});
// retreive guarantees that are a part of a receipt
getGauarantees = function(selectedGuaranteesString){
  var selectedGuaranteesArray = selectedGuaranteesString.split(',');
  var guaranteeMetaArray=[];
  for(x = 0; x<selectedGuaranteesArray.length;x++){
    var guarantee = Guarantees.findOne({_id: selectedGuaranteesArray[x]});
    guaranteeMetaArray.push(guarantee);
  }
  return guaranteeMetaArray;
}


