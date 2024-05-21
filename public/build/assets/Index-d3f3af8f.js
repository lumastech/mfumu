import{D as h}from"./DashboardLaout-0d3a0631.js";import{o as d,d as l,n as v,a as e,t as r,e as M,i as k,Z as C,h as i,b as a,w as n,F as u,g as L}from"./app-574e767a.js";import{_ as B}from"./ConfirmationModal-28699431.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-f79590a2.js";const P={props:{sessionMessage:Object},setup(){return{toast:document.querySelector("#toast")}},mounted(){setTimeout(()=>toast.classList.add("-translate-y-full"),2e3)}},$={class:"relative"},N={class:"text-2xl"};function S(s,c,o,b,m,y){return d(),l("div",$,[o.sessionMessage?(d(),l("div",{key:0,id:"toast",class:v(["bsolute p-4 max-w-md text-white transition-all",{"bg-teal-500":o.sessionMessage.title=="success","bg-red-500":o.sessionMessage.title=="error","bg-orange-500":o.sessionMessage.title=="warning"}])},[e("div",N,r(o.sessionMessage.title),1),e("p",null,r(o.sessionMessage.message),1)],2)):M("",!0)])}const T=p(P,[["render",S]]),j={components:{DashboardLaout:h,Link:k,Head:C,ConfirmationModal:B,Toast:T},props:{plans:Object},layout:h,setup(){return{confirm:()=>window.confirm("Are you sure you want to delete this plan?")}}},A={class:"max-w-7xl mx-auto px-2"},D={class:"flex justify-between gap-4 mb-4 place-items-center"},F=e("h2",null,"Plans",-1),H=e("i",{class:"fa-solid fa-plus"},null,-1),V=e("span",null,"Post Plan",-1),Z={class:"shadow-xs rounded bg-white/90 p-2 overflow-x-scroll"},O={class:"w-full"},W=e("thead",null,[e("tr",null,[e("th",{class:"border-b border-gray-200 px-2 py-1"}),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Name"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Level"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Style"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Price"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Status"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Action")])],-1),q={class:"text-teal-500"},z={class:"border-b border-gray-200 shrink-0"},E=["src"],I={class:"border-b border-gray-200 px-2 py-1 text-left"},G={class:"border-b border-gray-200 px-2 py-1 text-center"},J={class:"border-b border-gray-200 px-2 py-3"},K={class:"border-b border-gray-200 px-2 py-3 text-right"},Q={class:"border-b border-gray-200 px-2 py-3 text-right"},R={class:"bg-teal-500 px-2 rounded-md text-white"},U={class:"border-b border-gray-200 px-2 py-3 text-right"},X=e("i",{class:"fa-solid fa-edit"},null,-1),Y=e("i",{class:"fa-solid fa-trash-can"},null,-1),ee=e("h4",null,"Confirm action",-1),te=e("p",null,"Are you sure you want to delete this plan?",-1);function se(s,c,o,b,m,y){const g=i("Head"),_=i("Link"),f=i("ConfirmationModal"),x=i("Toast");return d(),l(u,null,[a(g,{title:"Plans"}),e("div",A,[e("div",D,[F,a(_,{href:s.route("plans.create"),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:n(()=>[H,V]),_:1},8,["href"])]),e("div",Z,[e("table",O,[W,e("tbody",q,[(d(!0),l(u,null,L(o.plans.data,t=>(d(),l("tr",{key:t.id,class:"hover:bg-gray-50 transition"},[e("td",z,[e("img",{src:t.images.length?t.images[0].image:"",alt:"",class:"w-16"},null,8,E)]),e("td",I,r(t.name),1),e("td",G,r(t.levels),1),e("td",J,r(t.style),1),e("td",K,r(s.numeralFormat(t.price,"0,0[.]00 ZMW"))+" ZMW",1),e("td",Q,[e("span",R,r(t.area),1)]),e("td",U,[a(_,{href:s.route("plans.edit",t),class:"p-2 text-sky-500"},{default:n(()=>[X]),_:2},1032,["href"]),a(_,{href:s.route("plans.destroy",t.id),method:"delete",class:"text-red-500",as:"button",type:"button",onBefore:b.confirm},{default:n(()=>[Y]),_:2},1032,["href","onBefore"]),a(f,{show:0},{title:n(()=>[ee]),content:n(()=>[te]),footer:n(()=>[e("button",{onClick:c[0]||(c[0]=(...w)=>s.close&&s.close(...w)),class:"text-gray-500 hover:bg-secondary-100 px-4 rounded transition"},"Cancel")]),_:1})])]))),128))])])])]),a(x)],64)}const le=p(j,[["render",se]]);export{le as default};
