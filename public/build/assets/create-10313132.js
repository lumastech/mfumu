import{D as m}from"./DashboardLaout-b38177c4.js";import{i as v,Z as y,T as g,h as _,d as a,b as h,a as e,w as x,j as k,l as d,x as u,t as n,e as i,s as f,F as w,o as l}from"./app-6b2a6b3a.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const S={components:{DashboardLaout:m,Link:v,Head:y},props:{errors:Object},layout:m,setup(){const c=g({name:"",email:"",phone:"",role:"user",status:"active",address:""});return{form:c,submit:()=>{c.post(route("user.store"))}}}},U={class:"max-w-7xl mx-auto px-2"},A={class:"flex justify-between gap-4 mb-4 place-items-center"},D=e("h2",null,"ADD A USER",-1),L=e("i",{class:"fa-solid fa-plus"},null,-1),j=e("span",null,"Back to users",-1),B={class:"form-group"},N=e("label",{for:"name"},"Name",-1),C={key:0,class:"text-red-500"},E={class:"form-group"},H=e("label",{for:"email"},"Email",-1),M={key:0,class:"text-red-500"},F={class:"form-group"},P=e("label",{for:"phone"},"Phone",-1),R={key:0,class:"text-red-500"},T={class:"form-group"},I=e("label",{for:"role"},"Role",-1),J=e("option",{value:"",disabled:""},"select user role",-1),K=e("option",{value:"admin"},"Admin",-1),O=e("option",{value:"staff",selected:""},"Staff",-1),Z=e("option",{value:"user"},"User",-1),q=[J,K,O,Z],z={key:0,class:"text-red-500"},G={class:"form-group"},Q=e("label",{for:"status"},"Status",-1),W=e("option",{value:"",disabled:""},"select user status",-1),X=e("option",{value:"active",selected:""},"Active",-1),Y=e("option",{value:"inactive"},"Inactive",-1),$=e("option",{value:"suspended"},"Suspended",-1),ee=[W,X,Y,$],oe={key:0,class:"text-red-500"},se={class:"form-group"},te=e("label",{for:"address"},"Address",-1),re={key:0,class:"text-red-500"},ae=e("button",{class:"block border border-teal-400 rounded placeholder-gray-400 w-full bg-secondary-500 text-white px-4 py-2 shadow-md hover:bg-secondary-600 transition"},"Submit",-1);function le(c,o,r,s,de,ne){const b=_("Head"),p=_("Link");return l(),a(w,null,[h(b,{title:"Add user"}),e("div",U,[e("div",A,[D,h(p,{href:c.route("user.index"),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:x(()=>[L,j]),_:1},8,["href"])]),e("form",{onSubmit:o[6]||(o[6]=k((...t)=>s.submit&&s.submit(...t),["prevent"])),class:"grid md:grid-cols-2 gap-4 bg-white/90 rounded-md p-4"},[e("div",B,[N,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),class:"block border border-teal-400 rounded placeholder-gray-400 w-full",placeholder:"James Phiri"},null,512),[[u,s.form.name]]),r.errors.name?(l(),a("span",C,n(r.errors.name),1)):i("",!0)]),e("div",E,[H,d(e("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=t=>s.form.email=t),name:"email",class:"block border border-teal-400 rounded placeholder-gray-400 w-full",placeholder:"james@email.com"},null,512),[[u,s.form.email]]),r.errors.email?(l(),a("span",M,n(r.errors.email),1)):i("",!0)]),e("div",F,[P,d(e("input",{type:"tel","onUpdate:modelValue":o[2]||(o[2]=t=>s.form.phone=t),class:"block border border-teal-400 rounded placeholder-gray-400 w-full",placeholder:"0971234567"},null,512),[[u,s.form.phone]]),r.errors.phone?(l(),a("span",R,n(r.errors.phone),1)):i("",!0)]),e("div",T,[I,d(e("select",{name:"role","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.role=t),id:"role",class:"block border border-teal-400 rounded placeholder-gray-400 w-full",placeholder:"select user role"},q,512),[[f,s.form.role]]),r.errors.role?(l(),a("span",z,n(r.errors.role),1)):i("",!0)]),e("div",G,[Q,d(e("select",{name:"status","onUpdate:modelValue":o[4]||(o[4]=t=>s.form.status=t),id:"role",class:"block border border-teal-400 rounded placeholder-gray-400 w-full"},ee,512),[[f,s.form.status]]),r.errors.status?(l(),a("span",oe,n(r.errors.status),1)):i("",!0)]),e("div",se,[te,d(e("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>s.form.address=t),name:"address",id:"address",class:"block border border-teal-400 rounded placeholder-gray-400 w-full",placeholder:"Kabulonga, Lusaka"},null,512),[[u,s.form.address]]),r.errors.address?(l(),a("span",re,n(r.errors.address),1)):i("",!0)]),ae],32)])],64)}const me=V(S,[["render",le]]);export{me as default};
