const urls = {
  //登录
  "login": "login",
  //人员管理
  "list": "getPersonList",
  "detail": "getPersonDetail",
  "delete": "del",//列表删除
  "vet": "vet",//审核
  "update": "updatePersion",//修改
  // 二维码管理
  'getCodeData': 'getCodeData',  // 列表
  //申诉建议
  "appealList": "getShenpiList",//申诉列表
  "searchAudit": "queryshman",//查询审核人,暂时不用
  "confirmAudit": "addsh",//添加，暂时不用
  "getHeathVetDetail": "getHeathVetDetail",//详情
  "insertHeathState": "insertHeathState",//审批同意
  // 境外监督审核
  "jdpagequery": "jdpagequery",
  "addjd": "addjd"
}
export default urls;