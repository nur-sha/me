(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/me.20a2bcab.jpeg"},60:function(e,t,a){e.exports=a.p+"static/media/about.7a38c8fb.jpeg"},71:function(e,t,a){e.exports=a(85)},76:function(e,t,a){},77:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(76),a(15)),l=(a(77),a(120)),m=a(54),s=a(24),u="/",d="/components",p="/about",h="/projects",f="/experience",g=a(108),b=a(123),E=a(110),y=a(112),v=a(113),x=a(57),k=a.n(x),w=a(58),j=a.n(w),O=a(55),C=a.n(O),S=Object(g.a)((function(e){return Object(b.a)({wrapper:{color:e.palette.primary.main,display:"flex",textAlign:"left",marginBottom:"47px"},landingWrapper:{height:"calc(100vh - 135px)",display:"flex",flexDirection:"column",justifyContent:"flex-end"},left:{},imageBackground:{width:"calc(100% - 20px)",minHeight:"calc(100vh - 135px)",background:"url(".concat(C.a,")"),backgroundImage:"contain",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},right:{color:e.palette.text.primary},button:{paddingTop:0,paddingLeft:0},resumeButton:{padding:"20px",backgroundColor:e.actionButton[e.palette.type],"& span":{color:e.palette.common.white,"& svg":{marginRight:"10px"}}}})})),I=function(){var e=S();Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,justify:"flex-start"},r.a.createElement(E.a,{item:!0,xs:12,md:9},r.a.createElement("div",{className:e.imageBackground})),r.a.createElement(E.a,{item:!0,xs:12,md:3,className:e.landingWrapper},r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",{className:e.left},r.a.createElement(y.a,{"aria-label":"delete",className:e.button,onClick:function(){var e=document.createElement("textarea");e.value="nurshahadahrashid@gmail.com",document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove()}},r.a.createElement(k.a,{fontSize:"small"}))),r.a.createElement("div",{className:e.right},r.a.createElement("b",null,"COPY MY EMAIL:")," ",r.a.createElement("br",null),r.a.createElement("span",null,"nurshahadahrashid@gmail.com"))),r.a.createElement(v.a,{size:"large",className:e.resumeButton},r.a.createElement(j.a,null),"Download Resume"))))},N=function(){return r.a.createElement("div",null)},T=a(30),W=a(2),P=a(36),L=a(17),B=a(42);function z(e){var t=e.isOpened,a=Object(B.a)(),n=Object(L.c)(Object(T.a)({},t?function(e){return{top:"translate(3, 17) rotate(-45)",center:"translate(4, 3) rotate(45)",bottom:"translate(3, 17) rotate(-45)",color:e.palette.text.secondary}}(a):function(e){return{top:"translate(2, 3) rotate(0)",center:"translate(2, 9) rotate(0)",bottom:"translate(9, 15) rotate(0)",color:e.palette.text.secondary}}(a),{config:L.b.stiff})),i=n.top,o=n.center,c=n.bottom,l=n.color;return r.a.createElement(L.a.svg,{width:"20",height:"20",fill:l,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement(L.a.rect,{width:"20",height:"1",transform:i}),r.a.createElement(L.a.rect,{width:"20",height:"1",transform:o}),r.a.createElement(L.a.rect,{width:"20",height:"1",transform:c}))}var q=Object(g.a)((function(e){return Object(b.a)({font:{color:e.menu[e.palette.type],fontWeight:"bold",fontSize:12}})})),A=[{id:-1,title:"Home",link:u,offsetWidth:26},{id:0,title:"About",link:p,offsetWidth:26},{id:1,title:"Education",link:p,offsetWidth:16},{id:2,title:"Projects",link:h,offsetWidth:36},{id:3,title:"Skills",link:p,offsetWidth:42},{id:4,title:"Contact",link:p,offsetWidth:30}],R=function(e){e.onClick;var t=q(),a=window.location.hash==="#".concat(u);console.log("isHomePage",a);var i=Object(n.useState)(a),o=Object(c.a)(i,2),l=o[0],m=o[1];Object(n.useEffect)((function(){m(a)}),[a]);var s=Object(L.d)(A.length,{config:{mass:5,tension:2e3,friction:200},opacity:l?1:0,x:l?0:10,width:l?90:0,from:{opacity:0,x:200,width:0}});return r.a.createElement(n.Fragment,null,s.reverse().map((function(e,a){var n=e.x,i=e.opacity,o=e.width,c=Object(W.a)(e,["x","opacity","width"]),m=A[a];return r.a.createElement(L.a.div,{key:m.id,className:"trails-text",style:Object(T.a)({},c,{opacity:i,visibility:i.interpolate((function(e){return 0===e?"hidden":"visible"})),width:o.setValue(l?90-A[a].offsetWidth:0),display:"inline-block",transform:n.interpolate((function(e){return"translate3d(".concat(e,"px, 0px, 1px)")}))})},r.a.createElement(L.a.div,{style:{width:o.setValue(l?90-A[a].offsetWidth:0),display:"inline-block"}},r.a.createElement(v.a,{key:m.id,classes:{root:t.font},component:P.b,to:m.link},m.title)))})),!a&&r.a.createElement("div",{onClick:function(){m((function(e){return!e}))}},r.a.createElement(z,{isOpened:l})))},M=a(122),D=a(5),F=Object(D.a)((function(e){return{sizeSmall:{height:"28px"},root:{height:"37px",width:"52px",boxSizing:"border-box"},switchBase:{padding:"4px",top:"11px",left:"11px","&$checked":{transform:"translateX(15px)","& $thumb":{backgroundColor:e.palette.common.black},"& + $track":{opacity:1,backgroundColor:e.palette.common.white}}},track:{borderRadius:8,opacity:1,backgroundColor:e.palette.common.black},thumb:{width:"7px",height:"7px",boxShadow:"none",backgroundColor:e.palette.common.white},checked:{}}}))((function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],o=a[1];return r.a.createElement(M.a,Object.assign({value:"switch",checked:i,disableRipple:!0},e,{onChange:function(t,a){o(a),e.onChange&&e.onChange()}}))})),G=function(e){var t=e.onChange,a=Object(n.useState)(window.location.hash==="#".concat(u)),i=Object(c.a)(a,2),o=(i[0],i[1]),l=Object(n.useState)(!1),m=Object(c.a)(l,2),s=m[0];m[1];return console.log("close",s),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:12,lg:6},r.a.createElement(E.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(F,{onChange:t}))),r.a.createElement(E.a,{item:!0,lg:6,xs:12},r.a.createElement(E.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",style:{overflowX:"hidden"}},r.a.createElement(R,{onClick:function(e){o(e==="#".concat(u))}}))))},U=a(44),Y=Object(g.a)((function(){return Object(b.a)({imagePotrait:{width:"65%",paddingBottom:"1rem"},potraitWrapper:{display:"flex",flexDirection:"column",alignItems:"center","& .MuiTypography-h4":{paddingBottom:"0.5rem"}}})})),$=function(e){var t=e.className,a=e.content,n=a.name,i=a.designation,o=a.image,c=Y();return r.a.createElement("div",{className:"".concat(c.potraitWrapper," ").concat(t)},r.a.createElement("img",{className:c.imagePotrait,src:o,alt:n}),r.a.createElement(U.a,{variant:"h4",display:"block"},n),r.a.createElement(U.a,{variant:"h5",display:"block"},i))},H=a(60),X={potraitSection:{name:"Nurshahadah",designation:"UX Engineer",image:a.n(H).a},aboutSection:{quote:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",basicInfo:{age:30,experience:5,residence:"Singaporean"},interest:["Read articles","Browse pinterest","Watch stand-up comedy and true crime show"],languages:[{name:"English",proficiency:4},{name:"Malay",proficiency:5}],summary:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",signOffName:"shahadah"}},J=a(114),V=Object(g.a)((function(e){return Object(b.a)({listItemIcon:{minWidth:"auto"},listItemText:{margin:0,fontSize:e.typography.body1.fontSize}})})),K=function(e){var t=e.content,a=t.age,n=t.experience,i=t.residence,o=V();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{primary:"Age: ".concat(a," years old"),className:o.listItemText}),r.a.createElement(J.a,{primary:"Experience: ".concat(n," years"),className:o.listItemText}),r.a.createElement(J.a,{primary:"Residence: ".concat(i),className:o.listItemText}))},Q=Object(D.a)({section:{paddingTop:"3rem"}})((function(e){var t=e.component,a=e.className,n=e.classes,i=e.title,o=t;return r.a.createElement("div",{className:"".concat(n.section," ").concat(a)},i&&r.a.createElement(U.a,{variant:"h4"},i),r.a.createElement(o,null))})),Z=a(115),_=a(124),ee=a(116),te=a(43),ae=a.n(te),ne=Object(g.a)((function(e){return Object(b.a)({listItem:{width:"auto",paddingLeft:0,paddingTop:"0.75rem",paddingBottom:0},listItemText:{margin:0,fontSize:e.typography.body1.fontSize}})})),re=function(e){e.className;var t=e.list,a=ne();return r.a.createElement(Z.a,{disablePadding:!0},t.map((function(e){return r.a.createElement(_.a,{dense:!0,disableGutters:!0,key:e},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null)),r.a.createElement(J.a,{primary:e,className:a.listItemText}))})))},ie=function(e){var t=e.content;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{variant:"h4"},"Interest"),r.a.createElement(re,{list:t}))},oe=Object(g.a)((function(){return Object(b.a)({listItem:{width:"auto",paddingLeft:0,paddingTop:"0.75rem",paddingBottom:"1.5rem"},listItemIcon:{minWidth:"auto"}})})),ce=function(e){var t=e.activeNumber,a=e.className,n=(e.maxRating,oe());return r.a.createElement(r.a.Fragment,null,Array.apply(0,Array(10)).map((function(e,i){return r.a.createElement(_.a,Object.assign({key:i,className:"".concat(n.listItem," ").concat(a)},i>t&&{disabled:!0}),r.a.createElement(ee.a,{className:n.listItemIcon},r.a.createElement(ae.a,null)))})))},le=Object(D.a)({flexContainer:{display:"flex",flexDirection:"row",padding:0},listItem:{width:"auto",paddingLeft:0,paddingTop:"0.75rem",paddingBottom:"1.5rem"},listItemIcon:{minWidth:"auto"}})((function(e){var t=e.classes,a=(e.className,e.content);return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{variant:"h4",gutterBottom:!0},"Languages"),a.map((function(e,a){var n=e.name,i=e.proficiency;return r.a.createElement("div",{key:n},r.a.createElement(U.a,null,n),r.a.createElement(Z.a,{className:t.flexContainer},r.a.createElement(ce,{activeNumber:i})))})))})),me=Object(g.a)((function(e){return Object(b.a)({pt2rem:{paddingTop:"2rem"}})})),se=function(){var e=me();return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement($,{content:X.potraitSection})),r.a.createElement(E.a,{item:!0,xs:12,md:5},r.a.createElement(U.a,{variant:"h2"},"About"),r.a.createElement(U.a,{variant:"h4"},"\u201cLorem ipsum dolor sit amet, consectetuer ",r.a.createElement("br",null)," adipiscing elit. \u201c"),r.a.createElement(Q,{className:e.pt2rem,component:function(){return r.a.createElement(K,{content:X.aboutSection.basicInfo})}}),r.a.createElement(Q,{component:function(){return r.a.createElement(ie,{content:X.aboutSection.interest})}}),r.a.createElement(Q,{component:function(){return r.a.createElement(le,{content:X.aboutSection.languages})}}),r.a.createElement(U.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate")))},ue=a(61),de=a(117),pe=a(118),he=a(121),fe=Object(g.a)((function(e){return Object(b.a)({wrapper:{display:"flex",flexWrap:"wrap","& > h1":{justifyContent:"center"},"& > *":{padding:"32px",margin:e.spacing(1),width:e.spacing(36),height:e.spacing(20)}},portal:{}})})),ge=[{id:0,name:"Entry System",company:"Cadmus Technologies P/L",year:"2012",description:"",techStack:""},{id:1,name:"Kampung Glam Cafe",company:"Cadmus Technologies P/L",year:"2012",description:"",techStack:""},{id:2,name:"Orphans United P/L 1",company:"Cadmus Technologies P/L",year:"2012",description:"",techStack:""},{id:3,name:"Orphans United P/L 2",company:"Cadmus Technologies P/L",year:"2012",description:"",techStack:""},{id:4,name:"Orphans United P/L 3",company:"Cadmus Technologies P/L",year:"2012",description:"",techStack:""},{id:5,name:"Orphans United P/L 4",company:"Cadmus Technologies P/L",year:"2012",description:"",techStack:""}],be=r.a.forwardRef((function(e,t){return r.a.createElement(de.a,e)})),Ee=function(){var e=fe(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],o=a[1],l=Object(n.useState)(),m=Object(c.a)(l,2),s=(m[0],m[1]),u=function(){o(!1),s(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{variant:"h1",align:"center"},"Projects"),r.a.createElement("div",{className:e.wrapper},ge.map((function(e){return r.a.createElement(pe.a,{key:e.name,variant:"outlined",elevation:1,onClick:function(t){return function(e,t){o(!0),s(t)}(0,e.name)}},r.a.createElement(U.a,{variant:"h4"},e.name),r.a.createElement(U.a,{variant:"body1"},e.company),r.a.createElement(U.a,{variant:"caption"},e.year))}))),r.a.createElement(he.a,{fullScreen:!0,open:i,onClose:u,TransitionComponent:be},r.a.createElement("div",null,r.a.createElement("div",{onClick:u},"Close"),r.a.createElement("div",null,"Content of project goes here")),r.a.createElement("div",null,"this is a modal dialog")))},ye=function(){return r.a.createElement("div",null,"Experience pge")};function ve(){var e=Object(m.a)(["\n  width: 98vw;\n  overflow-x: hidden;\n  padding: 48px;\n"]);return ve=function(){return e},e}var xe=ue.a.div(ve()),ke=function(e){var t=e.onChange,a=Object(n.useContext)(s.d).location,i=Object(L.e)(a,(function(e){return e.pathname}),{from:{position:"absolute",width:"calc(100% - 96px)",opacity:0,transform:"translateY(-100px)"},enter:{opacity:1,transform:"translateY(0px)"},leave:{opacity:0,transform:"translateY(100px)"}});return r.a.createElement(xe,null,r.a.createElement(G,{onChange:t}),i.map((function(e){var t=e.item,a=e.props,n=e.key;return r.a.createElement(L.a.div,{key:n,style:a},r.a.createElement(s.c,{location:t},r.a.createElement(s.a,{exact:!0,path:u,component:I}),r.a.createElement(s.a,{path:d,component:N}),r.a.createElement(s.a,{path:p,component:se}),r.a.createElement(s.a,{path:h,component:Ee}),r.a.createElement(s.a,{path:f,component:ye})))})))},we=a(65),je={brightPurple:"rgba(128, 0, 128, 1)",fadeBrightPurple:"rgba(128, 0, 128, 0.5)",purple:"rgba(98, 54, 255, 1)",fadePurple:"rgba(98, 54, 255, 0.5)",darkGrey:"#131313",darkMonochrome:"#444444",lightestGrey:"#c4c4c4",white:"#fff",black:"#000"},Oe={palette:{primary:{light:je.black,main:je.white,dark:je.white},secondary:{light:je.purple,main:je.purple,dark:je.brightPurple,contrastText:"#fff"},action:{hover:"rgba(0,164,230,0.2)",selected:"rgba(0,164,230,0.2)"},monoChrome:{light:je.black,main:je.white,dark:je.darkGrey,contrastText:"#fff"},text:{primary:je.black,secondary:je.darkMonochrome}}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";return Object(we.a)(Object(T.a)({},Oe,{palette:Object(T.a)({type:e},Oe.palette,{primary:{light:je.black,main:je.black,dark:je.white,contrastText:"#fff"},background:{default:"light"===e?"#fff":"#000"},text:{primary:"light"===e?"#000":"#fff",secondary:"light"===e?"#131313":"#c4c4c4",disabled:"light"===e?"#c4c4c4":"#444444"}}),menu:{dark:"#fff",light:"#6d7278"},actionButton:{dark:"#800080",light:"#800080"},typography:{fontFamily:"Poppins, Roboto, sans-serif",h1:{fontSize:"3rem",fontWeight:"bold",paddingBottom:"30px"},h2:{fontSize:"2rem",fontWeight:"bold",paddingBottom:"1rem"},h3:{fontSize:"1.5rem",fontWeight:"bold"},h4:{fontSize:"1.25rem",fontWeight:"bold",paddingBottom:"1rem"},h5:{fontSize:"1rem"},caption:{fontSize:"0.75rem"},button:{fontSize:"0.75rem",textTransform:"capitalize"}},overrides:{MuiListItem:{root:{color:"light"===e?"#000":"#fff","&$disabled":{opacity:1,color:"light"===e?"#c4c4c4":"#444444"}},disabled:{},gutters:{paddingRight:"12px"}},MuiListItemText:{primary:{fontSize:"1rem"}},MuiListItemIcon:{root:{color:"inherit",minWidth:"24px"}},MuiSvgIcon:{root:{height:"16px",width:"16px"}},MuiPaper:{outlined:{backgroundColor:"transparent"}}}}))},Se=a(119);var Ie=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement(Se.a,{theme:Ce(a)},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null),r.a.createElement(P.a,{basename:"/"},r.a.createElement(ke,{onChange:function(){i("light"===a?"dark":"light")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.529328c7.chunk.js.map