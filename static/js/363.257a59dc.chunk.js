"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[363],{7363:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(9439),u=t(2791),a=t(7689),c=t(6413),s="Reviews_reviews__Y95sa",i=t(184),o=function(){var e=(0,a.UO)().id,n=(0,u.useState)([]),t=(0,r.Z)(n,2),o=t[0],p=t[1],h=(0,u.useCallback)((function(){(0,c.Jh)(e).then((function(e){0!==e.results.length&&p(e.results.map((function(e){var n=e.author_details.username,t=e.content,r=e.id;return{nickname:n.toUpperCase(),content:t,id:r}})))})).catch((function(e){return console.log(e)}))}),[e]);return(0,u.useEffect)((function(){h()}),[h]),0===o.length?(0,i.jsx)("p",{children:"We don`t have any reviews for this movie"}):(0,i.jsx)("ul",{className:s,children:o.map((function(e){var n=e.nickname,t=e.content,r=e.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h4",{children:"Author: ".concat(n)}),(0,i.jsx)("article",{children:t})]},r)}))})}},6413:function(e,n,t){t.d(n,{B5:function(){return c},Hg:function(){return l},IQ:function(){return w},Jh:function(){return j},XT:function(){return d},s_:function(){return x}});var r=t(5861),u=t(7757),a=t.n(u),c={BASE_URL:"https://image.tmdb.org/t/p/",POSTER_SIZE:"w500",PHOTO_SIZE:"w300"},s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRhNTAzMjMxNWZiYTc1ZjI0MGI3NDVjYTdjYzBhZiIsInN1YiI6IjY0NzBiZWJlMzM2ZTAxMDBlODBjNTYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2kRYsL7gY4sDbVFKpKd_M1rnGrppV5NDL6eESs9EQU"}},i={pathname:"trending/movie/day",queries:{language:"en-US"}},o={pathname:"search/movie",queries:{query:"",include_adult:!1,language:"en-US",page:1}},p={pathname:"",queries:{language:"en-US"}},h={pathname:"",queries:{language:"en-US"}},f={pathname:"",queries:{language:"en-US",page:1}};function l(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_(i),e.prev=1,e.next=4,fetch(n,s);case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.queries.query=n,t=_(o),e.prev=2,e.next=5,fetch(t,s);case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.pathname="movie/".concat(n),t=_(p),e.prev=2,e.next=5,fetch(t,s);case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.pathname="movie/".concat(n,"/credits"),t=_(h),e.prev=2,e.next=5,fetch(t,s);case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function j(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.pathname="movie/".concat(n,"/reviews"),t=_(f),e.prev=2,e.next=5,fetch(t,s);case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function _(e){var n=e.pathname,t=function(e){return Object.keys(e).map((function(n){return"".concat(n,"=").concat(e[n])})).join("&")}(e.queries);return"".concat("https://api.themoviedb.org/3/").concat(n,"?").concat(t)}},5861:function(e,n,t){function r(e,n,t,r,u,a,c){try{var s=e[a](c),i=s.value}catch(o){return void t(o)}s.done?n(i):Promise.resolve(i).then(r,u)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(u,a){var c=e.apply(n,t);function s(e){r(c,u,a,s,i,"next",e)}function i(e){r(c,u,a,s,i,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return u}})}}]);
//# sourceMappingURL=363.257a59dc.chunk.js.map