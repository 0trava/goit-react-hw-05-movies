"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{881:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s="Movies_Movies_container__ZrBk1",o="Movies_SearchForm__EKSZc",i="Movies_SearchForm_button__gq07l",p="Movies_SearchForm_button_label__5bg7O",f="Movies_SearchForm_input__ye37+",l=n(791),h=n(87),v=n(689),d=n(502),m=n(184),_="",g=function(){var e=(0,l.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],g=(0,h.lr)(),x=(0,a.Z)(g,2),w=x[0],b=x[1],k=(0,l.useState)(),y=(0,a.Z)(k,2),Z=y[0],S=y[1],j=(0,v.TH)();console.log(w),(0,l.useEffect)((function(){j.state&&S(_)}),[j.state]);var M=function(){var e=(0,r.Z)(u().mark((function e(t){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===n?b({}):(t.preventDefault(),a=function(){var e=(0,r.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.z1)(n);case 2:t=e.sent,r=t.results,_=r,console.log(r.length),r.length<1?alert("We didn't find film with this name \"".concat(n,'" ')):S(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a(),b({c:"".concat(n)}),c(""));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:s,children:(0,m.jsxs)("form",{className:o,children:[(0,m.jsx)(h.rU,{children:(0,m.jsx)("button",{type:"submit",className:i,onClick:M,children:(0,m.jsx)("span",{className:p,children:"Search"})})}),(0,m.jsx)("input",{name:"filter",value:n,onChange:function(e){c(e.currentTarget.value)},className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})}),Z&&Z.map((function(e){var t=e.id,n=e.title;return(0,m.jsx)("ul",{children:(0,m.jsx)("li",{children:(0,m.jsx)(h.rU,{to:{pathname:"/movies/".concat("".concat(t))},state:{from:j},children:(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"\u2605"})," ",n]})})},t)})}))]})}},502:function(e,t,n){n.d(t,{Jh:function(){return h},M1:function(){return l},TP:function(){return p},wr:function(){return f},yA:function(){return o},z1:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3672c0915275ace21cbbe4fc0e9b5fda",o="https://image.tmdb.org/t/p/w500",i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,u.Z.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"$?api_key=").concat(s,"&language=en-US"),e.next=3,u.Z.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,u.Z.get(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,u.Z.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,u.Z.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=881.ec075c96.chunk.js.map