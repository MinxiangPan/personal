(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),c=(a(43),a(1)),s=a(2),i=a(4),u=a(3),m=a(16),d=(a(21),a(22),a(14)),p=a(9),f=a(34),v=a.n(f),b=a(7),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={message:"",count:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",(function(){null!=document.getElementById("navbarSupportedContent")&&document.getElementById("navbarSupportedContent").classList.remove("show")}))}},{key:"render",value:function(){return r.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("button",{id:"nav-toggler",className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#about"},"About ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#portfolio"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/folder/public"},"Folder")))))}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.name,a=(e.profilepic,e.bio,e.email,e.resumedownload),n=e.occupation,l=this.props.data.address.cityname,o=this.props.data.social.map((function(e){return r.a.createElement("a",{key:e.name,className:"link",href:e.url},e.name," ",r.a.createElement("i",{className:e.className,style:{fontSize:"30px"}}))}));return r.a.createElement("section",{className:"about",id:"about"},r.a.createElement("div",{className:"intro"},r.a.createElement("h1",{style:{fontSize:"50px"}},t),r.a.createElement("p",{className:"lightdark"},n,"  in  ",l),r.a.createElement("p",null),r.a.createElement("div",{style:{display:"inline"}},o),r.a.createElement("a",{className:"btn btn-info download",href:a},r.a.createElement("i",{className:"fa fa-download",style:{fontSize:"30px"}})," Download Resume")))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},r.a.createElement("em",null,e.degree),r.a.createElement("br",null),r.a.createElement("span",{className:"date"},e.graduated),r.a.createElement("br",null),r.a.createElement("span",{className:"date"},"GPA: ",e.GPA," / ",e.GPA_scale)),r.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company,className:"experience-section"},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},r.a.createElement("em",{style:{color:"lightslategrey"}},e.title),r.a.createElement("br",null),r.a.createElement("span",{className:"date"},e.years)),r.a.createElement("p",{className:"description"},e.description))})),a=this.props.data.skills.map((function(e){var t="btn "+(e.level<=30?"btn-outline-info ":e.level<=60?"btn-outline-danger ":"btn-outline-success ")+e.name.toLowerCase();return r.a.createElement("div",{key:e.name,className:t,style:{margin:"0 10px 10px 0"}},r.a.createElement("strong",null,e.name))}));return r.a.createElement("section",{className:"portfolio",id:"portfolio"},r.a.createElement("div",{className:"resume-section"},r.a.createElement("h2",{className:"resume-title",style:{color:"#6699ff"}},"Education:"),r.a.createElement("div",null,e)),r.a.createElement("div",{className:"resume-section"},r.a.createElement("h2",{className:"resume-title",style:{color:"#ff9966"}},r.a.createElement("span",null,"Experience:")),r.a.createElement("div",null,t)),r.a.createElement("div",{className:"resume-section"},r.a.createElement("h2",{className:"resume-title",style:{color:"#00ff99"}},"Skills:"),r.a.createElement("div",null,a)))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();e="".concat(a,"/").concat(t,"/").concat(n);return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"Posted by: Matthew Pan - Date: ",e," - Website: ",r.a.createElement("a",{href:"https://www.mattpan.com"},"www.mattpan.com")))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data,t=e.email,a=e.phone,n=e.address,l=n.street,o=n.city,c=n.state,s=n.zip;n.cityname}return r.a.createElement("section",{className:"contact",id:"contact"},r.a.createElement("div",null,r.a.createElement("h2",{className:"resume-title",style:{color:"#9933ff"}},"Contact Info"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null," : "),r.a.createElement("td",null,t)),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone"),r.a.createElement("td",null," : "),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Address"),r.a.createElement("td",null," : "),r.a.createElement("td",null,l)),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,"".concat(o,", ").concat(c,", ").concat(s)))))))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={resumeData:{},gridtemplate:"1fr 2.5fr 1fr"},n.resizeWindow=n.resizeWindow.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"getResumeData",value:function(){v.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData(),this.resizeWindow(),window.addEventListener("resize",this.resizeWindow)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeWindow)}},{key:"resizeWindow",value:function(){window.innerWidth<500?this.setState({gridtemplate:"1fr 10fr 1fr"}):this.setState({gridtemplate:"1fr 2.5fr 1fr"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"main",style:{gridTemplateColumns:this.state.gridtemplate}},r.a.createElement("div",{className:"leftEmpty"}),r.a.createElement("div",{className:"rightEmpty"}),r.a.createElement(h,{data:this.state.resumeData.main}),r.a.createElement(g,{data:this.state.resumeData.resume}),r.a.createElement(y,{data:this.state.resumeData.main})),r.a.createElement(w,null))}}]),a}(n.Component),O=a(12),N=a.n(O),j=(a(32),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateToNewFolder=function(e){N.a.get(n.state.server+"/api"+e).then((function(e){if(!e.data.hasOwnProperty("errno")){var t=e.data;t.sort((function(e,t){return e.isDict==t.isDict?0:e.isDict?-1:1})),n.setState({list:t})}})).catch((function(e){console.log(e)}))},n.state={list:[],server:"https://gcpf1.mattpan.com"},n.updatebasedonCurrentURL=n.updatebasedonCurrentURL.bind(Object(p.a)(n)),n.updateToNewFolder=n.updateToNewFolder.bind(Object(p.a)(n)),n.ignoreStatic=n.ignoreStatic.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){N.a.defaults.headers.common.Authorization="",this.updateToNewFolder(document.URL.substr(document.URL.indexOf(this.props.target))),window.addEventListener("popstate",this.updatebasedonCurrentURL)}},{key:"updatebasedonCurrentURL",value:function(e){this.updateToNewFolder(document.URL.substr(document.URL.indexOf(this.props.target)))}},{key:"ignoreStatic",value:function(e){return e.substr(e.indexOf(this.props.target))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var t=document.URL.substring(document.URL.indexOf(e.props.target),document.URL.lastIndexOf("/"));if(""==t){var a=document.URL.substring(0,document.URL.lastIndexOf("/"));window.location.href=a}else e.updateToNewFolder(t),window.history.pushState(null,null,document.URL.substring(0,document.URL.lastIndexOf("/")))}},"Back"),this.state.list.map((function(t){return t.isDict?r.a.createElement(b.b,{className:"itemFolder",key:e.state.server+t.name,to:"/folder"+e.ignoreStatic(t.name),onClick:function(){return e.updateToNewFolder(e.ignoreStatic(t.name))}},"Folder: "+t.name.substr(t.name.lastIndexOf("/")+1)):r.a.createElement("div",{className:"itemFiles",key:e.state.server+t.name,onClick:function(){window.open(e.state.server+t.name,"_blank")}},"Files: "+t.name.substr(t.name.lastIndexOf("/")+1))})))}}]),a}(n.Component)),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateToNewFolder=function(e){N.a.get(n.state.server+"/api"+e).then((function(e){if(!e.data.hasOwnProperty("errno")){console.log(e.data);var t=e.data;t.sort((function(e,t){return e.isDict==t.isDict?0:e.isDict?-1:1})),n.setState({list:t})}})).catch((function(e){console.log(e)}))},n.state={list:[],server:"https://gcpf1.mattpan.com",userID:null,username:null,email:null},n.updatebasedonCurrentURL=n.updatebasedonCurrentURL.bind(Object(p.a)(n)),n.updateToNewFolder=n.updateToNewFolder.bind(Object(p.a)(n)),n.ignoreStatic=n.ignoreStatic.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){N.a.defaults.headers.common.Authorization="Token "+localStorage.getItem("token"),this.getUserInfo(),window.addEventListener("popstate",this.updatebasedonCurrentURL)}},{key:"getUserInfo",value:function(){var e=this;N.a.get(this.state.server+"/api/auth/user").then((function(t){e.setState({userID:t.data.id,username:t.data.username,email:t.data.email}),e.updateToNewFolder(document.URL.substr(document.URL.indexOf(e.props.target))+"/"+t.data.username+"/"),window.history.pushState(null,null,document.URL+"/"+t.data.username+"/")}))}},{key:"testThre",value:function(e){N()({url:this.state.server+"/api"+e,method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data],{type:e.headers["content-type"]}));window.open(t)}))}},{key:"updatebasedonCurrentURL",value:function(e){this.updateToNewFolder(document.URL.substr(document.URL.indexOf(this.props.target)))}},{key:"ignoreStatic",value:function(e){return e.substr(e.indexOf(this.props.target))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var t=document.URL.substring(document.URL.indexOf(e.props.target),document.URL.lastIndexOf("/"));if(""==t){var a=document.URL.substring(0,document.URL.lastIndexOf("/"));window.location.href=a}else e.updateToNewFolder(t+"/"),window.history.pushState(null,null,document.URL.substring(0,document.URL.lastIndexOf("/")))}},"Back"),this.state.list.map((function(t){return t.isDict?r.a.createElement(b.b,{className:"itemFolder",key:e.state.server+t.name,to:"/folder"+e.ignoreStatic(t.name),onClick:function(){return e.updateToNewFolder(e.ignoreStatic(t.name))}},"Folder: "+t.name.substr(t.name.lastIndexOf("/")+1)):r.a.createElement("div",{className:"itemFiles",key:e.state.server+t.name,onClick:function(){e.testThre(t.name)}},"Files: "+t.name.substr(t.name.lastIndexOf("/")+1))})))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).switchPage=function(e){var t=r.a.createElement(j,{target:"/public"});switch(e){case"media":t=r.a.createElement(L,{target:"/media"})}n.setState({page:t})},n.state={page:r.a.createElement(j,{target:"/public"})},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"tempLogin",value:function(e,t){N.a.post("https://gcpf1.mattpan.com/api/auth/login",{username:e,password:t}).then((function(e){e.data.token?localStorage.setItem("token",e.data.token):alert("username or password is incorrect!")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(b.b,{class:"navbar-brand",href:"folder"},"Folder"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(b.b,{class:"nav-link",to:"/folder/public",onClick:function(){return e.switchPage("public")}},"Public ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.b,{class:"nav-link",onClick:function(){return e.switchPage("media")},to:"/folder/media"},"Media"))),r.a.createElement("ul",{class:"navbar-nav my-2 my-lg-0"},r.a.createElement("li",null,r.a.createElement("input",{id:"username"})),r.a.createElement("li",null,r.a.createElement("input",{id:"password",type:"password"})),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=document.getElementById("username"),a=document.getElementById("password");e.tempLogin(t.value,a.value),t.value="",a.value=""}},"Login")),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){localStorage.removeItem("token"),N.a.defaults.headers.common.Authorization=""}},"LogOut"))))),this.state.page)}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),m.a.initialize("UA-156169363-1"),m.a.pageview(window.location.pathname),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:k}),r.a.createElement(d.a,{path:"/folder/(.*)?",component:C})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.68acab75.chunk.js.map