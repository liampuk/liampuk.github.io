import{u as o,a as v,j as t,r as l}from"./index-DZPJsJ_E.js";const b=o.img`
  height: 40px;
  width: 60px;
  border-radius: 4px;
`,m=[{language:"French",hello:"Bonjour",thanks:"Merci",sorry:"Excusez moi",flag:"https://flagpedia.net/data/flags/w1160/fr.webp",lang:"fr-FR"},{language:"German",hello:"Guten tag",thanks:"Danke",sorry:"Entschuldigung",flag:"https://flagpedia.net/data/flags/w1160/de.webp",lang:"de-DE"},{language:"Italian",hello:"Buongiorno",thanks:"Grazie",sorry:"Scusi",flag:"https://flagpedia.net/data/flags/w1160/it.webp",lang:"it-IT"},{language:"Mandarin",hello:"Nǐ hǎo",helloOriginal:"你好",thanks:"Xièxiè",thanksOriginal:"谢谢",sorry:"Duìbùqǐ",sorryOriginal:"对不起",flag:"https://flagpedia.net/data/flags/w1160/cn.webp",lang:"cmn-CN"},{language:"Hindi",hello:"Namaste",helloOriginal:"नमस्ते",thanks:"Dhanyavaad",thanksOriginal:"धन्यवाद",sorry:"Kshama maangana",sorryOriginal:"क्षमा मांगना",flag:"https://flagpedia.net/data/flags/w1160/in.webp",lang:"hi-IN"},{language:"Spanish",hello:"Hola",thanks:"Gracias",sorry:"Lo siento",flag:"https://flagpedia.net/data/flags/w1160/es.webp",lang:"es-ES"}],y=({collapsed:e,languageId:n})=>{const s=m[n];return t.jsxs(L,{collapsed:e,children:[t.jsx(E,{collapsed:e,children:t.jsx($,{children:"Polyglot"})}),t.jsx(S,{collapsed:e,src:s.flag}),t.jsx(k,{}),t.jsxs(C,{children:["Learn to say ",s.hello," in 40 languages"]})]})},k=o.div`
  height: 150px;
`,S=o(b)`
  position: absolute;
  width: auto;
  transform: translateX(-50%);
  transition: all .3s ease;
  z-index: 1;

  ${({collapsed:e})=>e?v`
    left: calc(50% - 96px);
    top: 20px;
  `:v`
    height: 100px;
    left: 50%;
    top: 100px;
  `}
`,L=o.div`
  width: 100%;
  background-color: #f6f5e9;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  position: fixed;
  transition: .3s ease;
  display: grid;
  grid-template-rows: ${({collapsed:e})=>e?"48px 0 0":"48px 150px auto"};
  overflow: hidden;
  gap: ${({collapsed:e})=>e?"0":"8px"};
`,C=o.p`
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  height: 16px;
  font-family: "Annapurna SIL", serif;
`,E=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: .3s;
  ${({collapsed:e})=>e&&"margin-left: 48px;"}
`,$=o.h1`
  width: fit-content;
  font-weight: 500;
  font-size: 48px;
  font-family: "Annapurna SIL", serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  line-height: 56px;
`,I=({collapsed:e,setSearch:n})=>t.jsx(T,{collapsed:e,children:t.jsx(z,{children:t.jsx(F,{placeholder:"Search",onChange:s=>n(s.target.value)})})}),T=o.div`
  width: 100%;
  background-color: #f6f5e9;
  position: fixed;
  transition: .3s;
  animation: popIn ease .6s;
  bottom: ${({collapsed:e})=>e?-81:0}px;

  @keyframes popIn {
    from {bottom: -81px;}
    to {bottom: 0;}
  }
`,z=o.div`
  padding: 16px;
  background-color: #222;
  display: flex;
  justify-content: center;
  border-top: 1px solid #222;
`,F=o.input`
  font-size: 24px;
  border: none;
  padding: 8px;
  background-color: #333;
  color: #eee;
  text-align: center;
  height: 32px;

  &::placeholder {
    color: #aaa
  }

  &:focus {
    outline: none;
  }
`,O=({colour:e,language:n})=>{const s=l.useRef(window.speechSynthesis),r=(a,c)=>{const i=new SpeechSynthesisUtterance(a);i.lang=c,s.current.speak(i)};return t.jsxs(R,{colour:e,children:[t.jsx(M,{children:n.language}),t.jsxs(H,{children:[t.jsxs(f,{onClick:()=>r(n.helloOriginal||n.hello,n.lang),children:[t.jsx(u,{children:n.hello}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:t.jsx("path",{d:"M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"})}),t.jsx(w,{children:"Hello"})]}),t.jsxs(f,{onClick:()=>r(n.thanksOriginal||n.thanks,n.lang),children:[t.jsx(u,{children:n.thanks}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:t.jsx("path",{d:"M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"})}),t.jsx(w,{children:"Thank you"})]}),t.jsxs(f,{onClick:()=>r(n.sorryOriginal||n.sorry,n.lang),children:[t.jsx(u,{children:n.sorry}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:t.jsx("path",{d:"M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"})}),t.jsx(w,{children:"Excuse me"})]})]})]})},H=o.div`
  display: grid;
  grid-template-columns: 1fr;
  cursor: pointer;
  
  > :not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`,f=o.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 16px;
  line-height: 24px;

  &:hover {
    background-color: rgba(0,0,0,0.05);
  }
`,u=o.p`
  text-align: left;
`,w=o.p`
  text-align: right;
`,M=o.h2`
  font-weight: 400;
  margin: 0;
  font-size: 24px;
  font-family: "Annapurna SIL", serif;
  margin: 16px 0 8px 16px;
`,R=o.div`
  background-color: ${({colour:e})=>e};
  padding: 16px;
  border-bottom: 1px solid #ccc;
`,D=({filteredLanguages:e,collapsed:n,footerCollapsed:s,setScrollPosition:r,setFooterCollapsed:a})=>{const c=l.useRef(null),i=h=>{const d=h.target;r(p=>(d.scrollTop<p?a(!1):a(!0),d.scrollTop))};return l.useEffect(()=>(c.current&&c.current.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[]),t.jsx(G,{ref:c,collapsed:n,$footerCollapsed:s,children:e.map((h,d)=>t.jsx(O,{colour:d%2===0?"#fffef3":"#f6f5e9",language:h},d))})},G=o.div`
  width: 100%;
  background-color: #f6f5e9;
  height: calc(100% ${({$footerCollapsed:e})=>!e&&"- 70px "}- ${({collapsed:e})=>e?"81px":"306px"});
  margin-top: ${({collapsed:e})=>e?"81px":"295px"};
  transition: .3s;
  position: fixed;
  overflow: scroll;
`,A=()=>{const[e,n]=l.useState(0),[s,r]=l.useState(!1),[a,c]=l.useState(0),[i,h]=l.useState(""),d=m.filter(g=>{var x,j;return i===""?!0:(j=(x=g.language)==null?void 0:x.toLowerCase())==null?void 0:j.includes(i.toLowerCase())});l.useEffect(()=>{const g=setInterval(()=>{c(a+1>=m.length?0:a+1)},2e3);return()=>clearInterval(g)},[a]);const p=g=>{n(x=>(window.scrollY<x?r(!1):r(!0),window.scrollY))};return l.useEffect(()=>(window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)),[]),t.jsxs(N,{children:[t.jsx(y,{collapsed:e!==0,languageId:a}),t.jsx(D,{filteredLanguages:d,collapsed:e!==0,setScrollPosition:n,footerCollapsed:s,setFooterCollapsed:r}),t.jsx(I,{collapsed:s,setSearch:h})]})},N=o.div`
  background-color: #FFFEF2;
  overflow: scroll;
`;export{A as Page};
