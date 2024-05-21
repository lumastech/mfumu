import{_ as m}from"./Navbar-2ae0d95f.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{h as r,o as l,d,a as s,b as a,w as t,f as o,i as p,c as f,e as u,t as n}from"./app-0cb46a62.js";const v={},x={class:"bg-secondary-900 text-secondary-200"},b={class:"max-w-7xl mx-auto px-2 py-16"},y={class:"grid md:grid-cols-4 gap-4 text-center"},k=s("img",{src:m,alt:"mfumu",class:"w-full"},null,-1),g=s("h4",{class:"text-primary-600 font-bold"},"Quick Links",-1),w=s("h4",{class:"text-primary-600 font-bold"},"Quick Links",-1),L=s("div",null,[s("h4",{class:"text-primary-600 font-bold"},"Address"),s("a",{href:"tel:+260979729858",class:"block"},"+260 97 9729 858"),s("a",{href:"mailto:support@mfumu.com"},"support@mfumuplans.com"),s("p",null,"social madia icons")],-1),B=s("hr",{class:"border-t border-secondary-400 max-w-2xl mx-auto mt-12"},null,-1),P=s("p",{class:"text-secondary-500 text-center"},"© 2024 mfumuplans.com all rights reserved.",-1);function $(c,_){const e=r("Link");return l(),d("footer",x,[s("div",b,[s("div",y,[k,s("div",null,[g,a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("Home")]),_:1}),a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("About us")]),_:1}),a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("Browse Our plans")]),_:1}),a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("See Example building plans")]),_:1})]),s("div",null,[w,a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("Terms & Conditions")]),_:1}),a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("Privacy Policy")]),_:1}),a(e,{href:"#",class:"block hover:text-primary-700 transition py-2"},{default:t(()=>[o("Refund Policy")]),_:1})]),L]),B,P])])}const es=i(v,[["render",$]]),C={components:{Link:p},props:{plan:Object}},N=["src"],V={class:"absolute top-0 w-full h-full hover:bg-primary-900/50 transition"},A={class:"bg-secondary-900/50 absolute w-full px-2 top-0"},E={class:"absolute bottom-0 bg-secondary-900/50 w-full text-xs text-center"},F={class:"grid grid-cols-3 border-b"},O={class:"overflow-hidden"},Q={class:"line-clamp-1"},S={class:"overflow-hidden border-x text-center"},T={class:"line-clamp-1"},j={class:"overflow-hidden"},D={class:"line-clamp-1"},H={class:"grid grid-cols-3"},I={class:"overflow-hidden"},R={class:"line-clamp-1"},q={class:"overflow-hidden border-x text-center"},z={class:"line-clamp-1"},G={class:"overflow-hidden"},J={class:"line-clamp-1"},K=s("sup",null,"2m",-1);function M(c,_,e,U,W,X){const h=r("Link");return l(),f(h,{href:c.route("plan.show",e.plan.id),class:"relative aspect-video shadow rounded hover:scale-105 transition overflow-hidden"},{default:t(()=>[e.plan.images.length?(l(),d("img",{key:0,src:e.plan.images[0].image,alt:"3 bed rooms",class:"w-full aspect-video"},null,8,N)):u("",!0),s("div",V,[s("h5",A,n(e.plan.name),1),s("div",E,[s("div",F,[s("div",O,[s("span",Q,n(e.plan.levels)+" store",1)]),s("div",S,[s("span",T,n(e.plan.bedrooms),1)]),s("div",j,[s("span",D,n(e.plan.bathrooms)+" Bathrooms",1)])]),s("div",H,[s("div",I,[s("span",R,n(e.plan.style),1)]),s("div",q,[s("span",z,n(e.plan.roof_finish),1)]),s("div",G,[s("span",J,[o(n(e.plan.area),1),K])])])])])]),_:1},8,["href"])}const ts=i(C,[["render",M]]);export{es as F,ts as P};