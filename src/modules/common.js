
const tool = {
  //获取 地址栏参数id
  getUrlParam(value) {
    var url = decodeURI(window.location); //?id="123456"&Name="bicycle";
    //微信打开时，匹配那一串为空
    let oldLength = url.length;
    url = url.replace(/[&]*nsukey=[0-9a-zA-Z%]+/, "");
    url = url.replace(/[&]*isappinstalled=[0-9a-zA-Z]+/, "");
    url = url.replace(/[&]*from=[0-9a-zA-Z]+/, "");
    url = url.replace("/?#", "/#");
    url = url.replace(/[\?]$/, "");
    if (oldLength - url.length > 10) {
      window.location.href = url;
    }
    var object = {};
    if (url.indexOf("?") != -1) {
      //url中存在问号，也就说有参数。
      var str = url.split("?")[1];
      var strs = str.split("&"); //将得到的参数分隔成数组[id="123456",Name="bicycle"];
      for (let i = 0; i < strs.length; i++) {
        object[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }
    return object[value];
  },
  // 设置用户信息
  setStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  // 获取用户信息
  getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  // 获取用户token
  delStorage(key) {
    return localStorage.removeItem(key);
  },
  
  
}
export default tool;