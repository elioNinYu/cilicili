(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6baacb53"],{"0790":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"logo",on:{click:t.gotoHome}},[t._v("cilicili")]),n("div",{staticClass:"right"},[n("div",[n("van-icon",{attrs:{name:"search",size:"7.40vw",color:"#ccc"}})],1),t.faceImg?n("div",{staticClass:"face",on:{click:t.gotoUserInfo}},[n("img",{attrs:{src:t.faceImg,alt:"",title:"个人中心"}})]):n("div",{staticClass:"face",on:{click:t.gotoUserInfo}},[n("img",{attrs:{src:t.model.user_img||a("901e"),alt:"",title:"个人中心"}})]),n("div",[t._v("下载 App")])])])},i=[],s=a("1da1"),r=(a("96cf"),a("3ff8")),o={name:"NavBar",data:function(){return{model:{}}},props:{faceImg:{type:String}},created:function(){this.faceImg||this.getUserInfoData()},methods:{getUserInfoData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("id"),!a){e.next=12;break}return e.prev=2,e.next=5,Object(r["a"])(a);case 5:n=e.sent,t.model=n[0],e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},gotoUserInfo:function(){"/userinfo"!==this.$route.fullPath?this.$router.push("/userinfo"):this.$msg.fail("已在此页面")},gotoHome:function(){"/home"!==this.$route.fullPath&&"/"!==this.$route.fullPath?this.$router.push("/"):this.$msg.fail("已在首页啦")}}},c=o,l=(a("9197"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"56818ea8",null);e["a"]=u.exports},"0fcb":function(t,e,a){"use strict";a("de97")},"1c5c":function(t,e,a){t.exports=a.p+"img/poster.6676cb09.jpg"},"1d94":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-box"},t._l(t.listData,(function(t){return a("video-list-item",{key:t.id,attrs:{"data-item":t}})})),1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",on:{click:t.VideoItemClick}},[a("div",{staticClass:"img_box"},[a("img",{attrs:{src:"https://i0.hdslb.com/bfs/archive/e1e626649feb21b34d88059b73c6feb64333a0aa.jpg@480w_270h_1c",alt:""}}),a("div",{staticClass:"count"},[a("span",{staticClass:"play"},[a("van-icon",{attrs:{name:"play-circle-o"}}),t._v(" 172万 ")],1),a("span",{staticClass:"comment"},[a("van-icon",{attrs:{name:"comment-o"}}),t._v(" "+t._s(t.dataItem.commentlen?t.dataItem.commentlen:0)+" ")],1)])]),a("p",{staticClass:"title"},[t._v(t._s(t.dataItem.name))])])},r=[],o={name:"VideoListItem",props:{dataItem:{type:Object,default:function(){return{}}}},methods:{VideoItemClick:function(){this.$route.fullPath!=="/detail/".concat(this.dataItem.id)?this.$router.push("/detail/"+this.dataItem.id):this.$msg.fail("已在此页面")}}},c=o,l=(a("0fcb"),a("2877")),u=Object(l["a"])(c,s,r,!1,null,"279a3e63",null),A=u.exports,d={name:"VideoList",components:{VideoListItem:A},props:{listData:{type:Array,default:function(){return[]}}}},f=d,m=(a("3f4a"),Object(l["a"])(f,n,i,!1,null,"64f21fe3",null));e["a"]=m.exports},"3f4a":function(t,e,a){"use strict";a("78e5")},"3ff8":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("b383");function i(t){return Object(n["a"])({url:"/user/"+t})}},"637b":function(t,e,a){},"6ab7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"detail"},[a("nav-bar",{staticClass:"navbar"}),a("detail-video",{staticClass:"play",attrs:{"play-url":t.model.content}}),a("detail-info",{attrs:{"info-data":t.model}}),a("video-list",{attrs:{"list-data":t.commendList}})],1):t._e()},i=[],s=a("1da1"),r=(a("96cf"),a("0790")),o=a("1d94"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"playArea"},[a("video-player",{ref:"videoPlayer",attrs:{playsinline:!0,options:t.playerOptions},on:{pause:function(e){return t.onPlayerPause(e)},play:function(e){return t.onPlayerPlay(e)},ended:function(e){return t.onPlayerEnded(e)}}},[t._v(" Your browser does not support the video tag. ")]),a("div",{staticClass:"tilt",on:{click:t.onPlayerClick}})],1)])},l=[],u={name:"DetailVideo",data:function(){return{playerOptions:{playbackRates:[.5,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"metadata",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:a("af21")}],poster:a("1c5c"),notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPause:function(t){this.isPlay=!1},onPlayerPlay:function(t){this.isPlay=!0},onPlayerEnded:function(t){},onPlayerClick:function(){this.isPlay?this.player.pause():this.player.play()}}},A=u,d=(a("9cb9"),a("2877")),f=Object(d["a"])(A,c,l,!1,null,"003c6c9f",null),m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.infoData?a("div",{staticClass:"info-box"},[a("div",{staticClass:"label"},[a("span",{staticClass:"tag"},[t._v(t._s(t.infoData.category.title))]),a("h2",{staticClass:"title"},[t._v(t._s(t.infoData.name))])]),a("div",{staticClass:"data"},[a("span",[t._v("1024观看")]),a("span",[t._v(t._s(t.infoData.commentlen)+" 弹幕")]),a("span",[t._v(t._s(t.infoData.date))])]),a("div",{staticClass:"count"},[a("span",[a("van-icon",{attrs:{name:"good-job"}}),t._v("102.4万")],1),a("span",[a("van-icon",{attrs:{name:"star"}}),t._v("8万")],1),a("span",[a("van-icon",{attrs:{name:"share"}}),t._v("分享")],1)])]):t._e()},v=[],h={name:"DetailInfo",props:{infoData:{type:Object,default:function(){return{}}}}},g=h,b=(a("8bae"),Object(d["a"])(g,p,v,!1,null,"4fd47ef5",null)),B=b.exports,E=a("b383");function y(t){return Object(E["a"])({url:"/article/"+t})}function C(){return Object(E["a"])({url:"/commend"})}var Q={name:"Detail",data:function(){return{model:null,commendList:[]}},components:{NavBar:r["a"],DetailVideo:m,DetailInfo:B,VideoList:o["a"]},created:function(){this.getDetailData(),this.getCommendData()},watch:{$route:function(){this.getDetailData(),this.getCommendData()}},methods:{getDetailData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t.$route.params.id);case 3:a=e.sent,t.model=a[0],e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCommendData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:a=e.sent,t.commendList=a,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},D=Q,w=(a("ea9e"),Object(d["a"])(D,n,i,!1,null,"057eb8ba",null));e["default"]=w.exports},"78e5":function(t,e,a){},"8bae":function(t,e,a){"use strict";a("d413")},"901e":function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAwADADAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAAQFAQIGBwn/xAArEAACAQQBAgUEAgMAAAAAAAABAgMABAURITFhBhIUMlETFUGRM0JTocH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABwRAQEBAQEAAwEAAAAAAAAAAAABETEhAhJBUf/aAAwDAQACEQMRAD8A+itetyFAUBQFAUBQK3uVxuNKLfXkcLSbKqdlmA6kAbOu9Etk6h23jGCPKz2d9Mklo5MltdQwv5VX/HINbB7/AJq4z9vfWX3jGB8jb2OMmRYdiS5u5oXKBB/RBrZY/PQUwvy/i5ZZbG5FmSxvI5XQbZRsMB86IB13qNSym6KKCBYqLjxDlRKSdTxxDRIPkWEMF2OdbYnXzRj9PCTCNe/bluYWutFvoicl9DrxujXnGPPg4777bJdwpdFQwhadgxB6aBPNE8nhPJILbNYr6RKn1Yj5JOleKTzLs86JVTr5FC9i8KNCggY+NZc7mIn5V7kKwB0dG2UVWJ07Z4GxwkDDB4y3jlPuZydsO78mpqyZxt3hLPNW4XO4y1lcE68uyVHZuDQzekcpEkOWw8KDSpdxKo3sgCGX/lEvYvjpRsUEu/wks9097YX5tJZQomBhEiP5RpW0SCGAJGweRwaM2On3viC8s8nksac1EfQwM6ObX+WVQNp7+OvXsauMblxxtvEV5cZTHY771CBfQo7yelGopGHCe7n433FMN967jY4SaG6S8yGQ9U8PmMKrCI1RmGixAJLNrjZPA3UbkVaNCgXyN6mOsLi/k9tvE0p76GwP3RLceDyyyTyvPM3mkkYu5+WJ2f8AdacGKzIwdGKspBBH4P4NB7phMiMtiLTIjrPEGbs3Rh+way7y7NO0V//Z"},9197:function(t,e,a){"use strict";a("b90e")},"9cb9":function(t,e,a){"use strict";a("637b")},af21:function(t,e,a){t.exports=a.p+"media/play_test.91abbb4a.mp4"},b838:function(t,e,a){},b90e:function(t,e,a){},d413:function(t,e,a){},de97:function(t,e,a){},ea9e:function(t,e,a){"use strict";a("b838")}}]);
//# sourceMappingURL=chunk-6baacb53.70f81edf.js.map