import{u as o,a as j,j as e,r as i}from"./index-DfkYVgUw.js";const b=o.img`
  height: 40px;
  width: 60px;
  border-radius: 4px;
`,m=[{language:"French",hello:"Bonjour",thanks:"Merci",sorry:"Excusez moi",flag:"https://flagpedia.net/data/flags/w1160/fr.webp",voice:"Daniel (French (France))",colour:"#eee"},{language:"German",hello:"Guten tag",thanks:"Danke",sorry:"Entschuldigung",flag:"https://flagpedia.net/data/flags/w1160/de.webp",voice:"Anna",colour:"#eee"},{language:"Italian",hello:"Buongiorno",thanks:"Grazie",sorry:"Scusi",flag:"https://flagpedia.net/data/flags/w1160/it.webp",voice:"Alice",colour:"#eee"},{language:"Mandarin",hello:"Nǐ hǎo",helloOriginal:"你好",thanks:"Xièxiè",thanksOriginal:"谢谢",sorry:"Duìbùqǐ",sorryOriginal:"对不起",flag:"https://flagpedia.net/data/flags/w1160/cn.webp",voice:"Tingting",colour:"#eee"},{language:"Hindi",hello:"Namaste",helloOriginal:"नमस्ते",thanks:"Dhanyavaad",thanksOriginal:"धन्यवाद",sorry:"Kshama maangana",sorryOriginal:"क्षमा मांगना",flag:"https://flagpedia.net/data/flags/w1160/in.webp",voice:"Google हिन्दी",colour:"#eee"},{language:"Spanish",hello:"Hola",thanks:"Gracias",sorry:"Lo siento",flag:"https://flagpedia.net/data/flags/w1160/es.webp",voice:"Mónica",colour:"#eee"}],y=({collapsed:t,languageId:n})=>{const r=m[n];return e.jsxs(L,{collapsed:t,children:[e.jsx(E,{collapsed:t,children:e.jsx($,{children:"Polyglot"})}),e.jsx(S,{collapsed:t,src:r.flag}),e.jsx(k,{}),e.jsxs(C,{children:["Learn to say ",r.hello," in 40 languages"]})]})},k=o.div`
  height: 150px;
`,S=o(b)`
  position: absolute;
  width: auto;
  transform: translateX(-50%);
  transition: all .3s ease;
  z-index: 1;

  ${({collapsed:t})=>t?j`
    left: calc(50% - 96px);
    top: 20px;
  `:j`
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
  grid-template-rows: ${({collapsed:t})=>t?"48px 0 0":"48px 150px auto"};
  overflow: hidden;
  gap: ${({collapsed:t})=>t?"0":"8px"};
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
  ${({collapsed:t})=>t&&"margin-left: 48px;"}
`,$=o.h1`
  width: fit-content;
  font-weight: 500;
  font-size: 48px;
  font-family: "Annapurna SIL", serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  line-height: 56px;
`,F=({collapsed:t,setSearch:n})=>e.jsx(I,{collapsed:t,children:e.jsx(T,{children:e.jsx(z,{placeholder:"Search",onChange:r=>n(r.target.value)})})}),I=o.div`
  width: 100%;
  background-color: #f6f5e9;
  position: fixed;
  transition: .3s;
  animation: popIn ease .6s;
  bottom: ${({collapsed:t})=>t?-81:0}px;

  @keyframes popIn {
    from {bottom: -81px;}
    to {bottom: 0;}
  }
`,T=o.div`
  padding: 16px;
  background-color: #222;
  display: flex;
  justify-content: center;
  border-top: 1px solid #222;
`,z=o.input`
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
`,O=({colour:t,language:n})=>{const r=i.useRef(window.speechSynthesis),a=i.useRef([]);i.useEffect(()=>{a.current=r.current.getVoices()},[r]);const s=(h,p)=>{a.current.map(c=>console.log(c.name,c.lang));const d=new SpeechSynthesisUtterance(h),l=a.current.filter(c=>c.name===p)[0];d.voice=l,r.current.speak(d)};return e.jsxs(A,{colour:t,children:[e.jsx(M,{children:n.language}),e.jsxs(H,{children:[e.jsxs(f,{onClick:()=>s(n.helloOriginal||n.hello,n.voice),children:[e.jsx(u,{children:n.hello}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:e.jsx("path",{d:"M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"})}),e.jsx(w,{children:"Hello"})]}),e.jsxs(f,{onClick:()=>s(n.thanksOriginal||n.thanks,n.voice),children:[e.jsx(u,{children:n.thanks}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:e.jsx("path",{d:"M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"})}),e.jsx(w,{children:"Thank you"})]}),e.jsxs(f,{onClick:()=>s(n.sorryOriginal||n.sorry,n.voice),children:[e.jsx(u,{children:n.sorry}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:e.jsx("path",{d:"M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"})}),e.jsx(w,{children:"Excuse me"})]})]})]})},H=o.div`
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
`,A=o.div`
  background-color: ${({colour:t})=>t};
  padding: 16px;
  border-bottom: 1px solid #ccc;
`,G=({filteredLanguages:t,collapsed:n,footerCollapsed:r,setScrollPosition:a,setFooterCollapsed:s})=>{const h=i.useRef(null),p=d=>{const l=d.target;a(c=>(l.scrollTop<c?s(!1):s(!0),l.scrollTop))};return i.useEffect(()=>(h.current&&h.current.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)),[]),e.jsx(R,{ref:h,collapsed:n,$footerCollapsed:r,children:t.map((d,l)=>e.jsx(O,{colour:l%2===0?"#fffef3":"#f6f5e9",language:d},l))})},R=o.div`
  width: 100%;
  background-color: #f6f5e9;
  height: calc(100% ${({$footerCollapsed:t})=>!t&&"- 70px "}- ${({collapsed:t})=>t?"81px":"306px"});
  margin-top: ${({collapsed:t})=>t?"81px":"295px"};
  transition: .3s;
  position: fixed;
  overflow: scroll;
`,B=()=>{const[t,n]=i.useState(0),[r,a]=i.useState(!1),[s,h]=i.useState(0),[p,d]=i.useState(""),l=m.filter(g=>{var x,v;return p===""?!0:(v=(x=g.language)==null?void 0:x.toLowerCase())==null?void 0:v.includes(p.toLowerCase())});i.useEffect(()=>{const g=setInterval(()=>{h(s+1>=m.length?0:s+1)},2e3);return()=>clearInterval(g)},[s]);const c=g=>{n(x=>(window.scrollY<x?a(!1):a(!0),window.scrollY))};return i.useEffect(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[]),e.jsxs(D,{children:[e.jsx(y,{collapsed:t!==0,languageId:s}),e.jsx(G,{filteredLanguages:l,collapsed:t!==0,setScrollPosition:n,footerCollapsed:r,setFooterCollapsed:a}),e.jsx(F,{collapsed:r,setSearch:d})]})},D=o.div`
  background-color: #FFFEF2;
  overflow: scroll;
`;export{B as Page};
