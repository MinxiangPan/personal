(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),s=(a(41),a(2)),i=a(3),o=a(5),m=a(4),u=a(15),d=(a(20),a(21),a(11)),p=a(14),E=a(32),v=a.n(E),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={message:"",count:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",(function(){document.getElementById("navbarSupportedContent").classList.remove("show")}))}},{key:"render",value:function(){return l.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-dark"},l.a.createElement("button",{id:"nav-toggler",className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#about"},"About ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#portfolio"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"public"},"Folder")))))}}]),a}(n.Component),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.name,a=(e.profilepic,e.bio,e.email,e.resumedownload),n=e.occupation,r=this.props.data.address.cityname,c=this.props.data.social.map((function(e){return l.a.createElement("a",{key:e.name,className:"link",href:e.url},e.name," ",l.a.createElement("i",{className:e.className,style:{fontSize:"30px"}}))}));return l.a.createElement("section",{className:"about",id:"about"},l.a.createElement("div",{className:"intro"},l.a.createElement("h1",{style:{fontSize:"50px"}},t),l.a.createElement("p",{className:"lightdark"},n,"  in  ",r),l.a.createElement("p",null),l.a.createElement("div",{style:{display:"inline"}},c),l.a.createElement("a",{className:"btn btn-info download",href:a},l.a.createElement("i",{className:"fa fa-download",style:{fontSize:"30px"}})," Download Resume")))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},l.a.createElement("em",null,e.degree),l.a.createElement("br",null),l.a.createElement("span",{className:"date"},"Excepted ",e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company,className:"experience-section"},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},l.a.createElement("em",{style:{color:"lightslategrey"}},e.title),l.a.createElement("br",null),l.a.createElement("span",{className:"date"},e.years)),l.a.createElement("p",{className:"description"},e.description))})),a=this.props.data.skills.map((function(e){var t="btn "+(e.level<=30?"btn-outline-info ":e.level<=60?"btn-outline-danger ":"btn-outline-success ")+e.name.toLowerCase();return l.a.createElement("div",{key:e.name,className:t,style:{margin:"0 10px 10px 0"}},l.a.createElement("strong",null,e.name))}));return l.a.createElement("section",{className:"portfolio",id:"portfolio"},l.a.createElement("div",{className:"resume-section"},l.a.createElement("h2",{className:"resume-title",style:{color:"#6699ff"}},"Education:"),l.a.createElement("div",null,e)),l.a.createElement("div",{className:"resume-section"},l.a.createElement("h2",{className:"resume-title",style:{color:"#ff9966"}},l.a.createElement("span",null,"Experience:")),l.a.createElement("div",null,t)),l.a.createElement("div",{className:"resume-section"},l.a.createElement("h2",{className:"resume-title",style:{color:"#00ff99"}},"Skills:"),l.a.createElement("div",null,a)))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();e="".concat(a,"/").concat(t,"/").concat(n);return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"Posted by: Matthew Pan - Date: ",e," - Website: ",l.a.createElement("a",{href:"https://www.mattpan.com"},"www.mattpan.com")))}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data,t=e.email,a=e.phone,n=e.address,r=n.street,c=n.city,s=n.state,i=n.zip;n.cityname}return l.a.createElement("section",{className:"contact",id:"contact"},l.a.createElement("div",null,l.a.createElement("h2",{className:"resume-title",style:{color:"#9933ff"}},"Contact Info"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null," : "),l.a.createElement("td",null,t)),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone"),l.a.createElement("td",null," : "),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Address"),l.a.createElement("td",null," : "),l.a.createElement("td",null,r)),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,"".concat(c,", ").concat(s,", ").concat(i)))))))}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={resumeData:{},gridtemplate:"1fr 2.5fr 1fr"},n.resizeWindow=n.resizeWindow.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"getResumeData",value:function(){v.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData(),this.resizeWindow(),window.addEventListener("resize",this.resizeWindow)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeWindow)}},{key:"resizeWindow",value:function(){window.innerWidth<500?this.setState({gridtemplate:"1fr 10fr 1fr"}):this.setState({gridtemplate:"1fr 2.5fr 1fr"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement("div",{className:"main",style:{gridTemplateColumns:this.state.gridtemplate}},l.a.createElement("div",{className:"leftEmpty"}),l.a.createElement("div",{className:"rightEmpty"}),l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.resume}),l.a.createElement(N,{data:this.state.resumeData.main})),l.a.createElement(y,null))}}]),a}(n.Component),w=(a(44),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={list:[],server:"https://gcpf1.mattpan.com"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.list.map((function(t){return t.isDict?l.a.createElement("a",{key:e.state.server+t.name,href:t.name,style:{display:"block",color:"black"}},"Folder: "+t.name.split(document.URL.substr(document.URL.indexOf("/public")))[1].substr(1)):l.a.createElement("a",{key:e.state.server+t.name,href:e.state.server+t.name,style:{display:"block"}},"Files: "+t.name.split(document.URL.substr(document.URL.indexOf("/public")))[1].substr(1))})))}}]),a}(n.Component)),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),u.a.initialize("UA-156169363-1"),u.a.pageview(window.location.pathname),n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:g}),l.a.createElement(d.a,{path:"/public",component:w})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(13);c.a.render(l.a.createElement(j.a,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.bab1f2b9.chunk.js.map