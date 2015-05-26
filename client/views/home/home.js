/*
*	Home events
*/
Template.home.events({
	'click .scroll-arrow': function(event){
		$.fn.fullpage.moveSectionDown();
         event.preventDefault();
	},
    'change .realcheck': function(event){
        tid = this._id.toString();
        if($.inArray(tid, selections)!==-1){
            selections.splice(selections.indexOf(tid), 1);
        }else{
            selections.push(tid);
        }
        $("input[name=guaranteesSelected]").val(selections);
    },
    'click #gotoAdmin':function(event, template){
        Tracker.autorun(function(){
            $('.drawer').hide();
            Router.go('admin');
        });
        event.preventDefault();
        
    },
    'click #logoutUser': function(event){
        Meteor.logout();
        Router.go('/');
        event.preventDefault();
    },
    'click .modal-close':function(event){
        //open modal build receipt
        $('#receiptBuildForm').closeModal();
        event.preventDefault();
    },
});



/*
*	Callbacks
*/
//var fpRender = false;
Template.home.onCreated(function(){
	this.autorun(function () {
    var router = Router.current();
  });


});
Template.home.onRendered(function(){
    // Check if coming from thornandgrooms.com
    var refer = Router.current().params.query.ref;
    if(refer && refer === "mainste"){
    Materialize.toast('<span>Return to </span> <a class="indigo-text text-lighten-2" href="http://thorntonandgrooms.com" style="margin-left:1rem;">Thornton &amp; Grooms<a> <i class="blue-grey-text text-lighten-4 tiny mdi-action-open-in-new right"></i>', 960000)
    }
    // Connection monitor
    Tracker.autorun(function () {
        var stat;
        if (Meteor.status().status === "connected") {
            stat = 'lime'
            $('.status-wrapper .status-text').text('Connected!');
            $('.status-wrapper').removeClass('connecting disconnected').addClass('connected');
            $('.status-wrapper .status-icon').html('<i class="mdi-device-signal-wifi-4-bar"></i>');
            $('.status-wrapper').delay(1500).fadeOut(500);
            
        }
        else if (Meteor.status().status === "connecting") {
            stat = 'yellow'
            $('.status-wrapper').removeClass( 'disconnected connected' ).addClass( 'connecting', function(){
                $('.status-wrapper .status-text').text('Connecting...');
            });
            $(".status-wrapper .status-icon").html('<i class="fa fa-refresh fa-spin"></i>').fadeIn(500);
            
        }
        else {
            stat = 'red';
            $('.status-wrapper').removeClass('connected connecting').addClass('disconnected').show().fadeIn(250,function(){
                $('.status-wrapper .status-text').text('Not Connnected');
            });
            $(".status-wrapper .status-icon").html('<i class="mdi-device-signal-wifi-off"></i>').delay(350).fadeIn(500);
        }
        Session.set('status',stat);
    });
        // If user is logged in, let's test out location info...
        if(Meteor.user){
            //console.log("loc: "+Geolocation.latLng());
        }
        $('#fp-wrapper').fullpage(fpOptions);
});
Template.home.onDestroyed(function () {
  // deregister from some central store
  $('.drawer').show();
  $.fn.fullpage.destroy('all');
});

/*
*	Helpers
*/
Template.home.helpers({
	guarantees: function () {
		return Guarantees.find();
	},
    receipts: function(){
        return Receipts.find();
    },
	btnxpos:function(){
        // large floating button is 55.5px
        var offset = parseInt(55.5/2);
        var xpos = (($(window).width()/2)-offset);
        return xpos;

    },
    btnypos:function(){
        //var offset = parseInt(55.5/2);
        return parseInt(55.5/2);
    },
    prettyId:function(){
        return this._id.replace(/[0-9]/g, '');
    },
});