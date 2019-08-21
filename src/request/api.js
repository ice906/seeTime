const HOST = "http://localhost:8080";
//启动页
const GET_STARTUP_IMAGE = "/imageController/getStartupImage";
 
//节气
const GET_TOPIC = "/ajax/home";
// const GET_TOPIC = "/userController/getTopic";

//点击节气详情 
const GET_TOPIC_INFO = "/userController/getTopicInfo";

//通知中心
const GET_NOTICE_COMMENT_PAGE = "/userController/getNoticeCommentPage";

//设置推送开光
const SET_PUSH_STATE = "/userController/setPushState";

//获取登录验证码
const GET_LOGIN_CODE = "/userController/getLoginCode";

//手机登录
const GET_LOGIN = "/userController/login";

//修改头像
const UPDATE_ICON = "/userController/updateIcon";

//完善修改资料
const UPDATE_INFO = "/userController/updateInfo";

//我的吐槽
const DEBUNK = "/userController/debunk";

//应用评分
const MARK = "/userController/mark";

//登出
const LOGOUT = "/userController/logout";


export default {
    GET_STARTUP_IMAGE,
    GET_TOPIC,
    GET_TOPIC_INFO,
    GET_NOTICE_COMMENT_PAGE,
    SET_PUSH_STATE,
    GET_LOGIN_CODE,
    GET_LOGIN,
    UPDATE_ICON,
    UPDATE_INFO,
    DEBUNK,
    MARK,
    LOGOUT,
    HOST
}