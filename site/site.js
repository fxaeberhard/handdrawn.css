/**
 *
 */
jQuery(function($) {

    var tt = $('<div id="tooltip" class="hd-onborder"><textarea></textarea></div>');
    $(document.body).append(tt);

    var icons = ["arrow-down", "arrow-left", "arrow-right", "arrow-up", "balance-scale", "ban", "bar-chart", "barcode", "bars", "battery-empty", "battery-full", "battery-half", "battery-quarter", "beer", "behance", "bell", "bicycle", "birthday-cake", "bolt", "bomb", "book", "bookmark-o", "briefcase", "bug", "bullseye", "calculator", "code-fork", "calendar", "caret-down", "caret-left", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "caret-up", "check", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "circle-o", "clipboard", "clone", "cloud", "cloud-remove", "cloud-sync", "cloud-upload", "code", "coffee", "cog", "cogs", "comment", "comments", "compass", "compress", "cutlery", "dashboard", "database", "delicious", "desktop", "download", "dribble", "edit", "eject", "envelope", "euro", "exchange", "expand", "eye", "eyedropper", "facebook", "female", "file-ai-o", "file-archive-o", "file-css-o", "file-doc-o", "file-eps-o", "file-gif-o", "file-html-o", "file-jpg-o", "file-js-o", "file-minus", "file-o", "file-pdf-o", "file-php-o", "file-png-o", "file-psd-o", "files-o", "file-text-o", "file-xls-o", "film", "filter", "fire", "flag", "flask", "floppy-o", "folder-lock", "folder-minus", "folder-plus", "folder-remove", "font", "frown-o", "futbol-o", "gamepad", "gem", "github", "glass", "globe", "google-plus", "graduation-cap", "hdd-o", "headphones", "heart", "home", "hourglass-half", "industry", "info-circle", "info-circle-o", "instagram", "jpy", "key", "keyboard", "leaf", "life-ring", "lightbulb-o", "line-chart", "link", "linkedin", "list", "location-arrow", "lock", "magic", "magnet", "male", "map", "map-marker", "map-o", "map-signs", "mars", "microphone", "minus", "minus-circle", "minus-square-o", "money", "moon-o", "music", "paint-brush", "paper-plane", "paragraph", "pause", "pencil", "pencil-22 ", "pencil-square-o", "phone", "picture-o", "pie-chart", "pinterest", "play", "plus", "plus-circle-o", "plus-square-o", "power-off", "question", "question-circle", "quote-right", "random", "refresh", "repeat", "rss", "scissors", "search", "search-minus", "search-plus", "share-alt", "shopping-bag", "shopping-cart", "sign-in", "sign-out", "sitemap", "skype", "sliders", "smile-o", "sort", "space-shuttle", "square-o", "star-half", "star-o", "step-backward", "step-forward", "suitcase", "sun-o", "tag", "television", "terminal", "th", "th-large", "thumb-down", "thumbs-o-up", "thumb-tack", "ticket", "times", "times-circle", "times-square", "tint", "trash", "tree", "trophy", "truck", "twitter", "umbrella", "undo", "unlock", "usb", "usd", "user", "user-minus", "user-plus", "users", "user-star", "venus", "video-camera", "vimeo", "volume-diabled", "volume-down", "volume-down-2", "volume-off", "volume-up", "warning", "weather", "webcam", "wifi", "windows", "wrench", "anchor", "android", "apple", "archive", "arrow-alt"];

    icons.forEach(function(icon) {
        $('#icons > div').first().append('<div class="hd-border"><i class="icon-' + icon + '"></i><p>' + icon + '</div>');
    });

    var timer;
    $('#samples > div > div, #icons > div > div').mouseenter(function() {
            $('#samples >div > .hover, #icons > div > .hover').removeClass('hover');
            $(this).addClass('hover');
            timer && clearTimeout(timer);

            tt.show().show().offset({
                    // left: $(this).offset().left,
                    left: Math.min($(this).offset().left,
                        $('#samples h2').offset().left + $('#samples').outerWidth() - 380),
                    top: $(this).offset().top + $(this).outerHeight()
                })
                .find('textarea').val($(this).html().replace(/          /g, '').trim());

            var textarea = tt.find('textarea')
            textarea.css('height', '1px');
            textarea.css('height', textarea[0].scrollHeight);
        })
        .mouseleave(function() {
            timer = setTimeout(hide, 100);
        });

    function hide() {
        $('#samples >div > .hover, #icons > div > .hover').removeClass('hover');
        tt.hide();
    }
    tt.mouseenter(function() {
            timer && clearTimeout(timer);
        }).mouseleave(function() {
            timer = setTimeout(hide, 100);
        })
        .find('textarea').click(function() {
            $(this).focus().select();
        });

    $('#gettingstarted input').click(function() {
        $(this).focus().select();
    });
});
