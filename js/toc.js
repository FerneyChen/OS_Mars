function mashiroToc(mashiro) {
    $(document).ready(function() {
        if ($("div").hasClass("toc")) {
            var $elm = $('.toc');
            var iniTop = 500; 
            var finTop = 100; 
            var hasScrolled = $('.content').offset().top;
            if (hasScrolled > iniTop) {
                $elm.css({
                    'top': finTop
                });
            }
            $(window).scroll(function() {
                var p = $(window).scrollTop();
                if (p > iniTop - finTop) {
                    $elm.css({
                        'top': finTop
                    });
                } else {
                    $elm.css({
                        'top': iniTop - p
                    });
                }
            });
        }
    });
    if (mashiro) {
        var id = 1;
        $(".content").children("h2,h3,h4,h5,h6").each(function() {
            //var hyphenated = $(this).text().replace(/\s/g, '-');
            var hyphenated = "mashiro-" + id;
            $(this).attr('id', hyphenated);
            id++;
        });
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.content',
            headingSelector: 'h1, h2, h3, h4, h5',
            positionFixedSelector: ".toc",
            scrollEndCallback: function (e) {
               if($(document).scrollTop() >= $(document).height() - $(window).height()) {
                   window.scrollTo(window.scrollX, window.scrollY);
               }else{
                    // window.scrollTo(window.scrollX, window.scrollY - 80);
                }
            },
        });
    }
}
mashiroToc(true);
