(this["webpackJsonpreact-js-skying-club"]=this["webpackJsonpreact-js-skying-club"]||[]).push([[13],{464:function(e,t,n){"use strict";var a,i=n(5),c=n(0),r=n(274),d=n(537),l=n(72),s=n(485),o=n(28),u=n(199),b=n(37),j=n(35).b.div(a||(a=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: auto;\n  .ant-upload {\n    .ant-upload-select-picture-card {\n      border: 3px dashed green;\n      width: 70px;\n      height: 70px;\n      span {\n        color: green;\n      }\n    }\n  }\n  .image {\n    width: 150px;\n    height: 150px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n  }\n"]))),h=n(6),f=function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||r.b.error("You can only upload JPG/PNG file!");var n=e.size/1024/1024<12;return n||r.b.error("Image must smaller than 12MB!"),t&&n};t.a=function(e){var t=e.onChange,n=void 0===t?function(){}:t,a=e.disabled,r=e.viewMode,b=void 0!==r&&r,p=e.fileUrl,O=Object(c.useState)(!1),v=Object(i.a)(O,2),x=v[0],m=v[1];return Object(h.jsxs)(j,{children:[Object(h.jsx)("div",{className:"upload-wrapper",children:!b&&Object(h.jsx)(d.a,{disabled:a,name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:function(e){m(!0),function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}(e,(function(t){u.a.upload(e).then((function(e){var a;e&&0===e.code?n(null===(a=e.data)||void 0===a?void 0:a.filePath):n(t)})).finally((function(){m(!1)}))}))},beforeUpload:f,style:{border:"dotted 4px green"},customRequest:function(){},children:x?Object(h.jsx)(l.a,{}):Object(h.jsxs)("div",{children:[Object(h.jsx)(s.a,{}),Object(h.jsx)("div",{style:{marginTop:8},children:"Ta\u0309i l\xean"})]})})}),Object(h.jsx)("div",{className:"image",children:p&&Object(h.jsx)("img",{alt:"image-profile",style:{width:"100%"},src:Object(o.a)()+o.c+"/files/"+p})})]})}},472:function(e,t,n){"use strict";var a=n(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),c=(0,a(n(462)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.default.createElement("g",null,i.default.createElement("path",{d:"M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),i.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}))),"DeleteForeverOutlined");t.default=c},550:function(e,t,n){"use strict";n.r(t);var a,i,c,r=n(1),d=n(5),l=n(198),s=(n(195),n(277)),o=n(200),u=n(0),b=n(63),j=n(37),h=n(457),f=n(460),p=n(35),O=(p.b.div(a||(a=Object(j.a)([""]))),Object(p.b)(h.a.Content)(i||(i=Object(j.a)(["\n  padding: 20px 0px;\n  margin-top: 50px;\n  .body {\n    padding: 10px 10px 20px 10px;\n    margin: 10px;\n    background-color: white;\n    .header-title {\n      font-weight: bold;\n      font-size: 18px;\n      margin-bottom: 20px;\n    }\n    .header-content {\n      display: flex;\n      justify-content: space-between;\n      .group-search {\n        display: flex;\n        padding-bottom: 15px;\n        width: 80%;\n        .search-box {\n          border-radius: 0;\n        }\n      }\n      .btn-create {\n        display: flex;\n        justify-content: flex-end;\n        width: 20%;\n      }\n    }\n    /* .header-content {\n      display: flex;\n      justify-content: space-between;\n      padding: 10px 5px;\n    } */\n\n    .div-search {\n      display: flex;\n      padding-bottom: 15px;\n      .search-box {\n        border-radius: 0;\n      }\n    }\n  }\n"])))),v=Object(p.b)(f.a)(c||(c=Object(j.a)(["\n  .head {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n  }\n  .footer {\n    padding: 10px;\n    background-color: white;\n  }\n"]))),x=n(276),m=n(463),g=n(8),w=n(205),y=n(464),N=n(539),C=n(274),k=n(534),T=n(535),R=n(271),D=n(6),I=["reload","auth"],z=function(e,t){var n,a,i=e.reload,c=void 0===i?function(){}:i,l=e.auth,s=(Object(g.a)(e,I),N.a.useForm()),o=Object(d.a)(s,1)[0],b=Object(u.useState)({}),j=Object(d.a)(b,2),h=j[0],f=j[1];Object(u.useRef)();Object(u.useEffect)((function(){}),[]),Object(u.useImperativeHandle)(t,(function(){return{show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;f(Object(r.a)(Object(r.a)({},h),{},{isDetail:t,data:e,visible:!0})),o.setFieldsValue(Object(r.a)(Object(r.a)({},e),{},{password2:e.password}))}}}));var p=function(){o.resetFields(),f(Object(r.a)(Object(r.a)({},h),{},{visible:!1}))};return Object(D.jsx)(v,{className:"modal-lg",size:"sm",width:400,onCancel:p,visible:h.visible,title:Object(D.jsx)("div",{style:{width:"100%",textAlign:"center",fontWeight:600},children:h.isDetail?"Chi ti\u1ebft Khuy\u1ebfn m\xe3i":null!==(n=h.data)&&void 0!==n&&n.id?"Ch\u1ec9nh s\u1eeda Khuy\u1ebfn m\xe3i":"Th\xeam m\u1edbi Khuy\u1ebfn m\xe3i"}),footer:Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(D.jsx)(x.a,{onClick:p,className:"btn-white",content:"Tr\u1edf l\u1ea1i",icon:"fa fa-times"}),!h.isDetail&&Object(D.jsx)(x.a,{onClick:function(){return o.submit()},content:null!==(a=h.data)&&void 0!==a&&a.id?"Ch\u1ec9nh s\u1eeda":"T\u1ea1o m\u1edbi",icon:"fa fa-check"})]}),children:Object(D.jsx)(N.a,{layout:"vertical",form:o,onFinish:function(e){var t,n,a;if(e.password===e.password2){var i,d=Object(r.a)(Object(r.a)({id:null===(t=h.data)||void 0===t?void 0:t.id,active:null===(n=h.data)||void 0===n?void 0:n.active},e),{},{idRes:null===l||void 0===l?void 0:l.userId});if(null!==(a=h.data)&&void 0!==a&&a.id)w.a._put(d,null===(i=h.data)||void 0===i?void 0:i.id).then((function(e){e&&0===e.code&&e.data?(c(),f(Object(r.a)(Object(r.a)({},h),{},{visible:!1})),o.resetFields(),C.b.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng")):e&&401===e.code?window.location.href="/login":(f(Object(r.a)(Object(r.a)({},h),{},{loading:!1})),C.b.error(e.message))}));else w.a._post(d).then((function(e){e&&0===e.code&&e.data?(f(Object(r.a)(Object(r.a)({},h),{},{visible:!1})),o.resetFields(),c(),C.b.success("T\u1ea1o m\u1edbi th\xe0nh c\xf4ng")):e&&401===e.code?window.location.href="/login":(f(Object(r.a)(Object(r.a)({},h),{},{loading:!1})),C.b.error(e.message))}))}else C.b.error("M\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang")},children:Object(D.jsxs)(k.a,{children:[Object(D.jsx)(T.a,{span:"24",children:Object(D.jsx)(N.a.Item,{label:"\u1ea2nh",name:"avatar",valuePropName:"fileUrl",children:Object(D.jsx)(y.a,{className:"avatar-uploader",onChange:function(e){o.setFieldsValue({avatar:e})}})})}),Object(D.jsx)(T.a,{span:"24",children:Object(D.jsx)(N.a.Item,{label:"T\xean",name:"name",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean"}],children:Object(D.jsx)(R.a,{placeholder:"Nh\u1eadp t\xean",type:"text",autoComplete:"off",disabled:h.isDetail})})}),Object(D.jsx)(T.a,{span:"24",children:Object(D.jsx)(N.a.Item,{label:"N\u1ed9i dung",name:"content",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin"}],children:Object(D.jsx)(R.a.TextArea,{placeholder:"Nh\u1eadp gi\xe1",type:"text",autoComplete:"off",disabled:h.isDetail})})})]})})})},F=Object(b.b)((function(e){return{auth:e.auth.auth}}),(function(e){return Object(m.a)(e),{}}),null,{forwardRef:!0})(Object(u.forwardRef)(z)),L=n(134),M=n(466),E=n.n(M),S=n(136),U=n(472),V=n.n(U);t.default=Object(b.b)((function(e){return{auth:e.auth.auth,listData:e.promotion._listData}}),(function(e){var t=e.promotion;return{getList:t._getList,updateData:t.updateData,getUser:e.account.getUser}}))((function(e){var t=e.auth,n=(e.getUser,e.getList),a=e.listData,i=(e.updateData,Object(u.useRef)()),c=Object(u.useState)({showModalPost:!1,params:{}}),b=Object(d.a)(c,2),j=b[0],h=(b[1],j.params);Object(u.useEffect)((function(){n({size:20,idRes:null===t||void 0===t?void 0:t.userId})}),[]);var f=[{title:"STT",width:80,render:function(e,t,n){return n+1}},{title:"\u1ea2nh",dataIndex:"avatar",width:150,render:function(e){return Object(D.jsx)("img",{src:Object(L.c)(e),style:{width:100,height:100}})}},{title:"T\xean",dataIndex:"name",width:200},{title:"N\u1ed9i dung",dataIndex:"content"},{title:"Ti\u1ec7n \xedch",width:150,render:function(e,a){return Object(D.jsxs)("div",{children:[Object(D.jsx)(S.a,{title:"Ch\u1ec9nh s\u1eeda",children:Object(D.jsx)(E.a,{onClick:function(){return i.current&&i.current.show(a)},style:{fontSize:28,marginRight:5,cursor:"pointer",color:"var(--blue)"}})}),Object(D.jsx)(S.a,{title:"X\xf3a",children:Object(D.jsx)(V.a,{onClick:function(){w.a._delete(null===a||void 0===a?void 0:a.id).then((function(e){e&&0===e.code?(C.b.success("X\xf3a th\xe0nh c\xf4ng"),n({size:20,idRes:t.userId})):e&&401===e.code?window.location.href="/login":C.b.error(e.message)}))},style:{fontSize:28,marginRight:5,cursor:"pointer",color:"var(--red)"}})})]})}}];return Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"card-content",children:Object(D.jsx)(O,{children:Object(D.jsx)("div",{className:"body",children:Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("div",{className:"header-title",children:"Qu\u1ea3n l\xfd khuy\u1ebfn m\xe3i"}),Object(D.jsxs)("div",{className:"header-content",children:[Object(D.jsx)("div",{className:"group-search",children:Object(D.jsx)(s.a,{type:"text",search:function(e){return function(e){n(Object(r.a)(Object(r.a)({},e),{},{idRes:null===t||void 0===t?void 0:t.userId}))}(Object(r.a)(Object(r.a)({},h),{},{page:0,name:e}))},placeholder:"T\xecm t\xean",style:{width:"50%"}})}),Object(D.jsx)("div",{className:"btn-create",children:Object(D.jsx)(x.a,{content:"Th\xeam m\u1edbi",onClick:function(){return i.current&&i.current.show({})},iconSvg:l.a})})]}),Object(D.jsx)("div",{className:"table-ds",children:Object(D.jsx)(o.a,{buttonCreate:{onCreate:function(){return i.current&&i.current.show({})}},dataSource:a,scroll:{x:830,y:"auto"},rowKey:function(e){return e.id},columns:f,footer:null})}),Object(D.jsx)(F,{ref:i,reload:function(){return n(Object(r.a)(Object(r.a)({},h),{},{idRes:null===t||void 0===t?void 0:t.userId,reload:h.reload}))}})]})})})})})}))}}]);
//# sourceMappingURL=13.880b0c51.chunk.js.map