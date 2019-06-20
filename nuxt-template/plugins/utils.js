/**
 * 对象转换参数字符串
 * @param data
 * @param alwaysTrans 空值是否保持转换
 * @returns {string}
 */
export function parameterString(data, alwaysTrans = false) {
  let parameterList = [];

  for (var key in data) {
    if (!data[key] && !alwaysTrans)
      continue;
    parameterList.push(`${key}=${data[key]}`)
  }

  return parameterList.join('&')
}


/**
 * 补零
 * @param num
 * @returns {*}
 */
function fullZone(num) {
  if (num < 10)
    return '0' + num
  return num;
}

export function dateToString(date = new Date, format = 'yyyy-MM-dd') {
  var yyyy = date.getFullYear(),
    MM = fullZone(date.getMonth() + 1),
    dd = fullZone(date.getDate()),
    HH = fullZone(date.getHours()),
    mm = fullZone(date.getMinutes()),
    ss = fullZone(date.getSeconds());

  return format.replace('yyyy', yyyy).replace('MM', MM).replace('dd', dd).replace('HH', HH).replace('mm', mm).replace('ss', ss);
}


// export function spuTypeSide(item) {
//   item.sort(compare('showIndex'))
//   let pages = [];
//
//   return pages
// }


/**
 * 生成uuid
 * @param
 * @returns {*}
 */
export function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

/**
 * 标签替换
 * @param template
 * @returns {string|XML}
 */
export function replaceVarToPrint(template) {
  return template.replace(/\<var/g, '<print').replace(/var\>/g, 'print>')
}

/**
 * base64 转 formData
 * @param base64
 * @returns {*}
 */
export function base64ToFormData(base64) {
  let sliceSize = 512;

  let [info, data] = base64.split(',')
  let [type0, type] = info.match(/\/(.+)\;/)

  var byteCharacters = atob(data);
  var byteArrays = [];


  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var file = new File(byteArrays, 'uploadImage.' + type, {type});

  let formData = new FormData();
  formData.append('img', file);
  return formData;
}
