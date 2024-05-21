import{T as c,d as f,b as o,u as e,w as l,F as w,o as _,Z as g,a as r,n as V,f as b,j as k}from"./app-574e767a.js";import{A as v}from"./AuthenticationCard-e6a27ed1.js";import{_ as x}from"./AuthenticationCardLogo-84113f65.js";import{_ as m,a as i}from"./TextInput-dcde5a43.js";import{_ as n}from"./InputLabel-1b37eccb.js";import{_ as y}from"./PrimaryButton-829c8179.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo_white-292b7b05.js";const P=["onSubmit"],$={class:"mt-4"},C={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},E={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(h,a)=>(_(),f(w,null,[o(e(g),{title:"Reset Password"}),o(v,null,{logo:l(()=>[o(x)]),default:l(()=>[r("form",{onSubmit:k(u,["prevent"])},[r("div",null,[o(n,{for:"email",value:"Email"}),o(m,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",$,[o(n,{for:"password",value:"Password"}),o(m,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",C,[o(n,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",S,[o(y,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{E as default};
