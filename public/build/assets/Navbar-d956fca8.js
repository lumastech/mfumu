import{i as w,r as h,h as d,o as u,d as f,a as s,l as k,H as S,n as _,b as e,w as o,f as l,j as H,F as B,O as p}from"./app-506644a5.js";import{_ as P,a as L}from"./ResponsiveNavLink-64776131.js";import{L as A}from"./LoadingAnim-b995f9f9.js";import{_ as C}from"./logo_white-292b7b05.js";import{_ as D}from"./logo_yellow-df8def42.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const z={components:{Link:w,Dropdown:P,LoadingAnim:A,ResponsiveNavLink:L},setup(){const i=h(!1),n=h(!0),c=h(null),t=h(0);return{navShow:i,user_agent_suport:n,search:c,searchFunc:()=>{(c.value!=null||c.value!="")&&(t.value=1,p.get("/searchplan/"+c.value,{},{onFinish:()=>{t.value=1}}),t.value=1)},logout:()=>{p.post(route("logout"))}}},created(){navigator.userAgent.search("Chrome")==-1&&(this.user_agent_suport=!1)}},N={class:"bg-secondary-900 text-primary-600"},O={class:"bg-secondary-800"},M={class:"flex max-w-7xl mx-auto px-2 py-1 space-x-2"},R=s("img",{src:C,alt:"mfumu",class:"w-16 md:w-32"},null,-1),V=s("p",{class:"flex-auto"},null,-1),T=s("p",{class:"text-sm text-secondary-100 self-center"},[s("i",{class:"fas fa-phone"}),l(" +260 97 9729 858")],-1),U={class:"bg-secondary-300 rounded overflow-hidden"},j=s("i",{class:"fas fa-magnifying-glass"},null,-1),E=[j],q={class:"flex max-w-7xl mx-auto flex px-2"},G={class:"flex-auto md:hidden"},I=s("i",{class:"fas fa-bars"},null,-1),J=[I],K={class:"uppercase flex-auto hidden md:flex"},Q=s("i",{class:"fas fa-home"},null,-1),W=s("button",{class:"p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition"},[l("House Plans "),s("i",{class:"fas fa-angle-down"})],-1),X={class:"md:w-[60rem] z-50 rounded divide-y divide-gray-100 shadow bg-gray-700"},Y={class:"grid md:grid-cols-4 gap-4 mx-4 mx-auto"},Z=s("h2",{class:"text-xl mb-2 pb-2 pl-2 border-b border-yellow-600"},"Sizes",-1),$={class:"text-sm"},ss=s("h2",{class:"text-xl mb-2 pb-2 border-b border-yellow-600"},"Styles",-1),os={class:"text-sm"},es=s("h2",{class:"text-xl mb-2 pb-2 border-b border-yellow-600"},"Styles",-1),ls={class:"text-sm"},as=s("div",null,[s("h2",{class:"text-2xl mb-2 pb-2 border-b border-yellow-600"},"Our Favorite"),s("img",{src:"assets/img3.jpg",alt:"mfumu",class:"aspect-video"})],-1),ts=s("ul",{class:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownDefault"},[s("li",null,[s("a",{href:"downloads",class:"block py-2 px-4 text-gray-100"},"Orders")])],-1),ns={class:"uppercase"},rs={key:0,class:"inline"},is=s("button",{class:"mr-2"},[l("DASHBOARD "),s("i",{class:"fas fa-angle-down"})],-1),cs={key:1,class:"inline"},ds=s("i",{class:"fas fa-heart"},null,-1),hs=s("i",{class:"fas fa-cart-shopping"},null,-1),us=s("img",{src:D,alt:"mfumu",class:"w-full bg-secondary-600 py-7"},null,-1),fs=s("i",{class:"fas w-7 fa-home mr-4"},null,-1),_s=s("i",{class:"fas w-7 fa-solid fa-puzzle-piece mr-4"},null,-1),ps=s("i",{class:"fas w-7 fa-solid fa-puzzle-piece mr-4"},null,-1),bs=s("i",{class:"fas w-7 fa-solid fa-circle-info mr-4"},null,-1),ms=s("i",{class:"fas w-7 fa-solid fa-address-card mr-4"},null,-1),gs=s("hr",{class:"w-2/3 mx-auto border-t border-secondary-800"},null,-1),ys=s("button",null,[s("i",{class:"fa fa-close text-2xl absolute top-6 right-8 text-white font-thin hover:text-red-500 transition"})],-1);function vs(i,n,c,t,b,m){const a=d("Link"),g=d("Dropdown"),y=d("ResponsiveNavLink"),v=d("dropdown-menu"),x=d("LoadingAnim");return u(),f(B,null,[s("nav",N,[s("div",O,[s("div",M,[R,V,T,s("div",U,[k(s("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>t.search=r),type:"text",class:"hidden md:inline h-full px-2 bg-secondary-900 p-0 focus:outline-none focus:border-0border border-0 outline-none"},null,512),[[S,t.search]]),s("button",{onClick:n[1]||(n[1]=(...r)=>t.searchFunc&&t.searchFunc(...r)),class:"bg-primary-700 text-secondary-200 hover:bg-primary-800 transition md:border-l h-full px-2"},E)])])]),s("div",q,[s("div",G,[s("button",{onClick:n[2]||(n[2]=r=>t.navShow=!t.navShow),class:_([{hidden:t.navShow},"p-2 hover:text-secondary-200 transition"])},J,2)]),s("div",K,[e(a,{href:"/",class:"p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition"},{default:o(()=>[Q,l(" Home")]),_:1}),e(g,null,{trigger:o(()=>[W]),content:o(()=>[s("div",X,[s("div",Y,[s("div",null,[Z,s("ul",$,[s("li",null,[e(a,{href:"/filter/1 Bedroom",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("1 Bedroom")]),_:1})]),s("li",null,[e(a,{href:"/filter/2 Bedrooms",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("2 Bedroom")]),_:1})]),s("li",null,[e(a,{href:"/filter/3 Bedrooms",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("3 Bedroom")]),_:1})]),s("li",null,[e(a,{href:"/filter/4 Bedrooms",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("4 Bedroom")]),_:1})]),s("li",null,[e(a,{href:"/filter/5 Bedrooms",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("+5 Bedroom")]),_:1})])])]),s("div",null,[ss,s("ul",os,[s("li",null,[e(a,{href:"/filter/Commercial Buildinngs",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Commercial Buildinngs")]),_:1})]),s("li",null,[e(a,{href:"/filter/Apartments",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Apartments")]),_:1})]),s("li",null,[e(a,{href:"/filter/Hostels and Lodges",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Hostels and Lodges")]),_:1})]),s("li",null,[e(a,{href:"/filter/Duplex Desings",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Duplex Desings")]),_:1})]),s("li",null,[e(a,{href:"/filter/Modern House Plans",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Modern House Plans")]),_:1})])])]),s("div",null,[es,s("ul",ls,[s("li",null,[e(a,{href:"/filter/Small Houses",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Small Houses")]),_:1})]),s("li",null,[e(a,{href:"/filter/Beach House Plans",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Beach House Plans")]),_:1})]),s("li",null,[e(a,{href:"/filter/Contemporary House Plans",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Contemporary House Plans")]),_:1})]),s("li",null,[e(a,{href:"/filter/Meditaerranean House Plans",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Meditaerranean House Plans")]),_:1})]),s("li",null,[e(a,{href:"/filter/Farm House Plans",class:"block px-2 py-1 hover:bg-gray-600 transition-all"},{default:o(()=>[l("Farm House Plans")]),_:1})])])]),as]),ts])]),_:1}),e(a,{href:"/property-list",class:"p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition"},{default:o(()=>[l("Properties")]),_:1}),e(a,{href:"/about",class:"p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition"},{default:o(()=>[l("About US")]),_:1}),e(a,{href:"contacts",class:"p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition"},{default:o(()=>[l("contact us")]),_:1})]),s("div",ns,[i.$page.props.auth?(u(),f("div",rs,[e(v,{overlay:!1,class:"rounded overflow-hidde"},{trigger:o(()=>[is]),body:o(()=>[e(a,{href:"/dashboard",class:"block w-full hover:bg-secondary-200 text-sm p-2 transition"},{default:o(()=>[l("dashboard")]),_:1}),e(a,{href:i.route("profile.show"),class:"block w-full hover:bg-secondary-200 text-sm p-2 transition border-y"},{default:o(()=>[l("Acount")]),_:1},8,["href"]),s("form",{method:"POST",onSubmit:n[3]||(n[3]=H((...r)=>t.logout&&t.logout(...r),["prevent"]))},[e(y,{as:"button",class:"block w-full hover:bg-secondary-200 text-sm p-2 transition"},{default:o(()=>[l(" Log Out ")]),_:1})],32)]),_:1})])):(u(),f("div",cs,[e(a,{href:"/login",class:"p-2 inline-block hover:text-secondary-200 transition"},{default:o(()=>[l("Login")]),_:1}),e(a,{href:"/register",class:"p-2 inline-block hover:text-secondary-200 transition"},{default:o(()=>[l("Register")]),_:1})])),e(a,{href:"#",class:"px-2 inline-block hover:text-secondary-200 transition border-x border-secondary-600"},{default:o(()=>[ds]),_:1}),e(a,{href:"#",class:"p-2 inline-block hover:text-secondary-200 transition"},{default:o(()=>[l("0 "),hs]),_:1})])])]),s("div",{onClick:n[4]||(n[4]=r=>t.navShow=!1),class:_([{"w-0":!t.navShow,"w-full":t.navShow,"delay-300":!t.navShow,"delay-0":t.navShow,"bg-none":!t.navShow,"bg-gray-900/70":!t.user_agent_suport,"bg-gray-900/10":t.user_agent_suport},"fixed transition-w duration-0 h-full top-0 left-0 z-50 backdrop-filter backdrop-blur-sm"])},[s("div",{class:_(["overflow-x-hidden h-full bg-secondary-900 text-secondary-200 transition-all duration-500 ease-in-out shadow-md w-2/3 md:w-72",{"-translate-x-full":!t.navShow}])},[us,e(a,{href:"/",class:"p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"},{default:o(()=>[fs,l(" Home")]),_:1}),e(a,{href:"/plans-list",class:"p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"},{default:o(()=>[_s,l("All Plans")]),_:1}),e(a,{href:"property-list",class:"p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"},{default:o(()=>[ps,l("Properties")]),_:1}),e(a,{href:"/about",class:"p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"},{default:o(()=>[bs,l("About US")]),_:1}),e(a,{href:"/contacts",class:"p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"},{default:o(()=>[ms,l("Contact us")]),_:1}),gs],2),ys],2),e(x,{show:i.animate},null,8,["show"])],64)}const Ps=F(z,[["render",vs]]);export{Ps as N};