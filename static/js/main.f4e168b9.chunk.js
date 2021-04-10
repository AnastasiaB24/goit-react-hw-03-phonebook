(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__1MQN3",heading:"App_heading__2nYdz"}},19:function(t,e,n){},2:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__3xfXT",label:"ContactForm_label__2ehL5",input:"ContactForm_input__giasW",buttonSubmit:"ContactForm_buttonSubmit__1GfH6"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),i=n.n(o),r=(n(19),n(13)),s=n(4),u=n(5),l=n(6),m=n(8),b=n(7),d=n(22),j=n(2),h=n.n(j),f=n(0),p=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputValue=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.onSubmitContact=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.onSubmitContact,className:h.a.ContactForm,id:Object(d.a)(),children:[Object(f.jsxs)("label",{className:h.a.label,children:["Name",Object(f.jsx)("input",{type:"text",value:e,onChange:this.onInputValue,name:"name",className:h.a.input})]}),Object(f.jsxs)("label",{className:h.a.label,children:["Phone Number",Object(f.jsx)("input",{type:"text",value:n,onChange:this.onInputValue,name:"number",className:h.a.input})]}),Object(f.jsx)("button",{type:"submit",className:h.a.buttonSubmit,children:"Add contact"})]})}}]),n}(a.Component),C=n(3),v=n.n(C);var O=function(t){var e=t.contact,n=t.onRemove,a=e.name,c=e.number;return Object(f.jsxs)("li",{className:v.a.container,children:[Object(f.jsxs)("div",{className:v.a.contactInfo,children:[a," : ",c]}),Object(f.jsx)("section",{className:v.a.action,children:Object(f.jsx)("button",{type:"button",onClick:n,children:"Delete"})})]})};var _=function(t){var e=t.visibleContacts,n=t.onRemoveItem;return Object(f.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){return Object(f.jsx)(O,{contact:t,onRemove:function(){return n(t.id)}},t.id)}))})},x=n(9),g=n.n(x);var N=function(t){var e=t.filter,n=t.onChangeFilter;return Object(f.jsx)("div",{className:g.a.filterContainer,children:Object(f.jsxs)("label",{className:g.a.label,children:["Find contact by name:",Object(f.jsx)("input",{type:"text",value:e,onChange:n,name:"filter",className:g.a.input})]})})},S=n(10),y=n.n(S),I=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onInputValue=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.addContact=function(e,n){if(t.state.contacts.some((function(t){return t.name===e})))alert("".concat(e," is already in Contacts"));else{var a={id:Object(d.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[a])}}))}},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(f.jsxs)("div",{className:y.a.container,children:[Object(f.jsx)("h2",{className:y.a.heading,children:"PhoneBook"}),Object(f.jsx)(p,{onAddContact:this.addContact}),Object(f.jsx)("h2",{className:y.a.heading,children:"Contacts"}),e.length>1&&Object(f.jsx)(N,{filter:n,onChangeFilter:this.onInputValue}),e.length>0&&Object(f.jsx)(_,{visibleContacts:a,onRemoveItem:this.removeContact})]})}}]),n}(a.Component),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),F()},3:function(t,e,n){t.exports={container:"ContactListItem_container__2n-Lj",contactInfo:"ContactListItem_contactInfo__1lCqd",action:"ContactListItem_action__2T_zB"}},9:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__uXCD0",input:"Filter_input__29Zwy"}}},[[21,1,2]]]);
//# sourceMappingURL=main.f4e168b9.chunk.js.map