window.Placeholder = (function(jQuery) {

    const Is = {
        IE: function () { return navigator.userAgent.indexOf('Trident/') != -1 },
    };

    const $ = jQuery;

    function transformToJqueryObject(target) {
        return (target instanceof jQuery) ? target : $(target);
    }

    function hasPlaceholderAttribute(target) {
        return !!target.attr('placeholder');
    }

    return function _Placeholder(target) {

        // If IE run
        if (!Is.IE()) return false;

        // If jQuery Object?
        const $target = transformToJqueryObject(target);

        // have placeholder attribute?
        const hasPlaceholder = hasPlaceholderAttribute($target);

        // if false return false;
        if (!hasPlaceholder) {
            return false;
        }

        // if true add class placehoder-on
        $target.addClass('placeholder-on');

        // If input some data remove class
        $target.on('input', () => {

            ($target.val().length > 0)
                ? $target.removeClass('placeholder-on')
                : $target.addClass('placeholder-on');
        });
    };

})(jQuery);
