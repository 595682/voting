(this.webpackJsonppoll=this.webpackJsonppoll||[]).push([[0],{261:function(e,t,a){e.exports=a(470)},266:function(e,t,a){},267:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},268:function(e,t,a){},470:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),l=(a(266),a(267),a(268),a(11)),o=a(504),s=a(509),u=a(513),m=a(523),p=a(512),d=a(520),f=a(17),g=a.n(f),v=a(28),h=a(518),E=a(510),b=a(37),x=a(16),y=a(79),k=a(94),C=a(45),w=a(204),j=a(205),N=a(218),O=a(22),P=a.n(O),I=r.a.createContext(),S=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(w.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={comPicks:[],bauPicks:[],pplPicks:[],infraPicks:[],preName:"",name:""},a.setPicks=function(e){var t=e.target.name,n=e.target.value;a.state[t].includes(n)?(console.log(t+"=>"+n,"remove"),a.setState(Object(y.a)({},a.state,Object(x.a)({},t,a.state[t].filter((function(e){return e!==n})))))):a.state[t].length<3&&(console.log(t+"=>"+n,"add"),a.setState(Object(y.a)({},a.state,Object(x.a)({},t,[].concat(Object(b.a)(a.state[t]),[n])))))},a.submit=function(){console.log(a.state),P.a.post("http://localhost:8081/votePoll",a.state)},a.setName=function(e){a.setState(Object(y.a)({},a.state,{preName:e.target.value}))},a.login=function(){a.state.preName&&a.setState(Object(y.a)({},a.state,{name:a.state.preName}))},a}return Object(N.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return console.log(this.state),r.a.createElement(I.Provider,{value:{state:this.state,actions:{setPicks:this.setPicks,submit:this.submit,setName:this.setName,login:this.login}}},this.props.children)}}]),t}(n.Component),D=I;console.log(D);var W=Object(o.a)((function(e){return{root:{margin:"20px 0"},opContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px",width:"100%"},optionWrapper:{display:"flex",flexDirection:"row",alignItems:"center"}}})),A=function(e){var t=W(),a=r.a.useState([]),c=Object(l.a)(a,2),i=c[0],o=c[1];r.a.useEffect((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:8081/get2");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=Object(n.useContext)(D),m=u.state,p=u.actions;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement("div",{className:t.opContainer},r.a.createElement((function(e){return e.options.map((function(e){return console.log(e),r.a.createElement("div",{className:t.optionWrapper,key:e._id},r.a.createElement(h.a,{name:"bauPicks",onChange:p.setPicks,color:"primary",checked:m.bauPicks.includes(e._id),value:e._id}),r.a.createElement(s.a,null,e.name))}))}),{options:i}))))};console.log(D);var _=Object(o.a)((function(e){return{root:{margin:"20px 0"},opContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px",width:"100%"},optionWrapper:{display:"flex",flexDirection:"row",alignItems:"center"}}})),B=function(e){var t=_(),a=r.a.useState([]),c=Object(l.a)(a,2),i=c[0],o=c[1];r.a.useEffect((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:8081/get1");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=Object(n.useContext)(D),m=u.state,p=u.actions;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement("div",{className:t.opContainer},r.a.createElement((function(e){return e.options.map((function(e){return r.a.createElement("div",{className:t.optionWrapper,key:e._id},r.a.createElement(h.a,{name:"comPicks",onChange:p.setPicks,color:"primary",checked:m.comPicks.includes(e._id),value:e._id}),r.a.createElement(s.a,null,e.name))}))}),{options:i}))))};console.log(D);var T=Object(o.a)((function(e){return{root:{margin:"20px 0"},opContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px",width:"100%"},optionWrapper:{display:"flex",flexDirection:"row",alignItems:"center"}}})),G=function(e){var t=T(),a=Object(n.useContext)(D),c=a.state,i=a.actions,o=r.a.useState([]),u=Object(l.a)(o,2),m=u[0],p=u[1];r.a.useEffect((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:8081/get3");case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement("div",{className:t.opContainer},r.a.createElement((function(e){return e.options.map((function(e){return r.a.createElement("div",{className:t.optionWrapper,key:e._id},r.a.createElement(h.a,{name:"pplPicks",onChange:i.setPicks,color:"primary",checked:c.pplPicks.includes(e._id),value:e._id}),r.a.createElement(s.a,null,e.name))}))}),{options:m}))))};console.log(D);var H=Object(o.a)((function(e){return{root:{margin:"20px 0"},opContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px",width:"100%"},optionWrapper:{display:"flex",flexDirection:"row",alignItems:"center"}}})),U=function(e){var t=H(),a=r.a.useState([]),c=Object(l.a)(a,2),i=c[0],o=c[1];r.a.useEffect((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:8081/get4");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=Object(n.useContext)(D),m=u.state,p=u.actions;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement("div",{className:t.opContainer},r.a.createElement((function(e){return e.options.map((function(e){return r.a.createElement("div",{className:t.optionWrapper,key:e._id},r.a.createElement(h.a,{name:"infraPicks",onChange:p.setPicks,color:"primary",checked:m.infraPicks.includes(e._id),value:e._id}),r.a.createElement(s.a,null,e.name))}))}),{options:i}))))},J=a(519),R=a(48),K=Object(o.a)((function(e){return{root:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#053099"},wrapper:{width:"60%",height:"50vh",backgroundColor:"white",padding:e.spacing(4)},paper:{marginTop:e.spacing(6),padding:e.spacing(6),textAlign:"center",color:e.palette.text.secondary},title:{},header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"20px"},login:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"100%",justifyContent:"center"}}})),L=Object(R.f)((function(e){var t=K();var a=r.a.useState(0),n=Object(l.a)(a,2),c=n[0],i=n[1],o=["Communication","BAU","PPL Management","Infrastructure"],f=function(){i((function(e){return e+1}))},g=function(){i((function(e){return e-1}))},v=function(){e.history.push("/results")};return console.log(e),r.a.createElement(D.Consumer,null,(function(e){var a=e.state,n=e.actions;return a.name?r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.header},r.a.createElement(s.a,{variant:"h6",className:t.title},"SSD improvement poll")),r.a.createElement(m.a,{activeStep:c},o.map((function(e,t){return r.a.createElement(p.a,Object.assign({key:e},{}),r.a.createElement(d.a,{},e))}))),r.a.createElement("div",null,c===o.length?r.a.createElement("div",null,r.a.createElement(s.a,{className:t.instructions},"Thanks for voting,"),r.a.createElement(u.a,{onClick:v,className:t.button},"Results")):r.a.createElement("div",null,r.a.createElement(s.a,{className:t.instructions},function(e){switch(e){case 0:return r.a.createElement(B,null);case 1:return r.a.createElement(A,null);case 2:return r.a.createElement(G,null);case 3:return r.a.createElement(U,null);default:return"Unknown step"}}(c)),r.a.createElement("div",null,r.a.createElement(u.a,{disabled:0===c,onClick:g,className:t.button},"Back"),c===o.length-1?r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){n.submit(),f()},className:t.button},"Send Vote"):r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:f,className:t.button},"Next")))))):r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.header},r.a.createElement(s.a,{variant:"h6",className:t.title},"SSD improvement poll")),r.a.createElement("div",{className:t.login},r.a.createElement(J.a,{id:"time",type:"text",label:"Cognizant ID",value:a.preName,onChange:n.setName}),r.a.createElement(u.a,{color:"primary",variant:"contained",onClick:n.login},"Join"," "))))}))})),M=a(522),z=a(524),V=a(516),$=a(517),q=Object(o.a)((function(e){return{root:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#053099"},wrapper:{width:"40%",height:"50vh",backgroundColor:"white",padding:e.spacing(4)},paper:{marginTop:e.spacing(6),padding:e.spacing(6),textAlign:"center",color:e.palette.text.secondary},title:{},header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"20px"},formWrapper:{display:"flex",flexDirection:"column",height:"100%",alignItems:"stretch",justifyContent:"space-around"}}})),F=function(e){var t=q();r.a.useEffect((function(){return Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:8081/getAll");case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))}),[]);var a=r.a.useState(1),n=Object(l.a)(a,2),c=n[0],i=n[1],o=r.a.useState(""),m=Object(l.a)(o,2),p=m[0],d=m[1];var f=r.a.useState(!1),h=Object(l.a)(f,2),E=h[0],b=h[1],x=function(e,t){"clickaway"!==t&&b(!1)};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.header},r.a.createElement(s.a,{variant:"h6",className:t.title},"Add entries to the poll")),r.a.createElement("div",{className:t.formWrapper},r.a.createElement(J.a,{id:"time",type:"text",label:"Idea",value:p,onChange:function(e){console.log(e.target.value),d(e.target.value)}}),r.a.createElement(V.a,{label:"Category",onChange:function(e){console.log(e.target.value),i(e.target.value)},value:c},r.a.createElement(z.a,{value:1},"Communication"),r.a.createElement(z.a,{value:2},"BAU"),r.a.createElement(z.a,{value:3},"People Management"),r.a.createElement(z.a,{value:4},"Infrastructure")),r.a.createElement(u.a,{color:"primary",variant:"contained",onClick:function(){P.a.post("http://localhost:8081/addIdea",{idea:p,category:c}).then((function(e){b(!0)}));d("")}}," ","Submit"," "))),r.a.createElement(M.a,{open:E,autoHideDuration:2e3,onClose:x,key:"top,center"},r.a.createElement((function(e){return r.a.createElement($.a,Object.assign({elevation:6,variant:"filled"},e))}),{onClose:x,severity:"success"},"This is a success message!")))},Q=a(57),X=Object(o.a)((function(e){return{root:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#053099"},wrapper:{width:"60%",height:"60vh",backgroundColor:"white",padding:e.spacing(4)},paper:{marginTop:e.spacing(6),padding:e.spacing(6),textAlign:"center",color:e.palette.text.secondary},title:{},header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"20px"},formWrapper:{display:"flex",flexDirection:"column",height:"calc(100% - 50px)",alignItems:"stretch",justifyContent:"space-around"},legend:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},label:{marginRight:"20px"}}})),Y=function(e){var t,a=X(),n=r.a.useState([]),c=Object(l.a)(n,2),i=c[0],o=c[1];r.a.useEffect((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:8081/getAll");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=r.a.useState(0),m=Object(l.a)(u,2),p=m[0],d=m[1];return t=i.filter((function(e){return 0===p||e.category===p})).map((function(e){return{name:e.name,votes:e.votes.length,category:e.category}})),r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.wrapper},r.a.createElement("div",{className:a.header},r.a.createElement(s.a,{variant:"h6",className:a.title},"Results")),r.a.createElement("div",{className:a.legend},r.a.createElement("div",{className:a.label},"Show:"),r.a.createElement("div",null," ",r.a.createElement(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:p,onChange:function(e){d(e.target.value)}},[{filter:0,label:"All"},{filter:1,label:"Communication"},{filter:2,label:"BAU"},{filter:3,label:"PPL management"},{filter:4,label:"Infrastructure"}].map((function(e){return r.a.createElement(z.a,{value:e.filter},e.label)}))))),r.a.createElement("div",{className:a.formWrapper},r.a.createElement(Q.c,null,r.a.createElement(Q.b,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(Q.e,{dataKey:"name"}),r.a.createElement(Q.f,null),r.a.createElement(Q.d,null),r.a.createElement(Q.a,{dataKey:"votes",fill:"#053099"}))))))},Z=a(129);var ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z.a,null,r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/",exact:!0},r.a.createElement(S,null,r.a.createElement(L,null))),r.a.createElement(R.a,{path:"/add",exact:!0,component:F}),r.a.createElement(R.a,{path:"/results",exact:!0,component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[261,1,2]]]);
//# sourceMappingURL=main.355efa88.chunk.js.map