import{r as o,h as l,c as u,o as h}from"./app-8af5103e.js";const f={__name:"ProfitReportChart",setup(p){const n=o({legend:{show:!1},grid:{show:!1},xaxis:{labels:{show:!1}},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},xaxis:{show:!1,categories:(()=>{const a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=new Date().getMonth(),s=[];for(let t=0;t<=7;t++){const i=(e-t+12)%12;s.push(a[i])}return s.reverse(),s})()},stroke:{curve:"smooth"},colors:["#EB840F"],dataLabels:{enabled:!1}}),r=o([{name:"series-1",data:[30,40,35,50,49,60,70,91]}]);return(a,c)=>{const e=l("apexchart");return h(),u(e,{width:"100%",height:"auto",type:"line",options:n.value,series:r.value,class:"md:col-span-2"},null,8,["options","series"])}}};export{f as default};