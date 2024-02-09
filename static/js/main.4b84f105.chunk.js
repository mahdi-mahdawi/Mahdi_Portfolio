(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(53),r=t.n(s),i=(t(73),t(74),t(75),t(76),t(111)),c=t(107),m=t(113),o=t(33),u=t.n(o),d=t(34),p=t.n(d),E=t(35),g=t.n(E),v=t(36),b=t.n(v),f=t(54),h=t(28);const N=()=>{const[e,a]=Object(n.useState)("home"),[t,s]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=()=>{window.scrollY>50?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const r=e=>{a(e)};return l.a.createElement(h.a,null,l.a.createElement(i.a,{expand:"md",className:t?"scrolled":""},l.a.createElement(c.a,null,l.a.createElement(i.a.Brand,{href:"/"},l.a.createElement("img",{src:u.a,alt:"Logo"})),l.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(m.a,{className:"ms-auto"},l.a.createElement(m.a.Link,{href:"#home",className:"home"===e?"active navbar-link":"navbar-link",onClick:()=>r("home")},"Home"),l.a.createElement(m.a.Link,{href:"#skills",className:"skills"===e?"active navbar-link":"navbar-link",onClick:()=>r("skills")},"Skills"),l.a.createElement(m.a.Link,{href:"#projects",className:"projects"===e?"active navbar-link":"navbar-link",onClick:()=>r("projects")},"Projects")),l.a.createElement("span",{className:"navbar-text"},l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/mahdi-mahdawi/"},l.a.createElement("img",{src:p.a,alt:""})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:g.a,alt:""})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:b.a,alt:""}))),l.a.createElement(f.a,{to:"#connect"},l.a.createElement("button",{className:"vvd"},l.a.createElement("span",null,"Let\u2019s Connect"))))))))};var S=t(108),x=t(109),_=t(55),y=t.n(_),I=t(110),k=(t(43),t(18)),w=t.n(k);const C=()=>{const[e,a]=Object(n.useState)(0),[t,s]=Object(n.useState)(!1),[r,i]=Object(n.useState)(""),[m,o]=Object(n.useState)(300-100*Math.random()),[u,d]=Object(n.useState)(1),p=[" Software Engineer"," Software Architect"," DevOps"];Object(n.useEffect)(()=>{let e=setInterval(()=>{E()},m);return()=>{clearInterval(e)}},[r]);const E=()=>{let n=p[e%p.length],l=t?n.substring(0,r.length-1):n.substring(0,r.length+1);i(l),t&&o(e=>e/2),t||l!==n?t&&""===l?(s(!1),a(e+1),d(1),o(500)):d(e=>e+1):(s(!0),d(e=>e-1),o(2e3))};return l.a.createElement("section",{className:"banner",id:"home"},l.a.createElement(c.a,null,l.a.createElement(S.a,{className:"aligh-items-center"},l.a.createElement(x.a,{xs:12,md:6,xl:7},l.a.createElement(w.a,null,e=>{let{isVisible:a}=e;return l.a.createElement("div",{className:a?"animate__animated animate__fadeIn":""},l.a.createElement("span",{className:"tagline"},"Welcome to my Portfolio"),l.a.createElement("h1",null,"Hi! I'm Mahdi Mahdawi, ",l.a.createElement("span",{className:"txt-rotate",dataPeriod:"1000","data-rotate":'[ " Software Engineer", " Software Architect",  " DevOps" ]'},l.a.createElement("span",{className:"wrap"},r))),l.a.createElement("p",null,"Motivated Software Engineer with professional experience leading projects through all phases of software development life cycle. Demonstrated expertise in providing support for Web and Enterprise Applications with Micro-services while improving systems and enhancing performance. Skilled in using technologies such as Java, Spring and Spring Boot, and Angular."),l.a.createElement("button",{onClick:()=>console.log("connect")},"Let\u2019s Connect ",l.a.createElement(I.a,{size:25})))})),l.a.createElement(x.a,{xs:12,md:6,xl:5},l.a.createElement(w.a,null,e=>{let{isVisible:a}=e;return l.a.createElement("div",{className:a?"animate__animated animate__zoomIn":""},l.a.createElement("img",{src:y.a,alt:"Header Img"}))})))))};var O=t(46),j=t.n(O),D=t(56),L=t.n(D),T=t(57),P=t.n(T),A=t(58),U=t.n(A),K=(t(97),t(98),t(99),t(59)),z=t.n(K);const M=()=>l.a.createElement("section",{className:"skill",id:"skills"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"skill-bx wow zoomIn"},l.a.createElement("h2",null,"Skills"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",l.a.createElement("br",null)," Lorem Ipsum has been the industry's standard dummy text."),l.a.createElement(U.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0,className:"owl-carousel owl-theme skill-slider"},l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:j.a,alt:"Image"}),l.a.createElement("h5",null,"Web Development")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:L.a,alt:"Image"}),l.a.createElement("h5",null,"Brand Identity")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:P.a,alt:"Image"}),l.a.createElement("h5",null,"Logo Design")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:j.a,alt:"Image"}),l.a.createElement("h5",null,"Web Development"))))))),l.a.createElement("img",{className:"background-image-left",src:z.a,alt:"Image"}));var B=t(112);const R=e=>{let{title:a,description:t,imgUrl:n}=e;return l.a.createElement(x.a,{size:12,sm:6,md:4},l.a.createElement("div",{className:"proj-imgbx"},l.a.createElement("img",{src:n}),l.a.createElement("div",{className:"proj-txtx"},l.a.createElement("h4",null,a),l.a.createElement("span",null,t))))};var W=t(47),q=t.n(W),H=t(48),V=t.n(H),F=t(49),J=t.n(F),G=t(60),Y=t.n(G);const Q=()=>{const e=[{title:"Business Startup",description:"Design & Development",imgUrl:q.a},{title:"Business Startup",description:"Design & Development",imgUrl:V.a},{title:"Business Startup",description:"Design & Development",imgUrl:J.a},{title:"Business Startup",description:"Design & Development",imgUrl:q.a},{title:"Business Startup",description:"Design & Development",imgUrl:V.a},{title:"Business Startup",description:"Design & Development",imgUrl:J.a}];return l.a.createElement("section",{className:"project",id:"projects"},l.a.createElement(c.a,null,l.a.createElement(S.a,null,l.a.createElement(x.a,{size:12},l.a.createElement(w.a,null,a=>{let{isVisible:t}=a;return l.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},l.a.createElement("h2",null,"Projects"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),l.a.createElement(B.a.Container,{id:"projects-tabs",defaultActiveKey:"first"},l.a.createElement(m.a,{variant:"pills",className:"nav-pills mb-5 justify-content-center align-items-center",id:"pills-tab"},l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{eventKey:"first"},"Tab 1")),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{eventKey:"second"},"Tab 2")),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{eventKey:"third"},"Tab 3"))),l.a.createElement(B.a.Content,{id:"slideInUp",className:t?"animate__animated animate__slideInUp":""},l.a.createElement(B.a.Pane,{eventKey:"first"},l.a.createElement(S.a,null,e.map((e,a)=>l.a.createElement(R,Object.assign({key:a},e))))),l.a.createElement(B.a.Pane,{eventKey:"section"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.")),l.a.createElement(B.a.Pane,{eventKey:"third"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.")))))})))),l.a.createElement("img",{className:"background-image-right",src:Y.a}))};var X=t(61),Z=t.n(X);const $=()=>{const e={firstName:"",lastName:"",email:"",phone:"",message:""},[a,t]=Object(n.useState)(e),[s,r]=Object(n.useState)("Send"),[i,m]=Object(n.useState)({}),o=(e,n)=>{t({...a,[e]:n})},u=async n=>{n.preventDefault(),r("Sending...");let l=await fetch("http://localhost:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)});r("Send");let s=await l.json();t(e),200===s.code?m({succes:!0,message:"Message sent successfully"}):m({succes:!1,message:"Something went wrong, please try again later."})};return l.a.createElement("section",{className:"contact",id:"connect"},l.a.createElement(c.a,null,l.a.createElement(S.a,{className:"align-items-center"},l.a.createElement(x.a,{size:12,md:6},l.a.createElement(w.a,null,e=>{let{isVisible:a}=e;return l.a.createElement("img",{className:a?"animate__animated animate__zoomIn":"",src:Z.a,alt:"Contact Us"})})),l.a.createElement(x.a,{size:12,md:6},l.a.createElement(w.a,null,e=>{let{isVisible:t}=e;return l.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("form",{onSubmit:u},l.a.createElement(S.a,null,l.a.createElement(x.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"text",value:a.firstName,placeholder:"First Name",onChange:e=>o("firstName",e.target.value)})),l.a.createElement(x.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"text",value:a.lasttName,placeholder:"Last Name",onChange:e=>o("lastName",e.target.value)})),l.a.createElement(x.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"email",value:a.email,placeholder:"Email Address",onChange:e=>o("email",e.target.value)})),l.a.createElement(x.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"tel",value:a.phone,placeholder:"Phone No.",onChange:e=>o("phone",e.target.value)})),l.a.createElement(x.a,{size:12,className:"px-1"},l.a.createElement("textarea",{rows:"6",value:a.message,placeholder:"Message",onChange:e=>o("message",e.target.value)}),l.a.createElement("button",{type:"submit"},l.a.createElement("span",null,s))),i.message&&l.a.createElement(x.a,null,l.a.createElement("p",{className:!1===i.success?"danger":"success"},i.message)))))})))))};var ee=t(64),ae=t(114);const te=e=>{let{status:a,message:t,onValidated:s}=e;const[r,i]=Object(n.useState)("");Object(n.useEffect)(()=>{"success"===a&&c()},[a]);const c=()=>{i("")};return l.a.createElement(x.a,{lg:12},l.a.createElement("div",{className:"newsletter-bx wow slideInUp"},l.a.createElement(S.a,null,l.a.createElement(x.a,{lg:12,md:6,xl:5},l.a.createElement("h3",null,"Subscribe to our Newsletter",l.a.createElement("br",null)," & Never miss latest updates"),"sending"===a&&l.a.createElement(ae.a,null,"Sending..."),"error"===a&&l.a.createElement(ae.a,{variant:"danger"},t),"success"===a&&l.a.createElement(ae.a,{variant:"success"},t)),l.a.createElement(x.a,{md:6,xl:7},l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),r&&r.indexOf("@")>-1&&s({EMAIL:r})}},l.a.createElement("div",{className:"new-email-bx"},l.a.createElement("input",{value:r,type:"email",onChange:e=>i(e.target.value),placeholder:"Email Address"}),l.a.createElement("button",{type:"submit"},"Submit")))))))},ne=()=>{const e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAILCHIMP_URL,"?u=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAILCHIMP_U,"&id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAILCHIMP_ID);return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee.a,{url:e,render:e=>{let{subscribe:a,status:t,message:n}=e;return l.a.createElement(te,{status:t,message:n,onValidated:e=>a(e)})}}))},le=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement(c.a,null,l.a.createElement(S.a,{className:"align-items-center"},l.a.createElement(ne,null),l.a.createElement(x.a,{size:12,sm:6},l.a.createElement("img",{src:u.a,alt:"Logo"})),l.a.createElement(x.a,{size:12,sm:6,className:"text-center text-sm-end"},l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:p.a,alt:"Icon"})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:g.a,alt:"Icon"})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:b.a,alt:"Icon"}))),l.a.createElement("p",null,"Copyright 2024. All Rights Reserved")))));var se=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(C,null),l.a.createElement(M,null),l.a.createElement(Q,null),l.a.createElement($,null),l.a.createElement(le,null))};var re=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:s,getTTFB:r}=a;t(e),n(e),l(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(se,null))),re()},33:function(e,a,t){e.exports=t.p+"static/media/logo.b5d6bf8d.svg"},34:function(e,a,t){e.exports=t.p+"static/media/nav-icon1.dff2b624.svg"},35:function(e,a,t){e.exports=t.p+"static/media/nav-icon2.0393a6c8.svg"},36:function(e,a,t){e.exports=t.p+"static/media/nav-icon3.81ff4e97.svg"},46:function(e,a,t){e.exports=t.p+"static/media/meter1.dea05c56.svg"},47:function(e,a,t){e.exports=t.p+"static/media/project-img1.70af9240.png"},48:function(e,a,t){e.exports=t.p+"static/media/project-img2.98b3bc23.png"},49:function(e,a,t){e.exports=t.p+"static/media/project-img3.08e5b042.png"},55:function(e,a,t){e.exports=t.p+"static/media/header-img.bfe6d1a6.svg"},56:function(e,a,t){e.exports=t.p+"static/media/meter2.7fb1b05f.svg"},57:function(e,a,t){e.exports=t.p+"static/media/meter3.19e4204d.svg"},59:function(e,a,t){e.exports=t.p+"static/media/color-sharp.d6409477.png"},60:function(e,a,t){e.exports=t.p+"static/media/color-sharp2.42c4dbf6.png"},61:function(e,a,t){e.exports=t.p+"static/media/contact-img.a8822e20.svg"},66:function(e,a,t){e.exports=t(103)},73:function(e,a,t){},74:function(e,a,t){e.exports=t.p+"static/media/logo.78873827.svg"},75:function(e,a,t){},98:function(e,a,t){e.exports=t.p+"static/media/arrow1.f750170a.svg"},99:function(e,a,t){e.exports=t.p+"static/media/arrow2.9070490b.svg"}},[[66,1,2]]]);
//# sourceMappingURL=main.4b84f105.chunk.js.map