import{i as V,Z as G,T as w,r as c,h as M,d as a,b as L,a as e,f as n,t as d,e as u,l as m,G as y,n as f,H as g,j as I,o as s,q as x}from"./app-8af5103e.js";import{D as S}from"./DashboardLaout-f253c150.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const E={components:{DashboardLayout:S,Link:V,Head:G},layout:S,props:{plan:Object,errors:Object},setup(b){const o=w({name:"1 Bedroom",price:"",style:"Apartments",roof_finish:"Simple Hip roof",bathrooms:1,bedrooms:1,levels:1,area:"",description:""});w({image_1:null,image_2:null,image_3:null,image_4:null,image_5:null,image_6:null,image_7:null}),w({file_1:null,file_2:null,file_3:null,file_4:null});const l=c(""),t=c(""),h=c(""),p=c(""),v=c(""),r=c(""),k=c(""),C=c(null),P=c(null),H=c(null),B=c(null),F=c(null),D=c(null),R=c(null);return{selectFile:i=>{switch(i){case 1:C.value.click();break;case 2:P.value.click();break;case 3:H.value.click();break;case 4:B.value.click();break;case 5:F.value.click();break;case 6:D.value.click();break;case 7:R.value.click();break}},imagePreview:(i,U)=>{var _=URL.createObjectURL(i.target.files[0]);switch(U){case 0:l.value=_,o.image_1=i.target.files[0];break;case 1:t.value=_,o.image_2=i.target.files[0];break;case 2:h.value=_,o.image_3=i.target.files[0];break;case 3:p.value=_,o.image_4=i.target.files[0];break;case 4:v.value=_,o.image_5=i.target.files[0];break;case 5:r.value=_,o.image_6=i.target.files[0];break;case 6:k.value=_,o.image_7=i.target.files[0];break;case 7:o.file_1=i.target.files[0];break;case 8:o.file_2=i.target.files[0];break;case 9:o.file_3=i.target.files[0];break;case 10:o.file_4=i.target.files[0];break}},image_1:C,image_2:P,image_3:H,image_4:B,image_5:F,image_6:D,image_7:R,preview_1:l,preview_2:t,preview_3:h,preview_4:p,preview_5:v,preview_6:r,preview_7:k,update:()=>{let i=b.plan;o.name=i.name,o.price=i.price,o.style=i.style,o.roof_finish=i.roof_finish,o.bathrooms=i.bathrooms,o.bedrooms=i.bedrooms,o.levels=i.levels,o.area=i.area,o.description=i.description,o.put(route("plans.update",b.plan))}}},mounted(){console.log(this.plan),this.preview_1=this.plan.image_1,this.preview_2=this.plan.image_2,this.preview_3=this.plan.image_3,this.preview_4=this.plan.image_4,this.preview_5=this.plan.image_5,this.preview_6=this.plan.image_6,this.preview_7=this.plan.image_7}},T={class:"max-w-7xl mx-auto px-2"},N=e("h1",{class:"text-2xl mb-4"},"EDIT A PLAN",-1),O={class:"shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded mb-16"},j={class:"col-span-4"},z={for:"name"},q={key:0,class:"text-red-600"},Z=x('<option value="1 Bedroom">1 Bedroom</option><option value="2 Bedroom">2 Bedroom</option><option value="3 Bedroom">3 Bedroom</option><option value="4 Bedroom">4 Bedroom</option><option value="5 Bedroom">5 Bedroom</option><option value="6 Bedroom">6 Bedroom</option>',6),J=[Z],K={for:"price"},Q={key:0,class:"text-red-600"},W={for:"style"},X={key:0,class:"text-red-600"},Y=x('<option value="Commercial Buildinngs"> Commercial Buildinngs </option><option value="Apartments">Apartments</option><option value="Hostels and Lodges"> Hostels and Lodges </option><option value="Duplex Desings"> Duplex Desings </option><option value="Modern House Plans"> Modern House Plans </option><option value="Small Houses">Small Houses</option><option value="Beach House Plans"> Beach House Plans </option><option value="Contemporary House Plans"> Contemporary House Plans </option><option value="Meditaerranean House Plans"> Meditaerranean House Plans </option><option value="Farm House Plans"> Farm House Plans </option>',10),$=[Y],ee={for:"roof_finish",class:""},oe={key:0,class:"text-red-600"},le=x('<option value="Gable roof">Gable roof</option><option value="Hip and valley roof"> Hip and valley roof </option><option value="Simple Hip roof"> Simple Hip roof </option><option value="Cross Hipped roof"> Cross Hipped roof </option><option value="Hexagonal roof"> Hexagonal roof </option><option value="Dutch Roof">Dutch Roof</option><option value="Open Gable Roof"> Open Gable Roof </option><option value="Cross Gable Roof"> Cross Gable Roof </option><option value="Mansard roof">Mansard roof</option><option value="Skillion and Lean to Roof"> Skillion and Lean to Roof </option><option value="Flat roof">Flat roof</option><option value="Shed roof">Shed roof</option><option value="Butterfly roof"> Butterfly roof </option><option value="Gambrel roof">Gambrel roof</option><option value="Dormer roof">Dormer roof</option><option value="M Shaped Roof">M Shaped Roof</option><option value="Front Gable Roof"> Front Gable Roof </option><option value="Curved Roof">Curved Roof</option>',18),re=[le],te={class:"col-span-2"},ie={for:"bedrooms"},ae={key:0,class:"text-red-600"},se={for:"bathrooms"},ne={key:0,class:"text-red-600"},de={for:"levels"},ue={key:0,class:"text-red-600"},ce={for:"area"},me={key:0,class:"text-red-600"},fe={class:"col-span-6"},_e={for:"description"},ge={key:0,class:"text-red-600"},be={class:"text-right px-4 col-span-6"},ve={class:"border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40"},he=e("h2",{class:"text-xl mb-2"},"Select at least one image.",-1),pe={class:"thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},we=["src"],ye={for:"image_1"},xe={key:0,class:"text-red-600"},ke=["src"],Ce={for:"image_2"},Pe={key:0,class:"text-red-600"},He=["src"],Be={for:"image_3"},Fe={key:0,class:"text-red-600"},De=["src"],Re={for:"image_4"},Se={key:0,class:"text-red-600"},Ue=["src"],Ve={for:"image_5"},Ge={key:0,class:"text-red-600"},Me=["src"],Le={for:"image_6"},Ie={key:0,class:"text-red-600"},Ae=["src"],Ee={for:"image_7"},Te={key:0,class:"text-red-600"},Ne=e("div",{class:"text-right px-4 col-span-2 mt-7"},[e("button",{class:"bg-teal-500/70 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-teal-700 transition-all"}," UPDATE ")],-1),Oe={class:"shadow-xs rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto bg-white/90"},je=e("h2",{class:"text-2xl mb-2 mt-9"},"Select plan files",-1),ze=e("p",null,"If files are not avairrable now, you skip this section",-1),qe={class:"mb-9 grid grid-cols-1 gap-4 md:grid-cols-2"},Ze={for:"file_1"},Je={key:0,class:"text-red-600 text-teal-500"},Ke={for:"file_2"},Qe={key:0,class:"text-red-600 text-teal-500"},We={for:"file_3"},Xe={key:0,class:"text-red-600 text-teal-500"},Ye={for:"file_4"},$e={key:0,class:"text-red-600 text-teal-500"},eo=e("div",{class:"text-right px-4 col-span-2"},[e("button",{class:"bg-teal-500/70 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-teal-700 transition-all"}," UPDATE ")],-1);function oo(b,o,l,t,h,p){const v=M("Head");return s(),a("div",T,[L(v,{title:"Dashboard"}),N,e("form",{onSubmit:o[28]||(o[28]=I((...r)=>b.upload&&b.upload(...r),["prevent"])),action:"#",class:"capitalize"},[e("div",O,[e("div",j,[e("div",null,[e("label",z,[n(" type "),l.errors.name?(s(),a("span",q," - "+d(l.errors.name),1)):u("",!0)]),m(e("select",{"onUpdate:modelValue":o[0]||(o[0]=r=>l.plan.name=r),id:"name",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.name,"border-teal-500":!l.errors.name}])},J,2),[[y,l.plan.name]])]),e("div",null,[e("label",K,[n(" Price "),l.errors.price?(s(),a("span",Q," - "+d(l.errors.price),1)):u("",!0)]),m(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>l.plan.price=r),type:"number",name:"price",id:"price",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.price,"border-teal-500":!l.errors.price}])},null,2),[[g,l.plan.price]])]),e("div",null,[e("label",W,[n(" style "),l.errors.style?(s(),a("span",X," - "+d(l.errors.style),1)):u("",!0)]),m(e("select",{"onUpdate:modelValue":o[2]||(o[2]=r=>l.plan.style=r),id:"style",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.style,"border-teal-500":!l.errors.style}])},$,2),[[y,l.plan.style]])]),e("div",null,[e("label",ee,[n("Roof Finish "),l.errors.roof_finish?(s(),a("span",oe," - "+d(l.errors.roof_finish),1)):u("",!0)]),m(e("select",{"onUpdate:modelValue":o[3]||(o[3]=r=>l.plan.roof_finish=r),name:"roof_finish",id:"roof_finish",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.roof_finish,"border-teal-500":!l.errors.roof_finish}])},re,2),[[y,l.plan.roof_finish]])])]),e("div",te,[e("div",null,[e("label",ie,[n(" Bedrooms "),l.errors.bedrooms?(s(),a("span",ae," - "+d(l.errors.bedrooms),1)):u("",!0)]),m(e("input",{"onUpdate:modelValue":o[4]||(o[4]=r=>l.plan.bedrooms=r),type:"number",name:"bedrooms",id:"bedrooms",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.bedrooms,"border-teal-500":!l.errors.bedrooms}])},null,2),[[g,l.plan.bedrooms]])]),e("div",null,[e("label",se,[n(" bathrooms "),l.errors.bathrooms?(s(),a("span",ne," - "+d(l.errors.bathrooms),1)):u("",!0)]),m(e("input",{"onUpdate:modelValue":o[5]||(o[5]=r=>l.plan.bathrooms=r),type:"number",name:"bathrooms",id:"bathrooms",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.bathrooms,"border-teal-500":!l.errors.bathrooms}])},null,2),[[g,l.plan.bathrooms]])]),e("div",null,[e("label",de,[n(" levels "),l.errors.levels?(s(),a("span",ue," - "+d(l.errors.levels),1)):u("",!0)]),m(e("input",{"onUpdate:modelValue":o[6]||(o[6]=r=>l.plan.levels=r),type:"number",name:"levels",id:"levels",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.levels,"border-teal-500":!l.errors.levels}])},null,2),[[g,l.plan.levels]])]),e("div",null,[e("label",ce,[n(" area "),l.errors.area?(s(),a("span",me," - "+d(l.errors.area),1)):u("",!0)]),m(e("input",{"onUpdate:modelValue":o[7]||(o[7]=r=>l.plan.area=r),type:"number",id:"area",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.area,"border-teal-500":!l.errors.area}])},null,2),[[g,l.plan.area]])])]),e("div",fe,[e("label",_e,[n(" Description "),l.errors.description?(s(),a("span",ge," - "+d(l.errors.description),1)):u("",!0)]),m(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=r=>l.plan.description=r),name:"description",id:"description",cols:"30",rows:"5",class:f(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":l.errors.description,"border-teal-500":!l.errors.description}])},null,2),[[g,l.plan.description]])]),e("div",be,[e("button",{onClick:o[9]||(o[9]=r=>t.update()),class:"bg-teal-500/70 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-teal-700 transition-all"}," UPDATE ")])]),e("div",ve,[he,e("div",pe,[e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[11]||(o[11]=r=>t.selectFile(1))},[e("img",{alt:"",src:t.preview_1,class:"w-full aspect-video"},null,8,we),e("input",{onChange:o[10]||(o[10]=r=>t.imagePreview(r,0)),oncancel:"clearimage(this, 0)",accept:"image/*",type:"file",ref:"image_1",id:"image_1",class:"hidden"},null,544),e("label",ye,[n("Image 1* "),l.errors.image_1?(s(),a("span",xe," - "+d(l.errors.image_1),1)):u("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[13]||(o[13]=r=>t.selectFile(2))},[e("img",{alt:"",src:t.preview_2,class:"w-full aspect-video"},null,8,ke),e("input",{onChange:o[12]||(o[12]=r=>t.imagePreview(r,1)),type:"file",ref:"image_2",accept:"image/*",class:"hidden"},null,544),e("label",Ce,[n("Image 2 "),l.errors.image_2?(s(),a("span",Pe," - "+d(l.errors.image_2),1)):u("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[15]||(o[15]=r=>t.selectFile(3))},[e("img",{alt:"",src:t.preview_3,class:"w-full aspect-video"},null,8,He),e("input",{onChange:o[14]||(o[14]=r=>t.imagePreview(r,2)),type:"file",ref:"image_3",accept:"image/*",class:"hidden"},null,544),e("label",Be,[n("Image 3 "),l.errors.image_3?(s(),a("span",Fe," - "+d(l.errors.image_3),1)):u("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[17]||(o[17]=r=>t.selectFile(4))},[e("img",{alt:"",src:t.preview_4,class:"w-full aspect-video"},null,8,De),e("input",{onChange:o[16]||(o[16]=r=>t.imagePreview(r,3)),type:"file",ref:"image_4",accept:"image/*",class:"hidden"},null,544),e("label",Re,[n("Image 4 "),l.errors.image_4?(s(),a("span",Se," - "+d(l.errors.image_4),1)):u("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[19]||(o[19]=r=>t.selectFile(5))},[e("img",{alt:"",src:t.preview_5,class:"w-full aspect-video"},null,8,Ue),e("input",{onChange:o[18]||(o[18]=r=>t.imagePreview(r,4)),type:"file",ref:"image_5",accept:"image/*",class:"hidden"},null,544),e("label",Ve,[n("Image 5 "),l.errors.image_5?(s(),a("span",Ge," - "+d(l.errors.image_5),1)):u("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[21]||(o[21]=r=>t.selectFile(6))},[e("img",{alt:"",src:t.preview_6,class:"w-full aspect-video border-0"},null,8,Me),e("input",{onChange:o[20]||(o[20]=r=>t.imagePreview(r,5)),type:"file",ref:"image_6",accept:"image/*",class:"hidden"},null,544),e("label",Le,[n("Image 6 "),l.errors.image_6?(s(),a("span",Ie," - "+d(l.errors.image_6),1)):u("",!0)])]),e("div",{class:"thumb shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all",onClick:o[23]||(o[23]=r=>t.selectFile(7))},[e("img",{alt:"",src:t.preview_7,class:"w-full aspect-video"},null,8,Ae),e("input",{onChange:o[22]||(o[22]=r=>t.imagePreview(r,6)),type:"file",ref:"image_7",accept:"image/*",class:"hidden"},null,544),e("label",Ee,[n("Image 7 "),l.errors.image_7?(s(),a("span",Te," - "+d(l.errors.image_7),1)):u("",!0)])])]),Ne]),e("div",Oe,[je,ze,e("div",qe,[e("div",null,[e("input",{onChange:o[24]||(o[24]=r=>t.imagePreview(r,7)),type:"file",name:"file_1",id:"file_1",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",Ze,[n("File 1 "),l.errors.file_1?(s(),a("span",Je," - "+d(l.errors.file_1),1)):u("",!0)])]),e("div",null,[e("input",{onChange:o[25]||(o[25]=r=>t.imagePreview(r,8)),type:"file",name:"file_2",id:"file_2",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",Ke,[n("File 2 "),l.errors.file_2?(s(),a("span",Qe," - "+d(l.errors.file_2),1)):u("",!0)])]),e("div",null,[e("input",{onChange:o[26]||(o[26]=r=>t.imagePreview(r,9)),type:"file",name:"file_3",id:"file_3",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",We,[n("File 3 "),l.errors.file_3?(s(),a("span",Xe," - "+d(l.errors.file_3),1)):u("",!0)])]),e("div",null,[e("input",{onChange:o[27]||(o[27]=r=>t.imagePreview(r,10)),type:"file",name:"file_4",id:"file_4",class:"border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"},null,32),e("label",Ye,[n("File 4 "),l.errors.file_4?(s(),a("span",$e," - "+d(l.errors.file_4),1)):u("",!0)])])]),eo])],32)])}const no=A(E,[["render",oo]]);export{no as default};
