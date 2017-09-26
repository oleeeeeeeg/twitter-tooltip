(function() {
    var root = document.getElementById('root');

    document.addEventListener('mouseup', selectHandler);
    document.addEventListener('mousedown', hideTooltip);

    function selectHandler(mouseEvent) {
        var selectedText = window.getSelection().toString();
        if (selectedText.length > 0) {
            showTooltip(selectedText, mouseEvent.x, mouseEvent.y);
        }
    }

    function showTooltip(selectedText, x, y) {
        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip-twitter';
        tooltip.innerHTML = 't';
	    tooltip.style.cssText = "left: " + x + "px;" + "top: " + y+ "px;";
        document.body.appendChild(tooltip);
        tooltip.addEventListener('mousedown', twitterHandler.bind(this, selectedText))
    }

    function twitterHandler(selectedText) {
        window.open('https://twitter.com/intent/tweet?text=' + selectedText,
            "Twitter",
            "width=800,height=600,resizable,scrollbars=yes,status=1"
        );
    }

    function hideTooltip() {
        var tooltip = document.getElementsByClassName('tooltip-twitter')[0];

        tooltip && tooltip.parentNode.removeChild(tooltip);
    }
})();