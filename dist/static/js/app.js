webpackJsonp([11],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("iframe",{staticStyle:{position:"fixed","z-index":"100",right:"0px",bottom:"0px",height:"326px","border-radius":"0 140px 0px 0","/* border":"1px solid","*/\n  overflow":"hidden",width:"290px"},attrs:{src:"https://mi.js.org/live2d-widget/demo/demo.html",frameborder:"0"}}),this._v(" "),t("keep-alive",{attrs:{include:["Aboutme","Message","FriendsLink","Reward"]}},[t("router-view")],1)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(e){n("quOZ")},null,null).exports,r=n("/ocq");a.default.use(r.a);var u=new r.a({scrollBehavior:function(e,t,n){return n||{x:0,y:window.innerWidth>=700?676:267}},routes:[{path:"/",component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("HXef")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"Home"},{path:"/Home",component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("HXef")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"Home"},{path:"/Share",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("zJHd")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"Share"},{path:"/DetailShare",component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("vo1k")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"DetailShare"},{path:"/Reward",component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("gejy")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"Reward"},{path:"/Message",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("kEhC")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"Message"},{path:"/Aboutme",component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("caxs")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"Aboutme"},{path:"/Login",component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("P7ry")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!1},name:"Login"},{path:"/UserInfo",component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("psK5")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"UserInfo"},{path:"/LikeCollect",component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("vjmD")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{auth:!0},name:"LikeCollect"}]}),l=n("zL8q"),c=n.n(l),p=(n("q8zI"),n("PijW"),n("NYxO"));a.default.use(p.a);var h={loading:!1,UserList:[111,222,333],themeObj:0,aboutmeObj:"",host:"http://"+window.location.host+"/port/",keywords:"",errorImg:'this.onerror=null;this.src="'+n("jQBE")+'"'},s=new p.a.Store({state:h}),m=n("K/Lq"),d=n.n(m);a.default.prototype.$cookie=d.a,a.default.config.productionTip=!1,a.default.use(c.a),new a.default({el:"#app",router:u,components:{App:i},template:"<App/>",store:s})},PijW:function(e,t){},jQBE:function(e,t,n){e.exports=n.p+"static/img/tou.jpg?v=9656b6d"},q8zI:function(e,t){},quOZ:function(e,t){}},["NHnr"]);