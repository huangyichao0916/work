(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[13],{122:function(e,a,t){},123:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var c=t(87),r=t(0),n=t.n(r),i=(t(122),function(e){var a=e.img,t=e.lessonName,c=e.teacherName,r=e.teacherDesc,i=e.month,m=e.day,s=e.price,l=e.oldprice,o=e.isPurchased,p=e.id,u=e.onHandleJoinCamp;return n.a.createElement("div",{className:"practiceCamp-item"},n.a.createElement("div",{className:"practiceCamp-item-img"},n.a.createElement("img",{src:a,alt:"\u56fe\u7247\u4e0d\u89c1\u4e86"})),n.a.createElement("div",{className:"practiceCamp-item-detail"},n.a.createElement("div",{className:"practiceCamp-item-name"},t),n.a.createElement("div",{className:"practiceCamp-item-teacher"},n.a.createElement("div",{className:"practiceCamp-item-teacher-name"},c),n.a.createElement("div",{className:"practiceCamp-item-teacher-desc"},r)),n.a.createElement("div",{className:"practiceCamp-item-time"},"\u6700\u8fd1\u5f00\u8425\uff1a",i,"\u6708",m,"\u65e5"),n.a.createElement("div",{className:"price-and-join"},n.a.createElement("div",{className:"practiceCamp-item-price"},"\uffe5",s),n.a.createElement("div",{className:"practiceCamp-item-oldprice"},"\uffe5",l),!o&&n.a.createElement("button",{onClick:function(){u(s,p,{lessonName:t,teacherName:c,teacherDesc:r})}},"\u7acb\u5373\u62a5\u540d"),o&&n.a.createElement("button",{className:"hasBeenPurchased"},"\u5df2\u62a5\u540d"))))}),m=(t(123),t(14)),s=t.n(m),l=t(26),o=(t.n(l).a.mock("mock/course/practiceCamp",{"practiceCamps|29":[{"id|+1":0,img:"@Image('82x108.5','@color','@cname')",title:"@ctitle",name:"@cname",desc:"@csentence","month|1-12":1,"day|1-30":10,"price|1000-2000":1888,"oldprice|2000-3000":2888,isPurchased:!1,itemType:"practiceCamp"}]}),t(22)),p=t(23),u=t(89);a.default=Object(o.b)((function(e){return{practiceCampDataSource:e.getIn(["practiceCampDataSource"]).toJS()}}),(function(e){return{loadPracticeCampData:function(a){e(Object(p.c)(a))},onHandleJoinCamp:function(a,t,c){e(Object(p.f)(a,t,c))}}}))((function(e){var a=e.practiceCampDataSource,t=e.loadPracticeCampData,m=e.onHandleJoinCamp;Object(r.useEffect)((function(){a.length>0||s.a.get("mock/course/practiceCamp").then((function(e){return e.data.practiceCamps})).then((function(e){t(e)}))}),[]);var l=Object(r.useState)(null),o=Object(c.a)(l,2),p=(o[0],o[1]);Object(r.useEffect)((function(){var e=new u.a(".practiceCamp-wrapper",{scrollX:!1,click:!0,scrollY:!0});p(e)}),[]);var d=a.map((function(e,a){var t=e.img,c=e.title,r=e.name,s=e.desc,l=e.month,o=e.day,p=e.price,u=e.oldprice,d=e.isPurchased;return n.a.createElement(i,{img:t,id:a,lessonName:c,teacherName:r,teacherDesc:s,month:l,day:o,price:p,oldprice:u,isPurchased:d,key:a,onHandleJoinCamp:m})}));return n.a.createElement("div",{className:"practiceCamp-wrapper"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:"/imgs/discoverSwiper05.jpg",alt:""})),n.a.createElement("div",{className:"practiceCampCamp-item-wrapper"},n.a.createElement("div",{className:"practiceCamp-title"},n.a.createElement("div",{className:"practiceCamp-main-title"},"\u8bad\u7ec3\u8425"),n.a.createElement("div",{className:"go-my-classroom"},"\u53bb\u6211\u7684\u6559\u5ba4\u5b66\u4e60")),d)))}))},87:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(25);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],c=!0,r=!1,n=void 0;try{for(var i,m=e[Symbol.iterator]();!(c=(i=m.next()).done)&&(t.push(i.value),!a||t.length!==a);c=!0);}catch(s){r=!0,n=s}finally{try{c||null==m.return||m.return()}finally{if(r)throw n}}return t}}(e,a)||Object(c.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=13.788975f8.chunk.js.map