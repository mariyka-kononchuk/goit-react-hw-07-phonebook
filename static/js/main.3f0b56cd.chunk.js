(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={item:"ContactListItem_item__3RcU-",contact:"ContactListItem_contact__2BqUs",name:"ContactListItem_name__37DJP",number:"ContactListItem_number__14RWX",button:"ContactListItem_button__1jJXE"}},16:function(t,e,n){t.exports={label:"Filter_label__3dsYf",title:"Filter_title__2GadK",input:"Filter_input__TS_DL"}},21:function(t,e,n){t.exports={titlePhonebbok:"App_titlePhonebbok__3hGJh",titleContacts:"App_titleContacts__1x9H5"}},30:function(t,e,n){t.exports={container:"Container_container__1qEa5"}},33:function(t,e,n){t.exports={list:"ContactList_list__1SUfQ"}},46:function(t,e,n){},6:function(t,e,n){t.exports={form:"ContactForm_form__1X8yD",label:"ContactForm_label__1QFn7",title:"ContactForm_title__2gK9-",input:"ContactForm_input__2m-R6",button:"ContactForm_button__1e6Qi"}},69:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),s=n(5),i=(n(45),n(46),n(8)),u=n.n(i),l=n(15),b=n(11),j=n.n(b),d=n(2),m=Object(d.b)("contacts/fetchContactRequest"),f=Object(d.b)("contacts/fetchContactSuccess"),h=Object(d.b)("contacts/fetchContactError"),p=Object(d.b)("contacts/addContactRequest"),O=Object(d.b)("contacts/addContactSuccess"),_=Object(d.b)("contacts/addContactError"),x=Object(d.b)("contacts/deleteContactRequest"),C=Object(d.b)("contacts/deleteContactSuccess"),v=Object(d.b)("contacts/deleteContactError"),N=Object(d.b)("app/changeFilter");j.a.defaults.baseURL="http://localhost:4040";var g=n(21),y=n.n(g),k=n(30),w=n.n(k),S=n(1),A=function(t){var e=t.children;return Object(S.jsx)("div",{className:w.a.container,children:e})},L=n(7),F=n(31),q=n(32),D=n(36),R=n(35),J=n(13),z=function(t){return t.contacts.items},E=function(t){return t.contacts.filter},I=Object(J.a)([z,E],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),P=n(6),T=n.n(P),U=function(t){Object(D.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(L.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(L.a)({},a,c));var r=t.state.name;if(t.props.contacts.find((function(t){return t.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contacts")),void t.reset();t.props.onAddContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(q.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(S.jsxs)("form",{onSubmit:this.handleSubmit,className:T.a.form,children:[Object(S.jsxs)("label",{className:T.a.label,children:[Object(S.jsx)("span",{className:T.a.title,children:"Name"}),Object(S.jsx)("input",{className:T.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(S.jsxs)("label",{className:T.a.label,children:[Object(S.jsx)("span",{className:T.a.title,children:"Number"}),Object(S.jsx)("input",{className:T.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(S.jsx)("button",{className:T.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),Q=Object(s.b)((function(t){return{contacts:z(t)}}),(function(t){return{onAddContact:function(e){var n=e.name,a=e.number;return t(function(t){var e=t.name,n=t.number;return function(){var t=Object(l.a)(u.a.mark((function t(a){var c,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={name:e,number:n},a(p()),t.prev=2,t.next=5,j.a.post("/contacts",c);case 5:r=t.sent,o=r.data,a(O(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a(_(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}({name:n,number:a}))}}}))(U),X=n(16),Z=n.n(X),B=Object(s.b)((function(t){return{value:E(t)}}),(function(t){return{onChange:function(e){return t(N(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(S.jsxs)("label",{className:Z.a.label,children:[Object(S.jsx)("span",{className:Z.a.title,children:"Find contacts by name"}),Object(S.jsx)("input",{className:Z.a.input,type:"text",value:e,onChange:n})]})})),G=n(33),K=n.n(G),M=n(10),H=n.n(M),W=Object(s.b)(null,(function(t){return{onDeleteContact:function(e){return t(function(t){return function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x()),e.prev=1,e.next=4,j.a.delete("/contacts/".concat(t));case 4:e.sent,n(C(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(v(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(S.jsxs)("div",{className:H.a.item,children:[Object(S.jsxs)("p",{className:H.a.contact,children:[Object(S.jsxs)("span",{className:H.a.name,children:[e.name,":"]}),Object(S.jsx)("span",{className:H.a.number,children:e.number})]}),Object(S.jsx)("button",{className:H.a.button,onClick:function(){return n(e.id)},children:"Delete"})]})})),Y=Object(s.b)((function(t){return{contacts:I(t)}}),null)((function(t){var e=t.contacts;return Object(S.jsx)("ul",{className:K.a.list,children:e.map((function(t){return Object(S.jsx)("li",{children:Object(S.jsx)(W,{contacts:t})},t.id)}))})}));var $,V=Object(s.b)(null,(function(t){return{fetchContacts:function(){return t(function(){var t=Object(l.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,j.a.get("/contacts");case 4:n=t.sent,a=n.data,e(f(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(h(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))((function(t){return(0,t.fetchContacts)(),Object(S.jsx)(A,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{className:y.a.titlePhonebbok,children:"Phonebook"}),Object(S.jsx)(Q,{}),Object(S.jsx)("h2",{className:y.a.titleContacts,children:"Contacts"}),Object(S.jsx)(B,{}),Object(S.jsx)(Y,{})]})})})),tt=n(14),et=n(3),nt=n(34),at=n.n(nt),ct=n(9),rt=Object(d.c)([],($={},Object(L.a)($,f,(function(t,e){return e.payload})),Object(L.a)($,O,(function(t,e){return[e.payload].concat(Object(tt.a)(t))})),Object(L.a)($,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),$)),ot=Object(d.c)("",Object(L.a)({},N,(function(t,e){return e.payload}))),st=Object(et.b)({items:rt,filter:ot}),it=[].concat(Object(tt.a)(Object(d.d)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),[at.a]),ut=Object(et.b)({contacts:st}),lt=Object(d.a)({reducer:ut,middleware:it,devTools:!1});o.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(s.a,{store:lt,children:Object(S.jsx)(V,{})})}),document.querySelector("#root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3f0b56cd.chunk.js.map