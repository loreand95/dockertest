(this.webpackJsonpuniflix=this.webpackJsonpuniflix||[]).push([[0],{161:function(e,t,n){},162:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(37),a=n.n(i),s=(n(161),n(162),n(316)),o=n(105),l=n(63),j=Object(o.a)({typography:{fontFamily:"Poppins",button:{fontWeight:600}},components:{MuiAppBar:{defaultProps:{enableColorOnDark:!0}}},palette:{mode:"dark",primary:{main:"#E50914"},secondary:{main:l.a[500]}}}),u=n(19),d=n(18),b=n(13),h=n(5),x=n(295),p=n(227),f=n(285),m=n(16),O=n.n(m),v=n(25),g=n(44),y=n.n(g),w={url:"http://35.223.107.128:3006/shopservice/rest",timeout:6e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},C=y.a.create({baseURL:w.url,timeout:w.timeout,headers:w.configHeaders});function k(e){return W.apply(this,arguments)}function W(){return(W=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/movies?category="+t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/movies/"+t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.post("/movies/"+t+"/buy").then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=n(130),A=n.n(D),T=n(0),N=Object(f.a)((function(e){return{showBtn:{position:"absolute",right:"50px",bottom:"30px"},title:{position:"absolute",left:"5%",top:"40%"},description:Object(h.a)({fontWeight:900},e.breakpoints.down("sm"),{visibility:"hidden"})}}));var F=function(){var e=N(),t=c.a.useState([]),n=Object(b.a)(t,2),i=n[0],a=n[1];return Object(r.useEffect)((function(){k("best").then((function(e){a(e.data[0])}))}),[]),Object(T.jsxs)("div",{style:{position:"relative"},children:[Object(T.jsx)("img",{src:i.posterPath,alt:"",style:{position:"relative",maxHeight:500,width:"100%",objectFit:"cover"}}),Object(T.jsx)("div",{className:e.showBtn,children:Object(T.jsx)(x.a,{variant:"contained",component:u.b,to:"/films/"+i.id,startIcon:Object(T.jsx)(A.a,{}),children:"Preview"})}),Object(T.jsxs)("div",{className:e.title,children:[Object(T.jsx)(p.a,{variant:"h3",style:{fontWeight:900},color:"white",children:i.title}),Object(T.jsxs)(p.a,{className:e.description,variant:"h6",color:"white",children:[i.year," - ",i.author," - ",i.duration," min"]})]})]})},L=n(50),P=n(296),V=n(131),B=n.n(V);function R(e){var t=e.film;return Object(T.jsxs)("div",{style:{margin:"10px",position:"relative"},children:[Object(T.jsx)("img",{src:t.posterPath,alt:"",style:{borderRadius:"5%",position:"relative",maxWidth:250,minHeight:"200px",objectFit:"cover"}}),Object(T.jsx)(P.a,{"aria-label":"add an alarm",style:{top:"30px",left:"50px",position:"absolute",width:"150px",height:"150px",color:"white"},component:u.b,to:"/films/"+t.id,children:Object(T.jsx)(B.a,{})}),Object(T.jsx)("div",{style:{bottom:"10px",left:"10px",position:"absolute"},children:Object(T.jsxs)(p.a,{variant:"subtitle1",color:"white",children:[t.title," (",t.year,") - ",t.duration," min"]})})]})}var E=n(84),H=n.n(E),U=n(85),q=n.n(U);function M(e){var t=e.children,n=e.disabled,r=e.onClick;return Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)(x.a,{variant:"default",disabled:n,onClick:r,children:t})})}function G(){var e=c.a.useContext(L.VisibilityContext),t=e.isFirstItemVisible,n=e.scrollPrev;return Object(T.jsx)(M,{disabled:t,onClick:function(){return n()},children:Object(T.jsx)(H.a,{style:{color:"white"}})})}function Y(){var e=c.a.useContext(L.VisibilityContext),t=e.isLastItemVisible,n=e.scrollNext;return Object(T.jsx)(M,{disabled:t,onClick:function(){return n()},children:Object(T.jsx)(q.a,{style:{color:"white"}})})}var z=function(e){var t=e.categoryName,n=c.a.useState([]),i=Object(b.a)(n,2),a=i[0],s=i[1],o=c.a.useState([]),l=Object(b.a)(o,2),j=l[0],u=l[1],d=function(e){return!!j.find((function(t){return t===e}))};return Object(r.useEffect)((function(){k(t).then((function(e){s(e.data)}))}),[t]),Object(T.jsxs)("div",{children:[Object(T.jsx)(p.a,{style:{color:"white",marginTop:"15px",marginLeft:"15px",textTransform:"capitalize"},variant:"h5",children:t}),Object(T.jsx)(L.ScrollMenu,{LeftArrow:G,RightArrow:Y,style:{overflowX:"hidden"},children:a.map((function(e){return Object(T.jsx)(R,{itemId:e.id,film:e,onClick:(t=e.id,function(e){e.getItemById,e.scrollToItem;var n=d(t);u((function(e){return n?e.filter((function(e){return e!==t})):e.concat(t)}))}),selected:d(e.id)},e.id);var t}))})]})},$=n(297),J=n(278),X=n(299),K=n(21);function Q(e){var t=e.onlyLogo,n=Object(K.c)((function(e){return e.user}));return Object(T.jsx)(J.a,{children:Object(T.jsx)($.a,{position:"static",children:Object(T.jsxs)(X.a,{children:[Object(T.jsx)(p.a,{style:{fontWeight:900},variant:"h6",sx:{flexGrow:1,textDecoration:"none",color:"white"},component:u.b,to:"/",children:"Uniflix"}),Object(T.jsx)(T.Fragment,{children:n.fullname?Object(T.jsxs)("div",{children:[Object(T.jsx)(x.a,{color:"inherit",component:u.b,to:"/library",children:"Library"}),Object(T.jsx)(x.a,{color:"inherit",component:u.b,to:"/account",children:n.fullname})]}):!t&&Object(T.jsx)(x.a,{color:"inherit",component:u.b,to:"/signin",children:"Sign In"})})]})})})}var Z=n(53);var _=Object(f.a)((function(e){return{container:{display:"flex",flexDirection:"column",flexGrow:1,height:"100%"},content:{display:"flex",flexDirection:"column",flexGrow:1},footer:{paddingLeft:"5px"}}})),ee=function(e){var t=e.children,n=e.onlyLogo,r=_(),c=Object(Z.a)();return Object(T.jsxs)("div",{className:r.container,children:[Object(T.jsx)(Q,{onlyLogo:n}),Object(T.jsx)("div",{style:{flexGrow:1,backgroundColor:c.palette.background.paper},children:t}),Object(T.jsx)("div",{className:r.footer,children:Object(T.jsx)(p.a,{variant:"caption",children:"\xa9 2021 Uniflix, All rights reserved"})})]})};function te(){return Object(T.jsxs)(ee,{children:[Object(T.jsx)(F,{}),Object(T.jsx)(z,{categoryName:"adventure"}),Object(T.jsx)(z,{categoryName:"drama"})]})}var ne=n(56),re=n(279),ce=n(284),ie=n(302),ae=n(288),se=n(304),oe=n(292),le=n(300),je=n(90),ue={url:"http://35.223.107.128:8080/userservice/rest",timeout:6e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},de=y.a.create({baseURL:ue.url,timeout:ue.timeout,headers:ue.configHeaders});function be(){return(be=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de.post("/signin",t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de.post("/signup",t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return de.defaults.headers.common.Authorization="Bearer ".concat(t),e.abrupt("return",de.get("/library").then((function(e){return e.data})).catch((function(e){throw e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe={fullname:null,email:null,token:null},me=Object(je.b)({name:"user",initialState:fe,reducers:{logout:function(e){return fe},login:function(e,t){return t.payload}}}),Oe=function(e){return function(t){return function(e){return be.apply(this,arguments)}(e).then((function(e){t(ye(e))}))}},ve=function(e){return function(t){return function(e){return he.apply(this,arguments)}(e).then((function(e){t(ye(e))}))}},ge=me.actions,ye=ge.login,we=ge.logout,Ce=me.reducer,ke=n(303);function We(){var e=Object(d.g)(),t=Object(K.b)(),n=Object(r.useState)(),c=Object(b.a)(n,2),i=c[0],a=c[1],s=Object(r.useState)({error:!1,helperText:""}),o=Object(b.a)(s,2),l=o[0],j=o[1];return Object(T.jsx)(ee,{onlyLogo:!0,children:Object(T.jsxs)(le.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(re.a,{}),Object(T.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(T.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(T.jsxs)(J.a,{component:"form",onSubmit:function(n){n.preventDefault(),a(!0);var r=new FormData(n.currentTarget),c={email:r.get("email"),password:r.get("password")};t(Oe(c)).then((function(){a(!1),e.push("/home")})).catch((function(e){a(!1),j(Object(ne.a)(Object(ne.a)({},l),{},{error:!0,helperText:"Wrong password"})),console.log(e)}))},noValidate:!0,sx:{mt:1},children:[Object(T.jsx)(ce.a,{margin:"normal",defaultValue:"and@mail.it",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(T.jsx)(ce.a,{error:l.error,helperText:l.helperText,margin:"normal",defaultValue:"123456",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(T.jsx)(ie.a,{control:Object(T.jsx)(ae.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(T.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:i?Object(T.jsx)(ke.a,{size:20,style:{color:"white"}}):"Sign In"}),Object(T.jsxs)(oe.a,{container:!0,children:[Object(T.jsx)(oe.a,{item:!0,xs:!0}),Object(T.jsx)(oe.a,{item:!0,children:Object(T.jsx)(se.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})})}function Se(){var e=Object(K.b)();return Object(T.jsx)(ee,{onlyLogo:!0,children:Object(T.jsxs)(le.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(re.a,{}),Object(T.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(T.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(T.jsxs)(J.a,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget),r={fullName:n.get("firstName")+n.get("lastName"),email:n.get("email"),password:n.get("password")};e(ve(r))},sx:{mt:3},children:[Object(T.jsxs)(oe.a,{container:!0,spacing:2,children:[Object(T.jsx)(oe.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(ce.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(T.jsx)(oe.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(ce.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(T.jsx)(oe.a,{item:!0,xs:12,children:Object(T.jsx)(ce.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(T.jsx)(oe.a,{item:!0,xs:12,children:Object(T.jsx)(ce.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(T.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(T.jsx)(oe.a,{container:!0,justifyContent:"flex-end",children:Object(T.jsx)(oe.a,{item:!0,children:Object(T.jsx)(se.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})}function Ie(){var e=Object(d.g)(),t=Object(K.b)(),n=Object(K.c)((function(e){return e.user}));return Object(T.jsx)(ee,{children:Object(T.jsxs)(le.a,{component:"main",maxWidth:"xs",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(T.jsx)(re.a,{}),Object(T.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexGrow:1,flexDirection:"column",alignItems:"center"},children:[Object(T.jsx)(p.a,{component:"h1",variant:"h5",children:"Account"}),Object(T.jsx)(J.a,{component:"form",noValidate:!0,sx:{mt:3},children:Object(T.jsxs)(oe.a,{container:!0,spacing:2,children:[Object(T.jsx)(oe.a,{item:!0,xs:12,sm:12,children:Object(T.jsx)(ce.a,{defaultValue:n.fullname,disabled:!0,autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(T.jsx)(oe.a,{item:!0,xs:12,children:Object(T.jsx)(ce.a,{defaultValue:n.email,disabled:!0,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})})]})})]}),Object(T.jsx)(x.a,{fullWidth:!0,variant:"contained",sx:{mb:5},onClick:function(n){n.preventDefault(),t(function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(we()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){e.push("/home")}))},children:"Logout"})]})})}var De=n(294),Ae={url:"http://35.223.107.128:3005/movieservice/rest",timeout:6e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},Te=y.a.create({baseURL:Ae.url,timeout:Ae.timeout,headers:Ae.configHeaders});function Ne(){return(Ne=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Te.get("/actors/"+t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(){return(Fe=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Te.get("/movies/"+t+"/actors").then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(e){var t=e.actor;return Object(T.jsxs)("div",{style:{margin:"10px",position:"relative"},children:[Object(T.jsx)("img",{src:t.profilePath,alt:"",style:{borderRadius:"100%",position:"relative",width:100,height:100,objectFit:"cover"}}),Object(T.jsx)(P.a,{"aria-label":"add an alarm",style:{top:"0px",left:"0px",position:"absolute",width:100,height:100,color:"white"},component:u.b,to:"/actors/"+t.id,children:Object(T.jsx)(p.a,{variant:"caption",children:t.name})})]})}function Pe(e){var t=e.actors,n=c.a.useState(t),r=Object(b.a)(n,1)[0],i=c.a.useState([]),a=Object(b.a)(i,2),s=a[0],o=a[1],l=function(e){return!!s.find((function(t){return t===e}))};return Object(T.jsxs)(J.a,{sx:{mt:3},children:[Object(T.jsx)(p.a,{style:{color:"white",textTransform:"capitalize"},variant:"h4",children:"Cast"}),Object(T.jsx)(L.ScrollMenu,{LeftArrow:Be,RightArrow:Re,style:{overflowX:"hidden"},children:r.map((function(e){return Object(T.jsx)(Le,{itemId:e.actorId,actor:e,onClick:(t=e.actorId,function(e){e.getItemById,e.scrollToItem;var n=l(t);o((function(e){return n?e.filter((function(e){return e!==t})):e.concat(t)}))}),selected:l(e.actorId)},e.actorId);var t}))})]})}function Ve(e){var t=e.children,n=e.disabled,r=e.onClick;return Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)(x.a,{variant:"default",disabled:n,onClick:r,children:t})})}function Be(){var e=c.a.useContext(L.VisibilityContext),t=e.isFirstItemVisible,n=e.scrollPrev;return Object(T.jsx)(Ve,{disabled:t,onClick:function(){return n()},children:Object(T.jsx)(H.a,{style:{color:"white"}})})}function Re(){var e=c.a.useContext(L.VisibilityContext),t=e.isLastItemVisible,n=e.scrollNext;return Object(T.jsx)(Ve,{disabled:t,onClick:function(){return n()},children:Object(T.jsx)(q.a,{style:{color:"white"}})})}var Ee=n(306),He=n(305),Ue=n(282),qe=n(283);function Me(e){var t=e.onClose,n=e.selectedValue,r=e.open,c=e.film;return Object(T.jsxs)(He.a,{onClose:function(){t(n)},open:r,children:[Object(T.jsxs)(Ue.a,{children:["Buy Movie at $",c.price]}),Object(T.jsx)(Ee.a,{children:Object(T.jsxs)("div",{style:{display:"flex"},children:[Object(T.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+c.posterPath,alt:c.title,style:{borderRadius:"3%",height:200}}),Object(T.jsxs)(qe.a,{component:"div",sx:{display:"flex",marginLeft:"20px",flexDirection:"column",justifyContent:"space-between"},children:[Object(T.jsxs)(qe.a,{children:[Object(T.jsxs)(p.a,{children:["Title: ",c.title]}),Object(T.jsxs)(p.a,{children:["Author: ",c.author]})]}),Object(T.jsxs)(x.a,{onClick:function(){(function(e){return I.apply(this,arguments)})(c.id).then((function(e){c.bought=!0,t(n)}))},sx:{width:"200px"},variant:"contained",children:["PAY $",c.price]})]})]})})]})}var Ge=["username@gmail.com","user02@gmail.com"];function Ye(e){var t=e.film,n=Object(d.g)(),c=Object(K.c)((function(e){return e.user})),i=r.useState(!1),a=Object(b.a)(i,2),s=a[0],o=a[1],l=r.useState(Ge[1]),j=Object(b.a)(l,2),u=j[0],h=j[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Me,{selectedValue:u,open:s,onClose:function(e){o(!1),h(e)},film:t}),Object(T.jsx)(x.a,{onClick:function(){c.token||n.push("/signin"),o(!0)},disabled:t.bought,sx:{mt:5,mb:5,width:"200px"},variant:"contained",children:t.bought?"BOUGHT":"BUY $ ".concat(t.price)})]})}var ze={url:"http://35.223.107.128:3007/reviewservice/rest",timeout:6e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},$e=y.a.create({baseURL:ze.url,timeout:ze.timeout,headers:ze.configHeaders});function Je(){return(Je=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$e.get("/movies/"+t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Xe=n(301),Ke=n(289),Qe=n(309),Ze=n(308),_e=n(307),et=n(293);function tt(e){var t=e.movie,n=Object(r.useState)(),c=Object(b.a)(n,2),i=c[0],a=c[1];return Object(r.useEffect)((function(){(function(e){return Je.apply(this,arguments)})(t.id).then(a)}),[t]),Object(T.jsxs)(qe.a,{sx:{mt:3},children:[Object(T.jsx)(p.a,{variant:"h4",children:"Reviews"}),Object(T.jsx)(Xe.a,{children:i&&i.map((function(e){return Object(T.jsx)(nt,{review:e},e.id)}))})]})}function nt(e){var t=e.review;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(Ke.a,{alignItems:"flex-start",children:[Object(T.jsx)(_e.a,{children:Object(T.jsx)(et.a,{alt:t.author,src:"/static/images/avatar/1.jpg"})}),Object(T.jsx)(Ze.a,{primary:t.author,secondary:t.content})]}),Object(T.jsx)(Qe.a,{variant:"inset",component:"li"})]})}function rt(e){e.data;var t=Object(d.h)().id,n=Object(r.useState)(),c=Object(b.a)(n,2),i=c[0],a=c[1],s=Object(r.useState)(),o=Object(b.a)(s,2),l=o[0],j=o[1];return Object(r.useEffect)((function(){t&&(function(e){return S.apply(this,arguments)}(t).then(a),function(e){return Fe.apply(this,arguments)}(t).then(j))}),[t]),Object(T.jsx)(ee,{children:Object(T.jsxs)(le.a,{maxWidth:"xl",children:[Object(T.jsxs)("div",{style:{textAlign:"center"},children:[i?Object(T.jsx)("img",{alt:i.title,style:{width:"100%",height:"400px",objectFit:"cover"},src:"https://image.tmdb.org/t/p/original"+i.backdropPath}):Object(T.jsx)("div",{style:{maxWidth:"60%",margin:"0 auto"},children:Object(T.jsx)(De.a,{height:300})}),Object(T.jsxs)("div",{style:{maxWidth:"60%",margin:"0 auto",marginTop:"15px"},children:[Object(T.jsx)(p.a,{variant:"h3",children:i?i.title:Object(T.jsx)(De.a,{})}),Object(T.jsx)(p.a,{variant:"h6",children:i?"".concat(i.author," - ").concat(i.year," - ").concat(i.duration," min"):Object(T.jsx)(De.a,{})}),i&&Object(T.jsx)(Ye,{film:i}),Object(T.jsxs)("div",{style:{textAlign:"justify"},children:[Object(T.jsx)(p.a,{variant:"h4",children:"Description"}),Object(T.jsx)(p.a,{variant:"body",children:i?i.overview:Object(T.jsx)(De.a,{})})]})]})]}),Object(T.jsxs)("div",{style:{maxWidth:"60%",margin:"0 auto"},children:[i&&l&&Object(T.jsx)(Pe,{actors:l}),i&&Object(T.jsx)(tt,{movie:i})]})]})})}function ct(){return Object(T.jsx)(ee,{children:Object(T.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",alignItems:"center",justifyContent:"center"},children:[Object(T.jsx)(p.a,{variant:"h1",children:"404"}),Object(T.jsx)(p.a,{variant:"h4",children:"Page not found"})]})})}var it=n(135),at=["component"];var st=function(e){var t=e.component,n=Object(it.a)(e,at),r=Object(K.c)((function(e){return e.user})).token;return Object(T.jsx)(d.b,Object(ne.a)(Object(ne.a)({},n),{},{render:function(e){return r?Object(T.jsx)(t,Object(ne.a)({},e)):Object(T.jsx)(d.a,{to:"/signin"})}}))},ot=n(15),lt=n(298),jt=n(311),ut=n(315),dt=n(314),bt=n(310),ht=n(312),xt=n(313),pt=n(132),ft=n.n(pt);function mt(e){var t=e.movies;return Object(T.jsx)(bt.a,{component:lt.a,children:Object(T.jsxs)(jt.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(T.jsx)(ht.a,{children:Object(T.jsxs)(xt.a,{children:[Object(T.jsx)(dt.a,{children:"Title"}),Object(T.jsx)(dt.a,{children:"Duration"}),Object(T.jsx)(dt.a,{children:"Purchase Date"}),Object(T.jsx)(dt.a,{children:"Price"}),Object(T.jsx)(dt.a,{})]})}),t?Object(T.jsx)(ut.a,{children:t.map((function(e){return Object(T.jsxs)(xt.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(T.jsx)(dt.a,{children:e.title}),Object(T.jsx)(dt.a,{children:e.duration}),Object(T.jsx)(dt.a,{children:ft()(e.purchaseDate).format("DD/MM/YYYY")}),Object(T.jsx)(dt.a,{children:e.price}),Object(T.jsx)(dt.a,{children:Object(T.jsx)(x.a,{component:u.b,to:"/films/"+e.id,children:"Show"})})]},e.id)}))}):Object(T.jsx)(Ot,{})]})})}function Ot(){return Object(T.jsx)(ut.a,{children:Object(ot.a)(Array(5)).map((function(e,t){return Object(T.jsxs)(xt.a,{children:[Object(T.jsx)(dt.a,{children:Object(T.jsx)(De.a,{})}),Object(T.jsx)(dt.a,{children:Object(T.jsx)(De.a,{})}),Object(T.jsx)(dt.a,{children:Object(T.jsx)(De.a,{})}),Object(T.jsx)(dt.a,{children:Object(T.jsx)(De.a,{})}),Object(T.jsx)(dt.a,{children:Object(T.jsx)(De.a,{})})]},t)}))})}function vt(){var e=Object(K.b)(),t=r.useState(),n=Object(b.a)(t,2),c=n[0],i=n[1];return r.useEffect((function(){e(function(){var e=Object(v.a)(O.a.mark((function e(t,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().user.token,e.abrupt("return",xe(r));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).then((function(e){i(e)}))}),[e]),Object(T.jsx)(ee,{children:Object(T.jsx)(le.a,{component:"main",maxWidth:"l",sx:{mt:5,height:"100%",display:"flex",flexDirection:"column"},children:Object(T.jsx)(mt,{movies:c})})})}function gt(){var e=Object(d.h)().actorId,t=r.useState(),n=Object(b.a)(t,2),c=n[0],i=n[1];return r.useEffect((function(){e&&function(e){return Ne.apply(this,arguments)}(e).then(i)}),[e]),Object(T.jsx)(ee,{children:Object(T.jsxs)(le.a,{component:"main",maxWidth:"md",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(T.jsx)(re.a,{}),Object(T.jsx)(J.a,{sx:{mt:5},children:c?Object(T.jsx)(yt,{actor:c}):Object(T.jsx)(De.a,{variant:"circular",width:200,height:200})})]})})}function yt(e){var t=e.actor;return Object(T.jsxs)(J.a,{sx:{textAlign:"center"},children:[Object(T.jsxs)(J.a,{children:[Object(T.jsx)("img",{src:t.profilePath,alt:"actor",style:{borderRadius:"100%",position:"relative",width:200,height:200,objectFit:"cover"}}),Object(T.jsx)(p.a,{variant:"h4",children:t.name})]}),Object(T.jsxs)(J.a,{sx:{mt:3,textAlign:"justify"},children:[Object(T.jsxs)(J.a,{children:[Object(T.jsx)(p.a,{sx:{mb:1},variant:"h4",children:"Description"}),Object(T.jsxs)(J.a,{sx:{display:"flex"},children:[Object(T.jsx)(p.a,{style:{fontWeight:600},children:"Name:\xa0"}),Object(T.jsx)(p.a,{children:t.name})]}),Object(T.jsxs)(J.a,{sx:{display:"flex"},children:[Object(T.jsx)(p.a,{style:{fontWeight:600},children:"Birthday:\xa0"}),Object(T.jsx)(p.a,{children:t.birthday})]}),Object(T.jsxs)(J.a,{sx:{display:"flex"},children:[Object(T.jsx)(p.a,{style:{fontWeight:600},children:"Birthplace:\xa0"}),Object(T.jsx)(p.a,{children:t.birthplace})]})]}),Object(T.jsxs)(J.a,{sx:{mt:3},children:[Object(T.jsx)(p.a,{sx:{mb:1},variant:"h4",children:"Biography"}),Object(T.jsx)(p.a,{variant:"body",children:t.biography})]})]})]})}function wt(){return Object(T.jsx)(u.a,{children:Object(T.jsxs)(d.d,{children:[Object(T.jsx)(d.b,{exact:!0,path:"/",children:Object(T.jsx)(d.a,{to:"/home"})}),Object(T.jsx)(d.b,{path:"/actors/:actorId",component:gt}),Object(T.jsx)(d.b,{path:"/signin",component:We}),Object(T.jsx)(d.b,{path:"/signup",component:Se}),Object(T.jsx)(st,{path:"/account",component:Ie}),Object(T.jsx)(st,{path:"/library",component:vt}),Object(T.jsx)(d.b,{path:"/films/:id",component:rt}),Object(T.jsx)(d.b,{path:"/home",component:te}),Object(T.jsx)(d.b,{path:"*",children:Object(T.jsx)(ct,{})})]})})}var Ct=function(){return Object(T.jsxs)(s.a,{theme:j,children:[Object(T.jsx)(re.a,{}),Object(T.jsx)(wt,{})]})},kt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,317)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},Wt=n(24),St=Object(Wt.b)({user:Ce}),It=n(40),Dt=n(133),At={key:"root",version:1,storage:n.n(Dt).a},Tt=Object(It.g)(At,St),Nt=Object(je.a)({reducer:Tt,middleware:function(e){return e({serializableCheck:{ignoredActions:[It.a,It.f,It.b,It.c,It.d,It.e]}})}}),Ft=n(134),Lt=Object(It.h)(Nt);a.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(K.a,{store:Nt,children:Object(T.jsx)(Ft.a,{loading:null,persistor:Lt,children:Object(T.jsx)(Ct,{})})})}),document.getElementById("root")),kt()}},[[215,1,2]]]);
//# sourceMappingURL=main.d4051fd8.chunk.js.map