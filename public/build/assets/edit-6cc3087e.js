import{D as c}from"./DashboardLaout-f253c150.js";import{i as y,Z as v,T as g,h as m,d as a,b as _,a as s,w as x,j as k,l,H as u,t as n,e as i,G as h,F as w,o as d}from"./app-8af5103e.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const S={components:{DashboardLaout:c,Link:y,Head:v},props:{user:Object,errors:Object},layout:c,setup(){const r=g({name:"",email:"",phone:"",role:"",status:"",address:""});return{form:r,submit:e=>{r.name=e.name,r.email=e.email,r.phone=e.phone,r.role=e.role,r.status=e.status,r.address=e.address,console.log(r),r.put(route("user.update",e.id))}}}},V={class:"max-w-7xl mx-auto px-2"},D={class:"flex justify-between gap-4 mb-4 place-items-center"},j=s("h2",null,"UPDATE USER",-1),A=s("i",{class:"fa-solid fa-plus"},null,-1),E=s("span",null,"Back to users",-1),L={class:"form-group"},B=s("label",{for:"name"},"Name",-1),H={key:0,class:"text-red-500"},N={class:"form-group"},P=s("label",{for:"email"},"Email",-1),T={key:0,class:"text-red-500"},C={class:"form-group"},M=s("label",{for:"phone"},"Phone",-1),F={key:0,class:"text-red-500"},O={class:"form-group"},R=s("label",{for:"role"},"Role",-1),G=s("option",{value:"",disabled:""},"select user role",-1),I=s("option",{value:"admin"},"Admin",-1),J=s("option",{value:"staff",selected:""},"Staff",-1),K=s("option",{value:"user"},"User",-1),Z=[G,I,J,K],q={key:0,class:"text-red-500"},z={class:"form-group"},Q=s("label",{for:"status"},"Status",-1),W=s("option",{value:"",disabled:""},"select user status",-1),X=s("option",{value:"active",selected:""},"Active",-1),Y=s("option",{value:"inactive"},"Inactive",-1),$=s("option",{value:"suspended"},"Suspended",-1),ee=[W,X,Y,$],se={key:0,class:"text-red-500"},oe={class:"form-group"},te=s("label",{for:"address"},"Address",-1),re={key:0,class:"text-red-500"},ae=s("button",{class:"block border border-secondary-400 rounded placeholder-gray-400 w-full bg-secondary-500 text-white px-4 py-2 shadow-md hover:bg-secondary-600 transition"},"Submit",-1);function de(r,o,e,b,le,ne){const f=m("Head"),p=m("Link");return d(),a(w,null,[_(f,{title:"UPDATE Staff"}),s("div",V,[s("div",D,[j,_(p,{href:r.route("user.index"),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:x(()=>[A,E]),_:1},8,["href"])]),s("form",{onSubmit:o[6]||(o[6]=k(t=>b.submit(e.user),["prevent"])),action:"#",method:"post",class:"grid md:grid-cols-2 gap-4 bg-white/50 rounded-md p-4"},[s("div",L,[B,l(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>e.user.name=t),class:"block border border-secondary-400 rounded placeholder-gray-400 w-full",placeholder:"James Phiri"},null,512),[[u,e.user.name]]),e.errors.name?(d(),a("span",H,n(e.errors.name),1)):i("",!0)]),s("div",N,[P,l(s("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=t=>e.user.email=t),name:"email",class:"block border border-secondary-400 rounded placeholder-gray-400 w-full",placeholder:"james@email.com"},null,512),[[u,e.user.email]]),e.errors.email?(d(),a("span",T,n(e.errors.email),1)):i("",!0)]),s("div",C,[M,l(s("input",{type:"tel","onUpdate:modelValue":o[2]||(o[2]=t=>e.user.phone=t),class:"block border border-secondary-400 rounded placeholder-gray-400 w-full",placeholder:"0971234567"},null,512),[[u,e.user.phone]]),e.errors.phone?(d(),a("span",F,n(e.errors.phone),1)):i("",!0)]),s("div",O,[R,l(s("select",{name:"role","onUpdate:modelValue":o[3]||(o[3]=t=>e.user.role=t),id:"role",class:"block border border-secondary-400 rounded placeholder-gray-400 w-full",placeholder:"select user role"},Z,512),[[h,e.user.role]]),e.errors.role?(d(),a("span",q,n(e.errors.role),1)):i("",!0)]),s("div",z,[Q,l(s("select",{name:"status","onUpdate:modelValue":o[4]||(o[4]=t=>e.user.status=t),id:"role",class:"block border border-secondary-400 rounded placeholder-gray-400 w-full"},ee,512),[[h,e.user.status]]),e.errors.status?(d(),a("span",se,n(e.errors.status),1)):i("",!0)]),s("div",oe,[te,l(s("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>e.user.address=t),name:"address",id:"address",class:"block border border-secondary-400 rounded placeholder-gray-400 w-full",placeholder:"Kabulonga, Lusaka"},null,512),[[u,e.user.address]]),e.errors.address?(d(),a("span",re,n(e.errors.address),1)):i("",!0)]),ae],32)])],64)}const me=U(S,[["render",de]]);export{me as default};
