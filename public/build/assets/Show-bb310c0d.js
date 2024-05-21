import{D as i}from"./DashboardLaout-0f984fca.js";import{i as n,Z as r,h as l,d as _,b as e,a as s,w as a,o as h,t as d}from"./app-0cb46a62.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const x={components:{DashboardLayout:i,Link:n,Head:r},layout:i,props:{auth:Object,users:Number,visitors:Number,plans:Object,sales:Number,plans_count:Number},setup(){return{sideToggle(){document.getElementById("side").classList.toggle("hidden")}}}},f={class:"max-w-7xl mx-auto px-2"},b={class:"grid lg:grid-cols-4 grid-cols-2 gap-4"},m={class:"flex-1"},v=s("h2",{class:""},"PLANS",-1),p={class:"text-3xl font-bold"},g=s("div",{class:""},[s("i",{class:"fa-solid fa-ticket text-6xl"})],-1),w={class:"flex-1"},k=s("h2",{class:""},"SALES",-1),S={class:"text-3xl font-bold"},y=s("div",{class:""},[s("i",{class:"fa-solid fa-file-invoice-dollar text-6xl"})],-1),L={class:"flex-1"},N=s("h2",{class:""},"VISITORS",-1),D={class:"text-3xl font-bold"},B=s("div",{class:""},[s("i",{class:"fa-solid fa-users text-6xl"})],-1),E={class:"flex-1"},H=s("h2",{class:""},"USERS",-1),I={class:"text-3xl font-bold"},O=s("div",{class:""},[s("i",{class:"fa-solid fa-users text-6xl"})],-1);function V(j,A,t,C,R,T){const c=l("Head"),o=l("Link");return h(),_("div",f,[e(c,{title:"Dashboard"}),s("div",b,[e(o,{to:"/",class:"bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex"},{default:a(()=>[s("div",m,[v,s("p",p,d(t.plans_count?t.plans_count:"00"),1)]),g]),_:1}),e(o,{to:"/",class:"bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex"},{default:a(()=>[s("div",w,[k,s("p",S,"ZMW "+d(t.sales?t.sales:"00"),1)]),y]),_:1}),e(o,{to:"/",class:"bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex"},{default:a(()=>[s("div",L,[N,s("p",D,d(t.visitors?t.visitors:"00"),1)]),B]),_:1}),e(o,{to:"/",class:"bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex"},{default:a(()=>[s("div",E,[H,s("p",I,d(t.users?t.users:"00"),1)]),O]),_:1})])])}const U=u(x,[["render",V]]);export{U as default};