"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[710],{710:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(420),s=n(791),r=n(422);const c="contact-form_form__jmel0",l="contact-form_formGroup__5zkqg",o="contact-form_label__I6SBt",m="contact-form_btn__iZem0";var i=n(184);const u=e=>{let{onSubmit:t}=e;const[n,a]=(0,s.useState)({name:"",number:""}),u=(0,r.x0)(),d=(0,r.x0)(),_=e=>{let{target:t}=e;const{name:s,value:r}=t;a({...n,[s]:r})};return(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t({...n}),a({name:"",number:""})},className:c,children:[(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("label",{htmlFor:u,className:o,children:"Name"}),(0,i.jsx)("input",{value:n.name,type:"text",name:"name",id:u,onChange:_,required:!0})]}),(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("label",{htmlFor:d,className:o,children:"Number"}),(0,i.jsx)("input",{value:n.number,type:"tel",name:"number",id:d,onChange:_,required:!0})]}),(0,i.jsx)("button",{type:"submit",className:m,children:"Add contact"})]})},d="contact-list_list__6PpQb",_="contact-list_item__YrRrv",h="contact-list_btn__OV91a",x=e=>{let{items:t,deleteContact:n}=e;const a=t.map((e=>{let{id:t,name:a,number:s}=e;return(0,i.jsxs)("li",{className:_,children:[a,": ",s,(0,i.jsx)("button",{onClick:()=>n(t),type:"button",className:h,children:"Delete"})]},t)}));return(0,i.jsx)("ul",{className:d,children:a})};var b=n(597),p=n(127);const j=e=>e.contacts,f=e=>{const{contacts:t,filter:n}=e,{items:a}=t;if(!n)return a;const s=n.toLowerCase();return a.filter((e=>{let{name:t}=e;return t.toLowerCase().includes(s)}))},v="phonebook_wrapper__MfQ3k",N="phonebook_text__S15cN",k="phonebook_filter__4D50m",C=()=>{const{isLoading:e,error:t}=(0,a.v9)(j),n=(0,a.v9)(f),r=(0,a.I0)();(0,s.useEffect)((()=>{r((0,b.yF)())}),[r]);return(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)("h1",{children:"Phonebook"}),(0,i.jsx)(u,{onSubmit:e=>{r((0,b.uK)(e))}}),(0,i.jsx)("h2",{children:"Contacts"}),(0,i.jsx)("p",{className:N,children:"Find contact by name"}),(0,i.jsx)("input",{type:"text",name:"filter",onChange:e=>{let{target:t}=e;return r((0,p.c)(t.value))},className:k}),e&&(0,i.jsx)("p",{children:"...Loading"}),t&&(0,i.jsx)("p",{children:t}),Boolean(n.length)&&(0,i.jsx)(x,{items:n,deleteContact:e=>r((0,b.GK)(e))})]})},g=()=>(0,i.jsx)("div",{children:(0,i.jsx)(C,{})})}}]);
//# sourceMappingURL=710.c7595dde.chunk.js.map