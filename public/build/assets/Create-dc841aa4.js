import{i as S,Z as V,T as U,r as m,h as L,d as i,b as G,a as e,f as t,t as n,e as d,l as f,G as w,n as g,H as b,j as M,o as s,q as y}from"./app-8af5103e.js";import{D}from"./DashboardLaout-f253c150.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const A={components:{DashboardLayout:D,Link:S,Head:V},layout:D,props:{errors:Object},setup(){const c=U({name:"1 Bedroom",price:"",style:"Apartments",roof_finish:"Simple Hip roof",bathrooms:1,bedrooms:1,levels:1,area:"",description:"",image_1:null,image_2:null,image_3:null,image_4:null,image_5:null,image_6:null,image_7:null,file_1:null,file_2:null,file_3:null,file_4:null}),r=m(""),o=m(""),a=m(""),h=m(""),p=m(""),v=m(""),l=m(""),x=m(null),k=m(null),C=m(null),H=m(null),P=m(null),B=m(null),F=m(null);return{selectFile:u=>{switch(u){case 1:x.value.click();break;case 2:k.value.click();break;case 3:C.value.click();break;case 4:H.value.click();break;case 5:P.value.click();break;case 6:B.value.click();break;case 7:F.value.click();break}},imagePreview:(u,R)=>{var _=URL.createObjectURL(u.target.files[0]);switch(console.log(_),R){case 0:r.value=_,c.image_1=u.target.files[0];break;case 1:o.value=_,c.image_2=u.target.files[0];break;case 2:a.value=_,c.image_3=u.target.files[0];break;case 3:h.value=_,c.image_4=u.target.files[0];break;case 4:p.value=_,c.image_5=u.target.files[0];break;case 5:v.value=_,c.image_6=u.target.files[0];break;case 6:l.value=_,c.image_7=u.target.files[0];break;case 7:c.file_1=u.target.files[0];break;case 8:c.file_2=u.target.files[0];break;case 9:c.file_3=u.target.files[0];break;case 10:c.file_4=u.target.files[0];break}},image_1:x,image_2:k,image_3:C,image_4:H,image_5:P,image_6:B,image_7:F,preview_1:r,preview_2:o,preview_3:a,preview_4:h,preview_5:p,preview_6:v,preview_7:l,plan:c,upload:()=>{c.post(route("plans.store"))}}}},N={class:"max-w-7xl mx-auto px-2"},O=e("h1",{class:"text-2xl mb-4"},"UPLOAD A PLAN",-1),j={class:"shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded"},T={class:"col-span-4"},z={for:"name"},q={key:0,class:"text-red-600"},E=y('<option value="1 Bedroom">1 Bedroom</option><option value="2 Bedroom">2 Bedroom</option><option value="3 Bedroom">3 Bedroom</option><option value="4 Bedroom">4 Bedroom</option><option value="5 Bedroom">5 Bedroom</option><option value="6 Bedroom">6 Bedroom</option>',6),Z=[E],J={for:"price"},K={key:0,class:"text-red-600"},Q={for:"style"},W={key:0,class:"text-red-600"},X=y('<option value="Commercial Buildinngs"> Commercial Buildinngs </option><option value="Apartments">Apartments</option><option value="Hostels and Lodges"> Hostels and Lodges </option><option value="Duplex Desings"> Duplex Desings </option><option value="Modern House Plans"> Modern House Plans </option><option value="Small Houses">Small Houses</option><option value="Beach House Plans"> Beach House Plans </option><option value="Contemporary House Plans"> Contemporary House Plans </option><option value="Meditaerranean House Plans"> Meditaerranean House Plans </option><option value="Farm House Plans"> Farm House Plans </option>',10),Y=[X],$={for:"roof_finish",class:"mt-"},ee={key:0,class:"text-red-600"},oe=y('<option value="Gable roof">Gable roof</option><option value="Hip and valley roof"> Hip and valley roof </option><option value="Simple Hip roof"> Simple Hip roof </option><option value="Cross Hipped roof"> Cross Hipped roof </option><option value="Hexagonal roof"> Hexagonal roof </option><option value="Dutch Roof">Dutch Roof</option><option value="Open Gable Roof"> Open Gable Roof </option><option value="Cross Gable Roof"> Cross Gable Roof </option><option value="Mansard roof">Mansard roof</option><option value="Skillion and Lean to Roof"> Skillion and Lean to Roof </option><option value="Flat roof">Flat roof</option><option value="Shed roof">Shed roof</option><option value="Butterfly roof"> Butterfly roof </option><option value="Gambrel roof">Gambrel roof</option><option value="Dormer roof">Dormer roof</option><option value="M Shaped Roof">M Shaped Roof</option><option value="Front Gable Roof"> Front Gable Roof </option><option value="Curved Roof">Curved Roof</option>',18),re=[oe],le={class:"col-span-2"},ae={for:"bedrooms"},ie={key:0,class:"text-red-600"},se={for:"bathrooms"},te={key:0,class:"text-red-600"},ne={for:"levels"},de={key:0,class:"text-red-600"},ce={for:"area"},ue={key:0,class:"text-red-600"},me={class:"shadow-xs py-2 px-4 bg-white/90 my-7 rounded"},fe={for:"description"},ge={key:0,class:"text-red-600"},_e={class:"border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40"},be=e("h2",{class:"text-xl mb-2"}," Select at least one image. ",-1),ve={class:"thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},he=["src"],pe={for:"image_1"},we={key:0,class:"text-red-600"},ye=["src"],xe={for:"image_2"},ke={key:0,class:"text-red-600"},Ce=["src"],He={for:"image_3"},Pe={key:0,class:"text-red-600"},Be=["src"],Fe={for:"image_4"},De={key:0,class:"text-red-600"},Re=["src"],Se={for:"image_5"},Ve={key:0,class:"text-red-600"},Ue=["src"],Le={for:"image_6"},Ge={key:0,class:"text-red-600"},Me=["src"],Ie={for:"image_7"},Ae={key:0,class:"text-red-600"},Ne={class:"shadow-xs rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto bg-white/90"},Oe=e("h2",{class:"text-2xl mb-2 mt-9"},"Select plan files",-1),je=e("p",null," If files are not avairrable now, you skip this section ",-1),Te={class:"mb-9 grid grid-cols-1 gap-4 md:grid-cols-2"},ze={for:"file_1"},qe={key:0,class:"text-red-600 text-teal-500"},Ee={for:"file_2"},Ze={key:0,class:"text-red-600 text-teal-500"},Je={for:"file_3"},Ke={key:0,class:"text-red-600 text-teal-500"},Qe={for:"file_4"},We={key:0,class:"text-red-600 text-teal-500"},Xe=e("div",{class:"text-right px-4"},[e("button",{class:"bg-secondary-600 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-secondary-700 transition-all"}," UPLOAD ")],-1);function Ye(c,r,o,a,h,p){const v=L("Head");return s(),i("div",N,[G(v,{title:"Dashboard"}),O,e("form",{onSubmit:r[27]||(r[27]=M((...l)=>a.upload&&a.upload(...l),["prevent"])),action:"#",class:"capitalize"},[e("div",j,[e("div",T,[e("div",null,[e("label",z,[t(" type "),o.errors.name?(s(),i("span",q," - "+n(o.errors.name),1)):d("",!0)]),f(e("select",{"onUpdate:modelValue":r[0]||(r[0]=l=>a.plan.name=l),id:"name",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.name,"border-teal-500":!o.errors.name}])},Z,2),[[w,a.plan.name]])]),e("div",null,[e("label",J,[t(" Price "),o.errors.price?(s(),i("span",K," - "+n(o.errors.price),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":r[1]||(r[1]=l=>a.plan.price=l),type:"number",name:"price",id:"price",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.price,"border-teal-500":!o.errors.price}])},null,2),[[b,a.plan.price]])]),e("div",null,[e("label",Q,[t(" style "),o.errors.style?(s(),i("span",W," - "+n(o.errors.style),1)):d("",!0)]),f(e("select",{"onUpdate:modelValue":r[2]||(r[2]=l=>a.plan.style=l),id:"style",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.style,"border-teal-500":!o.errors.style}])},Y,2),[[w,a.plan.style]])]),e("div",null,[e("label",$,[t("Roof Finish "),o.errors.roof_finish?(s(),i("span",ee," - "+n(o.errors.roof_finish),1)):d("",!0)]),f(e("select",{"onUpdate:modelValue":r[3]||(r[3]=l=>a.plan.roof_finish=l),name:"roof_finish",id:"roof_finish",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.roof_finish,"border-teal-500":!o.errors.roof_finish}])},re,2),[[w,a.plan.roof_finish]])])]),e("div",le,[e("div",null,[e("label",ae,[t(" Bedrooms "),o.errors.bedrooms?(s(),i("span",ie," - "+n(o.errors.bedrooms),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":r[4]||(r[4]=l=>a.plan.bedrooms=l),type:"number",name:"bedrooms",id:"bedrooms",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.bedrooms,"border-teal-500":!o.errors.bedrooms}])},null,2),[[b,a.plan.bedrooms]])]),e("div",null,[e("label",se,[t(" bathrooms "),o.errors.bathrooms?(s(),i("span",te," - "+n(o.errors.bathrooms),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":r[5]||(r[5]=l=>a.plan.bathrooms=l),type:"number",name:"bathrooms",id:"bathrooms",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.bathrooms,"border-teal-500":!o.errors.bathrooms}])},null,2),[[b,a.plan.bathrooms]])]),e("div",null,[e("label",ne,[t(" levels "),o.errors.levels?(s(),i("span",de," - "+n(o.errors.levels),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":r[6]||(r[6]=l=>a.plan.levels=l),type:"number",name:"levels",id:"levels",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.levels,"border-teal-500":!o.errors.levels}])},null,2),[[b,a.plan.levels]])]),e("div",null,[e("label",ce,[t(" area "),o.errors.area?(s(),i("span",ue," - "+n(o.errors.area),1)):d("",!0)]),f(e("input",{"onUpdate:modelValue":r[7]||(r[7]=l=>a.plan.area=l),type:"number",id:"area",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.area,"border-teal-500":!o.errors.area}])},null,2),[[b,a.plan.area]])])])]),e("div",me,[e("label",fe,[t(" Description "),o.errors.description?(s(),i("span",ge," - "+n(o.errors.description),1)):d("",!0)]),f(e("textarea",{"onUpdate:modelValue":r[8]||(r[8]=l=>a.plan.description=l),name:"description",id:"description",cols:"30",rows:"5",class:g(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":o.errors.description,"border-teal-500":!o.errors.description}])},null,2),[[b,a.plan.description]])]),e("div",_e,[be,e("div",ve,[e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[10]||(r[10]=l=>a.selectFile(1))},[e("img",{alt:"",src:a.preview_1,class:"w-full aspect-video"},null,8,he),e("input",{onChange:r[9]||(r[9]=l=>a.imagePreview(l,0)),oncancel:"clearimage(this, 0)",accept:"image/*",type:"file",ref:"image_1",id:"image_1",class:"hidden"},null,544),e("label",pe,[t("Image 1* "),o.errors.image_1?(s(),i("span",we," - "+n(o.errors.image_1),1)):d("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[12]||(r[12]=l=>a.selectFile(2))},[e("img",{alt:"",src:a.preview_2,class:"w-full aspect-video"},null,8,ye),e("input",{onChange:r[11]||(r[11]=l=>a.imagePreview(l,1)),type:"file",ref:"image_2",accept:"image/*",class:"hidden"},null,544),e("label",xe,[t("Image 2 "),o.errors.image_2?(s(),i("span",ke," - "+n(o.errors.image_2),1)):d("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[14]||(r[14]=l=>a.selectFile(3))},[e("img",{alt:"",src:a.preview_3,class:"w-full aspect-video"},null,8,Ce),e("input",{onChange:r[13]||(r[13]=l=>a.imagePreview(l,2)),type:"file",ref:"image_3",accept:"image/*",class:"hidden"},null,544),e("label",He,[t("Image 3 "),o.errors.image_3?(s(),i("span",Pe," - "+n(o.errors.image_3),1)):d("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[16]||(r[16]=l=>a.selectFile(4))},[e("img",{alt:"",src:a.preview_4,class:"w-full aspect-video"},null,8,Be),e("input",{onChange:r[15]||(r[15]=l=>a.imagePreview(l,3)),type:"file",ref:"image_4",accept:"image/*",class:"hidden"},null,544),e("label",Fe,[t("Image 4 "),o.errors.image_4?(s(),i("span",De," - "+n(o.errors.image_4),1)):d("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[18]||(r[18]=l=>a.selectFile(5))},[e("img",{alt:"",src:a.preview_5,class:"w-full aspect-video"},null,8,Re),e("input",{onChange:r[17]||(r[17]=l=>a.imagePreview(l,4)),type:"file",ref:"image_5",accept:"image/*",class:"hidden"},null,544),e("label",Se,[t("Image 5 "),o.errors.image_5?(s(),i("span",Ve," - "+n(o.errors.image_5),1)):d("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[20]||(r[20]=l=>a.selectFile(6))},[e("img",{alt:"",src:a.preview_6,class:"w-full aspect-video border-0"},null,8,Ue),e("input",{onChange:r[19]||(r[19]=l=>a.imagePreview(l,5)),type:"file",ref:"image_6",accept:"image/*",class:"hidden"},null,544),e("label",Le,[t("Image 6 "),o.errors.image_6?(s(),i("span",Ge," - "+n(o.errors.image_6),1)):d("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:r[22]||(r[22]=l=>a.selectFile(7))},[e("img",{alt:"",src:a.preview_7,class:"w-full aspect-video"},null,8,Me),e("input",{onChange:r[21]||(r[21]=l=>a.imagePreview(l,6)),type:"file",ref:"image_7",accept:"image/*",class:"hidden"},null,544),e("label",Ie,[t("Image 7 "),o.errors.image_7?(s(),i("span",Ae," - "+n(o.errors.image_7),1)):d("",!0)])])])]),e("div",Ne,[Oe,je,e("div",Te,[e("div",null,[e("input",{onChange:r[23]||(r[23]=l=>a.imagePreview(l,7)),type:"file",name:"file_1",id:"file_1",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",ze,[t("File 1 "),o.errors.file_1?(s(),i("span",qe," - "+n(o.errors.file_1),1)):d("",!0)])]),e("div",null,[e("input",{onChange:r[24]||(r[24]=l=>a.imagePreview(l,8)),type:"file",name:"file_2",id:"file_2",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",Ee,[t("File 2 "),o.errors.file_2?(s(),i("span",Ze," - "+n(o.errors.file_2),1)):d("",!0)])]),e("div",null,[e("input",{onChange:r[25]||(r[25]=l=>a.imagePreview(l,9)),type:"file",name:"file_3",id:"file_3",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",Je,[t("File 3 "),o.errors.file_3?(s(),i("span",Ke," - "+n(o.errors.file_3),1)):d("",!0)])]),e("div",null,[e("input",{onChange:r[26]||(r[26]=l=>a.imagePreview(l,10)),type:"file",name:"file_4",id:"file_4",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",Qe,[t("File 4 "),o.errors.file_4?(s(),i("span",We," - "+n(o.errors.file_4),1)):d("",!0)])])])]),Xe],32)])}const io=I(A,[["render",Ye]]);export{io as default};
