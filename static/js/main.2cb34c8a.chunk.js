(this.webpackJsonpbet=this.webpackJsonpbet||[]).push([[0],{29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),d=n.n(i),s=n(21),r=n.n(s),a=(n(29),n(12)),j=n(11),l=n.n(j),h=n(22),b=n(8),o=n(23),O=n.n(o),x=(n(49),n(55)),u=n(53),p=n(54);var v=function(){var e=Object(i.useState)(),t=Object(b.a)(e,2),n=t[0],d=t[1],s=Object(i.useState)([]),r=Object(b.a)(s,2),j=r[0],o=r[1],v=Object(i.useState)(localStorage.getItem("flags")),g=Object(b.a)(v,2),f=g[0],y=g[1],m=Object(i.useState)(E),w=Object(b.a)(m,2),k=w[0],S=w[1];if(Object(i.useEffect)(Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json").then((function(e){return d(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]),!n)return Object(c.jsx)("h1",{children:"Loading..."});function E(e,t){return 1,9,Math.floor(8*Math.random())+1}return Object(c.jsxs)("div",{children:[f&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{style:{textAlign:"center",paddingTop:"5vw"},children:[" ",Object(c.jsx)(x.a,{variant:"secondary",size:"lg",onClick:function(e){return function(e){e.preventDefault(),9!=j.length?alert("Make sure You have selected exactly 9 players"):(y(!1),localStorage.setItem("flags",!1))}(e)},children:Object(c.jsx)("h3",{children:"START"})})]}),Object(c.jsxs)("div",{style:{display:"inline-block",verticalAlign:"top",paddingTop:"4vw",paddingLeft:"2vw",width:"10vw"},children:[Object(c.jsx)("h5",{className:"text-muted",children:"Playing 9"}),j.map((function(e){return Object(c.jsx)("p",{children:n[e].Name})}))]}),Object(c.jsx)("div",{style:{paddingLeft:"4vw",display:"inline-block",verticalAlign:"top",paddingRight:"1vw",paddingTop:"4vw",width:"80vw"},children:Object(c.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"SELECT"}),Object(c.jsx)("th",{children:"PLAYER NAME"}),Object(c.jsx)("th",{children:"BET"}),Object(c.jsx)("th",{children:"PRICE"}),Object(c.jsx)("th",{children:"WINNINGS"}),Object(c.jsx)("th",{children:"FATE"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:["  ",Object(c.jsx)("input",{type:"checkbox",id:t,onChange:function(){!function(e){if(document.getElementById(e).checked){var t=Object(a.a)(j);t.push(e),o(t)}else{var n=Object(a.a)(j),c=n.indexOf(e);n.splice(c,1),o(n)}}(t)}})]}),Object(c.jsx)("td",{children:e.Name}),Object(c.jsx)("td",{children:e.Bet}),Object(c.jsx)("td",{children:e.Price}),n[t].Bet==k?Object(c.jsx)("td",{children:2*parseInt(n[t].Price)}):Object(c.jsx)("td",{children:"0"}),n[t].Bet==k?Object(c.jsx)("td",{children:"Won"}):Object(c.jsx)("td",{children:"Lose"})]})}))})]})})]}),!f&&Object(c.jsxs)("div",{children:[j.map((function(e){return Object(c.jsx)("div",{style:{display:"inline-block",padding:"2vw"},children:Object(c.jsxs)(p.a,{border:"secondary",style:{width:"14rem",height:"9rem"},bg:"dark",text:"light",children:[Object(c.jsx)(p.a.Header,{children:n[e].Name}),Object(c.jsxs)(p.a.Body,{children:[Object(c.jsxs)("h5",{children:["Bet: ",n[e].Bet]}),n[e].Bet==k?Object(c.jsx)("h2",{children:"WON"}):Object(c.jsx)("h2",{children:"LOSE"})]})]})})})),Object(c.jsxs)("div",{style:{display:"inline-block",paddingLeft:"8vw",verticalAlign:"top"},children:[Object(c.jsx)("h1",{style:{fontSize:"150px"},children:Object(c.jsx)("b",{children:k})})," "]}),Object(c.jsxs)("div",{style:{display:"inline-block",paddingLeft:"10vw"},children:[" ",Object(c.jsx)(x.a,{variant:"dark",onClick:function(){S(E)},children:"REFRESH"})]}),Object(c.jsxs)("div",{style:{display:"inline-block",paddingLeft:"10vw"},children:[" ",Object(c.jsx)(x.a,{variant:"dark",onClick:function(){y(!0),o([])},children:"GO BACK"})]})]})]})},g=(n(50),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,d=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),d(e),s(e)}))});r.a.render(Object(c.jsx)(d.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),g()}},[[51,1,2]]]);
//# sourceMappingURL=main.2cb34c8a.chunk.js.map