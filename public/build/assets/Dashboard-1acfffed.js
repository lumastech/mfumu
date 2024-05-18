import{D as f}from"./DashboardLaout-f253c150.js";import{i as A,Z as E,r as g,h as a,d as c,b as o,a as s,t as e,f as n,w as l,F as u,g as m,q as x,o as r}from"./app-8af5103e.js";import T from"./GaugeChart-24692d66.js";import V from"./ProfitReportChart-5f25a9eb.js";import D from"./PieChart-b55f98dd.js";import I from"./AreaChart-5deda1eb.js";import N from"./RadialChart-709af61d.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const P="/build/assets/man_with_laptop_light-2130f2f7.png",j={components:{DashboardLayout:f,Link:A,Head:E,GaugeChart:T,ProfitReportChart:V,PieChart:D,AreaChart:I,RadialChart:N},layout:f,props:{auth:Object,users:Number,visitors:Number,plans:Object,sales:Number,plans_count:Number},setup(){const _=g({chart:{id:"vuechart-example"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]},stroke:{curve:"smooth"},colors:["#66DA26","#2E93fA","#546E7A","#E91E63","#FF9800"]}),h=g([{name:"series-1",data:[30,40,35,50,49,60,70,91]}]);return{sideToggle(){document.getElementById("side").classList.toggle("hidden")},chartOptions:_,series:h,currentYear:()=>new Date().getFullYear()}}},B={class:"max-w-12xl mx-auto px-2"},L={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"},F=x('<div class="col-span-2 md:col-span-3 lg:col-span-4 shadow-sm rounded bg-white p-3"><div class="grid md:grid-cols-4 gap-4 place-item-end"><div class="md:col-span-3"><h3 class="text-xl text-indigo-500">Congratulations</h3><p> You have done 72% more sales today. Check your new badge in your profile. </p><button class="text-indigo-500 px-2 py-1 mt-4 border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white transition"> View Badges </button></div><img src="'+P+'" class="selft-end mx-auto max-w-24" alt=""></div></div>',1),Y={class:"flex lg:inline shadow-sm rounded bg-white p-3 space-x-2"},z=s("i",{class:"self-center p-4 bg-sky-100 text-sky-500 rounded-md fas fa-ticket"},null,-1),G={class:"flex-auto sm:text-center lg:text-left self-center"},H=s("p",{class:"mt-2"},"Plans",-1),W={class:"text-2xl font-bold"},Z=s("p",{class:"text-red-500"},[s("i",{class:"fas fa-arrowdown"}),n("$1400 ")],-1),M={class:"flex lg:inline shadow-sm rounded bg-white p-3 space-x-2"},q=s("i",{class:"self-center p-4 bg-teal-100 text-teal-500 rounded-md fas fa-file-invoice-dollar"},null,-1),K={class:"flex-auto sm:text-center lg:text-left self-center"},U=s("p",{class:"mt-2"},"SALES",-1),J={class:"md:text-3xl font-bold"},Q=s("span",{class:"text-xs"},"K",-1),X=s("p",{class:"text-green-500"},[s("i",{class:"fas fa-arrowdown"}),n(" $1400 ")],-1),$={class:"hidden md:flex lg:hidden shadow-sm rounded bg-white p-3"},ss=s("i",{class:"self-center p-4 bg-orange-100 text-orange-500 rounded-md fas fa-users"},null,-1),ts={class:"flex-auto text-center self-center"},es=s("p",{class:"mt-2"},"VISITORS",-1),os={class:"text-2xl font-bold"},as=s("p",{class:"text-red-500"},"1",-1),ns={class:"grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4 my-7"},is={class:"grid md:grid-cols-3 min-h-70 col-span-2 md:col-span-3 lg:col-span-4 c bg-white transition rounded-md shadow-sm p-4 flex"},ls={class:"md:border-l"},ds={class:"grid grid-col-2 col-span-2 md:col-span-3 lg:col-span-2 lg:grid-cols-2 md:grid-cols-3 gap-4"},cs={class:"md:hidden lg:flex text-center flex-col justify-evenly justify-evenly place-items-center shadow-sm rounded bg-white p-3"},rs=s("i",{class:"self-center p-4 bg-orange-100 text-orange-500 rounded-md fas fa-users"},null,-1),_s={class:"flex-auto self-center"},hs=s("p",{class:"mt-2"},"VISITORS",-1),ps={class:"text-2xl font-bold"},fs=s("p",{class:"text-red-500"},"1",-1),gs={class:"flex flex-col justify-evenly place-items-center shadow-sm rounded bg-white p-3"},us=s("div",null,[s("i",{class:"inline-block p-4 bg-teal-100 text-teal-500 rounded-md fas fa-users"})],-1),ms=s("p",{class:"mt-2"},"USERS",-1),xs={class:"md:text-3xl font-bold"},bs=s("p",{class:"text-green-500"},[s("i",{class:"fas fa-arrowdown"}),n(" 00 ")],-1),vs={class:"col-span-2 grid grid-cols-6 shadow-sm rounded bg-white p-3"},ys={class:"col-span-2 flex flex-col justify-evenly"},ws=s("p",{class:"mt-2 font-bold text-xl"},"Profit Report",-1),ks={class:"mt-2 uppercase rounded bg-primary-50 px-2 text-primary-600 inline py-1"},Cs={class:"md:text-3xl font-bold"},Rs=s("span",{class:"text-xs"},"ZMW",-1),Ss=s("p",{class:"text-green-500"},[s("i",{class:"fas fa-arrowdown"}),n(" $1400 ")],-1),As={class:"col-span-4"},Es={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-4"},Ts={class:"shadow-sm rounded bg-white p-3 text-secondary-400"},Vs={class:"flex"},Ds=s("div",{class:"flex-auto"},[s("h2",{class:"font-bold text-2xl text-secondary-600"},"Order Statistics"),s("p",null,"42.82k Total Sales")],-1),Is=s("button",{class:"curso-pointer p-2"},[s("i",{class:"fa-solid fa-ellipsis-vertical"})],-1),Ns=s("ul",{class:"shadow rounded text-left"},[s("li",{class:"p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer"}," Refresh "),s("li",{class:"p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer"}," View All ")],-1),Os={class:"flex mt-2"},Ps=s("div",{class:"flex-auto self-center"},[s("h2",{class:"text-secondary-600 font-bold text-2xl"},"2,855"),s("p",null,"Total Orders")],-1),js={class:"mt-4"},Bs=s("i",{class:"self-center p-2 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"},null,-1),Ls=s("div",{class:"flex-auto"},[s("h4",{class:"font-bold capitalize text-secondary-600"},"2 bedrooms"),s("p",null,"some descriptions")],-1),Fs=s("p",{class:"self-center"},"18.3k",-1),Ys=[Bs,Ls,Fs],zs={class:"shadow-sm rounded bg-white p-3"},Gs=x('<div class="grid grid-cols-3 gap-4 mb-3"><button class="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded">Income</button><button class="hover:text-indigo-500 transition">Income</button><button class="hover:text-indigo-500 transition">Income</button></div><div class="flex gap-3 rounded hover:bg-secondary-50 transition cursor-pointer p-1"><i class="self-center p-3 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"></i><div class="flex-auto"><h4 class="capitalize text-secondary-600">Total Balance</h4><p class="font-bold">ZMW 15,780 <span class="text-green-500"><i class="ml-2 fas fa-angle-up"></i> 47%</span></p></div></div>',2),Hs={class:"flex"},Ws=s("div",{class:"self-center flex-auto"},[s("p",{class:"font-bold"},"Expenses This Week"),s("p",null,"$39 less than last week")],-1),Zs={class:"shadow-sm rounded bg-white p-3"},Ms={class:"flex"},qs=s("div",{class:"flex-auto"},[s("h2",{class:"font-bold text-2xl text-secondary-600"},"Transactions")],-1),Ks=s("button",{class:"curso-pointer p-2"},[s("i",{class:"fa-solid fa-ellipsis-vertical"})],-1),Us=s("ul",{class:"shadow rounded text-left"},[s("li",{class:"p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer"}," Refresh "),s("li",{class:"p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer"}," View All ")],-1),Js={class:"mt-2 text-secondary-400"},Qs=s("i",{class:"self-center p-3 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"},null,-1),Xs=s("div",{class:"flex-auto"},[s("h4",{class:"font-bold capitalize text-secondary-600"},"2 bedrooms"),s("p",null,"some descriptions")],-1),$s=s("p",{class:"self-center"},"18.3k",-1),st=[Qs,Xs,$s];function tt(_,h,t,i,b,et){const v=a("Head"),y=a("apexchart"),w=a("GaugeChart"),k=a("ProfitReportChart"),p=a("dropdown-menu"),C=a("PieChart"),R=a("AreaChart"),S=a("RadialChart");return r(),c("div",B,[o(v,{title:"Dashboard"}),s("div",L,[F,s("div",Y,[z,s("div",G,[H,s("p",W,e(t.plans_count<10?"0":"")+e(t.plans_count?t.plans_count:"00"),1),Z])]),s("div",M,[q,s("div",K,[U,s("p",J,[Q,n(" "+e(t.sales?t.sales:"0.00"),1)]),X])]),s("div",$,[ss,s("div",ts,[es,s("p",os,e(t.visitors<10?"0":"")+e(t.visitors?t.visitors:"00"),1),as])])]),s("div",ns,[s("div",is,[o(y,{width:"100%",height:"auto",type:"line",options:i.chartOptions,series:i.series,class:"md:col-span-2"},null,8,["options","series"]),s("div",ls,[o(w)])]),s("div",ds,[s("div",cs,[rs,s("div",_s,[hs,s("p",ps,e(t.visitors<10?"0":"")+e(t.visitors?t.visitors:"00"),1),fs])]),s("div",gs,[us,ms,s("p",xs,e(t.users?t.users:"00"),1),bs]),s("div",vs,[s("div",ys,[ws,s("p",ks," year "+e(i.currentYear()),1),s("p",Cs,[Rs,n(" "+e(t.sales?t.sales:"0.00"),1)]),Ss]),s("div",As,[o(k)])])])]),s("div",Es,[s("div",Ts,[s("div",Vs,[Ds,o(p,{overlay:!1,direction:"right"},{trigger:l(()=>[Is]),body:l(()=>[Ns]),_:1})]),s("div",Os,[Ps,o(C)]),s("div",js,[(r(),c(u,null,m(5,d=>s("div",{key:d,class:"flex gap-3 rounded transition p-1"},Ys)),64))])]),s("div",zs,[Gs,o(R),s("div",Hs,[o(S),Ws])]),s("div",Zs,[s("div",Ms,[qs,o(p,{overlay:!1,direction:"right"},{trigger:l(()=>[Ks]),body:l(()=>[Us]),_:1})]),s("div",Js,[(r(),c(u,null,m(6,d=>s("div",{key:d,class:"flex gap-3 rounded transition px-1 py-2 border-b"},st)),64))])])])])}const _t=O(j,[["render",tt]]);export{_t as default};
