var jQuery, $;
jQuery = $ = require('jquery')
window.jQuery = jQuery;

// Share
var Share = {
  start: function (e, op) {
    require(['jquery', 'utils/jquery.share.min']), function ($, share) {
      $(e).share(op)
    }
  }
}

// navPanel
var navPanel = {
  init: function() {
    require(['jquery', 'utils/panel'], function ($, panel){
      
      var $window = $(window),
      $body = $('body');

      $(
        '<div id="navButton">' +
          '<a href="#navPanel" class="toggle"><i class="iconfont icon-list"></i></a>' +
        '</div>'
      ).appendTo($body);

      $.fn.navList = function() {
        var $this = $(this);
          $a = $this.find('a'),
          b = [];

        $a.each(function() {

          var $this = $(this),
            indent = Math.max(0, $this.parents('li').length - 1),
            href = $this.attr('href'),
            target = $this.attr('target');

          b.push(
            '<a ' +
              'class="link depth-' + indent + '"' +
              ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
              ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
            '>' +
              '<span class="indent-' + indent + '"></span>' +
              $this.text() +
            '</a>'
          );

        });

        return b.join('');

      };

      $(
        '<div id="navPanel">' +
          '<nav>' +
            // '<a href="index.html" class="link depth-0">网站首页</a>' +
            $('#nav').navList() +
          '</nav>' +
        '</div>'
      ).appendTo($('body'))
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $('body'),
        visibleClass: 'navPanel-visible'
      });

    });
  }
}

exports.Share = Share
exports.navPanel = navPanel