var hooksObject = {
	  onSuccess: function(formType, result) {
	  	//console("onSuccess "+JSON.stringify(formType)+" | "+JSON.stringify(result));
	  	$('#receiptBuildForm').closeModal();
	  	Materialize.toast('<i class="green-text mdi-action-thumb-up" style="margin-right:8px;"></i> Receipt Submitted', 4000);
	  },
}
AutoForm.hooks({
  buildReceipt: hooksObject
});