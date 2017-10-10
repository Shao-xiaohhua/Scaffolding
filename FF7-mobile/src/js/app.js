require('framework7/dist/js/framework7');
var $$ = Dom7;
var myApp;
var framework = {
  init: function(e) {
    if (myApp) {
      return myApp;
    } else {
      return new Framework7(e);
    }
  }
};
var set = {
  init: function() {
    myApp = framework.init({
      pushState: true,
    });
    // Add view
    var mainView = myApp.addView('.view-main', {
      // Because we use fixed-through navbar we can enable dynamic navbar
	  dynamicNavbar: true,
	  animatePages:true,
	  swipeBackPageAnimateOpacity:false
    });
    // var e = $$('.toolbar .toolbar-item');
    // var iconFull = ['icon-interactive_fill', 'icon-star_fill', 'icon-group_fill', 'icon-people_fill'],
    //   iconEmpty = [ 'icon-interactive', 'icon-star', 'icon-group', 'icon-people'];
    // e.each(function(i) {
    //   e.eq(i).touchstart(function() {
    //     var els = e.parent().find('i');
    //     for (var j = 0; j < els.length; j++) {
    //       $$(els[j]).removeClass(iconFull[j]).addClass(iconEmpty[j]);
    //     }
    //     e.removeClass('active');
    //     $$(this).addClass('active').find('i').removeClass(iconEmpty[i]).addClass(iconFull[i]);
    //   })
    // });

    myApp.onPageInit('home', function(page) {
    });
  }
};

exports.set = set;
exports.framework = framework;
// exports.chart = chart;