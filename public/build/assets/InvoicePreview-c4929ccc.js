import{_ as n}from"./logo_yellow-df8def42.js";import{_ as o}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,d as i,a as t,t as s}from"./app-506644a5.js";const a={props:{invoice:Object}},d={class:"p-2"},r={class:"scale-80 overflow-x-scroll md:scale-100 invoice max-w-4xl mx-auto bg-white text-secondary-500 shadow"},_=t("h1",{class:"px-2 md:px-16 py-7 bg-primary-600 text-white font-bold text-2xl"},"INVOICE",-1),u={class:"md:flex py-9 px-2 md:px-16"},h={class:"flex-auto"},m=t("p",{class:"mt-16 font-bold"},"Bill To:",-1),x=t("img",{src:n,alt:"Mfumu",class:"w-56 mb-4"},null,-1),v={class:"px-2 md:px-16"},b={class:"table border"},f=t("thead",null,[t("tr",{class:"bg-secondary-100"},[t("th",null,"DESCRIPTIONS"),t("th",null,"QUANTITY"),t("th",null,"@ (ZMW)"),t("th",{class:"text-right"},"AMOUNT (ZMW)")])],-1),g=t("td",{class:"text-center"},"1",-1),p={class:"text-center"},y={class:"text-right"},M=t("tr",null,[t("td",null,"Electronic Drawing File (.DWG)"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),T=t("tr",null,[t("td",null,"Electronic 3D Revit File"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),w=t("tr",null,[t("td",null,"List of Materials and Quantities"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),W=t("tr",null,[t("td",null,"Electrical Layout"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),Z={class:"table border md:w-1/2 ml-auto -mt-4 md:mb-96"},D={class:"text-xl"},I=t("td",null,null,-1),N=t("td",null,"TOTAL",-1),E=t("td",{class:"text-center"},null,-1),F={class:"text-right"},O={class:"text-xl w-1/2 offset-2"},L=t("td",null,null,-1),A=t("td",{class:"text-xl"},"TOTAL DUE: ",-1),B=t("td",{class:"text-center"},null,-1),k={class:"text-right"},P=t("p",{class:"px-2 md:px-16 py-2 bg-primary-600 text-white"},"Thank you for your business",-1);function R(l,S,e,U,C,Q){return c(),i("div",d,[t("div",r,[_,t("div",u,[t("div",h,[m,t("p",null,s(e.invoice.customerFirstName)+", "+s(e.invoice.customerLastName),1),t("p",null,s(e.invoice.customerPhone),1),t("p",null,s(e.invoice.customerEmail),1)]),t("div",null,[x,t("p",null,"Invoice N0. "+s(e.invoice.transactionReference),1),t("p",null,"Issue Date: "+s(e.invoice.created_at.split("T")[0]),1),t("p",null,"Due Date: "+s(e.invoice.created_at.split("T")[0]),1)])]),t("div",v,[t("table",b,[f,t("tbody",null,[t("tr",null,[t("td",null,s(e.invoice.transactionName),1),g,t("td",p,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1),t("td",y,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)]),M,T,w,W])]),t("table",Z,[t("tbody",null,[t("tr",D,[I,N,E,t("td",F,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)]),t("tr",O,[L,A,B,t("td",k,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)])])])]),P])])}const Y=o(a,[["render",R]]);export{Y as I};
