(this["webpackJsonpmovies-app-react"]=this["webpackJsonpmovies-app-react"]||[]).push([[0],{1361:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),i=c(24),n=c.n(i),r=(c(33),c(13)),o=c(6),d=c(10),l=c.n(d),j=c(25),b=c(4),u=function(e){var t,c=e.setSearchTrailerId,a=e.setButtonPopup,s=e.id,i=e.title,n=e.poster_path,r=e.overview,o=e.vote_average;return Object(b.jsx)("div",{className:"movie",children:Object(b.jsxs)("div",{className:"movieHeader",children:[Object(b.jsx)(j.VideocamSharp,{className:"getTrailer",color:"#00000",height:"50px",width:"50px",onClick:function(){c(s),a(!0)}}),Object(b.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1459&q=80",alt:"title"}),Object(b.jsxs)("div",{className:"movieInfo",children:[Object(b.jsx)("h3",{children:i}),Object(b.jsx)("span",{className:"tag ".concat((t=o,t>=8?"green":t>=6?"orange":"red")),children:o})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"movieOver",children:[Object(b.jsx)("h2",{children:"Overview:"}),Object(b.jsx)("p",{children:r})]})})]})})};var h=function(e){return e.trigger?Object(b.jsx)("div",{className:"videoPopup",children:Object(b.jsxs)("div",{className:"videoPopupInner",children:[Object(b.jsx)("button",{className:"videoPopupCloseBtn",onClick:function(){e.setButtonPopup(!1)},children:Object(b.jsx)("strong",{children:" X "})}),e.children]})}):""};var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(o.a)(i,2),d=n[0],j=n[1],p=Object(a.useState)(""),m=Object(o.a)(p,2),v=m[0],O=m[1],f=Object(a.useState)(""),x=Object(o.a)(f,2),g=x[0],w=x[1],y=Object(a.useState)(!1),S=Object(o.a)(y,2),N=S[0],k=S[1],B=function(e){l.a.get(e).then((function(e){s(e.data.results)})).catch((function(e){alert(e.message)}))};return Object(a.useEffect)((function(){B("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14dc73a4bd1abf7c14d4209c112b4496&page=1")}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),d&&(B("https://api.themoviedb.org/3/search/movie?&api_key=14dc73a4bd1abf7c14d4209c112b4496&query="+d),j(""))},children:Object(b.jsx)("input",{className:"search",type:"text",placeholder:"Search...",value:d,onChange:function(e){j(e.target.value)}})})}),Object(b.jsxs)("div",{className:"movieContainer",children:[c.length>0&&c.map((function(e){return Object(b.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{setButtonPopup:k,setSearchTrailerId:O}),e.id)})),N?Object(b.jsxs)(h,{trigger:N,setButtonPopup:k,children:[function(e){l.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US")).then((function(e){return w(e.data.results[0].key),!0})).catch((function(e){return alert(e.message),!1}))}(v),Object(b.jsx)("iframe",{type:"text/html",height:"100%",width:"100%",src:"https://www.youtube.com/embed/".concat(g,"?autoplay=1&controls=1"),frameborder:"0",allowfullscreen:!0})]}):null]})]})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))},33:function(e,t,c){}},[[1361,1,2]]]);
//# sourceMappingURL=main.cf88a04a.chunk.js.map