var rand_941258099 = function ($container, option) {
    option.offsetX = option.offsetX || 0;
    option.offsetY = option.offsetY || 0;
    option = option || {};
    option.limit = option.limit || 10;
    if ($container.querySelectorAll('.loveflies').length >= option.limit) return;
    option.width = option.width || $container.clientWidth;
    option.height = option.height || $container.clientHeight;
    option.duration = option.duration || 1;
    option.scaleFrom = option.scaleFrom || 0.5;
    option.scaleTo = option.scaleTo || 1.5;
    var mx = option.width/2 + option.offsetX,
        my = option.height + option.offsetY;
    var qx1 = option.width/6 + Math.ceil(option.width/2 * Math.random()) + option.offsetX,
        qy1 = Math.ceil(option.height/2 * Math.random()) + option.height/2 + option.offsetY,
        qx2 = qx1 + Math.ceil(option.width/4 * Math.random()) * (Math.random() > 0.5 ? 1 : -1) + option.offsetX,
        qy2 = Math.ceil(option.height/2 * Math.random()) + option.offsetY;
    option.path = option.path ||
        'M' + mx + ',' + my + ' Q' + qx1 + ',' + qy1 + ' ' + qx2 + ',' + qy2;
    option.type = option.type || 'text'; // 'text'|'image'
    option.content = option.content || '❤';  // text content  or image url
    option.color = option.color || '#cd0000';

    var style = '';

    var svgHtml = '\
<svg class="loveflies" style="position: absolute; bottom: 0; left: 50%; transform: translate(-50%, 0); pointer-events: none;" \
    width="' + option.width + '" height="' + option.height + '" xmlns="http://www.w3.org/2000/svg">'
    + (option.type === 'text' ?
        ('<text ' + style + ' x="0" y="0" fill="' + option.color + '">' + option.content) :
        '<image ' + style + ' x="0" y="0" width="100px" height="100px" xlink:href="' + option.content + '">') + '\
        <animateMotion path="' + option.path + '"' + (option.type === 'image' ? ' rotate="auto"' : '') + ' begin="0s" dur="' + option.duration + 's" repeatCount="1"/>\
        <animate attributeName="opacity" from="1" to="0" begin="0s" dur="' + option.duration + 's" repeatCount="1" />\
        <animateTransform attributeName="transform" begin="0s" dur="' + option.duration + 's" type="scale" \
            from="' + option.scaleFrom + '" to="' + option.scaleTo + '" repeatCount="1"/>\
    </' + option.type + '>' +
'</svg>';

    var $temp = window.document.createElement('div');
    $temp.innerHTML = svgHtml;
    var $svg = $temp.children[0];
    $container.appendChild($svg);
    window.setTimeout(function () {
        $container.removeChild($svg);
    }, option.duration * 1000);
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = rand_941258099;
    }
} else {
    window.loveflies = rand_941258099;
}
