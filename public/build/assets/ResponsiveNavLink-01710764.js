import{r as k,y as w,z as x,k as f,o as l,d as g,a as i,p as u,N as d,u as o,l as m,J as y,b as C,w as b,n as c,L as $,c as S,i as B}from"./app-36527e65.js";const E={class:"relative"},L={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(t){const a=t;let e=k(!1);const n=r=>{e.value&&r.key==="Escape"&&(e.value=!1)};w(()=>document.addEventListener("keydown",n)),x(()=>document.removeEventListener("keydown",n));const v=f(()=>({48:"w-48"})[a.width.toString()]),h=f(()=>a.align==="left"?"origin-top-left left-0":a.align==="right"?"origin-top-right right-0":"origin-top");return(r,s)=>(l(),g("div",E,[i("div",{onClick:s[0]||(s[0]=p=>d(e)?e.value=!o(e):e=!o(e))},[u(r.$slots,"trigger")]),m(i("div",{class:"fixed inset-0 z-40",onClick:s[1]||(s[1]=p=>d(e)?e.value=!1:e=!1)},null,512),[[y,o(e)]]),C($,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:b(()=>[m(i("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[v.value,h.value]]),style:{display:"none"},onClick:s[2]||(s[2]=p=>d(e)?e.value=!1:e=!1)},[i("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[u(r.$slots,"content")],2)],2),[[y,o(e)]])]),_:3})]))}},N={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(t){const a=t,e=f(()=>a.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(n,v)=>(l(),g("div",null,[t.as=="button"?(l(),g("button",{key:0,class:c([e.value,"w-full text-left"])},[u(n.$slots,"default")],2)):(l(),S(o(B),{key:1,href:t.href,class:c(e.value)},{default:b(()=>[u(n.$slots,"default")]),_:3},8,["href","class"]))]))}};export{L as _,N as a};
