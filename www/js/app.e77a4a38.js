(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],h=0,d=[];h<o.length;h++)a=o[h],n[a]&&d.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},r=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"05cd":function(t,e,i){},"08d6":function(t,e,i){},1:function(t,e){},"11a5":function(t,e,i){"use strict";var s=i("b8e0"),n=i.n(s);n.a},"13d4":function(t,e,i){"use strict";var s=i("08d6"),n=i.n(s);n.a},"27eb":function(t,e,i){},"2a5b":function(t,e,i){},3269:function(t,e,i){},"388d":function(t,e,i){"use strict";var s=i("dff1"),n=i.n(s);n.a},"49aa":function(t,e,i){"use strict";var s=i("05cd"),n=i.n(s);n.a},"4acb":function(t,e,i){},"4c20":function(t,e,i){"use strict";var s=i("4acb"),n=i.n(s);n.a},"4e68":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"game"}},[1===t.player.connected?s("div",["solo"===t.mode?s("stages"):t._e(),"multi"===t.mode?s("rooms"):t._e(),"scoreboard"===t.mode?s("score-board"):t._e(),"setting"===t.mode?s("setting"):t._e(),"menu"===t.mode?s("div",{attrs:{id:"menu"}},[s("nav-bar",{attrs:{"with-button":!1}}),s("img",{staticClass:"logo",attrs:{alt:"Serpman Logo",src:i("cf05")}}),s("div",{staticClass:"button-group"},[s("button",{on:{click:function(e){return t.toggle("solo")}}},[t._v("Solo")]),s("button",{on:{click:function(e){return t.toggle("multi")}}},[t._v("Multi")]),s("button",{on:{click:function(e){return t.toggle("scoreboard")}}},[t._v("Scoreboard")]),s("button",{on:{click:function(e){return t.toggle("setting")}}},[t._v("Credits")])])],1):t._e()],1):t._e(),1!==t.player.connected?s("div",[s("img",{attrs:{alt:"Serpman Logo",src:i("cf05")}}),s("h1",[t._v(t._s(t.message))])]):t._e(),"multi"!==t.mode&&"solo"!==t.mode?s("div",{staticClass:"release"},[s("span",[t._v("Version 1.0.0-OpenBeta")])]):t._e()])},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"stages"}},[t.choosenLevel?t._e():i("div",[i("nav-bar"),i("svg",{style:t.style},t._l(t.levels,function(e){return i("stage",{key:e.level,attrs:{level:e},nativeOn:{click:function(i){return t.chooseLevel(e)}}})}),1)],1),t.choosenLevel?i("solo",{attrs:{"entry-level":t.choosenLevel,width:t.width,height:t.height},on:{back:t.restart}}):t._e()],1)},o=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"solo",tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"p",void 0,e.key,void 0)?null:t.pause(e)}}},[t.levelReady?i("svg",{style:t.style,on:{mousemove:t.ejaculate}},[t._l(t.ovums,function(e){return i("ovum",{key:e.id,attrs:{id:e.id,d:e.shape,width:t.width,height:t.height,originX:t.place(e.x),originY:t.place(e.y,!0),originVX:e.vx,originVY:e.vy,vr:e.vr,frame:t.frame}})}),i("sperma",{attrs:{width:t.width,height:t.height,target:t.target,frame:t.frame,viscosity:t.viscosity}}),t._l(t.germs,function(e){return i("germ",{key:e.id,attrs:{id:e.id,d:e.shape,width:t.width,height:t.height,startOn:e.startOn,speedMin:e.speedMin,speedRange:e.speedRange,vr:e.vr,spawnCycle:t.spawnCycle,spawnAt:e.spawnAt,frame:t.frame}})})],2):t._e(),t.won?i("div",{staticClass:"overlay"},[i("svg",{style:t.style},[i("menu-button",{attrs:{text:"Menu",width:t.width,height:t.height,position:{x:.3,y:.5},angle:-30,icon:t.icons.menu},nativeOn:{click:function(e){return t.back(e)}}}),i("score",{attrs:{x:t.width/2,y:t.height/2,score:t.score,maxScore:t.maxScore}}),i("menu-button",{attrs:{text:"Next",width:t.width,height:t.height,position:{x:.7,y:.5},angle:30,icon:t.icons.next},nativeOn:{click:function(e){return t.nextLevel(e)}}})],1)]):t._e(),t.lost?i("div",{staticClass:"overlay"},[i("svg",{style:t.style},[i("menu-button",{attrs:{text:"Menu",width:t.width,height:t.height,position:{x:.3,y:.5},angle:-30,icon:t.icons.menu},nativeOn:{click:function(e){return t.back(e)}}}),i("menu-button",{attrs:{text:"Retry",width:t.width,height:t.height,position:{x:.7,y:.5},angle:30,icon:t.icons.retry},nativeOn:{click:function(e){return t.restartLevel(e)}}})],1)]):t._e(),t.isPaused?i("div",{staticClass:"overlay"},[i("svg",{style:t.style},[i("menu-button",{attrs:{text:"Menu",width:t.width,height:t.height,position:{x:.3,y:.5},angle:-30,icon:t.icons.menu},nativeOn:{click:function(e){return t.back(e)}}}),i("menu-button",{attrs:{text:"Resume",width:t.width,height:t.height,position:{x:.5,y:.5},angle:0,icon:t.icons.pause},nativeOn:{click:function(e){return t.pause(e)}}}),i("menu-button",{attrs:{text:"Retry",width:t.width,height:t.height,position:{x:.7,y:.5},angle:30,icon:t.icons.retry},nativeOn:{click:function(e){return t.restartLevel(e)}}})],1)]):t._e()])},l=[],u=(i("7f7f"),i("7514"),i("ac6a"),i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{opacity:t.isStunned?.6:1}},[i("ellipse",{attrs:{rx:"8",ry:"5",fill:t.color,"stroke-width":t.collided,stroke:"#ffffff",transform:t.head}}),i("path",{staticClass:"mid",attrs:{stroke:t.color,d:t.mid}}),i("path",{staticClass:"tail",attrs:{stroke:t.color,d:t.tail}})])}),h=[],d=(i("6c7b"),i("2f62"));s["a"].use(d["a"]);var f=function(t,e,i){var s=Math.sqrt(Math.pow(t.x-e,2)+Math.pow(t.y-i,2)),n=t.radius*t.scale;return s<n?n-s:-10},m=new d["a"].Store({state:{mode:"menu",player:{id:0,name:"guest",score:0,connected:0},sperma:{id:0,tailX:[],tailY:[]},ovums:{},allFertelized:!1,collision:!1},getters:{mode:function(t){return t.mode},player:function(t){return t.player},sperma:function(t){return t.sperma},ovums:function(t){return t.ovums},allFertelized:function(t){return t.allFertelized},collision:function(t){return t.collision}},mutations:{SWITCH_MODE:function(t,e){t.mode=e},LOGIN:function(t){var e=this;FB.getLoginStatus(function(t){console.log(t),"not_authorized"===t.status?(console.log(t),FB.login(function(t){e.dispatch("processLogin",t)})):e.dispatch("processLogin",t)})},PROCESS_LOGIN:function(t,e){"connected"===e.status?FB.api("/me",function(i){fetch("".concat("https://sper-man.herokuapp.com","/login"),{mode:"cors",credentials:"include",headers:{Accept:"application/json","content-type":"application/json"},method:"POST",body:JSON.stringify({fbId:e.authResponse.userID,signedRequest:e.authResponse.signedRequest,expiresIn:e.authResponse.expiresIn,name:i.name})}).then(function(t){return t.json()}).then(function(e){t.player.id=e.id,t.player.name=e.name,t.player.score=e.totalScore,t.player.connected=1}).catch(function(){t.player.connected=4})}):"not_authorized"===e.status?t.player.connected=3:t.player.connected=2},SET_SCORE:function(t,e){t.player.score=e},RESET:function(t){t.sperma.id=0,t.sperma.tailX=[],t.sperma.tailY=[],t.ovums={},t.allFertelized=!1,t.collision=!1},SPERMA_MOVED:function(t,e){for(var i in t.sperma=e,t.ovums)t.ovums[i].progress=.02*f(t.ovums[i],e.tailX[0],e.tailY[0])},OVUM_CREATED:function(t,e){e.progress=0,e.isFertelized=!1,t.ovums[e.id]=e},OVUM_MOVED:function(t,e){t.ovums[e.id].x=e.x,t.ovums[e.id].y=e.y},OVUM_FERTELIZED:function(t,e){t.ovums[e].isFertelized=!0,this.dispatch("areAllFertelized")},ARE_ALL_FERTELIZED:function(t){for(var e in t.ovums)if(!t.ovums[e].isFertelized)return t.allFertelized=!1;return t.allFertelized=!0},GERM_MOVED:function(t,e){if(!(Math.sqrt(Math.pow(e.x-t.sperma.tailX[0],2)+Math.pow(e.y-t.sperma.tailY[0],2))-e.radius*e.scale>200))for(var i=0;i<t.sperma.tailX.length;i++)if(Math.sqrt(Math.pow(e.x-t.sperma.tailX[i],2)+Math.pow(e.y-t.sperma.tailY[i],2))<=e.radius*e.scale){t.collision=!0;break}}},actions:{login:function(t){t.commit("LOGIN")},processLogin:function(t,e){t.commit("PROCESS_LOGIN",e)},setScore:function(t,e){t.commit("SET_SCORE",e)},switchMode:function(t,e){t.commit("SWITCH_MODE",e)},reset:function(t){t.commit("RESET")},spermaMoved:function(t,e){t.commit("SPERMA_MOVED",e)},ovumCreated:function(t,e){t.commit("OVUM_CREATED",e)},ovumMoved:function(t,e){t.commit("OVUM_MOVED",e)},ovumFertelized:function(t,e){t.commit("OVUM_FERTELIZED",e)},areAllFertelized:function(t){t.commit("ARE_ALL_FERTELIZED")},germMoved:function(t,e){t.commit("GERM_MOVED",e)}}}),p=180/Math.PI,v={name:"Sperma",store:m,props:{id:{type:Number,default:0},width:{type:Number,default:760},height:{type:Number,default:570},originX:{type:Number,default:400},originY:{type:Number,default:500},color:{type:String,default:"#ffffff"},viscosity:{type:Number,default:.002},power:{type:Number,default:.03},target:{type:Object,default:function(){return{x:300,y:400,id:-1}}},frame:{type:Number,default:0},room:{type:Number,default:0}},data:function(){return{count:0,vx:0,vy:-1,tailX:new Array(12).fill(this.originX),tailY:new Array(12).fill(this.originY),head:"",mid:"",tail:"",foreign:{},isStunned:0,collided:0}},socket:{events:{foreign:function(t){this.id&&(this.head=t.head,this.mid=t.mid,this.tail=t.tail)},collision:function(t){t.id===this.id&&(this.collided=15,this.isStunned=t.stunned,this.vx=t.vx,this.vy=t.vy)}}},watch:{target:function(){this.id!==this.target.id||this.isStunned||(this.vx=this.power*(this.target.x-this.tailX[0]),this.vy=this.power*(this.target.y-this.tailY[0]))},frame:function(){this.isStunned&&this.isStunned--,this.collided&&this.collided--,this.id===this.target.id?(this.swim(),this.id?this.$io.socket.post("/multi/".concat(this.room),{id:this.id,head:this.head,mid:this.mid,tail:this.tail,x:this.tailX[0],y:this.tailY[0],vx:this.vx,vy:this.vy,isStunned:this.isStunned}):this.$store.dispatch("spermaMoved",{id:this.id,tailX:this.tailX,tailY:this.tailY})):this.draw()}},methods:{swim:function(){var t=this.vx,e=this.vy,i=this.tailX[0]+=t,s=this.tailY[0]+=e,n=Math.sqrt(t*t+e*e),r=10*n,a=-5-n/3;(i<=0||i>this.width)&&(this.vx*=-1),(s<=0||s>this.height)&&(this.vy*=-1),this.vx*=1-this.viscosity,this.vy*=1-this.viscosity;for(var o="M".concat(this.tailX[0],",").concat(this.tailY[0]),c="M".concat(this.tailX[0],",").concat(this.tailY[0]),l=1;l<12;++l){var u=i-this.tailX[l],h=s-this.tailY[l],d=Math.sin(((this.count+=r)+3*l)/300)/n;this.tailX[l]=(i+=t/n*a)-e*d,this.tailY[l]=(s+=e/n*a)+t*d,n=Math.sqrt((t=u)*t+(e=h)*e);var f="L".concat(this.tailX[l],",").concat(this.tailY[l]);l<4&&(o+=f),c+=f}this.head="translate(".concat(this.tailX[0],", ").concat(this.tailY[0],")rotate(").concat(Math.atan2(this.vy,this.vx)*p,")"),this.mid=o,this.tail=c},draw:function(){this.head=this.foreign.head,this.mid=this.foreign.mid,this.tail=this.foreign.tail}}},y=v,g=(i("13d4"),i("2877")),b=Object(g["a"])(y,u,h,!1,null,null,null),x=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{transform:t.transform}},[i("defs",[i("radialGradient",{attrs:{id:t.defId,cx:"50%",cy:"50%",r:t.gradientRadiusPercent,fx:"50%",fy:"50%"}},[i("stop",{style:{"stop-color":t.fertalizationColor},attrs:{offset:"0%"}}),i("stop",{style:{"stop-color":t.fertalizationColor},attrs:{offset:t.fertalizatinPercent}}),i("stop",{style:{"stop-color":t.color},attrs:{offset:"100%"}})],1)],1),i("path",{attrs:{fill:t.defUrl,d:t.d,stroke:t.stroke}})])},_=[],S={name:"Ovum",store:m,props:{id:{type:Number,default:0},width:{type:Number,default:760},height:{type:Number,default:570},originX:{type:Number,default:380},originY:{type:Number,default:285},originVX:{type:Number,default:0},originVY:{type:Number,default:0},vr:{type:Number,default:0},scale:{type:Number,default:1},radius:{type:Number,default:25},color:{type:String,default:"#e568e4"},fertalizationColor:{type:String,default:"#ee2864"},d:{type:String,default:""},frame:{type:Number,default:0}},data:function(){return{x:this.originX,y:this.originY,vx:this.originVX,vy:this.originVY,percent:0,angle:0}},mounted:function(){this.$store.dispatch("ovumCreated",{id:this.id,x:this.x,y:this.y,scale:this.scale,radius:this.radius})},methods:{swim:function(){this.x+=this.vx,this.y+=this.vy,(this.x<=this.left||this.x>this.right)&&(this.vx*=-1),(this.y<=this.top||this.y>this.bottom)&&(this.vy*=-1),this.angle+=this.vr,this.$store.dispatch("ovumMoved",{id:this.id,x:this.x,y:this.y})}},watch:{frame:function(){if(!this.isFertelized){this.swim();var t=this.percent+this.$store.state.ovums[this.id].progress;this.percent=t>0?t<100?t:100:0}},isFertelized:function(){this.$store.dispatch("ovumFertelized",this.id)}},computed:{transform:function(){return"translate(".concat(this.x,", ").concat(this.y,")rotate(").concat(this.angle,")scale(").concat(this.scale,")")},defId:function(){return"fertilization-".concat(this.id)},defUrl:function(){return"url(#fertilization-".concat(this.id,")")},fertalizatinPercent:function(){return"".concat(this.percent,"%")},gradientRadiusPercent:function(){return"".concat(this.percent/2||1,"%")},isFertelized:function(){return 100===this.percent},stroke:function(){return this.isFertelized?"#44ff66":"none"},top:function(){return this.radius},left:function(){return this.radius},bottom:function(){return this.height-this.radius},right:function(){return this.width-this.radius}}},C=S,O=Object(g["a"])(C,w,_,!1,null,null,null),k=O.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{transform:t.transform}},[i("path",{staticClass:"germ",attrs:{d:t.d}})])},E=[],N={name:"Germ",store:m,props:{id:{type:Number,default:0},width:{type:Number,default:760},height:{type:Number,default:570},startOn:{type:String,default:"top"},speedMin:{type:Number,default:0},speedRange:{type:Number,default:1},vr:{type:Number,default:0},scale:{type:Number,default:1},radius:{type:Number,default:15},d:{type:String,default:""},spawnCycle:{type:Number,default:500},spawnAt:{type:Number,default:50},frame:{type:Number,default:0}},data:function(){return{x:-40,y:-40,vx:0,vy:0,angle:0,initialFrame:this.frame}},methods:{spawn:function(){var t=Math.random()*this.speedRange+this.speedMin,e=0,i=0;"top"===this.startOn?(this.y=-20,this.x=Math.random()*(this.width/2)+this.width/4,this.vy=t,e=this.x/(this.height/t),i=(this.width-this.x)/(this.height/t),this.vx=Math.random()*(i+e)-e):"bot"===this.startOn?(this.y=this.height+20,this.x=Math.random()*(this.width/2)+this.width/4,this.vy=-t,e=this.x/(this.height/t),i=(this.width-this.x)/(this.height/t),this.vx=Math.random()*(i+e)-e):"left"===this.startOn?(this.y=Math.random()*(this.height/2)+this.height/4,this.x=-20,this.vx=t,e=this.y/(this.width/t),i=(this.height-this.y)/(this.width/t),this.vy=Math.random()*(i+e)-e):(this.y=Math.random()*(this.height/2)+this.height/4,this.x=this.width+20,this.vx=-t,e=this.y/(this.width/t),i=(this.height-this.y)/(this.width/t),this.vy=0*(i+e)-e)},swim:function(){this.x+=this.vx,this.y+=this.vy,this.angle+=this.vr}},watch:{frame:function(t){(t-this.initialFrame)%this.spawnCycle===this.spawnAt?this.spawn():(this.swim(),this.$store.dispatch("germMoved",{x:this.x,y:this.y,scale:this.scale,radius:this.radius}))}},computed:{transform:function(){return"translate(".concat(this.x,", ").concat(this.y,")rotate(").concat(this.angle,")scale(").concat(this.scale,")")}}},L=N,R=(i("388d"),Object(g["a"])(L,M,E,!1,null,null,null)),$=R.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{staticClass:"menu-button",attrs:{transform:t.transform}},[i("polygon",{attrs:{"stroke-width":1,stroke:"#b6ffca",fill:"#b6ffca",points:t.hexagon}}),i("text",{staticClass:"button-text",attrs:{y:"-4"}},[t._v(t._s(t.text))]),i("path",{attrs:{d:t.icon}})])},A=[],P={name:"MenuButton",props:{text:{type:String,default:"Restart"},icon:{type:String,default:"M 3,3.25 H 2.5 V 2.5 C 2.5,1.1215 1.3785001,0 1e-7,0 -1.3785,0 -2.5,1.1215 -2.5,2.5 Z"},position:{type:Object,default:function(){return{x:.5,y:.5}}},height:{type:Number,default:570},width:{type:Number,default:760},angle:{type:Number,default:0}},data:function(){return{hexagon:"0,16 13.856,8 13.856,-8 0,-16 -13.856,-8 -13.856,8 0,16"}},computed:{transform:function(){return"translate(".concat(this.width*this.position.x,", ").concat(this.height*this.position.y,")rotate(").concat(this.angle,")scale(2)")}}},z=P,F=(i("49aa"),Object(g["a"])(z,j,A,!1,null,null,null)),Y=F.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{transform:t.transform}},[i("text",{staticClass:"score text",attrs:{dy:"-24"}},[t._v("score")]),i("text",{staticClass:"score number"},[t._v(t._s(t.score))]),t._l(t.stars,function(e){return i("g",{key:e.id,attrs:{transform:e.transform}},[i("path",{attrs:{d:t.icon,fill:e.fill}})])})],2)},I=[],X={name:"Score",props:{score:{type:Number,default:0},maxScore:{type:Number,default:0},x:{type:Number,default:400},y:{type:Number,default:300}},data:function(){return{icon:"m 2.5071808,5.0833915 c -0.048835,0.050732 -0.068369,0.1116114 -0.058602,0.1826368 L 2.7513569,7.1228359 C 2.8001919,7.4069377 2.6927549,7.6808929 2.4681129,7.8533832 2.243471,8.0258735 1.9602269,8.0461665 1.716051,7.9142622 L 0.10448986,7.0315175 c -0.05860222,-0.030439 -0.12697149,-0.030439 -0.18557371,0 L -1.692645,7.9142622 C -1.9368209,8.0461665 -2.220065,8.0258735 -2.4447068,7.8533832 -2.6693486,7.6808929 -2.7767861,7.4069377 -2.7279509,7.1228359 l 0.3027781,-1.8568076 c 0.00977,-0.060879 -0.00977,-0.1319044 -0.058602,-0.1826368 L -3.7827907,3.7643478 C -3.9781314,3.561418 -4.0465007,3.2773163 -3.9683644,3.003361 -3.8804614,2.7294058 -3.6655862,2.5366225 -3.3921092,2.4960365 l 1.7971348,-0.2739552 c 0.068369,-0.010147 0.1172044,-0.050733 0.1465055,-0.1116114 L -0.6475718,0.41600609 C -0.52060032,0.15219735 -0.28619143,0 -0.00294735,0 0.28029673,0 0.51470562,0.15219735 0.6416771,0.41600609 v 0 L 1.4425742,2.1104699 c 0.029301,0.060879 0.078136,0.1014649 0.1465055,0.1116114 l 1.7971348,0.2739552 c 0.2734771,0.040586 0.4883519,0.2333693 0.5762552,0.5073245 0.087903,0.2739553 0.019534,0.558057 -0.1855737,0.7609868 z"}},computed:{transform:function(){return"translate(".concat(this.x,", ").concat(this.y,")")},stars:function(){for(var t=[],e="#ffffff",i=0;i<3;i++)this.score/this.maxScore<.5+.2*i&&(e="#000000"),t.push({id:i,fill:e,transform:"translate(".concat(16*i-16,", 10)")});return t}}},D=X,T=(i("d1ef"),Object(g["a"])(D,V,I,!1,null,null,null)),B=T.exports,G={name:"Solo",store:m,components:{Sperma:x,Ovum:k,Germ:$,Score:B,MenuButton:Y},props:{height:{type:Number,default:570},width:{type:Number,default:760},entryLevel:{type:Number,default:1}},data:function(){return{level:this.entryLevel,target:{x:300,y:400},frame:0,spawnCycle:500,viscosity:.002,sprites:[],germs:[],ovums:[],maxScore:5e3,minScore:500,score:0,assetsLoaded:!1,levelReady:!1,isPaused:!1,firstFrame:0,scoreSaved:!1,icons:{menu:"M -3.5121951,0 C -3.7816,0 -4,0.27981233 -4,0.62499961 -4,0.97018564 -3.7816,1.2499992 -3.5121951,1.2499992 H 3.512195 C 3.7816,1.2499992 4,0.97018564 4,0.62499961 4,0.27981233 3.7816,0 3.512195,0 Z m 0,3.3749979 C -3.7816,3.3749979 -4,3.654804 -4,3.99999 c 0,0.3451873 0.2184,0.6249996 0.4878049,0.6249996 H 3.512195 C 3.7816,4.6249896 4,4.3451773 4,3.99999 4,3.654804 3.7816,3.3749979 3.512195,3.3749979 Z m 0,3.3750029 C -3.7816,6.7500008 -4,7.0298131 -4,7.3750004 -4,7.7201877 -3.7816,8 -3.5121951,8 H 3.512195 C 3.7816,8 4,7.7201877 4,7.3750004 4,7.0298131 3.7816,6.7500008 3.512195,6.7500008 Z",star:"m 2.5071808,5.0833915 c -0.048835,0.050732 -0.068369,0.1116114 -0.058602,0.1826368 L 2.7513569,7.1228359 C 2.8001919,7.4069377 2.6927549,7.6808929 2.4681129,7.8533832 2.243471,8.0258735 1.9602269,8.0461665 1.716051,7.9142622 L 0.10448986,7.0315175 c -0.05860222,-0.030439 -0.12697149,-0.030439 -0.18557371,0 L -1.692645,7.9142622 C -1.9368209,8.0461665 -2.220065,8.0258735 -2.4447068,7.8533832 -2.6693486,7.6808929 -2.7767861,7.4069377 -2.7279509,7.1228359 l 0.3027781,-1.8568076 c 0.00977,-0.060879 -0.00977,-0.1319044 -0.058602,-0.1826368 L -3.7827907,3.7643478 C -3.9781314,3.561418 -4.0465007,3.2773163 -3.9683644,3.003361 -3.8804614,2.7294058 -3.6655862,2.5366225 -3.3921092,2.4960365 l 1.7971348,-0.2739552 c 0.068369,-0.010147 0.1172044,-0.050733 0.1465055,-0.1116114 L -0.6475718,0.41600609 C -0.52060032,0.15219735 -0.28619143,0 -0.00294735,0 0.28029673,0 0.51470562,0.15219735 0.6416771,0.41600609 v 0 L 1.4425742,2.1104699 c 0.029301,0.060879 0.078136,0.1014649 0.1465055,0.1116114 l 1.7971348,0.2739552 c 0.2734771,0.040586 0.4883519,0.2333693 0.5762552,0.5073245 0.087903,0.2739553 0.019534,0.558057 -0.1855737,0.7609868 z",next:"m -1.8709303,6.1155502 v 0 L 0.17703829,4.4824824 c 0.333048,-0.2655752 0.334276,-0.6987248 0,-0.9652794 L -1.8709303,1.8841354 C -2.2039781,1.6185602 -2.4761905,1.7599342 -2.4761905,2.2020904 V 5.797595 c 0,0.443405 0.2709842,0.5845096 0.6052602,0.3179552 z m 0.9215983,1.274205 v 0 C -2.2888518,8.4579 -4,7.5614388 -4,5.797595 V 2.2020904 c 0,-1.7627718 1.7125118,-2.6592174 3.050668,-1.5921602 l 2.0479686,1.6330676 c 1.1373579,0.906939 1.1358642,2.607942 0,3.5136898 z M 2.4761905,0.800005 C 2.4761905,0.3581744 2.818163,0 3.2380952,0 3.6588836,0 4,0.359285 4,0.800005 V 7.1999948 C 4,7.6418256 3.6580274,8 3.2380952,8 2.8173069,8 2.4761905,7.640715 2.4761905,7.1999948 Z",retry:"m -3.9977676,3.3821564 0.215906,-2.5337579 c 0.022133,-0.2586269 0.1943955,-0.4390948 0.4184791,-0.4390948 0.077065,0 0.1940399,0.023026 0.3120815,0.1328236 l 0.6177633,0.5748202 C -0.948239,-0.38951 1.422994,-0.372287 2.886959,1.1696465 3.604631,1.9252152 3.999911,2.9297698 4,3.9985366 4,5.0673969 3.604898,6.07242 2.887048,6.827895 2.169465,7.583745 1.215088,8 0.200178,8 -0.81482,8 -1.768931,7.583745 -2.4861587,6.828176 -2.7217087,6.58022 -2.9251706,6.301655 -3.0908556,5.9996895 -3.2729847,5.6681453 -3.1651646,5.2434654 -2.8500613,5.0519523 -2.5351353,4.8599712 -2.1322115,4.9736993 -1.950082,5.3053375 -1.841907,5.502186 -1.70911,5.6841515 -1.554714,5.8464603 -1.086192,6.340126 -0.462917,6.612138 0.2,6.612138 c 0.663007,0 1.28637,-0.271825 1.755159,-0.7656777 C 2.423859,5.3530753 2.682075,4.6967264 2.682075,3.9985366 2.681898,3.3003468 2.423859,2.6439978 1.95507,2.150332 1.024248,1.1703016 -0.466295,1.1357618 -1.439872,2.0412838 l 0.594475,0.5531041 c 0.137685,0.1280498 0.195106,0.3037439 0.153685,0.469984 -0.04124,0.1664273 -0.172974,0.290265 -0.352258,0.3311698 L -3.4050704,3.933482 c -0.037688,0.00861 -0.075909,0.012917 -0.1134196,0.012917 -0.1386634,0 -0.2647938,-0.057566 -0.3555472,-0.1619343 -0.092798,-0.1068954 -0.1367079,-0.2498282 -0.1237304,-0.4023083 z",pause:"M 0,0 C 2.2092444,0 4,1.7908444 4,4 4,6.209244 2.2092444,8 0,8 -2.2091556,8 -4,6.209244 -4,4 -4,1.7908444 -2.2091556,0 0,0 Z M -0.50933333,2.0224 C -0.48897773,1.6902222 -1.2887111,1.6712889 -1.2881778,2.012356 c -0.00151,0.2334222 0,3.638133 0,3.979111 0,0.309422 0.79911113,0.334844 0.79911113,0.01458 M 1.2685333,2.0224 C 1.2888893,1.6902222 0.48897778,1.6712889 0.4896,2.0123556 c -0.001511,0.2334222 0,3.6381334 0,3.9791114 0,0.309422 0.7991111,0.334844 0.7991111,0.01458"}}},mounted:function(){this.loadAssets()},methods:{nextLevel:function(){this.level++},restartLevel:function(){this.level=new Number(this.level)},back:function(){this.reset(),this.$emit("back")},pause:function(t){t.ctrlKey||t.altKey||this.won||(this.isPaused=!this.isPaused)},place:function(t,e){return t*(e?this.height:this.width)},ejaculate:function(t){this.target={x:t.clientX,y:t.clientY,id:0}},animate:function(){this.isPaused||this.lost||this.won||(this.frame=requestAnimationFrame(this.animate))},reset:function(){this.$store.dispatch("reset"),this.germs=[],this.ovums=[],this.target={x:300,y:400},this.levelReady=!1,this.score=0,this.scoreSaved=!1},loadAssets:function(){var t=this;fetch("".concat("https://sper-man.herokuapp.com","/sprite/"),{mode:"cors",credentials:"include"}).then(function(t){return t.json()}).then(function(e){t.sprites=e,t.assetsLoaded=!0})},loadLevel:function(){var t=this;fetch("".concat("https://sper-man.herokuapp.com","/level/").concat(this.level),{mode:"cors",credentials:"include"}).then(function(t){return t.json()}).then(function(e){t.spawnCycle=e.spawnCycle||500,t.viscosity=e.viscosity||.002,t.maxScore=e.maxScore||5e3,t.minScore=e.minScore||500,e.sprites.forEach(function(e,i){var s=t.sprites.find(function(t){return t.name===e.name});s.id=i,("ovum"===e.type?t.ovums:t.germs).push(Object.assign({},e,s))}),t.levelReady=!0})},submitScore:function(){var t=this;fetch("".concat("https://sper-man.herokuapp.com","/score"),{mode:"cors",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({level:this.level,score:this.score})}).then(function(e){if(e.status>=200&&e.status<300&&(t.scoreSaved=!0,200===e.status||201===e.status))return e.json()}).then(function(e){if(e)if(e.endGame);else if(e.newScore)return t.$store.dispatch("setScore",e.newScore)})}},watch:{assetsLoaded:function(t){t&&this.loadLevel()},levelReady:function(t){t&&(this.animate(),this.$el.focus(),this.isPaused=!1,this.firstFrame=this.frame)},isPaused:function(t){t||this.animate()},level:function(){this.reset(),this.loadLevel()},won:function(t){if(t){var e=this.maxScore-(this.frame-this.firstFrame);this.score=e<this.minScore?this.minScore:e,this.submitScore()}}},computed:{style:function(){return{height:"".concat(this.height,"px"),width:"".concat(this.width,"px")}},won:function(){return this.$store.state.allFertelized},lost:function(){return this.$store.state.collision}},beforeDestroy:function(){cancelAnimationFrame(this.frame)}},Z=G,H=(i("11a5"),Object(g["a"])(Z,c,l,!1,null,null,null)),q=H.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{style:t.style,attrs:{transform:t.transform}},[i("polygon",{attrs:{"stroke-width":1,stroke:t.level.isAvailable?"#b6ffca":t.fill,fill:t.fill,points:t.draw(t.hexagon)}}),i("text",{staticClass:"level-number",attrs:{y:"-4"}},[t._v(t._s(t.level.level))]),t.level.isAvailable?i("polygon",{style:t.style,attrs:{fill:"#b6ffca",points:t.draw(t.rubbon)}}):t._e(),t.level.isAvailable?i("text",{staticClass:"level-score",attrs:{y:"10"}},[t._v(t._s(t.level.score))]):t._e(),t.level.isAvailable?t._e():i("path",{attrs:{d:"M 3,3.25 H 2.5 V 2.5 C 2.5,1.1215 1.3785001,0 1e-7,0 -1.3785,0 -2.5,1.1215 -2.5,2.5 V 3.25 H -3 c -0.13825,0 -0.25,0.112 -0.25,0.25 V 7.75 C -3.25,7.888 -3.13825,8 -3,8 H 3 C 3.13825,8 3.25,7.888 3.25,7.75 V 3.5 C 3.25,3.362 3.13825,3.25 3,3.25 Z M -2,2.5 c 0,-1.10275 0.89725,-2 2.0000001,-2 1.10275,0 2,0.89725 2,2 V 3.25 H -2 Z M 0.2500001,5.93075 V 6.25 c 0,0.138 -0.11175,0.25 -0.25,0.25 -0.13825,0 -0.25,-0.112 -0.25,-0.25 V 5.93075 C -0.39875,5.84425 -0.5,5.68475 -0.5,5.5 -0.5,5.22375 -0.27625,5 1e-7,5 c 0.27625,0 0.5,0.22375 0.5,0.5 0,0.1845 -0.10125,0.344 -0.25,0.43075 z"}})])},J=[],W={name:"Stage",props:{level:{type:Object,default:function(){return{isAvailable:!1,level:1,score:0}}}},data:function(){return{hexagon:[[0,16],[13.856,8],[13.856,-8],[0,-16],[-13.856,-8],[-13.856,8],[0,16]],rubbon:[[-13.856,4],[-13.856,8],[0,16],[13.856,8],[13.856,4],[-13.856,4]]}},methods:{draw:function(t){return t.join(" ")}},computed:{transform:function(){return"translate(".concat(90+Math.floor((this.level.level-1)/10)%2*30+(this.level.level-1)%10*60,", ").concat(75+52*Math.floor((this.level.level-1)/10),")scale(2)")},fill:function(){return this.level.isAvailable?"#6c9448":"#ffa13d"},style:function(){return{cursor:this.level.isAvailable?"pointer":""}}}},K=W,Q=(i("6b94"),Object(g["a"])(K,U,J,!1,null,null,null)),tt=Q.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[t.withButton?i("a",{staticClass:"nav-bar-back",on:{click:t.goBack}},[t._v("Back")]):t._e(),t.withPlayer?i("div",{staticClass:"nav-bar-player"},[i("span",[t._v(t._s(t.name)+": "+t._s(t.score))])]):t._e()])},it=[],st={name:"NavBar",store:m,props:{withButton:{type:Boolean,default:!0},withPlayer:{type:Boolean,default:!0}},methods:{goBack:function(){this.$store.dispatch("switchMode","menu")}},computed:{name:function(){return this.$store.state.player.name},score:function(){return this.$store.state.player.score}}},nt=st,rt=(i("5a28"),Object(g["a"])(nt,et,it,!1,null,null,null)),at=rt.exports,ot={name:"Stages",components:{Solo:q,Stage:tt,NavBar:at},data:function(){return{levels:[],choosenLevel:NaN,height:570,width:760}},mounted:function(){this.resize(),window.addEventListener("resize",this.resize),this.load()},methods:{load:function(){var t=this;fetch("".concat("https://sper-man.herokuapp.com","/level/"),{credentials:"include"}).then(function(t){return t.json()}).then(function(e){t.levels=e})},chooseLevel:function(t){t.isAvailable&&(this.choosenLevel=t.level)},restart:function(){this.choosenLevel=NaN,this.load()},resize:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight-4}},computed:{style:function(){return{height:"".concat(this.height,"px"),width:"".concat(this.width,"px")}}},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}},ct=ot,lt=(i("4c20"),Object(g["a"])(ct,a,o,!1,null,null,null)),ut=lt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"rooms"}},[t.allReady?t._e():i("div",[i("nav-bar"),t.roomId?i("div",[i("br"),i("h2",[t._v("ROOM "+t._s(t.roomId))]),t._l(t.players,function(e,s){return i("div",{key:e.id,staticClass:"player-zone",style:{color:e.isReady||e.id===t.currentPlayer.id&&t.ready?t.scheme[s]:"#666666"}},[i("span",{style:{color:t.scheme[s]}},[t._v(t._s(e.name))]),e.id!==t.currentPlayer.id?i("div",{staticClass:"player-status"},[t._v(t._s(e.isReady?"READY":"NOT READY"))]):t._e(),e.id===t.currentPlayer.id?i("div",{staticClass:"player-status"},[t._v(t._s(t.ready?"READY":"NOT READY"))]):t._e()])})],2):t._e(),i("button",{staticClass:"ready",on:{click:t.setReady}},[t._v(t._s(t.ready?"WAIT":"I AM READY"))])],1),t.allReady?i("multi",{attrs:{starters:t.players,currentPlayer:t.currentPlayer.id,room:t.roomId}}):t._e()],1)},dt=[],ft=i("75fc"),mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"multi",tabindex:"-1"}},[t.assetsLoaded?i("svg",{style:t.style,on:{mousemove:t.ejaculate}},[t._l(t.ovums,function(e){return i("ovum",{key:e.id,attrs:{id:e.id,d:e.shape,width:t.width,height:t.height,originX:t.place(e.x),originY:t.place(e.y,!0),originVX:e.vx,originVY:e.vy,vr:e.vr,frame:t.frame}})}),t._l(t.players,function(e){return i("sperma",{key:e.id,attrs:{id:e.id,color:e.color,width:t.width,height:t.height,target:t.target,frame:t.frame,viscosity:t.viscosity,room:t.room}})}),t._l(t.players,function(e,s){return i("text",{key:e.scoreId,style:{fill:e.color,stroke:e.color},attrs:{y:"20",x:t.positionateScore(s)}},[t._v(t._s(e.score.toFixed(2)))])})],2):t._e()])},pt=[],vt={name:"multi",store:m,components:{Sperma:x,Ovum:k},props:{height:{type:Number,default:570},width:{type:Number,default:760},starters:{type:Array,default:function(){return[]}},currentPlayer:{type:Number,default:0},room:{type:Number,default:0}},data:function(){return{target:{x:300,y:400},frame:0,viscosity:.002,sprites:[],ovums:[],scheme:["#fa5c18","#7189bf","#ffd881","#d97b7a"],assetsLoaded:!1,levelReady:!1,players:[]}},socket:{events:{score:function(t){var e=this.players[this.players.map(function(t){return t.id}).indexOf(t.id)].score,i=t.score+e;i<=0&&(i=0),e?this.players[this.players.map(function(t){return t.id}).indexOf(t.id)].score=i:i&&(this.players[this.players.map(function(t){return t.id}).indexOf(t.id)].score=i)}}},mounted:function(){var t=this;this.loadAssets(),this.players=this.starters.map(function(e,i){return e.color=t.scheme[i],e.score=0,e.scoreId="sc-".concat(e.id),e}),this.$io.socket.get("/multi/".concat(this.room,"/").concat(this.currentPlayer),function(t,e){})},methods:{place:function(t,e){return t*(e?this.height:this.width)},positionateScore:function(t){return this.players.length?this.width*(.5/this.players.length+t/this.players.length):this.width/2},ejaculate:function(t){this.target={x:t.clientX,y:t.clientY,id:this.currentPlayer}},animate:function(){this.frame=requestAnimationFrame(this.animate)},loadAssets:function(){var t=this;fetch("".concat("https://sper-man.herokuapp.com","/sprite/"),{mode:"cors",credentials:"include"}).then(function(t){return t.json()}).then(function(e){t.sprites=e,t.assetsLoaded=!0})}},watch:{assetsLoaded:function(t){t&&(this.ovums=[{id:0,name:"alpha",shape:this.sprites.find(function(t){return"alpha"===t.name}).shape,type:"ovum",vr:1,vx:0,vy:0,x:.5,y:.5}],this.animate())}},computed:{style:function(){return{height:"".concat(this.height,"px"),width:"".concat(this.width,"px")}}},beforeDestroy:function(){cancelAnimationFrame(this.frame)}},yt=vt,gt=(i("5a68"),Object(g["a"])(yt,mt,pt,!1,null,null,null)),bt=gt.exports,xt={name:"Rooms",store:m,components:{NavBar:at,Multi:bt},data:function(){return{roomId:0,allReady:!1,ready:!1,players:[],scheme:["#fa5c18","#7189bf","#ffd881","#d97b7a"],height:570,width:760}},methods:{setReady:function(){var t=this;this.$io.socket.get("/room/".concat(this.roomId,"/").concat(!this.ready),function(e,i){t.ready=e.player.isReady,t.allReady=e.allReady})},startGame:function(){}},socket:{events:{joined:function(t){this.players.push(t.player)},left:function(t){this.players.splice(this.players.map(function(t){return t.id}).indexOf(t.player.id),1)},status:function(t){this.$set(this.players[this.players.map(function(t){return t.id}).indexOf(t.player.id)],"isReady",t.player.isReady)},ready:function(t){this.allReady=t.allReady}}},computed:{currentPlayer:function(){return this.$store.state.player}},mounted:function(){var t=this;this.$io.socket.get("/room/join/",function(e,i){t.roomId=e.id,t.players=[].concat(Object(ft["a"])(e.players),[t.currentPlayer]),t.$io.socket.get("/room/".concat(t.roomId,"/").concat(t.ready),function(e,i){t.allReady=e.allReady})})},beforeDestroy:function(){var t=this;this.$io.socket.get("/room/leave/",function(e,i){t.roomId=0})}},wt=xt,_t=(i("e560"),Object(g["a"])(wt,ht,dt,!1,null,null,null)),St=_t.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"setting"}},[i("nav-bar"),i("h1",{staticClass:"coming-soon"},[t._v("Coming Soon")])],1)},Ot=[],kt={name:"Setting",components:{NavBar:at}},Mt=kt,Et=(i("c715"),Object(g["a"])(Mt,Ct,Ot,!1,null,null,null)),Nt=Et.exports,Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"scoreboard"}},[i("nav-bar",{attrs:{"with-player":!1}}),t._l(t.topTen,function(e,s){return i("div",{key:e.id,staticClass:"score-row"},[i("div",{staticClass:"score-item score-index"},[t._v(t._s(s+1))]),i("div",{staticClass:"score-item score-name"},[t._v(t._s(e.name||"Guest"))]),i("div",{staticClass:"score-item score-number"},[t._v(t._s(e.totalScore))])])}),i("br"),t.extraPlayer?i("div",{staticClass:"score-row"},[i("div",{staticClass:"score-item score-index"},[t._v(">10")]),i("div",{staticClass:"score-item score-name"},[t._v(t._s(t.extraPlayer.name))]),i("div",{staticClass:"score-item score-number"},[t._v(t._s(t.extraPlayer.totalScore))])]):t._e()],2)},Rt=[],$t={name:"ScoreBoard",components:{NavBar:at},store:m,data:function(){return{topTen:[]}},mounted:function(){this.load()},methods:{load:function(){var t=this;fetch("".concat("https://sper-man.herokuapp.com","/scoreboard/"),{credentials:"include"}).then(function(t){return t.json()}).then(function(e){t.topTen=e})}},computed:{extraPlayer:function(){var t=this;return this.topTen.find(function(e){return e.id===t.$store.state.player.id})?null:this.$store.state.player}}},jt=$t,At=(i("dfa0"),Object(g["a"])(jt,Lt,Rt,!1,null,null,null)),Pt=At.exports,zt={name:"App",store:m,components:{Stages:ut,Rooms:St,Setting:Nt,ScoreBoard:Pt,NavBar:at},data:function(){return{messages:["Loading, please wait","","Please connect to your Facebook account to proceed","You need to authenticate to the app to proceed","Error while connecting to the game, please reload!"]}},mounted:function(){this.$store.dispatch("login")},methods:{toggle:function(t){this.$store.dispatch("switchMode",t)}},computed:{mode:function(){return this.$store.state.mode},message:function(){return this.messages[this.$store.state.player.connected]},player:function(){return this.$store.state.player}}},Ft=zt,Yt=(i("034f"),Object(g["a"])(Ft,n,r,!1,null,null,null)),Vt=Yt.exports,It=(i("e4bd"),i("456d"),i("8055")),Xt=i.n(It),Dt=i("3844"),Tt=i.n(Dt),Bt={install:function(t,e,i){t.prototype.$io=Tt()(Xt.a),t.prototype.$io.sails.url=e,t.prototype.$io.sails.environment="development";var s=function(){var t=this;if(this.$options["socket"]){var e=this.$options.socket;if(e.events){var i=e.prefix||"";Object.keys(e.events).forEach(function(s){var n=e.events[s].bind(t);t.$io.socket.on(i+s,n),e.events[s].__binded=n})}}},n=function(){var t=this;if(this.$options["socket"]){var e=this.$options.socket;if(e.events){var i=e.prefix||"";Object.keys(e.events).forEach(function(s){t.$io.socket.off(i+s,e.events[s].__binded)})}}};t.mixin({beforeCreate:s,beforeDestroy:n})}};s["a"].config.productionTip=!1,s["a"].use(Bt,"https://sper-man.herokuapp.com"),window.fbAsyncInit=function(){FB.init({appId:"2325379254182181",autoLogAppEvents:!0,xfbml:!1,status:!0,version:"v4.0"}),new s["a"]({render:function(t){return t(Vt)}}).$mount("#app")}},"5a28":function(t,e,i){"use strict";var s=i("9780"),n=i.n(s);n.a},"5a68":function(t,e,i){"use strict";var s=i("9f10"),n=i.n(s);n.a},"64a9":function(t,e,i){},"6b94":function(t,e,i){"use strict";var s=i("2a5b"),n=i.n(s);n.a},"858f":function(t,e,i){},9780:function(t,e,i){},"9f10":function(t,e,i){},b8e0:function(t,e,i){},c715:function(t,e,i){"use strict";var s=i("3269"),n=i.n(s);n.a},cf05:function(t,e,i){t.exports=i.p+"img/logo.e470f9d1.png"},d1ef:function(t,e,i){"use strict";var s=i("858f"),n=i.n(s);n.a},dfa0:function(t,e,i){"use strict";var s=i("27eb"),n=i.n(s);n.a},dff1:function(t,e,i){},e4bd:function(t,e,i){},e560:function(t,e,i){"use strict";var s=i("4e68"),n=i.n(s);n.a}});
//# sourceMappingURL=app.e77a4a38.js.map