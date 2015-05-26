//renderemail
SSR.compileTemplate('receiptEmail', Assets.getText('receiptEmail.html'));
Template.receiptEmail.helpers({
  emailedGuaranteesArray:function(emailedGuarantees){
    var out='';
    var row='';
    for(x=0;x<emailedGuarantees.length;x++){
row += '<tr>'+
  '<td style="box-sizing: border-box; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">'+
    '<h4 style="color: #000; font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; font-weight: 500; line-height: 1.4; font-size: 14px; padding-bottom: 0; margin: 0;"><img src="https://s3.amazonaws.com/tandgrealguarantees/emails/img/checkmark.gif" width="25" height="25"  style="-ms-interpolation-mode: bicubic; max-width: 25px; height: 25px; display: inline-block; width: auto; float: left; margin: 0 5px 0 auto;" align="left" />'+emailedGuarantees[x].title+'</h4>'+
    '<h5 style="font-size: 12px; padding-bottom: 0; margin: 0 30px 0.8em;">'+emailedGuarantees[x].dek+'</h5>'+
    '<div style="font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; font-size: 11px; font-weight: normal; margin: 0 30px 0.8em;">'+emailedGuarantees[x].body+'</div>'+
  '</td>'+
'</tr>';
    }
    return row; 
  },
  pledge:function(){
    return Pledges.find();
  },
  prettyRep: function(){
    return Meteor.user(this.userId).profile.name;
  },
  getTitle:function(){
    return orion.dictionary.get('email.title', 'Thornton and Grooms Real Guarantees');
  },
  getPreview:function(){
    return orion.dictionary.get('email.preview', '');
  },
  getPledgeText: function(){
    return orion.dictionary.get('pledge.text', 'No pledge text');
  },
  getEmailFooter: function(){
    return orion.dictionary.get('pledge.footer', 'No pledge footer');
  },
  getDisclaimers: function(){
    return orion.dictionary.get('site.disclaimers', 'No disclaimers');
  }
});

