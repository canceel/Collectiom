//服务器IP

//var serverIp = "http://192.168.1.173:8080/";

var serverIp = "http://183.66.64.39:8118/";


//请求服务器地址 测试时可将地址改为测试地址

var serverAddress = "http:/183.66.64.39:8118//ZCServer/";

//var serverAddress = "http://192.168.1.173:8080/ZCServer/";

//服务器IP

//var serverIp = "http://192.168.1.135:8080/";

//var serverIp = "http://183.66.64.39:8118/";


//var serverIp = "http://183.66.64.39:8118/";

//系统信息
var systemAddress = serverAddress + "system.do?";
//更新地址
var updateIOSAddress = "http://yhygx.yonghui.cn/zcdown.html";
var updateAndroidAddress = "http://yhygx.yonghui.cn/zcdown.html";
//直播地址
var liveStreamAddress = "rtmp://video-center.alivecdn.com/ZCloud/";
//直播聊天
var liveChatAddress = serverAddress + "liveChat.do?";
//推流码
var liveCode = "?vhost=live-test.fzggyp.com";
//头像地址
var avatarAddress = serverIp + "avatar/";
//图片地址
var imageAddress = serverIp + "images/";
//PPT图片地址
var pptAddress = serverIp + "pptImages/ppt";
//视频地址
var videoAddress = serverIp + "video/";
//音频地址
var audioAddress = serverIp + "audio/";
//约定秘钥
var token = "TIANCHENGSOFT";
//登录地址
var loginAddress = serverAddress + "login.do?";
//首页信息
var indexAddress = serverAddress + "index.do?";
//轮播图
var bannerAddress = serverAddress + "banner.do?";
//积分流水
var scorebillAddress = serverAddress + "scoreBill.do?";
//新闻列表
var newsAddress = serverAddress + "news.do?";
//我的勋章
var medalAddress = serverAddress + "medal.do?";
//我的学位
var degreeAdress = serverAddress + "degress.do?";
//个人中心
var perCenterAddress = serverAddress + "perCenter.do?";
//我的收藏
var collectionAddress = serverAddress + "collection.do?";
//历史纪录
var historyAddress = serverAddress + "history.do?";
//全部圈文
var comcontentAddress = serverAddress + "comcontent.do?";
//课程考核记录
var testRecordAddress = serverAddress + "testRecord.do?";
//特殊课程考核
var externalExamineAddress = serverAddress + "externalRecord.do?";
//我的故事考核
var storyExamineAddress = serverAddress + "storyRecord.do?";
//课程分类
var courseSortAddress = serverAddress + "courseSort.do?";
//课程信息
var courseAddress = serverAddress + "course.do?";
//课节列表
var lessonAddress = serverAddress + "lesson.do?";
//课节评论
var commentAddress = serverAddress + "comment.do?";
//热门课程&好课榜
var hotCourseAddress = serverAddress + "courseHot.do?";
//联盟分类 
var uninAddress = serverAddress + "union.do?";
//积分商城
var shopAddress = serverAddress + "shop.do?";
//外部分类
var externalSortAddress = serverAddress + "externalSort.do?";
//外部课程内容
var externalAddress = serverAddress + "external.do?";
//兑换记录
var forAddress = serverAddress + "for.do?";
//直播记录
var liveAddress = serverAddress + "live.do?";
//签到记录
var signsAddress = serverAddress + "sign.do?";
//我们的故事
var storyAddress = serverAddress + "story.do?";
//直播预告
var trailerAddress = serverAddress + "trailer.do?";
//内测提交
var feedBackAddress = serverAddress + "feedBack.do?";
//成长树
var treeAddress = serverAddress + "tree.do?";
//重置密码
var rePassword = serverAddress + "rePassword.do?";
//获取积分，增加获取次数
var addScoreAddress = serverAddress + "perScoreCount.do?";
//搜索课程
var searchAddress = serverAddress + "searchCourse.do?";
//进入游戏积分
var enterGameAddress = serverAddress + "game.do?";
//弹出框 msg:信息 time:时间(毫秒)
function toast(msg, time){
	mui.toast(msg,{ duration:time, type:'div' });
}



//生成加密内容
function getSignature(data){
	var path = "";
	for(var s in data){
		path += "&" + s + "=" + data[s];
	}
	console.log("加密内容:" + path);
	return path;
}

//获取时间戳
function getTimestamp(){
	return new Date().getTime();
}

function getMillisecondToDate(msd) {
    var time = parseFloat(msd) /1000;
    if (null!= time &&""!= time) {
        if (time >60&& time <60*60) {
            time = parseInt(time /60.0) +":"+ parseInt((parseFloat(time /60.0) -
            parseInt(time /60.0)) *60) +"";
        }else if (time >=60*60&& time <60*60*24) {
            time = parseInt(time /3600.0) +":"+ parseInt((parseFloat(time /3600.0) -
            parseInt(time /3600.0)) *60) +":"+
            parseInt((parseFloat((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60) -
            parseInt((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60)) *60) +"秒";
        }else {
            time = parseInt(time) +"";
        }
    }else{
        time = "00:00:00";
    }
    return time;
}

//时间戳转换为多久以前
function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}