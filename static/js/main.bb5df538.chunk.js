(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{104:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s=t(0),d=t(10),j=t.n(d),l=t(53),u=t(29),b=t(58),x=t(56),p=t.n(x),h=t(70),m=t(40),O=t(132),f=t(22),v=t(23),g=v.a.div(r||(r=Object(f.a)(["\n   display: flex;\n   justify-content: space-between;\n   flex-direction: column;\n   width: 100%;\n   border: 1px solid lightBlue;\n   border-radius: 20px;\n   height: 100%;\n \n   button {\n      border-radius: 0 0 20px 20px;\n   }\n   \n   img{\n      mzx-height: 250px;\n      object-fit: cover;\n      border-radius: 20px 20px 0 0;\n   }\n   \n   div {\n      font-family: Arial, Helvetica, sans-sarif;\n      padding: 1rem;\n      height: 100%;\n   }\n   "]))),C=t(4),y=function(n){var e=n.item,t=n.handleAddToCart;return Object(C.jsxs)(g,{children:[Object(C.jsx)("img",{src:e.image,alt:e.title}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("h3",{children:[" ",e.title]}),Object(C.jsx)("p",{children:e.description}),Object(C.jsxs)("h3",{children:["$",e.price]})]}),Object(C.jsx)(O.a,{onClick:function(){return t(e)},children:" Add to cart"})]})},w=v.a.div(i||(i=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 20px;\n\n    div{\n        flex: 1;\n    }\n\n    .information, .buttons {\n        display: flex;\n        justify-content: space-between;\n    }\n    img{\n        max-width: 80px;\n        object-fit: cover;\n        margin-left: 40px;\n    }\n"]))),k=function(n){var e=n.item,t=n.addToCart,r=n.removeFromCart;return Object(C.jsxs)(w,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:e.title}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsxs)("p",{children:["Price: $",e.price]}),Object(C.jsxs)("p",{children:[" Total: $",(e.amount*e.price).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return r(e.id)},children:"-"}),Object(C.jsx)("p",{children:e.amount}),Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return t(e)},children:"+"})]})]}),Object(C.jsx)("img",{src:e.image,alt:e.title})]})},T=v.a.aside(c||(c=Object(f.a)(["\nfont-family: Arial, Helvetica, sans-serif;\nwidth: 500px;\npadding: 20px;\n"]))),A=function(n){var e,t=n.cartItems,r=n.addToCart,i=n.removeFromCart;return Object(C.jsxs)(T,{children:[Object(C.jsx)("h2",{children:" Your Shopping Cart"}),0===t.length?Object(C.jsx)("p",{children:" No items in cart."}):null,t.map((function(n){return Object(C.jsx)(k,{item:n,addToCart:r,removeFromCart:i},n.id)})),Object(C.jsxs)("h2",{children:[" Total: $",(e=t,e.reduce((function(n,e){return n+e.amount*e.price}),0)).toFixed(2)]})]})},F=t(139),z=t(136),S=t(138),$=t(74),E=t.n($),H=t(137),I=t(135),N=v.a.div(a||(a=Object(f.a)(["\nmargin: 40px;\n"]))),Q=Object(v.a)(I.a)(o||(o=Object(f.a)(["\nposition: fixed;\nz-index: 100;\nright: 20px;\ntop: 20px;\n\n\n"]))),B=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=Object(s.useState)(!1),e=Object(b.a)(n,2),t=e[0],r=e[1],i=Object(s.useState)([]),c=Object(b.a)(i,2),a=c[0],o=c[1],d=Object(m.useQuery)("products",B),j=d.data,x=d.isLoading,p=d.error;console.log(j);var h,O=function(n){o((function(e){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(u.a)(Object(u.a)({},e),{},{amount:e.amount+1}):e})):[].concat(Object(l.a)(e),[Object(u.a)(Object(u.a)({},n),{},{amount:1})])}))};return x?Object(C.jsx)(z.a,{}):p?Object(C.jsx)("div",{children:" Something went wrong ... "}):Object(C.jsxs)(N,{children:[Object(C.jsx)(F.a,{anchor:"right",open:t,onClose:function(){return r(!1)},children:Object(C.jsx)(A,{cartItems:a,addToCart:O,removeFromCart:function(n){o((function(e){return e.reduce((function(e,t){return t.id===n?1===t.amount?e:[].concat(Object(l.a)(e),[Object(u.a)(Object(u.a)({},t),{},{amount:t.amount-1})]):[].concat(Object(l.a)(e),[t])}),[])}))}})}),Object(C.jsx)(Q,{onClick:function(){return r(!0)},children:Object(C.jsx)(H.a,{badgeContent:(h=a,h.reduce((function(n,e){return n+e.amount}),0)),color:"error",children:Object(C.jsx)(E.a,{})})}),Object(C.jsx)(S.a,{container:!0,spacing:3,children:null===j||void 0===j?void 0:j.map((function(n){return Object(C.jsx)(S.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(y,{item:n,handleAddToCart:O})},n.id)}))})]})},P=new m.QueryClient;j.a.render(Object(C.jsxs)(m.QueryClientProvider,{client:P,children:[Object(C.jsx)(J,{}),","]}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.bb5df538.chunk.js.map