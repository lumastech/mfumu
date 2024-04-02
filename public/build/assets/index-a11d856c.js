import{D as b}from"./DashboardLaout-6225878c.js";import{i as m,Z as u,h as d,o as n,d as l,b as a,a as t,F as p,g,t as o,w as r}from"./app-8773c9a7.js";import{_ as w}from"./ConfirmationModal-0f66f2e6.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-f08571b9.js";const C={components:{DashboardLaout:b,Link:m,Head:u,ConfirmationModal:w},props:{orders:Object},layout:b,setup(){return{confirm:()=>window.confirm("Are you sure you want to delete this order?")}}},v={class:"max-w-7xl mx-auto px-2"},B=t("div",{class:"flex justify-between gap-4 mb-4 place-items-center"},[t("h2",{class:"text-xl md:text-2xl font-bold"},"ORDERS")],-1),L={class:"shadow rounded bg-white/60 p-2 overflow-x-scroll"},A={class:"w-full"},D=t("thead",null,[t("tr",null,[t("th",{class:"border-b border-gray-200 px-2 py-1"},[t("i",{class:"fa-solid fa-dolar"})]),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Name"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Email"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Phone"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Order N0"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Amount"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Status"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Action")])],-1),N={class:"text-teal-500"},$=t("td",{class:"border-b border-gray-200 px-2 py-3"},[t("i",{class:"fa-solid fa-order"})],-1),E={class:"border-b border-gray-200 px-2 py-1 text-left"},H={class:"border-b border-gray-200 px-2 py-1 text-left"},M=["href"],O={class:"border-b border-gray-200 px-2 py-3"},S={class:"border-b border-gray-200 px-2 py-3"},j={class:"border-b border-gray-200 px-2 py-3"},F={class:"border-b border-gray-200 px-2 py-3"},R={class:"bg-teal-500 px-2 rounded-md text-white"},V={class:"border-b border-gray-200 px-2 py-3 text-right"},P=t("i",{class:"fa-solid fa-edit"},null,-1),Z=t("i",{class:"fa-solid fa-trash-can"},null,-1),q=t("h4",null,"Confirm action",-1),z=t("p",null,"Are you sure you want to delete this order?",-1);function G(s,i,_,h,I,J){const f=d("Head"),c=d("Link"),y=d("ConfirmationModal");return n(),l(p,null,[a(f,{title:"orders"}),t("div",v,[B,t("div",L,[t("table",A,[D,t("tbody",N,[(n(!0),l(p,null,g(_.orders.data,e=>(n(),l("tr",{key:e.id,class:"hover:bg-gray-50 transition"},[$,t("td",E,o(e.name),1),t("td",H,[t("a",{href:`mailto:${e.email}`},o(e.email),9,M)]),t("td",O,o(e.order_number),1),t("td",S,o(e.phone),1),t("td",j,o(e.amount),1),t("td",F,[t("span",R,o(e.status),1)]),t("td",V,[a(c,{href:s.route("order.edit",e.id),class:"p-2 text-sky-500"},{default:r(()=>[P]),_:2},1032,["href"]),a(c,{href:s.route("order.destroy",e.id),method:"delete",class:"text-red-500",as:"button",type:"button",onBefore:h.confirm},{default:r(()=>[Z]),_:2},1032,["href","onBefore"]),a(y,{show:0},{title:r(()=>[q]),content:r(()=>[z]),footer:r(()=>[t("button",{onClick:i[0]||(i[0]=(...x)=>s.close&&s.close(...x)),class:"text-gray-500 hover:bg-secondary-100 px-4 rounded transition"},"Cancel")]),_:1})])]))),128))])])])])],64)}const X=k(C,[["render",G]]);export{X as default};
