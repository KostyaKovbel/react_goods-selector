(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),o=n(3),a=n(5),r=n(6),l=n(9),d=n(8),i=n(1),u=n.n(i),j=(n(14),n(7)),h=n.n(j),b=n(0),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:["Jam"]},e.adder=function(t){e.state.selectedGoods.includes(t)?alert("".concat(t," already selected")):e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.remover=function(t){e.setState((function(e){return{selectedGoods:Object(o.a)(e.selectedGoods.filter((function(e){return e!==t})))}}))},e.display=function(t){if(1===t.length)return"".concat(e.state.selectedGoods.join("")," is");if(2===t.length)return"".concat(e.state.selectedGoods.join(" and ")," are");var n=e.state.selectedGoods;return"".concat(n.slice(0,n.length-1).join(", "))+" and ".concat(n.slice(n.length-1)," are")},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,n=0!==this.state.selectedGoods.length;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"title",children:["Selected good:"," ",this.display(t)," ",n?Object(b.jsxs)(b.Fragment,{children:["selected"," ",Object(b.jsx)("button",{type:"button",onClick:function(){e.setState({selectedGoods:[]})},children:"X"})]}):Object(b.jsx)(b.Fragment,{children:"No any selections"})]}),Object(b.jsx)("ul",{className:"list",children:f.map((function(t){var n=e.state.selectedGoods.includes(t);return Object(b.jsxs)("li",{className:h()({selected:n,nonSelected:!n}),children:[t," ",Object(b.jsx)("button",{type:"button",onClick:function(){e.adder(t)},children:"Add"}),n&&Object(b.jsx)("button",{type:"button",onClick:function(){e.remover(t)},children:"Remove"})]},t)}))})]})}}]),n}(u.a.Component),m=p;s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.241a2546.chunk.js.map