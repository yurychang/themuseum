(this["webpackJsonpthe-museum"]=this["webpackJsonpthe-museum"]||[]).push([[0],{226:function(e,a,t){e.exports=t.p+"static/media/chloe-evans-erHBElNC1DU-unsplash.261d8e11.jpg"},227:function(e,a,t){e.exports=t.p+"static/media/debby-hudson-bb8_zSReIF0-unsplash.1e5d5ad6.jpg"},228:function(e,a,t){e.exports=t.p+"static/media/juan-rojas-Fs_RNpOMmF8-unsplash.2d64283f.jpg"},229:function(e,a,t){e.exports=t.p+"static/media/chris-barbalis-x31PAWGYbGE-unsplash.6b1b03a5.jpg"},230:function(e,a,t){e.exports=t.p+"static/media/hero-bg2.5d1377fa.jpg"},231:function(e,a,t){e.exports=t.p+"static/media/edward-howell-Jbf9nNe_qaE-unsplash.10d1ec56.jpg"},233:function(e,a,t){e.exports=t(438)},437:function(e,a,t){},438:function(e,a,t){"use strict";t.r(a);t(234),t(243);var l=t(0),n=t.n(l),r=t(113),c=t.n(r),s=t(41),i=t(69),m=t(25),o=t(217),u=t(445),d=t(441),E=t(444),h=t(440),g=t(15),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=function(e,a){var t=new RegExp("^(".concat(e," )")),l=new RegExp(" ".concat(e));return a.match(t)||a.match(l)?a:a+" "+e};return"object"===typeof e?e.reduce((function(e,a){return t(a,e)}),a):t(e,a)}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=function(e,a){var t=new RegExp("^(".concat(e," )")),l=new RegExp(" ".concat(e));return a.replace(l,"").replace(t,"")};return"object"===typeof e?e.reduce((function(e,a){return t(a,e)}),a):t(e,a)}},f=function(e){var a=e.children,t=e.isShow,r=void 0!==t&&t,c=e.response,s=void 0===c?"":c,i=e.expand,m=void 0===i?"":i,o=e.className,u=void 0===o?"":o,d=Object(g.a)(e,["children","isShow","response","expand","className"]),E=Object(l.useRef)();return Object(l.useEffect)((function(){var e=E.current,a=e.className;if(r){var t=b(["collapse--collapsing","collapse--show"])(a);e.className=t,e.style.height=e.scrollHeight+"px"}else{e.style.height=e.scrollHeight+"px";var l=b(["collapse--collapsing"])(a);e.className=l;e.scrollHeight;e.style.height=""}}),[r]),n.a.createElement("div",Object.assign({ref:E,onTransitionEnd:function(e){var a=E.current,t=a.className,l="";e.target===e.currentTarget&&(r?(l=p("collapse--collapsing")(t),a.style.height=""):l=p(["collapse--show","collapse--collapsing"])(t),a.className=l)},className:"collapse collapse-".concat(s," collapse-expand-").concat(m," ").concat(u)},d),a)},v=function(e){var a=e.children,t=e.isShow,r=void 0!==t&&t,c=e.response,s=void 0===c?"":c,i=e.expand,m=void 0===i?"":i,o=e.className,u=void 0===o?"":o,d=Object(g.a)(e,["children","isShow","response","expand","className"]),E=Object(l.useRef)();return Object(l.useEffect)((function(){var e=E.current,a=e.className;if(r){var t=b(["slide--sliding","slide--show"])(a);e.className=t;e.scrollWidth;e.style.transform="translateX(0)"}else{var l=b(["slide--sliding"])(a);e.className=l;e.scrollWidth;e.style.transform=""}}),[r]),n.a.createElement("div",Object.assign({ref:E,onTransitionEnd:function(e){var a=E.current,t=a.className,l="";e.target===e.currentTarget&&(l=r?p("slide--sliding")(t):p(["slide--show","slide--sliding"])(t),a.className=l)},className:"slide slide-".concat(s," slide-expand-").concat(m," ").concat(u)},d),a)},N=function(e){var a=e.data,t=void 0===a?[]:a,l=e.onClick,r=e.back;e.isShow;return n.a.createElement(h.a,null,n.a.createElement(o.a,{lg:"4",className:"l-header__toggle"},n.a.createElement("button",{onClick:r,className:"menu-link menu-link--light w-100 d-flex align-items-center px-0 py-3 py-lg-4 fs-md",style:{opacity:".75"}},n.a.createElement("i",{className:"mr-3 fas fa-arrow-alt-circle-left"}),n.a.createElement("span",null,"back"))),t.map((function(e,a){return n.a.createElement(o.a,{key:a,lg:"4"},n.a.createElement(s.b,{to:e.to?e.to:"#",onClick:l,className:"menu-link menu-link--primary w-100 d-flex align-items-center justify-content-lg-between px-0 py-3 py-lg-4 fs-md"},n.a.createElement("i",{className:"d-lg-none mr-3 fas fa-arrow-alt-circle-left"}),n.a.createElement("span",null,e.title),n.a.createElement("i",{className:"d-none d-lg-block fas fa-arrow-circle-right"})))})))},y=[{id:1,title:"Visit",subMenu:[{title:"Visit",to:"/visit"},{title:"Family visit",to:"#"},{title:"Group visit",to:"#"},{title:"Audio guide",to:"#"},{title:"Out-of-hours tours",to:"#"},{title:"Tours and talks",to:"#"},{title:"Object trails",to:"#"},{title:"Accessbility",to:"#"}]},{id:2,title:"Discovery",to:"/discovery"},{id:3,title:"Collection",subMenu:[{title:"Collection",to:""},{title:"Collection online",to:""},{title:"Galleries",to:""},{title:"Blog",to:""}]},{id:4,title:"Learn",to:""},{id:5,title:"Membership",to:""},{id:6,title:"Support us",to:""}];function x(){var e,a=Object(l.useState)(!1),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(l.useState)(!1),g=Object(m.a)(i,2),b=g[0],p=g[1],x=Object(l.useState)(null),k=Object(m.a)(x,2),w=k[0],j=k[1];return n.a.createElement("header",{className:"l-header mb-0"},n.a.createElement(u.a,{variant:"dark",bg:"dark",className:"py-4 py-lg-5 border-bottom ".concat(r||b?"border-bright":"border-dark")},n.a.createElement("div",{className:"l-section d-flex justify-content-between p-0"},n.a.createElement(u.a.Brand,{as:s.b,to:"/",className:"text-decoration-none vertical-middle"},n.a.createElement("span",{className:"h3"},"Discovery")),n.a.createElement("div",{className:"l-header__toggle position-relative vertical-middle"},r?n.a.createElement("i",{className:"fas fa-times"}):n.a.createElement("i",{className:"fas fa-bars"}),n.a.createElement(d.a,{variant:"link",className:"ml-3 stretched-link",onClick:function(){c(!r),p(!1)}},"Menu")),n.a.createElement("nav",{className:"l-header__navbar-collapse mb-lg-n5 bg-dark px-4 px-lg-0 pb-3 pb-md-0"},n.a.createElement(f,{expand:"lg",isShow:r,className:"mb-0"},n.a.createElement(E.a,{className:"d-none d-lg-flex justify-content-lg-end"},n.a.createElement(E.a.Item,null,n.a.createElement("a",{href:"#",className:"text-secondary"},n.a.createElement("i",{className:"mr-2 fas fa-shopping-cart"}),n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Shop"))),n.a.createElement(E.a.Item,null,n.a.createElement("a",{href:"#",className:"text-secondary"},n.a.createElement("i",{className:"mr-2 fas fa-search"}),n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Search")))),n.a.createElement(h.a,{className:"flex-lg-nowrap mt-lg-3 mb-0"},y.map((function(e,a){return n.a.createElement(o.a,{key:a,sm:"6",lg:"auto"},n.a.createElement(s.b,{to:e.to?e.to:"",onClick:(t=a,function(){b&&w===t?p(!1):(y[t].subMenu?p(!0):(p(!1),c(!1)),j(t))}),className:"menu-link ".concat(b&&w===a?"menu-link--active":""," py-3 pt-lg-0 pb-lg-5")},e.title,n.a.createElement("i",{className:"d-lg-none float-right fas fa-arrow-alt-circle-right"})));var t}))),n.a.createElement(h.a,{className:"d-lg-none justify-content-lg-end mt-3"},n.a.createElement(o.a,{sm:"6",lg:"auto",className:"pb-3 pb-lg-0"},n.a.createElement(d.a,{variant:"shadow",block:!0,className:"py-3 rounded-0 fs-lg"},n.a.createElement("i",{className:"fas fa-shopping-cart"}),n.a.createElement("span",{className:"ml-2"},"Shop"))),n.a.createElement(o.a,{sm:"6",lg:"auto"},n.a.createElement(d.a,{variant:"shadow",block:!0,className:"py-3 rounded-0 fs-lg"},n.a.createElement("i",{className:"fas fa-search"}),n.a.createElement("span",{className:"ml-2"},"Search")))))))),n.a.createElement("div",{className:"l-header__sub-collapse bg-dark",onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},n.a.createElement(f,{isShow:b,response:"md"},n.a.createElement(v,{isShow:b,expand:"lg"},n.a.createElement("div",{className:"l-section py-2"},n.a.createElement(N,{isShow:b,data:null===(e=y[w])||void 0===e?void 0:e.subMenu,onClick:function(){p(!1),c(!1)},back:function(){p(!1)}}))))))}var k=t(443),w=t(442),j=t(225),_=t(118);function O(e){var a=e.className,t=void 0===a?"":a,l=e.style,r=void 0===l?{}:l,c=e.children,s=e.as,i=e.variant,m=void 0===i?"dark":i,o=Object(g.a)(e,["className","style","children","as","variant"]),u=s||"button";return n.a.createElement(u,Object.assign({className:"btn btn-".concat(m," circle p-0 text-center border-0 ").concat(t),style:Object(_.a)({width:"50px",height:"50px",lineHeight:"50px"},r)},o),c)}function I(){return n.a.createElement("footer",{className:"l-footer bg-shadow"},n.a.createElement("div",{className:"l-section"},n.a.createElement(h.a,{as:"section",className:"pb-4 border-bottom border-light"},n.a.createElement(o.a,{md:"6",className:"mb-3 mb-md-0"},n.a.createElement("h3",{className:"l-section__title mb-3"},"Connect with us"),n.a.createElement(E.a,{className:"d-flex"},n.a.createElement(E.a.Item,null,n.a.createElement(O,null,n.a.createElement("i",{className:"fab fa-facebook-f"}))),n.a.createElement(E.a.Item,null,n.a.createElement(O,null,n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement(E.a.Item,null,n.a.createElement(O,null,n.a.createElement("i",{className:"fab fa-youtube"}))),n.a.createElement(E.a.Item,null,n.a.createElement(O,null,n.a.createElement("i",{className:"fab fa-instagram"}))))),n.a.createElement(o.a,{md:"6"},n.a.createElement(k.a.Group,{controlId:"userEmail"},n.a.createElement(k.a.Label,{className:"mb-3 fs-lg"},"Enter your email address to receive our newsletter"),n.a.createElement(w.a,{size:"lg"},n.a.createElement(j.a,{placeholder:"your email","aria-label":"userEmail","aria-describedby":"basic-addon1",className:"bg-shadow"}),n.a.createElement(w.a.Append,null,n.a.createElement(d.a,{variant:"primary",className:"fs-md font-weight-bold"},"Sign up")))))),n.a.createElement(h.a,{className:"pt-5 text-wrap"},n.a.createElement(o.a,{lg:"3"},n.a.createElement(h.a,null,n.a.createElement(o.a,{sm:"6",lg:"12",className:"mb-5"},n.a.createElement("h2",{className:"h4 mb-3"},n.a.createElement("i",{className:"mr-2 fa-xs fas fa-ticket-alt",style:{transform:"rotate(-45deg)"}}),n.a.createElement("span",null,"Free entry")),n.a.createElement("p",{className:"text-secondary"},"Every street and every branch road, carefully, COVID-19 is right by your side"),n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Go out, go get")),n.a.createElement(o.a,{sm:"6",lg:"12",className:"mb-5"},n.a.createElement("h2",{className:"h4 mb-3"},n.a.createElement("i",{className:"mr-2 fa-sm far fa-clock"}),n.a.createElement("span",null,"Opening hours")),n.a.createElement("p",{className:"text-secondary"},"Day and night")))),n.a.createElement(o.a,null,n.a.createElement(h.a,null,n.a.createElement(o.a,{xs:"6",lg:"4",className:"pb-3"},n.a.createElement("h2",{className:"h4 mb-3"},"About us"),n.a.createElement(E.a,{className:"flex-column"},n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Governance")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"The COVID-19 Museum story")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Jobs")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Press")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Contact us")))),n.a.createElement(o.a,{xs:"6",lg:"4",className:"pb-3"},n.a.createElement("h2",{className:"h4 mb-3"},"Visit"),n.a.createElement(E.a,{className:"flex-column"},n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Museum map")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Exhibitions and events")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Accessbility")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Food and drink")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Audio guide")))),n.a.createElement(o.a,{xs:"6",lg:"4",className:"pb-3"},n.a.createElement("h2",{className:"h4 mb-3"},"Comnercial"),n.a.createElement(E.a,{className:"flex-column"},n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Comnercial hire")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Filming")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Travel trade tours")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"British Museum Press")))),n.a.createElement(o.a,{xs:"6",lg:"4",className:"pb-3"},n.a.createElement("h2",{className:"h4 mb-3"},"Our work"),n.a.createElement(E.a,{className:"flex-column"},n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Departments")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"National")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"International")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"How to borrow")))),n.a.createElement(o.a,{xs:"6",lg:"4",className:"pb-3"},n.a.createElement("h2",{className:"h4 mb-3"},"Resources"),n.a.createElement(E.a,{className:"flex-column"},n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Study rooms")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Library and archive")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Search the collection")),n.a.createElement(E.a.Item,null,n.a.createElement(d.a,{variant:"link",className:"text-secondary"},"Blog")))))))),n.a.createElement("div",{className:"bg-dark py-2 text-center fs-sm"},"\xa9 2020 The Trustees of the peter"))}var C=function(e){var a=e.bgImg,t=e.title,l=e.text,r=e.linkText,c=e.onClick,s=e.href;return n.a.createElement("section",{className:"l-banner",style:{backgroundImage:"url(".concat(a,")")}},n.a.createElement("div",{className:"l-banner__outer"},n.a.createElement("div",{className:"l-banner__inner"},n.a.createElement(h.a,null,n.a.createElement(o.a,{md:"6"},n.a.createElement("h2",{className:"mb-3 text-dark"},t)),n.a.createElement(o.a,{md:"6"},n.a.createElement("p",null,l),n.a.createElement(d.a,{href:s,variant:"dark",onClick:c,target:"_blank"},r,n.a.createElement("i",{className:"ml-3 fas fa-chevron-circle-right"})))))))},S=function(e){var a=e.children,t=e.className,l=void 0===t?"":t,r=Object(g.a)(e,["children","className"]);return n.a.createElement("div",Object.assign({className:"parallax ".concat(l)},r),a)};S.Fixed=function(e){var a=e.children,t=e.className,l=void 0===t?"":t,r=Object(g.a)(e,["children","className"]);return n.a.createElement("div",Object.assign({className:"parallax__fixed ".concat(l)},r),a)},S.ShowWindow=function(e){var a=e.children,t=e.className,l=void 0===t?"":t,r=Object(g.a)(e,["children","className"]);return n.a.createElement("div",Object.assign({className:"parallax__show-window ".concat(l)},r),a)},S.Scroll=function(e){var a=e.children,t=e.className,l=void 0===t?"":t,r=Object(g.a)(e,["children","className"]);return n.a.createElement("div",Object.assign({className:"parallax__scroll ".concat(l)},r),a)};var P=S,T=t(447),U=function(e){var a=e.img,t=e.title,l=e.text,r=e.onClick,c=e.className;return n.a.createElement(T.a,{className:"card--teaser ".concat(c)},n.a.createElement("div",{className:"card-img card--teaser__img"},n.a.createElement(T.a.Img,{variant:"top",src:a,className:"img-fluid"})),n.a.createElement(T.a.Body,null,n.a.createElement(T.a.Title,null,n.a.createElement(d.a,{variant:"link",onClick:r,className:"stretched-link"},t)),n.a.createElement(T.a.Text,null,l)))},F=t(61),M=t.n(F),W=t(62),V=t.n(W),D=t(63),A=t.n(D),G=t(64),B=t.n(G),R=t(65),L=t.n(R),H=t(66),z=t.n(H),J=t(67),Q=t.n(J),q=t(46),X=t.n(q),Y=t(68),K=t.n(Y),Z=function(){var e=[{img:M.a,title:"ben-garratt",text:"Photo by ben-garratt on Unsplash"},{img:V.a,title:"denis-jung",text:"Photo by denis-jung on Unsplash"},{img:A.a,title:"edwin-ashitendoh",text:"Photo by edwin-ashitendoh on Unsplash"},{img:B.a,title:"ewien-van-bergeijk",text:"Photo by ewien-van-bergeijk on Unsplash"},{img:L.a,title:"gregory-rakovsky",text:"Photo by gregory-rakovsky on Unsplash"},{img:z.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash"},{img:Q.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash"},{img:X.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash"},{img:K.a,title:"meghan-schiereck",text:"Photo by meghan-schiereck on Unsplash"}];return n.a.createElement(h.a,{className:"row--wrap"},e.map((function(e,a){return n.a.createElement(o.a,{key:a,md:"6"},n.a.createElement(U,{img:e.img,title:e.title,text:e.text}))})))},$=t(232);function ee(e){var a=e.data,t=Object(l.useRef)();Object(l.useEffect)((function(){var e=t.current;new $.a(e,{speed:400,slidesPerView:"auto",loop:!0,loopedSlides:null===a||void 0===a?void 0:a.length,spaceBetween:42,navigation:{nextEl:".swiper__next-el",prevEl:".swiper__pre-el"},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",modifierClass:"swiper__pagination-",bulletClass:"swiper__pagination-item",bulletActiveClass:"swiper__pagination-item--active"}})}),[]);return n.a.createElement("div",{ref:t,className:"swiper-container"},n.a.createElement("div",{className:"swiper-wrapper"},a.map((function(e,a){return n.a.createElement("div",{key:a,className:"swiper-slide"},n.a.createElement("img",{src:e.img}),n.a.createElement("div",{className:"swiper-slide__text mt-1"},e.text))}))),n.a.createElement("div",{className:"swiper-pagination"}),n.a.createElement("div",{className:"swiper__pre-el btn btn-primary"}),n.a.createElement("div",{className:"swiper__next-el btn btn-primary"}))}var ae=t(226),te=t.n(ae),le=t(227),ne=t.n(le),re=t(228),ce=t.n(re);function se(){var e=[{img:te.a,text:"Photo by chloe-evans on Unsplash"},{img:ne.a,text:"Photo by debby-hudson on Unsplash"},{img:ce.a,text:"Photo by Juan Rojas on Unsplash"}];return n.a.createElement(ee,{data:e})}var ie=t(229),me=t.n(ie),oe=t(230),ue=t.n(oe),de=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,null,n.a.createElement(P.Fixed,null,n.a.createElement("img",{className:"object-cover mt-6 mt-lg-n5",src:ue.a})),n.a.createElement(P.ShowWindow,{className:"d-flex align-items-end"},n.a.createElement("div",{className:"l-section"},n.a.createElement("h2",{className:"l-section__title"},"Welcome to the ",n.a.createElement("span",{className:"h1 text-danger"},"COVID-19")," ","home"))),n.a.createElement(P.Scroll,null,n.a.createElement("div",{className:"p-index"},n.a.createElement("div",{className:"l-section border-bottom border-bright"},n.a.createElement("div",{className:"d-md-flex justify-content-between"},n.a.createElement("h2",{className:"mb-4 mb-md-0"},"Discover COVID-19 information and current situation."),n.a.createElement("div",{className:"h4 pl-md-6 text-nowrap"},n.a.createElement("p",null,n.a.createElement("i",{className:"mr-3 fas fa-ticket-alt"}),"Free entry"),n.a.createElement("p",{className:"mb-0"},n.a.createElement("i",{className:"mr-3 far fa-clock"}),"Day and night")))),n.a.createElement("div",{className:"l-section"},n.a.createElement("h2",{className:"l-section__title"},"What's online..."),n.a.createElement(Z,null)),n.a.createElement(C,{bgImg:me.a,title:"Stay home",text:"Come from China, spread by WHO, and take a root in the world.",linkText:"Learn more",href:"https://www.cdc.gov.tw/Category/MPage/IJEvndG3oFaiM-h1cDhvPQ"}),n.a.createElement("section",{className:"l-section px-0"},n.a.createElement(se,null))))))},Ee=function(e){var a=e.className,t=e.children,l=e.onClick,r=e.textClass,c=void 0===r?"":r,s=e.activeTextClass,i=void 0===s?"":s,m=e.active,o=e.horizontal,u=e.reverse,d=Object(g.a)(e,["className","children","onClick","textClass","activeTextClass","active","horizontal","reverse"]),E=m?"rotate(180deg)":"";return n.a.createElement("button",Object.assign({className:"btn-clean d-flex justify-content-between align-items-center ".concat(a),onClick:l},d),n.a.createElement("span",{className:"".concat(c," ").concat(m?i:"")},t),n.a.createElement("span",{style:{transform:E,transformOrigin:"50%, 50%",transition:"transform .1s"}},o?u?n.a.createElement("i",{className:"fas fa-chevron-circle-left"}):n.a.createElement("i",{className:"fas fa-chevron-circle-right"}):u?n.a.createElement("i",{className:"fas fa-chevron-circle-up"}):n.a.createElement("i",{className:"fas fa-chevron-circle-down"})))},he=n.a.createContext(),ge=he.Consumer,be=he.Provider,pe=function(e){var a=e.children,t=Object(l.useState)(!1),r=Object(m.a)(t,2),c=r[0],s=r[1];return n.a.createElement(be,{value:{show:c,toggle:function(){return s(!c)}}},a)};pe.Toggle=function(e){var a=e.children,t=Object(g.a)(e,["children"]);return n.a.createElement(ge,null,(function(e){var l=e.show,r=e.toggle;return n.a.createElement(Ee,Object.assign({active:l,onClick:r},t),a)}))},pe.Collapse=function(e){var a=e.children,t=Object(g.a)(e,["children"]);return n.a.createElement(ge,null,(function(e){var l=e.show;return n.a.createElement(f,Object.assign({isShow:l},t),a)}))};var fe=pe,ve=function(e){var a=Object.assign({},e);return n.a.createElement(O,a,n.a.createElement("i",{className:"fab fa-facebook-f"}))},Ne=function(e){var a=Object.assign({},e);return n.a.createElement(O,a,n.a.createElement("i",{className:"fab fa-twitter"}))},ye=function(e){return n.a.createElement(O,e,n.a.createElement("i",{className:"fas fa-file-download"}))},xe=function(e){var a=e.className,t=e.children,l=Object(g.a)(e,["className","children"]);return n.a.createElement("div",Object.assign({className:"l-section border-bottom border-secondary ".concat(a)},l),t)};xe.Title=function(e){var a=e.as,t=e.className,l=e.children,r=(Object(g.a)(e,["as","className","children"]),a||"h2");return n.a.createElement(r,{className:"l-section__title ".concat(t)},l)};var ke=xe,we=function(){var e=[{img:M.a,title:"ben-garratt",text:"Photo by ben-garratt on Unsplash"},{img:V.a,title:"denis-jung",text:"Photo by denis-jung on Unsplash"},{img:A.a,title:"edwin-ashitendoh",text:"Photo by edwin-ashitendoh on Unsplash"},{img:B.a,title:"ewien-van-bergeijk",text:"Photo by ewien-van-bergeijk on Unsplash"},{img:L.a,title:"gregory-rakovsky",text:"Photo by gregory-rakovsky on Unsplash"},{img:z.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash"},{img:Q.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash"},{img:X.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash"},{img:K.a,title:"meghan-schiereck",text:"Photo by meghan-schiereck on Unsplash"}];return n.a.createElement(h.a,{className:"row--wrap"},e.map((function(e,a){return n.a.createElement(o.a,{key:a,md:"4"},n.a.createElement(U,{img:e.img,title:e.title,text:e.text,className:"p-visit__card h-100"}))})))},je=t(231),_e=t.n(je),Oe=t(448),Ie=t(446),Ce=function(){var e=Object(l.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,null,n.a.createElement(P.Fixed,null,n.a.createElement("img",{className:"object-cover mt-6 mt-lg-n5",src:_e.a})),n.a.createElement(P.ShowWindow,{className:"d-flex align-items-end"},n.a.createElement("div",{className:"l-section"},n.a.createElement("h2",{className:"display-4"},"Visit here"))),n.a.createElement(P.Scroll,{className:"theme-light"},n.a.createElement(ke,{className:"d-sm-flex justify-content-between py-3 bg-light"},n.a.createElement(Oe.a,{className:"breadcrumb--dark"},n.a.createElement(Oe.a.Item,{linkAs:s.b,linkProps:{to:"/"}},"Home"),n.a.createElement(Oe.a.Item,{linkAs:s.b,linkProps:{to:"/visit"},active:!0},"Visit")),n.a.createElement(E.a,{className:"d-flex align-items-center mb-0"},n.a.createElement(E.a.Item,null,n.a.createElement("h6",null,"Share the page")),n.a.createElement(E.a.Item,null,n.a.createElement(ve,null)),n.a.createElement(E.a.Item,null,n.a.createElement(Ne,null)))),n.a.createElement(ke,{className:"border-bottom-0 pb-0"},n.a.createElement(Ie.a,{variant:"secondary"},n.a.createElement(Ee,{className:"d-md-none",active:t,onClick:function(){return r(!t)}},"Contents"),n.a.createElement(f,{isShow:t,expand:"md"},n.a.createElement(E.a,{className:"p-visit__list-lg nav-max-sm--vertical pt-3 pt-md-0"},n.a.createElement(E.a.Item,null,n.a.createElement(E.a.Link,{className:"s-link"},"Full opening hours")),n.a.createElement(E.a.Item,null,n.a.createElement(E.a.Link,{className:"s-link"},"Getting here")),n.a.createElement(E.a.Item,null,n.a.createElement(E.a.Link,{className:"s-link"},"Entering the Museum")),n.a.createElement(E.a.Item,null,n.a.createElement(E.a.Link,{className:"s-link"},"Accessibility")),n.a.createElement(E.a.Item,null,n.a.createElement(E.a.Link,{className:"s-link"},"Facilities")))))),n.a.createElement(ke,null,n.a.createElement(h.a,{className:"flex-column-reverse flex-lg-row"},n.a.createElement(o.a,{lg:"8"},n.a.createElement(ke.Title,null,"The COVID - 19 place is open now.",n.a.createElement("p",{className:"h6 mt-2"},"China of Virus in Disease")),"_______________________________",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Immerse yourself in two million years of human history, art and culture."),n.a.createElement("p",null,"Plan your visit:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Admission is free and advance booking is only required for groups of 10 or more."),n.a.createElement("li",null,"We charge for some exhibitions, events and tours."),n.a.createElement("li",null,"Exhibitions are free for Members and concessions are available."),n.a.createElement("li",null,"Please note that we begin clearing galleries 10 minutes before they close."),n.a.createElement("li",null,"From mid-March 2020 scaffolding will be erected at the front of the Museum (Great Russell Street entrance), to facilitate conservation work on our iconic colonnade. Find out more about the 'Conservation work on the Colonnade' below")),n.a.createElement("p",null,"Please note that items of large luggage (including some bags and rucksacks, and all wheeled suitcases) are not permitted. See Entering the Museum below for more details."," ")),n.a.createElement(o.a,{lg:"4 pb-5"},n.a.createElement(ke.Title,null,"Free entry"),n.a.createElement("hr",null),n.a.createElement("div",{className:"h6"},n.a.createElement("i",{className:"far fa-clock mr-1"}),"The Museum always open."),n.a.createElement("hr",null),n.a.createElement("div",{className:"h6 mb-3"},n.a.createElement("i",{className:"fas fa-map-marker-alt mr-1"}),"The British Museum"),n.a.createElement("span",null,"Street and alley"),n.a.createElement("p",null,"road and every fork"),n.a.createElement("hr",null),n.a.createElement(d.a,{variant:"dark",block:!0,className:"d-flex justify-content-between align-items-center"},"View more information",n.a.createElement("i",{className:"fas fa-chevron-circle-right"}))))),n.a.createElement(ke,null,n.a.createElement(ke.Title,null,"What to see"),n.a.createElement(we,null)),n.a.createElement(C,{bgImg:X.a,title:"10% off for Members",text:"Become a Member and enjoy a 10% discount at all of the Museum's caf\xe9s, restaurants and shops.",linkText:"Become a Member"}),n.a.createElement(ke,null,n.a.createElement(ke.Title,{className:"mb-4"},"Entering the Museum"),n.a.createElement("div",{className:"py-3 border-bottom border-top border-secondary"},n.a.createElement(fe,null,n.a.createElement(fe.Toggle,{textClass:"h3 s-link stretched-link",className:"position-relative"},"opening hours"),n.a.createElement(fe.Collapse,null,n.a.createElement("div",{className:"pt-4"},n.a.createElement("p",null,"The Museum is temporarily closed."),n.a.createElement("ul",{style:{listStyleType:"disc",listStylePosition:"inside"}},n.a.createElement("li",null,"Great Court: 09.00\u201318.00 (20.30 on Fridays)"),n.a.createElement("li",null,"Galleries: 10.00\u201317.30 (most open to 20.30 on Fridays)"),n.a.createElement("li",null,"Ticket Desk: 09.00\u201316.45 (19.45 on Fridays)")),n.a.createElement("p",null,"Find out about late opening on Fridays."),n.a.createElement("p",null,"Please note that we begin clearing galleries 10 minutes before they close."),n.a.createElement("p",null,"Closed 1 January and 24\u201326 December"))))),n.a.createElement("div",{className:"py-3 border-bottom border-secondary"},n.a.createElement(fe,null,n.a.createElement(fe.Toggle,{textClass:"h3 s-link stretched-link",className:"position-relative"},"Visitor regulations"),n.a.createElement(fe.Collapse,null,n.a.createElement("div",{className:"pt-4 position-relative d-inline-block"},n.a.createElement(ye,{as:"a",href:"".concat("","/visitor-regulations.txt"),className:"stretched-link",download:!0}),n.a.createElement("span",{className:"ml-3"},"Visitor regulations"))))))),n.a.createElement(P.ShowWindow,{className:"d-flex align-items-end",style:{height:"300px"}})))},Se=t(51),Pe=n.a.createContext(),Te=Pe.Provider,Ue=Pe.Consumer,Fe=function(e){var a=e.placeholder,t=e.children,r=e.onClick,c=e.lg,s=e.block,i=e.className,o=void 0===i?"":i,u=Object(g.a)(e,["placeholder","children","onClick","lg","block","className"]),d=Object(l.useState)(!1),E=Object(m.a)(d,2),h=E[0],b=E[1],p=Object(l.useState)({}),v=Object(m.a)(p,2),N=v[0],y=v[1],x="select ".concat(h?"select--active":""," ").concat(c?"select--lg":""," ").concat(s?"d-block":""," ").concat(o),k=function(){b(!h)};return n.a.createElement("div",Object.assign({className:x},u,{onClick:k,tabIndex:"0",onBlur:function(){return b(!1)}}),n.a.createElement("div",{className:"select__content"},N.text?N.text:a,n.a.createElement("div",{className:"select__icon"})),n.a.createElement(f,{isShow:h,className:"select__list"},n.a.createElement(Te,{value:{onClick:function(e,a,t){k(),y({value:e,text:a}),r&&r(e,a,t)}}},t)))};Fe.Item=function(e){var a=e.value,t=e.children,l=e.className,r=void 0===l?"":l;Object(g.a)(e,["value","children","className"]);return n.a.createElement(Ue,null,(function(e){var l=e.onClick;return n.a.createElement("div",{className:"select__list-item ".concat(r),onClick:function(e){return l(a,t,e)}},t)}))};var Me=Fe;function We(e){var a=e.getFilter,t=Object(l.useReducer)((function(e,a){var t=a.type,l=a.value,n=a.text;return Object(_.a)({},e,Object(Se.a)({},t,{value:l,text:n}))}),{time:{},location:{},member:{}}),r=Object(m.a)(t,2),c=r[0],s=r[1];Object(l.useEffect)((function(){var e={time:c.time.value,location:c.location.value,member:c.member.value};a(e)}),[c]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement(o.a,{lg:"4"},n.a.createElement(Me,{placeholder:"When",block:!0,lg:!0,onClick:function(e,a){s({type:"time",value:e,text:a})},className:"mb-2 font-weight-bold"},n.a.createElement(Me.Item,{value:"1"},"Today"),n.a.createElement(Me.Item,{value:"2"},"Last week"),n.a.createElement(Me.Item,{value:"3"},"Last month"),n.a.createElement(Me.Item,{value:null},"Until now"))),n.a.createElement(o.a,{lg:"4"},n.a.createElement(Me,{placeholder:"Who",block:!0,lg:!0,onClick:function(e,a){s({type:"location",value:e,text:a})},className:"mb-2 font-weight-bold"},n.a.createElement(Me.Item,{value:"1"},"Child"),n.a.createElement(Me.Item,{value:"2"},"Teenager"),n.a.createElement(Me.Item,{value:"3"},"Adult"),n.a.createElement(Me.Item,{value:"4"},"Old"),n.a.createElement(Me.Item,{value:null},"All"))),n.a.createElement(o.a,{lg:"4"},n.a.createElement(Me,{placeholder:"Where",block:!0,lg:!0,onClick:function(e,a){s({type:"member",value:e,text:a})},className:"font-weight-bold"},n.a.createElement(Me.Item,{value:"1"},"Foreign"),n.a.createElement(Me.Item,{value:"2"},"domestic"),n.a.createElement(Me.Item,{value:null},"All")))))}var Ve=function(e){var a=e.data;return n.a.createElement(h.a,{className:"row--wrap"},a.map((function(e,a){return n.a.createElement(o.a,{key:a,md:"4"},n.a.createElement(U,{img:e.img,title:e.title,text:e.text,className:"p-visit__card h-100"}))})))},De=[{img:M.a,title:"ben-garratt",text:"Photo by ben-garratt on Unsplash",time:1,location:2,member:2},{img:V.a,title:"denis-jung",text:"Photo by denis-jung on Unsplash",time:2,location:3,member:2},{img:A.a,title:"edwin-ashitendoh",text:"Photo by edwin-ashitendoh on Unsplash",time:2,location:1,member:1},{img:B.a,title:"ewien-van-bergeijk",text:"Photo by ewien-van-bergeijk on Unsplash",time:1,location:3,member:2},{img:L.a,title:"gregory-rakovsky",text:"Photo by gregory-rakovsky on Unsplash",time:1,location:4,member:1},{img:z.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash",time:1,location:3,member:1},{img:Q.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash",time:1,location:4,member:2},{img:X.a,title:"james-yarema",text:"Photo by james-yarema on Unsplash",time:3,location:2,member:2},{img:K.a,title:"meghan-schiereck",text:"Photo by meghan-schiereck on Unsplash",time:3,location:1,member:1}];var Ae,Ge=(Ae=Ve,function(e){var a=e.filter,t=Object(g.a)(e,["filter"]),l=a.time,r=a.location,c=a.member,s=De.filter((function(e){return(e.time==l||!l)&&(e.location==r||!r)&&(e.member==c||!c)}));return n.a.createElement(Ae,Object.assign({data:s},t))}),Be=(M.a,V.a,A.a,B.a,L.a,z.a,Q.a,X.a,K.a,function(){var e=Object(l.useState)({}),a=Object(m.a)(e,2),t=a[0],r=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(ke,{className:"border-bottom border-bright"},n.a.createElement("h1",{className:"mb-5 display-4 font-weight-bold"},"Discovery"),n.a.createElement(We,{getFilter:r})),n.a.createElement(ke,null,n.a.createElement(Ge,{filter:t})))}),Re=Object(i.f)((function(e){return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e.location]),e.children}));var Le=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:"App overflow-hidden"},n.a.createElement(x,null),n.a.createElement(Re,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/visit"},n.a.createElement(Ce,null)),n.a.createElement(i.a,{path:"/discovery"},n.a.createElement(Be,null)),n.a.createElement(i.a,{path:"/"},n.a.createElement(de,null)))),n.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(436),t(437);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){e.exports=t.p+"static/media/li-lin-VngNE4WQp24-unsplash.24a8ff2f.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/ben-garratt-HoupC-zHlLo-unsplash.d29c015c.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/denis-jung-nQcmPxXZ5zU-unsplash.29dd4176.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/edwin-ashitendoh-08fd3iw5pCM-unsplash.64ba9842.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/ewien-van-bergeijk-kwant-GdYO8v2SISs-unsplash.23e980a0.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/gregory-rakovsky-WVFOgVVma6U-unsplash.dc06b433.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/james-yarema-IiWoS6Be4Fs-unsplash.24b8f4ef.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/jerry-wang-Pvf_WTiFGng-unsplash.8b9cee8d.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/meghan-schiereck-lzRO1GmKqQE-unsplash.3c443a60.jpg"}},[[233,1,2]]]);
//# sourceMappingURL=main.7de379fc.chunk.js.map