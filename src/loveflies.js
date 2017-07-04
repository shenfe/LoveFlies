/**
 * @Author: godzilla
 * @Date:   2017-07-05T01:52:56+08:00
 * @Last modified by:   godzilla
 * @Last modified time: 2017-07-05T02:37:31+08:00
 */

/**
 * @Refer: http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/
 */

var creator = function ($container, option) {
    option = option || {};
    var svgHtml = `
<svg width="200" height="400" xmlns="http://www.w3.org/2000/svg">
  <text font-size="40" x="0" y="0" fill="#cd0000">❤
    <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" rotate="auto" begin="0s" dur="2s" repeatCount="1"/>
    <animate attributeName="opacity" from="1" to="0" begin="0s" dur="2s" repeatCount="1" />
    <animateTransform attributeName="transform" begin="0s" dur="2s" type="scale" from="1" to="2" repeatCount="1"/>
  </text>
</svg>
`;
    var $temp = document.createElement('div');
    $temp.innerHTML = svgHtml;
    $container.appendChild($temp.children[0]);
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = creator;
    }
} else {
    window.loveflies = creator;
}
