import Mock from 'mockjs';

let data = Mock.mock("/mock",{  
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
	"userinfo|10":[{   			//生成四个如下格式的数据
        "id|+1":1, 						//数字从1开始，后续依次加1
        "img":"@Image('100x100','@color','@cname')",
		    "title":"@cname",			//名字为随机中文名
        "total|10-80":25, 			//年龄是18-28之间的随机数
        "learned|10-80":10,
        "studyPercentage|1-100":55,
        "type":"@cname",
        "isFinished|0-1":1
	}]
})

export default data;