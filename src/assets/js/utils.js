/**
 * @desc 获取url参数
 * @param {string} [name] - 参数名
 * @return url参数值 
 */
export const getQueryString = function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}