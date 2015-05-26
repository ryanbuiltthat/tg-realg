if(Meteor.isClient){
// Fullpagejs options
fpOptions = {
    menu: false,
    navigation: false,
    navigationPosition: 'right',
    showActiveTooltips: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '.collapsible-body, .pledge',
    scrollOverflow: true,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 3,
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,
    controlArrows: true,
    verticalCentered: true,
    resize : true,
    paddingTop: '0em',
    paddingBottom: '0px',
    fixedElements: '.drawer',
    sectionSelector: '.fpsection',
    slideSelector: '.fpslide',
    afterRender: function(){
        //Dropdowns init
        $('.collapsible').collapsible({
        accordion : false
        });
        $('.modal-trigger').leanModal();
        //$('.drawer').show();
        // Get skrollr moving....
        var s = skrollr.init({
            forceHeight: false,
            mobileDeceleration: 0,
            mobileCheck: function(){
                return false;
            },
            render: function(data) {
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });
        // Get checkmarks init...
        if(Meteor.userId){
            checkmarks();
        }

        //$('.modal-trigger').leanModal();
    },
    afterResize: function(){
        $.fn.fullpage.reBuild();
    }
};
}