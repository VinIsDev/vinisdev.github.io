(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),s=n(2441),l=n(5749),d={};function c(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;d[t+"%"+n+(r?"%"+r:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",p=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),x=p.href,u=p.as,f=e.children,h=e.replace,m=e.shallow,g=e.scroll,j=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var y=o.Children.only(f),b=y&&"object"===typeof y&&y.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),C=i(w,2),v=C[0],_=C[1],k=o.default.useCallback((function(e){v(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,v]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(x),i="undefined"!==typeof j?j:n&&n.locale,r=d[x+"%"+u+(i?"%"+i:"")];e&&!r&&c(n,x,u,{locale:i})}),[u,x,_,j,t,n]);var L={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:l,scroll:s}))}(e,n,x,u,h,m,g,j)},onMouseEnter:function(e){(0,a.isLocalURL)(x)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),c(n,x,u,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var z="undefined"!==typeof j?j:n&&n.locale,I=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(u,z,n&&n.locales,n&&n.domainLocales);L.href=I||(0,a.addBasePath)((0,a.addLocale)(u,z,n&&n.defaultLocale))}return o.default.cloneElement(y,L)};t.default=p},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=(0,r.useRef)(),d=(0,r.useState)(!1),c=i(d,2),p=c[0],x=c[1],u=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||p||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&x(e)}),{rootMargin:t}))}),[n,t,p]);return(0,r.useEffect)((function(){if(!a&&!p){var e=(0,o.requestIdleCallback)((function(){return x(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[p]),[u,p]};var r=n(7294),o=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},7433:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var i=n(5893),r=n(7294),o=function(){return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{opacity:"0.15",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),(0,i.jsx)("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),(0,i.jsx)("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),(0,i.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,i.jsx)("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,i.jsx)("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:(0,i.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:(0,i.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})})},a=n(9163),s=a.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-1i9p3c7-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),l=a.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-1i9p3c7-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),d=a.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-1i9p3c7-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),c=a.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-1i9p3c7-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),p=a.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-1i9p3c7-4"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"})),x=a.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-1i9p3c7-5"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),u=function(e){return(0,i.jsxs)(p,{alt:e.alt,form:e.form,disabled:e.disabled,children:[e.children,(0,i.jsx)(x,{alt:e.alt,onClick:e.onClick,disabled:e.disabled,children:e.children})]})},f=a.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"ggdmsh-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),h=function(){return(0,i.jsx)(s,{row:!0,nopadding:!0,children:(0,i.jsxs)(f,{children:[(0,i.jsxs)(l,{main:!0,center:!0,children:["Welcome to my ",(0,i.jsx)("br",{}),"Portafolio"]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("p",{children:"I am a web developer and application developer with experience in both fields."}),(0,i.jsx)("p",{children:"I have created this website so that we can get to know each other a little more in depth."})]}),(0,i.jsx)(u,{children:(0,i.jsx)("a",{style:{color:"white"},href:"https://www.getmanfred.com/es/perfil/martipuigmartin",children:"\xbfQuieres saber m\xe1s?"})})]})})},m=n(859),g=a.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-14p26t3-0"})(["list-style-type:none;display:grid;grid-template-columns:repeat(5,1fr);margin:2rem;@media ","{margin:64px 0;grid-template-columns:repeat(2,1fr);}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),j=a.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-14p26t3-1"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),y=a.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-14p26t3-2"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),b=a.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-14p26t3-3"})(["font-size:18px;margin-left:100px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;margin-left:0px;}@media ","{font-size:14px;line-height:22px;margin-left:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),w=a.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-14p26t3-4"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),C=n(2821),v=function(){return(0,i.jsxs)(s,{id:"tech",children:[(0,i.jsx)(c,{}),(0,i.jsx)(l,{main:!0,children:"Technologies"}),(0,i.jsx)(d,{children:"This section shows the technologies that I used in my projects."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(j,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Languages"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)("span",{children:"Lua"})})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Frontend"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.N2N,{size:50})})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Backend"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.LOt,{size:50})})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Frameworks"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)("span",{children:"Vue"})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.f9f,{size:50})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.KFp,{size:50})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.HC0,{size:50})})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"BBDD"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.yF0,{size:50})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.ihN,{size:50})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.yGY,{size:50})})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Maquetaci\xf3n"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.e6L,{size:50})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)("span",{children:"Tailwind"})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(m.x9X,{size:50})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)("span",{children:"Vuetify"})})})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Otros"}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{children:(0,i.jsx)(C.RrF,{size:50})})})]})]})]})},_=a.default.ul.withConfig({displayName:"TimeLineStyles__CarouselContainer",componentId:"sc-18wyebz-0"})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ","{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),k=a.default.div.withConfig({displayName:"TimeLineStyles__CarouselMobileScrollNode",componentId:"sc-18wyebz-1"})(["@media ","{display:flex;min-width:","}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.final?"120%;":"min-content"})),L=a.default.div.withConfig({displayName:"TimeLineStyles__CarouselItem",componentId:"sc-18wyebz-2"})(["background:#0F1624;border-radius:3px;max-width:196px;@media ","{max-width:124px;}@media ","{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;",";}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.active===e.index?"opacity: 1":"opacity: 0.5"})),z=a.default.h4.withConfig({displayName:"TimeLineStyles__CarouselItemTitle",componentId:"sc-18wyebz-3"})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ","{font-size:20px;line-height:28px;margin-bottom:4px;}@media ","{font-size:16px;line-height:24px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),I=a.default.svg.withConfig({displayName:"TimeLineStyles__CarouselItemImg",componentId:"sc-18wyebz-4"})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ","{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"],(function(e){return e.theme.breakpoints.sm})),F=a.default.p.withConfig({displayName:"TimeLineStyles__CarouselItemText",componentId:"sc-18wyebz-5"})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ","{font-size:12px;line-height:18px;padding-right:32px;}@media ","{font-size:10px;line-height:16px;padding-right:0;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),S=a.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtons",componentId:"sc-18wyebz-6"})(["width:288px;display:none;visibility:hidden;@media ","{display:flex;visibility:visible;margin-bottom:48px;}"],(function(e){return e.theme.breakpoints.sm})),N=a.default.button.withConfig({displayName:"TimeLineStyles__CarouselButton",componentId:"sc-18wyebz-7"})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:",";transform:",";&:focus{outline:none;}"],(function(e){return e.active===e.index?"1":".33"}),(function(e){return e.active===e.index?"scale(1.6)":"scale(1)"})),D=a.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtonDot",componentId:"sc-18wyebz-8"})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]),O=[{year:2019,text:"I became interested in programming"},{year:2021,text:"I did my first paid project."},{year:2022,text:"I have been helping in projects in the field of videogames."},{year:"NOW",text:"I am trying to learn new frameworks."}],M=(new Date).getFullYear(),T=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],o=(0,r.useRef)(),a=function(e,t){return e.scrollTo({left:t,behavior:"smooth"})},c=function(e,t){if(e.preventDefault(),o.current){var n=Math.floor(.7*o.current.scrollWidth*(t/O.length));a(o.current,n)}};return(0,r.useEffect)((function(){window.addEventListener("resize",(function(){a(o.current,0)}))}),[]),(0,i.jsxs)(s,{id:"above",children:[(0,i.jsx)(l,{children:"About me"}),(0,i.jsxs)(d,{children:[(0,i.jsx)("p",{children:"My name is Gin\xe9s, I live in Spain."}),(0,i.jsx)("p",{children:"I have always considered myself a very curious person, I like to learn new things. This has allowed me to expand my knowledge and explore new technologies."}),(0,i.jsx)("p",{children:"I am a very sociable person, I like to share my knowledge with others, and that they do what same with me."}),(0,i.jsxs)("p",{children:["Si crees que podemos encajar, tienes mis redes ",(0,i.jsx)("a",{style:{color:"white",fontWeight:"bold"},href:"#nav",children:"arriba"})," a la derecha. Si quieres contactar directamente conmigo, aqu\xed ",(0,i.jsx)("a",{style:{color:"white",fontWeight:"bold"},href:"#above",children:"abajo"}),", tambi\xe9n a la derecha, tienes mis datos de contacto."]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(_,{ref:o,onScroll:function(){if(o.current){var e=Math.round(o.current.scrollLeft/(.7*o.current.scrollWidth)*O.length);n(e)}},children:(0,i.jsx)(i.Fragment,{children:O.map((function(e,n){return(0,i.jsx)(k,{children:(0,i.jsxs)(L,{index:n,id:"carousel_item"-{i:n},active:t,onClick:function(e){return c(e,n)},children:[(0,i.jsxs)(z,{children:[e.year,(0,i.jsxs)(I,{width:"208",height:"6",viewBox:"0 0 208 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",fill:"url(#paint0_linear)","fill-opacity":"0.33"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"paint0_linear",x1:"-4.30412e-10",y1:"0.5",x2:"208",y2:"0.500295",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{"stop-color":"white"}),(0,i.jsx)("stop",{offset:"0.79478","stop-color":"white","stop-opacity":"0"})]})})]})]}),(0,i.jsx)(F,{children:e.text})]})},n)}))})}),(0,i.jsx)(S,{children:O.map((function(e,n){return(0,i.jsx)(N,{index:n,id:"carousel_button"-{i:n},active:t,onClick:function(e){return c(e,n)},type:"button",children:(0,i.jsx)(D,{active:t})},n)}))})]})},U=a.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1eh4ra0-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),B=a.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1eh4ra0-1"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),H=a.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1eh4ra0-2"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),E=a.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1eh4ra0-3"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),G=a.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1eh4ra0-4"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),A=a.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1eh4ra0-5"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(2,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),R=function(){return(0,i.jsxs)(U,{children:[(0,i.jsx)(A,{}),(0,i.jsxs)(B,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(E,{children:(0,i.jsx)("span",{children:"Vin - Web Developer and Application Developer - ".concat(M)})})}),(0,i.jsx)(G,{children:(0,i.jsx)("a",{style:{color:"white"},href:"mailto:ginesrodriguezz15@gmail.com",children:(0,i.jsx)(C.Dme,{size:30})})})]})]})},P=n(1664),W=a.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-12smpbe-0"})(["display:grid;grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),V=a.default.div.withConfig({displayName:"HeaderStyles__IconNavBar",componentId:"sc-12smpbe-1"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),q=a.default.span.withConfig({displayName:"HeaderStyles__Span",componentId:"sc-12smpbe-2"})(["font-size:2.5rem;font-weight:bold;color:white;"]),K=a.default.div.withConfig({displayName:"HeaderStyles__NavBarItems",componentId:"sc-12smpbe-3"})(["grid-area:1 / 2 / 2 / 4;margin-left:50px;margin-top:10px;display:flex;justify-content:space-around;@media ","{margin-left:-40px;grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),Z=a.default.div.withConfig({displayName:"HeaderStyles__SocialMediaCol",componentId:"sc-12smpbe-4"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),X=a.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-12smpbe-5"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),Y=a.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-12smpbe-6"})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]),J=function(){return(0,i.jsxs)(W,{id:"nav",children:[(0,i.jsx)(V,{children:(0,i.jsx)(P.default,{href:"/",children:(0,i.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white"},children:[(0,i.jsx)(m.JAz,{size:30})," ",(0,i.jsx)(q,{children:"Vin"})]})})}),(0,i.jsxs)(K,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(P.default,{href:"#above",children:(0,i.jsx)(X,{children:"About me"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(P.default,{href:"#tech",children:(0,i.jsx)(X,{children:"Technologies"})})})]}),(0,i.jsxs)(Z,{children:[(0,i.jsx)(Y,{href:"https://github.com/VinIsDev",children:(0,i.jsx)(C.RrF,{size:30})}),(0,i.jsx)(Y,{href:"https://twitter.com/ginesrodriguezz",children:(0,i.jsx)(C.wod,{size:30})}),(0,i.jsx)(Y,{href:"https://www.linkedin.com/in/gin%C3%A9s-rodriguez-sherstnova-901649230/",children:(0,i.jsx)(C._iD,{size:30})})]})]})},Q=a.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"ea3b0r-0"})(["max-width:1280px;width:100%;margin:auto;"]),$=function(e){var t=e.children;return(0,i.jsxs)(Q,{children:[(0,i.jsx)(J,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(R,{})]})},ee=function(){return(0,i.jsxs)($,{children:[(0,i.jsxs)(s,{grid:!0,children:[(0,i.jsx)(h,{}),(0,i.jsx)(o,{})]}),(0,i.jsx)(v,{}),(0,i.jsx)(T,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7433)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return d}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function l(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function d(e){return function(t){return i.createElement(c,a({attr:a({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var n,r=e.attr,o=e.size,l=e.title,d=s(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}},function(e){e.O(0,[921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);