(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f1152f8"],{"0738":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn"},[t._v(" "+t._s(t.btnText)+" ")])},a=[],o={name:"LoginBtn",props:{btnText:{type:String,default:"按钮"}}},i=o,c=(n("0eab"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"708e7845",null);e["a"]=s.exports},"0de3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-field",{attrs:{type:t.type,label:t.label,placeholder:t.placeholder,clearable:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},a=[],o=(n("4d63"),n("ac1f"),n("25f0"),{name:"LoginInput",data:function(){return{content:""}},props:{type:{type:String,default:"text"},label:String,placeholder:String,rule:String},methods:{inputChange:function(){var t=new RegExp(this.rule);t.test(this.content)?this.$emit("reg-success",this.content):this.$emit("reg-error")}},watch:{content:function(){this.inputChange()}}}),i=o,c=n("2877"),s=Object(c["a"])(i,r,a,!1,null,"e4a5565a",null);e["a"]=s.exports},"0eab":function(t,e,n){"use strict";n("dd84")},"252e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-bar"},[n("div"),n("div",[t._v(t._s(t.title))]),n("div",[t._t("right")],2)])},a=[],o={name:"LoginBar",props:{title:{type:String,default:""}}},i=o,c=(n("da9b"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"4e0c35c6",null);e["a"]=s.exports},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),o=n("d039"),i=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&r(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),o=n("b622"),i=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},"4d63":function(t,e,n){var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("7156"),c=n("9bf2").f,s=n("241c").f,u=n("44e7"),l=n("ad6d"),f=n("9f7f"),d=n("6eeb"),g=n("d039"),p=n("69f3").set,v=n("2626"),m=n("b622"),x=m("match"),b=a.RegExp,h=b.prototype,y=/a/g,R=/a/g,E=new b(y)!==y,w=f.UNSUPPORTED_Y,S=r&&o("RegExp",!E||w||g((function(){return R[x]=!1,b(y)!=y||b(R)==R||"/a/i"!=b(y,"i")})));if(S){var _=function(t,e){var n,r=this instanceof _,a=u(t),o=void 0===e;if(!r&&a&&t.constructor===_&&o)return t;E?a&&!o&&(t=t.source):t instanceof _&&(o&&(e=l.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=i(E?new b(t,e):b(t,e),r?this:h,_);return w&&n&&p(c,{sticky:n}),c},I=function(t){t in _||c(_,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},k=s(b),O=0;while(k.length>O)I(k[O++]);h.constructor=_,_.prototype=h,d(a,"RegExp",_)}v("RegExp")},"561a":function(t,e,n){},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(t,i),t}},"73cf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("login-bar",{attrs:{title:"注册哔哩哔哩"},scopedSlots:t._u([{key:"right",fn:function(){return[n("router-link",{attrs:{tag:"div",to:"/login"}},[t._v("切换到登录")])]},proxy:!0}])}),n("login-input",{staticStyle:{margin:"3vw 0"},attrs:{label:"姓名",placeholder:"请输入姓名",rule:"^.{2,10}$"},on:{"reg-success":function(e){return t.model.name=e},"reg-error":function(e){t.model.name=""}}}),n("login-input",{staticStyle:{margin:"3vw 0"},attrs:{label:"账号",placeholder:"请输入账号",rule:"^.{6,16}$"},on:{"reg-success":function(e){return t.model.username=e},"reg-error":function(e){t.model.username=""}}}),n("login-input",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",rule:"^.{6,16}$"},on:{"reg-success":function(e){return t.model.password=e},"reg-error":function(e){t.model.password=""}}}),n("login-btn",{attrs:{"btn-text":"注册"},nativeOn:{click:function(e){return t.handleRegister(e)}}})],1)},a=[],o=n("1da1"),i=(n("96cf"),n("b0c0"),n("252e")),c=n("0738"),s=n("0de3"),u=n("b383");function l(t){return Object(u["a"])({url:"/register",method:"post",data:t})}var f={name:"Register",components:{LoginBar:i["a"],LoginInput:s["a"],LoginBtn:c["a"]},data:function(){return{model:{name:"",username:"",password:""}}},methods:{handleRegister:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.model,r=n.name,a=n.username,o=n.password,!(r&&a&&o)){e.next=9;break}return e.next=4,l(t.model);case 4:i=e.sent,console.log(i),200===i.code?(t.$msg.success(i.msg),localStorage.setItem("id",i.id),localStorage.setItem("token",i.objtoken),setTimeout((function(){t.$router.push("/userinfo")}),1e3)):t.$msg.fail(i.msg),e.next=10;break;case 9:t.$msg.fail("格式有误,请重新输入");case 10:case"end":return e.stop()}}),e)})))()}}},d=f,g=n("2877"),p=Object(g["a"])(d,r,a,!1,null,"77f7e44e",null);e["default"]=p.exports},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,n,a,c,f=this,d=u&&f.sticky,g=r.call(f),p=f.source,v=0,m=t;return d&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,v++),n=new RegExp("^(?:"+p+")",g)),l&&(n=new RegExp("^"+p+"$(?!\\s)",g)),s&&(e=f.lastIndex),a=o.call(d?n:f,m),d?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:s&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),l&&a&&a.length>1&&i.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},da9b:function(t,e,n){"use strict";n("561a")},dd84:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4f1152f8.8c211fbc.js.map