webpackJsonp([1],{"8h4W":function(t,e){},Dzl2:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},o,!1,function(t){s("Dzl2")},null,null).exports,l=s("/ocq");var a,n,c,u={name:"HelloWorld",data:function(){return{refresh:!0,finishends:!0,refreshs:[1134*Math.random(),1224*Math.random(),3134*Math.random(),1100*Math.random()],dates:["下拉加载"],num:0}},methods:{refershs:function(){var t=this;setTimeout(function(){t.refreshs=[1134*Math.random(),1224*Math.random(),3134*Math.random(),1100*Math.random()],t.refresh=!1},3e3)},loads:(a=function(){this.num++,this.num>4&&(this.finishends=!1),console.log("上拉加载成功！"),this.dates.push("在上啦就加载","继续继续继续","上拉下拉","在上啦就加载","继续继续继续","上拉下拉")},n=1e3,n=n||300,function(){var t=this,e=arguments;c&&clearTimeout(c),c=setTimeout(function(){c=null,a.apply(t,e)},n)})}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("pull-refresh",{attrs:{pullColors:"red",scrollHide:!0,finished:t.finishends,finishedText:"到底了，没有啦！"},on:{refresh:t.refershs,load:t.loads},model:{value:t.refresh,callback:function(e){t.refresh=e},expression:"refresh"}},[t._l(t.refreshs,function(e){return s("p",[t._v(t._s(e))])}),t._v(" "),t._l(30,function(e){return s("p",[t._v("加载！加载！加载！")])}),t._v(" "),t._l(t.dates,function(e){return s("p",[t._v(t._s(e))])})],2)],1)},staticRenderFns:[]};var d=s("VU/8")(u,h,!1,function(t){s("oTru")},"data-v-3c7479e4",null).exports;i.a.use(l.a);var f=new l.a({routes:[{path:"/",name:"HelloWorld",component:d}]}),p={name:"pull-refresh",props:{pullColors:{type:String,default:"#1A73E8"},pullWidth:{type:Number},pullHeight:{type:Number},offset:{type:Number,default:50},scrollHide:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},finishedText:{type:String,default:"到底了，没数据了！"},value:{type:Boolean,default:!0,required:!0}},data:function(){return{startY:"",moveDistance:-35,moveState:0,scrollStaus:!0,duration:0,scrollTop:0,scales:1,rotateCircle:0,rotateArrow:!1,opacity:.3,scrollTops:0,detimes:1e3,timers:null,topButters:0,bottomButters:0,finishend:!1}},computed:{pullRefresh:function(){return{width:this.pullWidth?this.pullWidth+"px":"100%",height:this.pullHeight?this.pullHeight+"px":"100%"}},style:function(){return{transition:this.duration+"ms",transform:"translate3d(0,"+this.moveDistance+"px, 0) scale("+this.scales+")"}},circleLine:function(){return{borderColor:this.pullColors,transition:this.duration+"ms",transform:"rotate("+(100+this.rotateCircle)+"deg)",opacity:this.opacity}}},methods:{scrolls:function(t){var e=this;this.scrollTops=t.target.scrollTop;var s=t.target.scrollHeight-(t.target.scrollTop+t.target.clientHeight),i=this.offset;this.finished&&2!=this.moveState&&(null!=this.timers&&clearTimeout(this.timers),this.timers=setTimeout(function(){e.timers=null,s<=i&&e.$emit("load")},500)),t.target.scrollHeight>t.target.clientHeight&&(this.finishend=!0),0==t.target.scrollTop?(this.topButters=80,setTimeout(function(){e.topButters=0,e.scrollStaus=!0},700)):this.scrollStaus=!1,s<1&&(this.bottomButters=70,setTimeout(function(){e.bottomButters=0},500))},touchStart:function(t){this.scrollStaus&&2!=this.moveState&&(this.duration=0,this.moveDistance=-35,this.scales=1,this.rotateArrow=!1,this.startY=t.targetTouches[0].clientY)},touchMove:function(t){if(this.scrollStaus&&2!=this.moveState&&0==this.scrollTops){var e=t.targetTouches[0].clientY-this.startY;if(e<200)if(this.moveDistance=Math.pow(e,.9)-35,this.rotateCircle=Math.pow(e,1.2),this.moveDistance>15?this.rotateArrow=!0:this.rotateArrow=!1,this.moveDistance>40){if(this.opacity=1,1===this.moveState)return;this.moveState=1}else{if(this.opacity=.3,0===this.moveState)return;this.moveState=0}}},touchEnd:function(t){2!=this.moveState&&(this.duration=300,this.moveDistance>50?(this.moveState=2,this.moveDistance=25,this.$emit("refresh")):this.moveDistance=-35)}},watch:{moveState:function(t){0===t&&300===this.duration&&(this.moveDistance=-35)},value:{handler:function(t){var e=this;t||(this.scales=0,setTimeout(function(){e.moveState=0},400),this.$emit("input",!0))},deep:!0}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pull-refresh-box-content",class:{scrollclose:t.scrollHide},style:t.pullRefresh},[s("div",{staticClass:"pull-refresh-box",style:t.style},[s("div",{staticClass:"pull-arrow-circle"},[2==t.moveState?s("div",{staticClass:"box-load"},[s("div",{staticClass:"left-load"},[s("div",{staticClass:"left-circle",style:{backgroundColor:t.pullColors}})]),t._v(" "),s("div",{staticClass:"right-load"},[s("div",{staticClass:"right-circle",style:{backgroundColor:t.pullColors}})]),t._v(" "),s("div",{staticClass:"among-load"})]):s("div",{staticClass:"pull-circle-line",style:t.circleLine},[s("div",{staticClass:"pull-arrow"},[s("div",{staticClass:"arrows",class:{opacity:t.rotateArrow},style:{borderBottomColor:t.pullColors}})])])])]),t._v(" "),s("div",{staticClass:"pull-buffer",style:{height:t.topButters+"px"}}),t._v(" "),s("div",{staticClass:"pull-buffer-bottom",style:{height:t.bottomButters+"px"}}),t._v(" "),s("div",{staticClass:"pull-refresh",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,scroll:t.scrolls}},[s("div",{staticClass:"pull-content-box"},[t._t("default"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.finished,expression:"finished"}],staticClass:"pull-add-load"},[s("div",{staticClass:"box-load"},[s("div",{staticClass:"left-load"},[s("div",{staticClass:"left-circle",style:{backgroundColor:t.pullColors}})]),t._v(" "),s("div",{staticClass:"right-load"},[s("div",{staticClass:"right-circle",style:{backgroundColor:t.pullColors}})]),t._v(" "),s("div",{staticClass:"among-load"})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.finished&&t.finishend,expression:"!finished && finishend"}],staticClass:"pull-add-load"},[s("span",{staticClass:"finished-bottom"},[t._v(t._s(t.finishedText))])])],2)])])},staticRenderFns:[]};var m=s("VU/8")(p,v,!1,function(t){s("8h4W")},"data-v-7f152841",null).exports;i.a.config.productionTip=!1,i.a.component("pull-refresh",m),new i.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},oTru:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.36d72703b3947acf06d6.js.map