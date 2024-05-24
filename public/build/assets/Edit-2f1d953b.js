import{i as R,Z as V,r as x,T as U,h as F,d as n,a as e,b as w,w as y,j as S,f as u,t as i,e as d,l as f,H as L,n as v,G as _,F as E,g as P,O as H,o as a,E as A}from"./app-36527e65.js";import{D as M}from"./DashboardLaout-3539e275.js";import{_ as G}from"./Modal-459c0213.js";import{L as N}from"./LoadingAnim-7214444e.js";import{_ as O}from"./ConfirmationModal-f25e87aa.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const j="/build/assets/file_thumb-ec0180ae.png";const T={components:{DashboardLayout:M,Link:R,Head:V,Modal:G,ConfirmationModal:O,LoadingAnim:N},layout:M,props:{plan:Object,errors:Object,images:Object,files:Object},setup(p,t){const o=x(!1),s=x(!1),g=x(!1),m=U({name:"1 Bedroom",price:"",style:"Apartments",roof_finish:"Simple Hip roof",bathrooms:1,bedrooms:1,levels:1,area:"",description:""}),c=x({show:0,title:"DELETE",content:"are you sure you want to delete this item?",id:null,url:null}),C=x("image"),b=U({file:null,name:null,type:"plan",item:p.plan.id}),h=U({file:null,name:null,type:"file",plan:p.plan.id}),k=x("");return{loader:g,selectFile:r=>{C.value.click()},filePreview:(r,D)=>{D=="image"?(k.value=URL.createObjectURL(r.target.files[0]),b.file=r.target.files[0]):h.file=r.target.files[0]},imageUploadShow:o,fileUploadShow:s,imageForm:b,fileForm:h,imageUpload:()=>{o.value=0,g.value=1,H.post(route("image.store"),b,{onSuccess:r=>{o.value=0,b.reset(),b.plan=p.plan.id,k.value=""},onError:r=>{o.value=1,r&&r.file&&(b.errors.file=r.file),r&&r.name&&(b.errors.name=r.name)},onFinish:()=>{g.value=0}})},uploadFile:()=>{s.value=0,g.value=1,H.post(route("file.store"),h,{onSuccess:r=>{s.value=0,h.reset(),h.plan=p.plan.id},onError:r=>{console.log(r.file),h.errors.file=r.file},onError:r=>{s.value=1,r&&r.file&&(h.errors.file=r.file),r&&r.name&&(h.errors.name=r.name)},onFinish:()=>{g.value=0}})},deleteFile:()=>{H.delete(route(c.value.url,c.value.id.id),{onSuccess:()=>{c.value.show=0}})},confirmDelete:c,showConfirmDelete:(r,D)=>{c.value.title="DELETE "+r.name+" file?",c.value.content="are you sure you want to delete this item?",c.value.id=r,c.value.url=D,c.value.show=!0},image:C,preview:k,update:()=>{let r=p.plan;m.name=r.name,m.price=r.price,m.style=r.style,m.roof_finish=r.roof_finish,m.bathrooms=r.bathrooms,m.bedrooms=r.bedrooms,m.levels=r.levels,m.area=r.area,m.description=r.description,m.put(route("plans.update",p.plan),{onBefore:()=>{g.value=1},onFinish:()=>{g.value=0}})}}},mounted(){this.images.length||(this.imageUploadShow=1)}},z={class:"max-w-7xl mx-auto px-2"},Z={class:"flex justify-between gap-4 mb-4 place-items-center"},q=e("h1",{class:"md:text-2xl mb-4 flex-auto"},"EDIT PLAN",-1),J=e("i",{class:"fa-solid fa-arrow-left mr-2"},null,-1),K=e("span",null,"Back to Plans",-1),Q={class:"shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded mb-16"},W={class:"col-span-4"},X={for:"name"},Y={key:0,class:"text-red-600"},$=A('<option value="1 Bedroom">1 Bedroom</option><option value="2 Bedroom">2 Bedroom</option><option value="3 Bedroom">3 Bedroom</option><option value="4 Bedroom">4 Bedroom</option><option value="5 Bedroom">5 Bedroom</option><option value="6 Bedroom">6 Bedroom</option>',6),ee=[$],oe={for:"price"},te={key:0,class:"text-red-600"},le={for:"style"},se={key:0,class:"text-red-600"},re=A('<option value="Commercial Buildinngs"> Commercial Buildinngs </option><option value="Apartments">Apartments</option><option value="Hostels and Lodges"> Hostels and Lodges </option><option value="Duplex Desings"> Duplex Desings </option><option value="Modern House Plans"> Modern House Plans </option><option value="Small Houses">Small Houses</option><option value="Beach House Plans"> Beach House Plans </option><option value="Contemporary House Plans"> Contemporary House Plans </option><option value="Meditaerranean House Plans"> Meditaerranean House Plans </option><option value="Farm House Plans"> Farm House Plans </option>',10),ne=[re],ae={for:"roof_finish",class:""},ie={key:0,class:"text-red-600"},de=A('<option value="Gable roof">Gable roof</option><option value="Hip and valley roof"> Hip and valley roof </option><option value="Simple Hip roof"> Simple Hip roof </option><option value="Cross Hipped roof"> Cross Hipped roof </option><option value="Hexagonal roof"> Hexagonal roof </option><option value="Dutch Roof">Dutch Roof</option><option value="Open Gable Roof"> Open Gable Roof </option><option value="Cross Gable Roof"> Cross Gable Roof </option><option value="Mansard roof">Mansard roof</option><option value="Skillion and Lean to Roof"> Skillion and Lean to Roof </option><option value="Flat roof">Flat roof</option><option value="Shed roof">Shed roof</option><option value="Butterfly roof"> Butterfly roof </option><option value="Gambrel roof">Gambrel roof</option><option value="Dormer roof">Dormer roof</option><option value="M Shaped Roof">M Shaped Roof</option><option value="Front Gable Roof"> Front Gable Roof </option><option value="Curved Roof">Curved Roof</option>',18),ue=[de],me={class:"col-span-2"},ce={for:"bedrooms"},fe={key:0,class:"text-red-600"},be={for:"bathrooms"},he={key:0,class:"text-red-600"},pe={for:"levels"},ve={key:0,class:"text-red-600"},ge={for:"area"},_e={key:0,class:"text-red-600"},xe={class:"col-span-6"},we={for:"description"},ye={key:0,class:"text-red-600"},ke={class:"text-right px-4 col-span-6"},Fe={class:"border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40"},Ce={class:"flex justify-between gap-4 mb-4 place-items-center"},De=e("h1",{class:"md:text-2xl mb-4 flex-auto"},"PLAN IMAGES",-1),Ue=e("i",{class:"fa-solid fa-plus mr-2"},null,-1),Se=e("span",null,"Upload Image",-1),Le=[Ue,Se],Ee={class:"thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},He=["alt","src"],Ae={class:"px-2"},Be=["onClick"],Pe=e("i",{class:"far fa-trash-can"},null,-1),Me=[Pe],Re={class:"text-center"},Ve=e("label",{class:"text-teal-500"},"ADD IMAGE",-1),Ge={class:"shadow-xs rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto bg-white/90"},Ne={class:"flex justify-between gap-4 mb-4 place-items-center"},Oe=e("h1",{class:"md:text-2xl mb-4 flex-auto"},"PLAN FILES",-1),Ie=e("i",{class:"fa-solid fa-plus mr-2"},null,-1),je=e("span",null,"Upload File",-1),Te=[Ie,je],ze={class:"thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},Ze=["alt"],qe={class:"px-2"},Je=["onClick"],Ke=e("i",{class:"far fa-trash-can"},null,-1),Qe=[Ke],We={class:"text-center"},Xe=e("label",{class:"text-sky-500"},"ADD FILE",-1),Ye=e("div",{class:"bg-teal-500 px-4 py-1 text-white font-bold"},"UPLOAD AN IMAGE",-1),$e=["src"],eo={class:"md:flex text-center space-x-2"},oo={class:"flex-auto p-2 md:text-left"},to={for:"image"},lo={key:0,class:"text-red-600"},so={key:1,class:"text-red-600"},ro=e("button",{class:"px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all"},"UPLOAD",-1),no=e("div",{class:"bg-teal-500 px-4 py-1 text-white font-bold"},"UPLOAD A FILE ",-1),ao={key:0,class:"bg-red-100 p-2 rounded-2 text-red-500"},io={for:"file"},uo={key:0,class:"text-red-600 text-teal-500"},mo={for:"image",class:"mt-2"},co={key:0,class:"text-red-600"},fo={class:"flex text-center space-x-2 mt-4"},bo=e("div",{class:"flex-auto p-2 md:text-left"},null,-1),ho=e("button",{class:"px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all"},"UPLOAD",-1);function po(p,t,o,s,g,m){const c=F("Head"),C=F("Link"),b=F("Modal"),h=F("ConfirmationModal"),k=F("LoadingAnim");return a(),n(E,null,[e("div",z,[w(c,{title:"EDIT PLAN"}),e("div",Z,[q,w(C,{href:"/plans",class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:y(()=>[J,K]),_:1})]),e("form",{onSubmit:t[10]||(t[10]=S((...l)=>p.upload&&p.upload(...l),["prevent"])),action:"#",class:"capitalize"},[e("div",Q,[e("div",W,[e("div",null,[e("label",X,[u(" type "),o.errors.name?(a(),n("span",Y," - "+i(o.errors.name),1)):d("",!0)]),f(e("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.plan.name=l),id:"name",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.name,"border-teal-500":!o.errors.name}])},ee,2),[[L,o.plan.name]])]),e("div",null,[e("label",oe,[u(" Price "),o.errors.price?(a(),n("span",te," - "+i(o.errors.price),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.plan.price=l),type:"number",name:"price",id:"price",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.price,"border-teal-500":!o.errors.price}])},null,2),[[_,o.plan.price]])]),e("div",null,[e("label",le,[u(" style "),o.errors.style?(a(),n("span",se," - "+i(o.errors.style),1)):d("",!0)]),f(e("select",{"onUpdate:modelValue":t[2]||(t[2]=l=>o.plan.style=l),id:"style",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.style,"border-teal-500":!o.errors.style}])},ne,2),[[L,o.plan.style]])]),e("div",null,[e("label",ae,[u("Roof Finish "),o.errors.roof_finish?(a(),n("span",ie," - "+i(o.errors.roof_finish),1)):d("",!0)]),f(e("select",{"onUpdate:modelValue":t[3]||(t[3]=l=>o.plan.roof_finish=l),name:"roof_finish",id:"roof_finish",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.roof_finish,"border-teal-500":!o.errors.roof_finish}])},ue,2),[[L,o.plan.roof_finish]])])]),e("div",me,[e("div",null,[e("label",ce,[u(" Bedrooms "),o.errors.bedrooms?(a(),n("span",fe," - "+i(o.errors.bedrooms),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":t[4]||(t[4]=l=>o.plan.bedrooms=l),type:"number",name:"bedrooms",id:"bedrooms",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.bedrooms,"border-teal-500":!o.errors.bedrooms}])},null,2),[[_,o.plan.bedrooms]])]),e("div",null,[e("label",be,[u(" bathrooms "),o.errors.bathrooms?(a(),n("span",he," - "+i(o.errors.bathrooms),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":t[5]||(t[5]=l=>o.plan.bathrooms=l),type:"number",name:"bathrooms",id:"bathrooms",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.bathrooms,"border-teal-500":!o.errors.bathrooms}])},null,2),[[_,o.plan.bathrooms]])]),e("div",null,[e("label",pe,[u(" levels "),o.errors.levels?(a(),n("span",ve," - "+i(o.errors.levels),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":t[6]||(t[6]=l=>o.plan.levels=l),type:"number",name:"levels",id:"levels",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.levels,"border-teal-500":!o.errors.levels}])},null,2),[[_,o.plan.levels]])]),e("div",null,[e("label",ge,[u(" area "),o.errors.area?(a(),n("span",_e," - "+i(o.errors.area),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":t[7]||(t[7]=l=>o.plan.area=l),type:"number",id:"area",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.area,"border-teal-500":!o.errors.area}])},null,2),[[_,o.plan.area]])])]),e("div",xe,[e("label",we,[u(" Description "),o.errors.description?(a(),n("span",ye," - "+i(o.errors.description),1)):d("",!0)]),f(e("textarea",{"onUpdate:modelValue":t[8]||(t[8]=l=>o.plan.description=l),name:"description",id:"description",cols:"30",rows:"5",class:v(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.description,"border-teal-500":!o.errors.description}])},null,2),[[_,o.plan.description]])]),e("div",ke,[e("button",{onClick:t[9]||(t[9]=l=>s.update()),class:"bg-teal-500/70 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-teal-700 transition-all"}," UPDATE ")])])],32),e("div",Fe,[e("div",Ce,[De,e("button",{onClick:t[11]||(t[11]=()=>{s.imageUploadShow=!0}),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},Le)]),e("div",Ee,[(a(!0),n(E,null,P(o.images,l=>(a(),n("div",{key:l.id,class:"thumb-bg relative shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"},[e("img",{alt:l.name,src:l.image,class:"w-full aspect-video"},null,8,He),e("label",Ae,i(l.name),1),e("button",{onClick:B=>s.showConfirmDelete(l,"image.destroy"),class:"absolute top-1 right-1 text-red-500 p-1 rounded-full bg-red-100/50 hover:bg-red-100 w-8 h-8 transition-all"},Me,8,Be)]))),128)),e("div",Re,[e("div",{onClick:t[12]||(t[12]=()=>{s.imageUploadShow=!0}),class:"thumb aspect-video border !border-teal-500 p-2 shadow-xs rounded bg-teal-50 hover:bg-gray-300 overflow-hidden hover:scale-95 transition-all"}),Ve])])]),e("div",Ge,[e("div",Ne,[Oe,e("button",{onClick:t[13]||(t[13]=()=>{s.fileUploadShow=!0}),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},Te)]),e("div",ze,[(a(!0),n(E,null,P(o.files,l=>(a(),n("div",{key:l.id,class:"thumb-bg shadow-sm border text-center relative shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"},[e("img",{alt:l.name,src:j,class:"w-full aspect-video object-contain"},null,8,Ze),e("label",qe,i(l.name),1),e("button",{onClick:B=>s.showConfirmDelete(l,"file.destroy"),class:"absolute top-1 right-1 text-red-500 p-1 rounded-full bg-red-100/50 hover:bg-red-100 w-8 h-8 transition-all"},Qe,8,Je)]))),128)),e("div",We,[e("div",{onClick:t[14]||(t[14]=()=>{s.fileUploadShow=!0}),class:"thumb aspect-video border !border-sky-500 p-2 shadow-xs rounded bg-sky-50 hover:bg-gray-300 overflow-hidden hover:scale-95 transition-all"}),Xe])])])]),w(b,{show:s.imageUploadShow},{default:y(()=>[Ye,e("form",{onSubmit:t[19]||(t[19]=S((...l)=>s.imageUpload&&s.imageUpload(...l),["prevent"])),class:"p-1"},[e("div",{class:"thumb-bg shadow-xs rounded bg-gray-100",onClick:t[16]||(t[16]=l=>s.selectFile(1))},[e("img",{alt:"",src:s.preview,class:"w-full aspect-video"},null,8,$e),e("input",{onChange:t[15]||(t[15]=l=>s.filePreview(l,"image")),oncancel:"clearimage(this, 0)",accept:"image/*",type:"file",ref:"image",id:"image",class:"hidden"},null,544)]),f(e("input",{"onUpdate:modelValue":t[17]||(t[17]=l=>s.imageForm.name=l),type:"text",class:"block w-full rounded mt-2 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",placeholder:"Image name"},null,512),[[_,s.imageForm.name]]),e("div",eo,[e("div",oo,[e("label",to,[u("Image "),s.imageForm.errors.file?(a(),n("span",lo," - "+i(s.imageForm.errors.file),1)):d("",!0),s.imageForm.errors.name?(a(),n("span",so," - "+i(s.imageForm.errors.name),1)):d("",!0)])]),e("button",{onClick:t[18]||(t[18]=()=>{s.imageUploadShow=!1}),class:"px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all"},"CANCEL"),ro])],32)]),_:1},8,["show"]),w(b,{show:s.fileUploadShow},{default:y(()=>[no,e("form",{onSubmit:t[23]||(t[23]=S((...l)=>s.uploadFile&&s.uploadFile(...l),["prevent"])),class:"p-4"},[s.fileForm.errors.file?(a(),n("div",ao,i(s.fileForm.errors.file),1)):d("",!0),e("div",null,[e("label",io,[u("Select a File "),s.fileForm.errors.file?(a(),n("span",uo," - "+i(s.fileForm.errors.file),1)):d("",!0)]),e("input",{onChange:t[20]||(t[20]=l=>s.filePreview(l,"file")),type:"file",name:"file",id:"file",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32)]),e("label",mo,[u("File Name "),s.fileForm.errors.name?(a(),n("span",co," - "+i(s.fileForm.errors.name),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":t[21]||(t[21]=l=>s.fileForm.name=l),type:"text",class:"block w-full rounded border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",placeholder:"Image name"},null,512),[[_,s.fileForm.name]]),e("div",fo,[bo,e("button",{onClick:t[22]||(t[22]=()=>{s.fileUploadShow=!1}),class:"px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all"},"CANCEL"),ho])],32)]),_:1},8,["show"]),w(h,{show:s.confirmDelete.show},{title:y(()=>[u(i(s.confirmDelete.title),1)]),content:y(()=>[e("p",null,i(s.confirmDelete.content),1)]),footer:y(()=>[e("button",{onClick:t[24]||(t[24]=()=>{s.confirmDelete.show=!1}),class:"px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all"},"CANCEL"),e("button",{onClick:t[25]||(t[25]=l=>s.deleteFile()),class:"px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all"},"DELETE")]),_:1},8,["show"]),w(k,{show:s.loader},null,8,["show"])],64)}const So=I(T,[["render",po]]);export{So as default};
