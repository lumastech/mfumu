import{r as n,h as u,c as l,o as p}from"./app-36527e65.js";const v={__name:"AreaChart",setup(h){const o=n({chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},xaxis:{categories:(()=>{const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=new Date().getMonth(),t=[];for(let a=0;a<=7;a++){const i=(e-a+12)%12;t.push(s[i])}return t.reverse(),t})()},stroke:{curve:"smooth"},colors:["#EB840F"],dataLabels:{enabled:!1}}),r=n([{name:"series-1",data:[0,0,0,0,0,0,0,0]}]);return(s,c)=>{const e=u("apexchart");return p(),l(e,{width:"100%",height:"auto",type:"area",options:o.value,series:r.value,class:"md:col-span-2"},null,8,["options","series"])}}};export{v as default};
