(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=(a(156),a(157));a(174),a(148),a(175),a(161),t.default=function(){return n.a.createElement(i.a,null,n.a.createElement("h1",null,"Hello, I'm Paul!"),n.a.createElement("p",null,"I completed my Bachelors of Science in Computer Engineering from San Diego State University on December 2018. I am currently seeking full-time employment as a Software Engineer. I am currently interested in doing full stack development as it will utilize my creativeness from my digital art background and solid programming skills to create a well-designed product."))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(150);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},153:function(e){e.exports={data:{site:{siteMetadata:{title:"PAUL JERROLD BIGLETE"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){e.exports=a.p+"static/my_logo_proper-33e862ac5cc06732e303a582465b6fbe.png"},157:function(e,t,a){"use strict";var r=a(153),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(148),c=a(158),d=a(151),u=a(152),f=a(155),p=a.n(f),m=a(159),g=a.n(m),h=a(149),b=a.n(h),E=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:g.a.header},i.a.createElement("div",{className:g.a.logo},i.a.createElement("img",{src:p.a,alt:"Logo"})),i.a.createElement("h1",null,i.a.createElement(o.a,{className:g.a.title},t),i.a.createElement("p",{className:g.a.subHeaderTitle},"an aspiring software engineer")))};E.propTypes={siteTitle:l.a.string},E.defaultProps={siteTitle:""};var y=E,v=function(){return i.a.createElement("nav",null,i.a.createElement("ul",{className:b.a.navList},i.a.createElement("li",null,i.a.createElement(o.a,{className:b.a.navItem,activeClassName:b.a.activeNavItem,to:"/"},"HOME")),i.a.createElement("li",null,i.a.createElement(o.a,{className:b.a.navItem,activeClassName:b.a.activeNavItem,to:"/resume"},"RESUME")),i.a.createElement("li",null,i.a.createElement(o.a,{className:b.a.navItem,activeClassName:b.a.activeNavItem,to:"/projects"},"PROJECTS")),i.a.createElement("li",null,i.a.createElement(o.a,{className:b.a.navItem,activeClassName:b.a.activeNavItem,to:"/contact"},"CONTACT"))))},S=(a(156),a(160)),w=a.n(S),I=function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement("div",{className:w.a.container},i.a.createElement("div",{className:w.a.content},i.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:b.a.horLine},i.a.createElement("br",null)),i.a.createElement(v,null),i.a.createElement("main",null,t),i.a.createElement("div",{className:w.a.iconBar},i.a.createElement("a",{href:"https://www.linkedin.com/in/paul-jerrold-biglete-44220a183/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn"},i.a.createElement(c.a,{className:w.a.icon,icon:d.b})),i.a.createElement("a",{href:"https://github.com/pbiglete",target:"_blank",rel:"noopener noreferrer",title:"GitHub"},i.a.createElement(c.a,{className:w.a.icon,icon:d.a})),i.a.createElement("a",{href:"",target:"_blank",rel:"noopener noreferrer",title:"Resume"},i.a.createElement(c.a,{className:w.a.icon,icon:u.b})),i.a.createElement("a",{href:"mailto: pbiglete@gmail.com",target:"_blank",rel:"noopener noreferrer",title:"Email"},i.a.createElement(c.a,{className:w.a.icon,icon:u.a})))),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Created by Paul Jerrold Biglete."))},data:r})};I.propTypes={children:l.a.node.isRequired};t.a=I},161:function(e,t,a){"use strict";var r=a(162),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(163),c=a.n(o);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,l=r.data.site,o=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(n)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=d},162:function(e){e.exports={data:{site:{siteMetadata:{title:"PAUL JERROLD BIGLETE",description:"My Portfolio",author:"Paul Jerrold Biglete"}}}}},174:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},175:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(35)),l=r(a(75)),o=r(a(76)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;var E=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+n+t+s+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},f,{onLoad:s,onError:d,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var r=t.critical||g&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=e.loading,I=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:I?1:0,transition:N?"opacity "+b+"ms":"none"},l),R="boolean"==typeof h?"lightgray":h,A={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&A,l,f),O={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(m){var z=m;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&A)}),z.base64&&c.default.createElement(v,(0,o.default)({src:z.base64},O)),z.tracedSVG&&c.default.createElement(v,(0,o.default)({src:z.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(v,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:a,title:t,loading:w},z))}}))}if(g){var C=g,q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},i);return"inherit"===i.display&&delete q.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},R&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},N&&A)}),C.base64&&c.default.createElement(v,(0,o.default)({src:C.base64},O)),C.tracedSVG&&c.default.createElement(v,(0,o.default)({src:C.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(v,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:a,title:t,loading:w},C))}}))}return null},t}(c.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});S.propTypes={resolutions:w,sizes:I,fixed:w,fluid:I,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var N=S;t.default=N}}]);
//# sourceMappingURL=component---src-pages-index-js-24788a69b65e43128da2.js.map