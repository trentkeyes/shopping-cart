(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){e.exports=t(46)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=t(4),i=t(3),o=t(5),m=t(1),u=t(12),p=t.n(u),_=(t(21),function(e){var a=e.shopData,t=e.cart,n=t.map(function(e,t){var n=a[e.id];return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"shopping-cart__flex"},r.a.createElement("p",null,n.album," ",r.a.createElement("span",null,"(",n.artist,")")),r.a.createElement("p",{className:"shopping-cart__push-right"},"(",e.quantity,")$",r.a.createElement("span",{className:"underline"},e.quantity*n.price))))}),l=t.reduce(function(e,t,n){return{quantity:e.quantity+t.quantity,price:e.price+t.quantity*a[t.id].price}},{quantity:0,price:0});return r.a.createElement("div",null,t.length>0?r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("div",null,n),r.a.createElement("div",{className:"shopping-cart__flex shopping-cart__total"},r.a.createElement("p",{className:""},"Total"),r.a.createElement("p",{className:"shopping-cart__push-right"},"(",l.quantity,")$",r.a.createElement("span",{className:"underline"},l.price)))):r.a.createElement("p",null,"Add something to your cart"))}),d=(t(14),t(42),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#3A5A40",color:"#DAD7CD"}}),b=function(e){var a=e.modalIsOpen,t=e.closeModal,n=e.shopData,l=e.cart;return r.a.createElement("div",{className:"home__background"},r.a.createElement(p.a,{isOpen:a,onRequestClose:t,style:d,contentLabel:"Example Modal",appElement:document.getElementById("app")},r.a.createElement(_,{shopData:n,cart:l})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero__text"},r.a.createElement("h1",{className:"hero__title"},"The best records. ",r.a.createElement("br",null),"Of 1989."),r.a.createElement("p",{className:"hero__copy"},"Buy the highest selling albums from 1989."),r.a.createElement("div",{className:"hero__link"},r.a.createElement(o.b,{to:"/shop"},"Shop now")))))},h=(t(43),function(e){var a=e.album,t=e.artist,l=e.art,c=e.price,s=e.id,o=e.addItem,m=Object(n.useState)(1),u=Object(i.a)(m,2),p=u[0],_=u[1];return r.a.createElement("div",{className:"item__card"},r.a.createElement("div",{className:"item__img"},r.a.createElement("img",{src:l,alt:"album cover",className:"item__img"})),r.a.createElement("h3",null,a),r.a.createElement("h3",null,t),r.a.createElement("h3",null,"$",c),r.a.createElement("div",{className:"item__inputs"},r.a.createElement("input",{type:"number",name:"item-quantity",value:p,onChange:function(e){return _(Number(e.target.value))},min:"1",className:"item__quantity"}),r.a.createElement("button",{className:"item__add",onClick:function(){return o(s,p)}},"Add to Cart")))}),E=(t(44),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#3A5A40",color:"#DAD7CD"}}),g=function(e){var a=e.shopData,t=e.cart,n=e.addItem,l=e.modalIsOpen,c=e.closeModal,s=a.map(function(e,a){return r.a.createElement(h,{key:a,id:a,album:e.album,artist:e.artist,price:e.price,art:e.art,addItem:n})});return r.a.createElement("div",{className:"shop__background"},r.a.createElement(p.a,{isOpen:l,onRequestClose:c,style:E,contentLabel:"Shopping Cart",appElement:document.getElementById("app")},r.a.createElement(_,{shopData:a,cart:t})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"shop__items__flex"},s)))},v=(t(45),function(e){var a=e.cartQuantity,t=e.openModal;return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"container nav__flex"},r.a.createElement("h1",{className:"nav__title"},"Rollback Records"),r.a.createElement("ul",{className:"nav__links"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/home",exact:"true",activeclassname:"active",className:"nav__link"},"Home")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/shop",className:"nav__link",exact:"true",activeclassname:"active"},"Shop")),r.a.createElement("li",null,r.a.createElement("div",{className:"nav__cart",onClick:t},r.a.createElement("img",{src:"/assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg",alt:"Shopping cart icon"}))),r.a.createElement("li",{className:"nav__cart-items"},a&&r.a.createElement("div",{className:"nav__cart-items-background"},a)))))}),f=[{album:"Giving You the Best That I Got",artist:"Anita Baker",art:"/assets/album-art/GivingYoutheBestThatIGot.jpg",price:9.99},{album:"Don't Be Cruel",artist:"Bobby Brown",art:"/assets/album-art/Cruelalbum.jpg",price:10.99},{album:"Appetite for Destruction",artist:"Guns N' Roses",art:"/assets/album-art/GunsnRosesAppetiteforDestructionalbumcover.jpg",price:12.99},{album:"Electric Youth",artist:"Debbie Gibson",art:"/assets/album-art/Debbie_gibson_electric_youth.jpg",price:11.99},{album:"L\u014dc-ed After Dark",artist:"Tone L\u014dc",art:"/assets/album-art/Tone-Loc_Loc-ed_After_Dark_CD_cover.JPG",price:10.99},{album:"Like a Prayer",artist:"Madonna",art:"/assets/album-art/Madonna_-_Like_a_Prayer_album.png",price:12.99},{album:"The Raw & the Cooked",artist:"Fine Young Cannibals",art:"/assets/album-art/The_Raw_and_the_Cooked.jpg",price:9.99},{album:"Batman",artist:"Prince",art:"/assets/album-art/Prince_-_Batman_(Motion_Picture_Soundtrack).jpg",price:10.99},{album:"Repeat Offender",artist:"Richard Marx",art:"/assets/album-art/Richard_Marx_-_Repeat_Offender.jpg",price:9.99},{album:"Hangin' Tough",artist:"New Kids on the Block",art:"/assets/album-art/New_Kids_on_the_Block-Hangin_Tough.jpg",price:11.99},{album:"Girl You Know It's True",artist:"Milli Vanilli",art:"/assets/album-art/Milli_Vanilli_Girl_You_Know_Its_True_CD_cover.JPG",price:1.99},{album:"Forever Your Girl",artist:"Paula Abdul",art:"/assets/album-art/Forever_Your_Girl_-_Paula_Abdul.PNG",price:11.99},{album:"Dr. Feelgood",artist:"M\xf6tley Cr\xfce",art:"/assets/album-art/Motley_Crue_-_Dr_Feelgood-front.jpg",price:12.99},{album:"Janet Jackson's Rhythm Nation 1814",artist:"Janet Jackson",art:"/assets/album-art/Janet_Jackson_Rhythm_Nation_1814.png",price:11.99},{album:"Storm Front",artist:"Billy Joel",art:"/assets/album-art/BillyJoel_StormFront.jpg",price:10.99},{album:"...But Seriously",artist:"Phil Collins",art:"/assets/album-art/Phil_Collins-But_Seriously.jpg",price:9.99}];var N=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.reduce(function(e,a){return e+a.quantity},0),u=Object(n.useState)(!1),p=Object(i.a)(u,2),_=p[0],d=p[1];function h(){d(!1)}return r.a.createElement("div",{className:"App",id:"app"},r.a.createElement(o.a,null,r.a.createElement(v,{cartQuantity:c,openModal:function(){d(!0)}}),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",index:!0,element:r.a.createElement(m.a,{to:"/home",replace:!0})}),r.a.createElement(m.b,{path:"/home",element:r.a.createElement(b,{modalIsOpen:_,closeModal:h,shopData:f,cart:t})}),r.a.createElement(m.b,{path:"/shop",element:r.a.createElement(g,{shopData:f,cart:t,addItem:function(e,a){l(function(t){return[].concat(Object(s.a)(t),[{id:e,quantity:a}])})},modalIsOpen:_,closeModal:h})}))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)))}},[[23,1,2]]]);
//# sourceMappingURL=main.932e263e.chunk.js.map