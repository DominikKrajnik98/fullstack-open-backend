(this["webpackJsonpex_2.15"]=this["webpackJsonpex_2.15"]||[]).push([[0],{23:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(2),u=t.n(c),a=t(16),i=t.n(a),o=(t(23),t(17)),s=t(3),l=t(5),d=t.n(l),j="localhost:3001/api/persons",b=function(){return d.a.get(j).then((function(e){return e.data}))},f=function(e){return d.a.post(j,e).then((function(e){return e.data}))},m=function(e){return d.a.delete("".concat(j,"/").concat(e))},h=function(e,n){return d.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},O=(t(42),function(e){var n=e.successMessage,t=e.errorMessage;return null===n&&null===t?null:Object(r.jsx)("div",{children:null!==n&&Object(r.jsx)("div",{className:"success",children:n})||null!==t&&Object(r.jsx)("div",{className:"error",children:t})})}),v=function(e){var n=e.termToFilter,t=e.handleFilterChange;return Object(r.jsxs)("div",{children:["filter with ",Object(r.jsx)("input",{value:n,onChange:t})]})},x=function(e){var n=e.name,t=e.number,c=e.nameHandler,u=e.numberHandler,a=e.formSubmition;return Object(r.jsxs)("form",{onSubmit:a,children:[Object(r.jsxs)("div",{children:[" name: ",Object(r.jsx)("input",{value:n,onChange:c})," "]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:t,onChange:u})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.personsToShow,t=e.deleteHandler;return n.map((function(e){return Object(r.jsxs)("div",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},e.name)}))},w=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],u=n[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),l=i[0],d=i[1],j=Object(c.useState)(""),w=Object(s.a)(j,2),g=w[0],S=w[1],C=Object(c.useState)(""),y=Object(s.a)(C,2),H=y[0],T=y[1],M=Object(c.useState)(null),k=Object(s.a)(M,2),A=k[0],F=k[1],I=Object(c.useState)(null),N=Object(s.a)(I,2),E=N[0],J=N[1];Object(c.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var L=H?t.filter((function(e){return e.name.toLowerCase().includes(H.toLowerCase())})):t,_=function(){f({name:l,number:g}).then((function(e){u(t.concat(e)),d(""),S(""),F("Added "+e.name),setTimeout((function(){F(null)}),5e3)}))},B=function(e){if(window.confirm("Are you sure that you want to replace old number of ".concat(e.name,", with a new one ?"))){var n={id:e.id,name:e.name,number:g};h(e.id,n).then((function(n){var r=t.findIndex((function(n){return n.id===e.id})),c=Object(o.a)(t);c[r]=n,u(c),d(""),S("")})).catch((function(n){J("Information of "+e.name+" has already been removed from server"),setTimeout((function(){J(null)}),5e3)}))}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(O,{successMessage:A,errorMessage:E}),Object(r.jsx)(v,{termToFilter:H,handleFilterChange:function(e){return T(e.target.value)}}),Object(r.jsx)("h2",{children:"Add new"}),Object(r.jsx)(x,{name:l,number:g,formSubmition:function(e){e.preventDefault();var n=t.find((function(e){return e.name===l}));n?B(n):_()},nameHandler:function(e){return d(e.target.value)},numberHandler:function(e){return S(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(p,{personsToShow:L,deleteHandler:function(e){window.confirm("Are you sure that you want to delete ".concat(e.name," number?"))&&m(e.id).then((function(){u(t.filter((function(n){return n.id!==e.id})))}))}})]})};i.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d19a3a45.chunk.js.map