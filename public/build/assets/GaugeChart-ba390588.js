import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as _,h as g,d as c,a as t,b as p,w as m,t as s,F as f,o as d,f as x,g as y}from"./app-36527e65.js";const w={props:{last_month:Number,this_month:Number},setup(){const h=_([0]),u=_({chart:{height:280,type:"radialBar"},series:[67],colors:["#20E647"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,track:{background:"#333",startAngle:-135,endAngle:135},dataLabels:{name:{show:!1},value:{fontSize:"16px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",gradientToColors:["#87D4F9"],stops:[0,100]}},stroke:{lineCap:"butt"},labels:["Progress"]});return{series:h,plotOptions:u,getPreviousMonths:()=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],l=new Date().getMonth(),i=[];for(let o=0;o<=4;o++){const b=(l-o+12)%12;i.push(r[b])}return i},growthPer:(r,a)=>(a==0?1:a)/(r==0?1:r)*100}}},M={class:"text-right"},P={class:"rounded px-2 pyy-1 bg-indigo-500 hover:bg-indigo-600 transition text-white"},k=t("i",{class:"fas fa-angle-down"},null,-1),A={class:"shadow rounded text-left"},B={class:"text-center mb-2"},C={class:"flex justify-evenly"},D={class:"flex"},N=t("i",{class:"self-center p-3 rounded bg-green-100 mr-1 text-green-500 fas fa-dollar"},null,-1),F={class:"text-sm self-center"},O={class:"flex"},J=t("i",{class:"self-center p-3 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"},null,-1),S={class:"text-sm self-center"};function V(h,u,n,e,r,a){const l=g("dropdown-menu"),i=g("apexchart");return d(),c(f,null,[t("div",M,[p(l,{overlay:!1,direction:"right"},{trigger:m(()=>[t("button",P,[x(s(e.getPreviousMonths()[0])+" ",1),k])]),body:m(()=>[t("ul",A,[(d(!0),c(f,null,y(e.getPreviousMonths(),o=>(d(),c("li",{key:o,class:"p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer"},s(o),1))),128))])]),_:1})]),p(i,{width:"100%",height:"auto",type:"radialBar",options:e.plotOptions,series:e.series,class:"w-full md:col-span-2"},null,8,["options","series"]),t("div",null,[t("p",B,s(e.growthPer(n.last_month,n.this_month))+"% Company Growth",1),t("div",C,[t("div",D,[N,t("div",F,[t("p",null,s(e.getPreviousMonths()[1]),1),t("p",null,s(n.last_month),1)])]),t("div",O,[J,t("div",S,[t("p",null,s(e.getPreviousMonths()[0]),1),t("p",null,s(n.this_month),1)])])])])],64)}const G=v(w,[["render",V]]);export{G as default};
