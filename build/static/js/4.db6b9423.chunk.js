(this.webpackJsonpheed=this.webpackJsonpheed||[]).push([[4],{433:function(e,t,n){},438:function(e,t){},440:function(e,t){},470:function(e,t){},471:function(e,t){},593:function(e,t){},595:function(e,t){},623:function(e,t){},625:function(e,t){},626:function(e,t){},631:function(e,t){},633:function(e,t){},652:function(e,t){},664:function(e,t){},667:function(e,t){},867:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(1),s=(n(433),n(434)),r=n.n(s),a=n(7),l=n.n(a),d=n(435),o=n.p+"static/media/reciept-header.beff551e.png",j=n.p+"static/media/reciept-footer.4e8fe554.png",x=n(0),b=function(e){var t=d.StyleSheet.create({page:{flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingBottom:30,paddingTop:30,paddingHorizontal:"5%",backgroundColor:"#ffffff"},viewmiddle:{flexDirection:"row",marginTop:30,marginBottom:30,border:"solid",borderColor:"#7a7a7a",borderWidth:"0.5px",padding:"2.5%",marginHorizontal:"2.5%",fontSize:12,alignItems:"flex-start",width:"80%"},textcont:{flexDirection:"row",flexWrap:"wrap",marginTop:5,marginBottom:5},bold:{fontSize:10,color:"#525252"},text:{fontSize:11,width:"100%",color:"#222222"},image:{width:"100%"},inner:{flex:1,flexDirection:"column"},link:{fontSize:10,color:"#4B61B0",textDecoration:"underline"}});return Object(x.jsx)(d.PDFViewer,{className:"pdf-viewer",children:Object(x.jsx)(d.Document,{children:Object(x.jsxs)(d.Page,{size:"A4",style:t.page,wrap:!0,children:[Object(x.jsx)(d.View,{style:t.sectioncenter,children:Object(x.jsx)(d.Image,{src:o,style:t.image})}),Object(x.jsx)(d.Link,{style:t.link,src:"https://heedindia.org",children:"www.heedindia.org"}),Object(x.jsxs)(d.View,{style:t.viewmiddle,children:[Object(x.jsxs)(d.View,{style:t.inner,children:[Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Donor Name: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.name})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Received Date:"}),Object(x.jsx)(d.Text,{style:t.text,children:e.date})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Payment Mode: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.mode})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Amount: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.amt})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Amount in words: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.amt_word})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Donation Purpose: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.remark})]})]}),Object(x.jsxs)(d.View,{style:t.inner,children:[Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Address: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.address})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Phone No.: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.num})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Email Id: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.email})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"PAN No.: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.pan})]}),Object(x.jsxs)(d.View,{style:t.textcont,children:[Object(x.jsx)(d.Text,{style:t.bold,children:"Receipt No.: "}),Object(x.jsx)(d.Text,{style:t.text,children:e.receipt})]})]})]}),Object(x.jsx)(d.View,{style:t.sectioncenter,children:Object(x.jsx)(d.Image,{src:j,style:t.image})}),Object(x.jsx)(d.Link,{style:t.link,src:"https://heedindia.org",children:"www.heedindia.org"})]})})})},h=n(8);t.default=function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(null),d=Object(c.a)(a,2),o=d[0],j=d[1],m=Object(i.useState)({}),O=Object(c.a)(m,2),u=O[0],p=O[1];return Object(x.jsxs)("div",{className:"receipt",children:[Object(x.jsxs)("div",{className:"receipt-cont",children:[Object(x.jsx)("h1",{children:"Thank you for your donation"}),Object(x.jsx)("h3",{children:"Each act of kindness matters"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)},name:"reciept",type:"number",placeholder:"Enter Reciept Number"}),Object(x.jsx)("button",{onClick:function(){""===o||null===o?s(2):l.a.get("".concat(h.a,"/payments/get-payment"),{params:{receipt:o}}).then((function(e){console.log(e.data),s(1),p({name:e.data.name,amt:e.data.amount,date:e.data.createdAt,mode:"Online",amt_word:r.a.toWords(e.data.amount).toLocaleUpperCase(),remark:e.data.remarks,receipt:e.data.receipt,address:"".concat(e.data.address,", ").concat(e.data.city,", ").concat(e.data.state," "),num:e.data.contact,email:e.data.email,pan:e.data.pan})})).catch((function(){s(2)}))},children:1===n?"Generate New":"Generate"})]}),2===n?Object(x.jsxs)("p",{children:["Invalid receipt number. ",Object(x.jsx)("br",{})," Please contact us at ",Object(x.jsx)("a",{href:"mailto:info@heedindia.org",children:"info@heedindia.org"})," if you think this is a mistake."]}):null]}),Object(x.jsx)("div",{className:"demo",children:1===n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b,{name:u.name,amt:u.amt,date:u.date,amt_word:u.amt_word,mode:u.mode,remark:u.remark,address:u.address,num:u.num,email:u.email,receipt:u.receipt,pan:u.pan}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}):null})]})}}}]);