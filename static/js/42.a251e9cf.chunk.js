"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{42:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(861),r=n(439),o=n(757),a=n.n(o),s={movieDet_btn:"MovieDetails_movieDet_btn__NXnK5",movieDet_container:"MovieDetails_movieDet_container__AZ-qb",movieDet_block:"MovieDetails_movieDet_block__lCC3J",movieDet_infoBlock:"MovieDetails_movieDet_infoBlock__qhm7S",movieDet_title:"MovieDetails_movieDet_title__AGhfQ",movieDet_userScore:"MovieDetails_movieDet_userScore__ECE9k",movieDet_pre_title:"MovieDetails_movieDet_pre_title__2lxJ0",movieDet_text:"MovieDetails_movieDet_text__f4UFo",line:"MovieDetails_line__CL2K1",movieDet_link:"MovieDetails_movieDet_link__xcuip"},c=n(639),l=n(791),u=n(502),v=n(689),_=n(87),m=n(184);function d(){var e,t,n,o,d,f,p=(0,l.useState)(null),h=(0,r.Z)(p,2),D=h[0],x=h[1],b=(0,v.UO)().movieId,j=(0,v.TH)();return(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TP)(b);case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b]),(0,m.jsxs)("div",{className:s.movieDet_container,children:[D?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_.rU,{to:null!==(e=null===j||void 0===j||null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,m.jsx)("button",{className:s.movieDet_btn,children:"\ud83e\udc08 Go back"})}),(0,m.jsxs)("div",{className:s.movieDet_block,children:[(0,m.jsx)("img",{src:D.poster_path?u.yA+D.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:D.title,width:"350"}),(0,m.jsxs)("div",{className:s.movieDet_infoBlock,children:[(0,m.jsx)("h2",{className:s.movieDet_title,children:D.title}),(0,m.jsxs)("p",{className:s.movieDet_userScore,children:["User Score: ","".concat(Math.round(10*D.vote_average)),"% "]}),(0,m.jsx)("h3",{className:s.movieDet_pre_title,children:"Overview"}),(0,m.jsx)("p",{className:s.movieDet_text,children:"".concat(D.overview)}),(0,m.jsx)("h3",{className:s.movieDet_pre_title,children:"Genres"}),(0,m.jsx)("p",{className:s.movieDet_text,children:"".concat(D.genres.map((function(e){return e.name})).join(" / "))})]})]})]}):(0,m.jsx)("div",{children:"This movie is not found"}),(0,m.jsxs)("div",{className:s.movieDet_additional_block,children:[(0,m.jsx)("hr",{className:s.movieDet_line}),(0,m.jsx)("h3",{className:s.movieDet_pre_title,children:"Additional information"}),(0,m.jsxs)("ul",{className:s.movieDet_link,children:[(0,m.jsx)("li",{children:(0,m.jsx)(_.rU,{to:"cast",state:{from:null!==(n=null===j||void 0===j||null===(o=j.state)||void 0===o?void 0:o.from)&&void 0!==n?n:"/"},children:(0,m.jsx)("button",{className:s.movieDet_btn,children:"\u25bc Cast"})})}),(0,m.jsx)("li",{children:(0,m.jsx)(_.rU,{to:"reviews",state:{from:null!==(d=null===j||void 0===j||null===(f=j.state)||void 0===f?void 0:f.from)&&void 0!==d?d:"/"},children:(0,m.jsx)("button",{className:s.movieDet_btn,children:"\u25bc Reviews"})})})]})]}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)(c.Z,{}),children:(0,m.jsx)(v.j3,{})})]})}},502:function(e,t,n){n.d(t,{Jh:function(){return _},M1:function(){return v},TP:function(){return l},wr:function(){return u},yA:function(){return c}});var i=n(861),r=n(757),o=n.n(r),a=n(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3672c0915275ace21cbbe4fc0e9b5fda",c="https://image.tmdb.org/t/p/w500",l=function(){var e=(0,i.Z)(o().mark((function e(t){var n,i,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"$?api_key=").concat(s,"&language=en-US"),e.next=3,a.Z.get(n);case 3:return i=e.sent,r=i.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)(o().mark((function e(){var t,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,a.Z.get(t);case 3:return n=e.sent,i=n.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)(o().mark((function e(t){var n,i,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,a.Z.get(n);case 3:return i=e.sent,r=i.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.Z)(o().mark((function e(t){var n,i,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,a.Z.get(n);case 3:return i=e.sent,r=i.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.a251e9cf.chunk.js.map