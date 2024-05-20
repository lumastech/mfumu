import{N as E}from"./Navbar-ab7923d9.js";import{_ as k}from"./Modal-eeed03c0.js";import{F,P as M}from"./ProductItem-448c548d.js";import{Z as N,i as O,r as b,T,h as r,d,b as i,a as t,F as m,g as p,t as l,w as C,O as L,q as A,o as n,c as P,f as h,l as _,G as u,j as S}from"./app-a152d005.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import"./logo_white-292b7b05.js";const B="/build/assets/momo_logo-693b6d9c.png";const I={components:{Head:N,Link:O,Navbar:E,Footer:F,ProductItem:M,Modal:k},props:{plans:Object,plan:Object},setup(c){const a=b(c.plan.images[0].image),s=b(0),e=T({name:"",email:"",phone:""});return{preview:a,orderModal:s,orderForm:e,submitOrder:()=>{console.log(e),L.post("/order",e,{})}}}},R={class:"bg-secondary-500"},U={class:"bg-secondary-800 text-secondary-10 pt-9"},W={class:"max-w-7xl mx-auto p-2"},H={class:"grid md:grid-cols-6 gap-3"},D={class:"md:col-span-4"},Y=["src"],V={class:"flex my-4 gap-3"},Z=t("div",{class:"w-8 bg-secondary-200 rounded-l-xl"},null,-1),j={class:"flex overflow-x-scroll flex-auto gap-4"},G=["onClick","src","alt"],q=t("div",{class:"w-8 bg-secondary-200 rounded-r-xl"},null,-1),K=t("h2",{class:"mt-9 my-4 font-bold"},"WHAT YOU'LL GET:",-1),Q=t("div",{class:"border border-gray-500 p-2 rounded"},[t("p",null," This full set of construction drawings complies with the minimum requirements of the National Building Regulations for approval at any local authority in Zambia. ")],-1),z={class:"mt-9 p-2 md:p-4 rounded border border-gray-500"},J=t("h2",{class:"text-2xl"},"DESCRIPTION",-1),$={class:"col-span-2"},tt={class:"text-xl text-primary-600"},et={class:"text-3xl text-primary-600"},ot=t("h4",{class:"font-bold mt-4"},"FEATURES",-1),st={class:"table-auto w-full space-y-3"},at={class:"border-b border-secondary-500"},lt=t("td",null,"Bedrooms",-1),rt={class:"border-b border-secondary-500"},nt=t("td",null,"Bathrooms",-1),dt={class:"border-b border-secondary-500"},it=t("td",null,"Levels",-1),ct={class:"border-b border-secondary-500"},mt=t("td",null,"Style",-1),_t={class:"border-b border-secondary-500"},ut=t("td",null,"Roof Finish",-1),bt={class:"border-b border-secondary-500"},pt=t("td",null,"Area",-1),ht=A('<p class="mt-4 font-semibold">Extras</p><div class="form-control my-1"><input checked disabled type="checkbox" name="extra1" id="extra1" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra1">Electronic Drawing File (.DWG)</label></div><div class="form-control my-1"><input checked disabled type="checkbox" name="extra2" id="extra2" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra2">Electronic 3D Revit File</label></div><div class="form-control my-1"><input checked disabled type="checkbox" name="extra3" id="extra3" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra3">List of Materials and Quantities</label></div><div class="form-control my-1"><input checked disabled type="checkbox" name="extra4" id="extra4" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra4">Electrical Layout</label></div><p class="text-lg font-semibold mt-7"> PLEASE SPECIFIY THE CITY OR TOWN WHERE THE HOUSE WILL BE BUILT: </p><textarea name="" id="" rows="3" class="w-full rounded mb-5 border-primary-500 focus:ring-2 focus:ring-primary-600 bg-gray-800 text-primary-700 form-textarea"></textarea>',7),xt={class:"grid grid-cols-2 gap-4"},ft=t("button",{disabled:"",class:"disabled:bg-gray-300 bg-orange-300 center text-white p-2 rounded mt-4 hover:bg-orange-500 transition-all duration-300"}," Add to Cart ",-1),yt=t("hr",{class:"max-w-7xl mx-auto border-t border-secondary-600 my-12"},null,-1),gt={class:"max-w-7xl mx-auto p-2 pb-24"},vt=t("h2",{class:"text-xl font-bold my-4 uppercase"},"You may also like",-1),wt={class:"grid md:grid-cols-4 grid-cols-2 gap-4"},Et=t("h2",{class:"text-white text-xl foent-bold my-2"},"MAKE AN ORDER",-1),kt={class:"aspect-video bg-gradient-to-r from-secondary-700 to-secondary-900 rounded mb-4 p-3"},Ft={class:"flex flex-col justify-between h-full text-right text-white font-bold"},Mt={class:"flex space-x-2"},Nt={class:"flex-auto text-left text-xs"},Ot={class:"text-2xl"},Tt=t("p",{class:"text-xs"},"MOMO",-1),Ct=t("div",{class:"flex space-x-2"},[t("div",{class:"flex-auto"}),t("p",{class:"text-xs self-center"}," 097 / 096 / 095 XXXXXX ")],-1),Lt=t("div",{class:"flex space-x-2"},[t("div",{class:"flex-auto flex"},[t("img",{src:B,alt:"",class:"w-32"})]),t("p",{class:"text-xs self-end"},"SECURE PAYMENT")],-1),At={class:"relative"},Pt=t("i",{class:"absolute text-teal-500 left-3 top-1/3 fas fa-user"},null,-1),St={class:"relative"},Xt=t("i",{class:"absolute text-teal-500 left-3 top-1/3 fas fa-at"},null,-1),Bt=t("label",{class:"text-white"},"Mobile money Number",-1),It={class:"relative"},Rt=t("i",{class:"absolute text-teal-500 left-3 top-1/3 fas fa-phone"},null,-1),Ut=t("button",{type:"submit",class:"d-block px-4 py-2 bg-teal-600 text-white mt-4 rounded w-full hover:bg-teal-700 transion"}," PAY NOW ",-1);function Wt(c,a,s,e,x,Ht){const f=r("Head"),y=r("Navbar"),g=r("ProductItem"),v=r("Modal"),w=r("Footer");return n(),d(m,null,[i(f,{title:"Details"}),t("header",R,[i(y)]),t("section",U,[t("section",W,[t("div",H,[t("div",D,[t("img",{src:e.preview,alt:"plan name",class:"rounded aspect-video w-full"},null,8,Y),t("div",V,[Z,t("div",j,[(n(!0),d(m,null,p(s.plan.images,o=>(n(),d("img",{key:o.id,onClick:Dt=>e.preview=o.image,src:o.image,alt:s.plan.name,class:"w-24 h-24 rounded cursor-pointer"},null,8,G))),128))]),q]),K,Q,t("div",z,[J,t("p",null,l(s.plan.description),1)])]),t("div",$,[t("h1",tt,l(s.plan.name)+" - HOUSE PLANS ",1),t("h2",et,l(c.numeralFormat(s.plan.price,"0,0[.]00 ZMW"))+" ZMW ",1),ot,t("table",st,[t("tr",at,[lt,t("td",null,l(s.plan.bedrooms)+" bedrooms",1)]),t("tr",rt,[nt,t("td",null,l(s.plan.bathrooms),1)]),t("tr",dt,[it,t("td",null,l(s.plan.levels),1)]),t("tr",ct,[mt,t("td",null,l(s.plan.style),1)]),t("tr",_t,[ut,t("td",null,l(s.plan.roof_finish),1)]),t("tr",bt,[pt,t("td",null,l(s.plan.area),1)])]),ht,t("div",xt,[t("button",{onClick:a[0]||(a[0]=o=>e.orderModal=1),class:"bg-primary-500 center text-white p-2 rounded mt-4 hover:bg-primary-700 transition-all duration-300"}," Buy Now "),ft])])])]),yt,t("section",gt,[vt,t("div",wt,[(n(!0),d(m,null,p(s.plans.data,o=>(n(),P(g,{key:o.id,plan:o},null,8,["plan"]))),128))])])]),i(v,{show:e.orderModal,maxWidth:"sm"},{default:C(()=>[t("form",{onSubmit:a[5]||(a[5]=S((...o)=>e.submitOrder&&e.submitOrder(...o),["prevent"])),class:"p-2 bg-gradient-to-b from-primary-900 to-primary-400"},[Et,t("div",kt,[t("div",Ft,[t("div",Mt,[t("div",Nt,[h(" AMOUNT: "),t("span",Ot,l(s.plan.price),1),h(" ZMW ")]),Tt]),Ct,Lt])]),t("div",At,[_(t("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.orderForm.name=o),type:"text",class:"w-full d-block rounded pl-9",placeholder:"Your name"},null,512),[[u,e.orderForm.name]]),Pt]),t("div",St,[_(t("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>e.orderForm.email=o),type:"email",class:"w-full d-block rounded pl-9 my-2",placeholder:"Your Email"},null,512),[[u,e.orderForm.email]]),Xt]),Bt,t("div",It,[_(t("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e.orderForm.phone=o),type:"tel",class:"w-full d-block rounded pl-9",placeholder:"097/096/095 XXXXXX"},null,512),[[u,e.orderForm.phone]]),Rt]),Ut,t("button",{onClick:a[4]||(a[4]=o=>e.orderModal=0),class:"d-block px-4 py-2 bg-secondary-50/50 hover:bg-secondary-50 transition border border-secondary-800 my-2 rounded w-full"}," CANCEL ")],32)]),_:1},8,["show"]),i(w)],64)}const Kt=X(I,[["render",Wt]]);export{Kt as default};