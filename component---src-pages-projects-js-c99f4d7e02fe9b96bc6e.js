(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,a,t){"use strict";t.r(a);var n=t(184),r=t(0),l=t.n(r),i=t(153),s=t(33),c=t.n(s),o=t(163),m=t(170),u=t.n(m),d=t(161);t(164);a.default=function(){return l.a.createElement(i.b,{query:"4287888372",render:function(e){return l.a.createElement(o.a,null,l.a.createElement(d.a,{title:"PROJECTS"}),l.a.createElement("h1",null,"Projects"),l.a.createElement("hr",null),l.a.createElement("ul",{className:u.a.navList},l.a.createElement("li",null,l.a.createElement(c.a,{className:u.a.navItem,activeClassName:u.a.activeNavItem,to:"/projects_2019"},"2019")),l.a.createElement("li",null,l.a.createElement(c.a,{className:u.a.navItem,activeClassName:u.a.activeNavItem,to:"/projects_2018"},"2018")),l.a.createElement("li",null,l.a.createElement(c.a,{className:u.a.navItem,activeClassName:u.a.activeNavItem,to:"/projects"},"ALL"))),l.a.createElement("hr",null),l.a.createElement("ol",{className:u.a.projects},e.allMarkdownRemark.edges.map(function(e){return l.a.createElement("li",{className:u.a.project},l.a.createElement(c.a,{to:"/projects/"+e.node.fields.slug},l.a.createElement("h2",null,e.node.frontmatter.title),l.a.createElement("h3",null,e.node.frontmatter.datelocation),l.a.createElement("p",null,e.node.frontmatter.description)))})))},data:n})}},153:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),i=t.n(l),s=t(33),c=t.n(s);t.d(a,"a",function(){return c.a});t(154);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"PAUL JERROLD BIGLETE"}}}}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),s=t(55),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},160:function(e,a,t){e.exports=t.p+"static/my_logo_proper-33e862ac5cc06732e303a582465b6fbe.png"},161:function(e,a,t){"use strict";var n=t(162),r=t(0),l=t.n(r),i=t(165);t(169);a.a=function(e){var a=e.title,t=n.data;return l.a.createElement(i.Helmet,{title:a+" | "+t.site.siteMetadata.title})}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"PAUL JERROLD BIGLETE"}}}}},163:function(e,a,t){"use strict";var n=t(158),r=t(0),l=t.n(r),i=t(4),s=t.n(i),c=t(153),o=t(166),m=t(155),u=t(156),d=t(160),p=t.n(d),E=t(167),f=t.n(E),v=function(e){var a=e.siteTitle;return l.a.createElement("header",{className:f.a.header},l.a.createElement("div",{className:f.a.logo},l.a.createElement("img",{src:p.a,alt:"Logo"})),l.a.createElement("h1",null,l.a.createElement(c.a,{className:f.a.title},a),l.a.createElement("p",{className:f.a.subHeaderTitle},"an aspiring software engineer")))};v.propTypes={siteTitle:s.a.string},v.defaultProps={siteTitle:""};var g=v,h=t(157),N=t.n(h),b=function(){return l.a.createElement("nav",null,l.a.createElement("ul",{className:N.a.navList},l.a.createElement("li",null,l.a.createElement(c.a,{className:N.a.navItem,activeClassName:N.a.activeNavItem,to:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement(c.a,{className:N.a.navItem,activeClassName:N.a.activeNavItem,to:"/resume"},"RESUME")),l.a.createElement("li",null,l.a.createElement(c.a,{className:N.a.navItem,activeClassName:N.a.activeNavItem,to:"/projects"},"PROJECTS")),l.a.createElement("li",null,l.a.createElement(c.a,{className:N.a.navItem,activeClassName:N.a.activeNavItem,to:"/contact"},"CONTACT"))))},k=(t(164),t(168)),y=t.n(k),S=function(e){var a=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement("div",{className:y.a.container},l.a.createElement("div",{className:y.a.content},l.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(b,null),l.a.createElement("main",null,a),l.a.createElement("hr",null),l.a.createElement("div",{className:y.a.iconBar},l.a.createElement("a",{href:"https://www.linkedin.com/in/paul-jerrold-biglete-44220a183/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn"},l.a.createElement(o.a,{className:y.a.icon,icon:m.b})),l.a.createElement("a",{href:"https://github.com/pbiglete",target:"_blank",rel:"noopener noreferrer",title:"GitHub"},l.a.createElement(o.a,{className:y.a.icon,icon:m.a})),l.a.createElement("a",{href:"https://drive.google.com/file/d/16-j0TG0iAJ3ETrHGeOUrHaxBgGzjsseb/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",title:"Resume"},l.a.createElement(o.a,{className:y.a.icon,icon:u.b})),l.a.createElement("a",{href:"mailto: pbiglete@gmail.com",target:"_blank",rel:"noopener noreferrer",title:"Email"},l.a.createElement(o.a,{className:y.a.icon,icon:u.a})))),l.a.createElement("footer",{className:y.a.footer},"© ",(new Date).getFullYear(),", Created by Paul Jerrold Biglete. - Version 1.0.0"))},data:n})};S.propTypes={children:s.a.node.isRequired};a.a=S},184:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"snkrDB (C# / .NET Core / React)",datelocation:"June 2019 - Present | San Diego, CA",description:"A basic sneaker web application that aims to help give users outfit ideas for their sneakers as well as help them decide on future purchases."},fields:{slug:"snkrDB"}}},{node:{frontmatter:{title:"pbiglete.dev (GatsbyJS / React)",datelocation:"June 2019 - Present | San Diego, CA",description:"My Personal Website / Portfolio"},fields:{slug:"pbigletedev"}}},{node:{frontmatter:{title:"Smart Arcade Controller (Python / Raspberry Pi Zero W)",datelocation:"December 2018 - Postponed | San Diego, CA",description:"An arcade controller that tracks players input data in real time, provides user statistics and helps the user learn button and directional combinations for specific games."},fields:{slug:"smartarcadecontroller"}}},{node:{frontmatter:{title:"SmartPark - A Wireless Parking Solution (C# / Swift)",datelocation:"Aug 2018 - Dec 2018 | San Diego State University",description:"A wireless parking solution that helps make finding parking easier."},fields:{slug:"smartpark"}}},{node:{frontmatter:{title:"Soft Real-Time Task Re-Prioritizer (C / BASH / Raspbian OS)",datelocation:"Sep 2018 - Dec 2018 | San Diego State University",description:"An optimization system that improves OS performance within the Linux user space."},fields:{slug:"taskreprioritizer"}}},{node:{frontmatter:{title:"Digital Thermometer (C / Embedded Systems)",datelocation:"Mar 2018 - May 2018 | San Diego State University",description:"A digital thermometer using a PIC16F18324 microcontroller."},fields:{slug:"digitaltherm"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-c99f4d7e02fe9b96bc6e.js.map