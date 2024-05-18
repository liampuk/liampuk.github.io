import{r as g,j as r,p as d}from"./index-D0-cH5hJ.js";const K=()=>{const[e,u]=g.useState([0,0]);return g.useLayoutEffect(()=>{const a=()=>{u([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)},[]),e[0]>0&&e[1]>0?e:[window.innerWidth,window.innerHeight]},ot=()=>{const e=g.useRef(0),u=g.useRef(0),[a,k]=K(),E=a<k*.75,p=window.devicePixelRatio,f=E?a*.9:k*.8*.8,x=f*1.3,j=f*.4,h=f*p,c=x*p,o=j*p,B=a*p,z=k*p,l=x/13,[b,H]=g.useState(x-l+1),T=g.useRef(null),L=t=>{t.preventDefault(),e.current=t==null?void 0:t.clientY,document.onmouseup=W,document.onmousemove=D},C=t=>{e.current=t==null?void 0:t.touches[0].clientY,document.ontouchend=W,document.ontouchmove=q},$=()=>{H(t=>t-u.current<0?0:t-u.current>x-l+1?x-l+1:t-u.current)},D=t=>{t.preventDefault(),u.current=e.current-t.clientY,e.current=t.clientY,$()},q=t=>{u.current=e.current-t.touches[0].clientY,e.current=t.touches[0].clientY,$()},W=()=>{document.onmouseup=null,document.onmousemove=null,document.ontouchend=null,document.ontouchmove=null},S=()=>{const t=T.current,i=t==null?void 0:t.getContext("2d");if(t&&i){const v=t.getBoundingClientRect(),s=Math.round(devicePixelRatio*v.right)-Math.round(devicePixelRatio*v.left),n=Math.round(devicePixelRatio*v.bottom)-Math.round(devicePixelRatio*v.top);t.width=s,t.height=n;const X=()=>{const y=s/2-h/2+o,M=n/2-c/2+o,w=s/2-h/2+o,P=n/2+c/2-o,m=z/2-c/2+(b+l)*devicePixelRatio;let R;return m<M?R=y-Math.sqrt(Math.pow(o,2)-Math.pow(M-m,2)):m<P?R=B/2-h/2:R=w-Math.sqrt(Math.pow(o,2)-Math.pow(m-P,2)),{x:R,y:m}},A=()=>{const y=s/2+h/2-o,M=n/2+c/2-o,w=z/2-c/2+(b+l)*devicePixelRatio,P=n/2+c/2-o+o*Math.sin(315);return w<P?{x:s/2+h/2-o+o*Math.cos(315),y:n/2+c/2-o+o*Math.sin(315)}:{x:y+Math.sqrt(Math.pow(o,2)-Math.pow(M-w,2)),y:w}};i.beginPath(),i.moveTo(0,0),i.lineTo(s,0),i.lineTo(s,n),i.lineTo(s/2+h/2-o+o*Math.cos(315)-(n-(n/2+c/2-o+o*Math.sin(315))),n);const{x:F,y:G}=A(),{x:I,y:J}=X();i.lineTo(F,G),i.lineTo(I,J),i.lineTo(s/2-h/2+o-o*Math.cos(315)-(n-(n/2-c/2+o-o*Math.sin(315))),n+b*2),i.lineTo(0,n),i.closePath(),i.fillStyle="white",i.fill()}};return S(),g.useEffect(()=>{S(),document.addEventListener("visibilitychange",function(){S()})},[]),r.jsxs(Q,{children:[r.jsx(Y,{}),r.jsx(U,{}),r.jsx(O,{ref:T}),r.jsxs(N,{$width:f,$height:x,$radius:j,children:[r.jsx(V,{$offset:l+b,onMouseDown:t=>L(t),onTouchStart:t=>C(t),children:r.jsx(Z,{$margin:l/3+2})}),r.jsx(Y,{}),r.jsx(_,{})]})]})},N=d.div`
  height: ${({$height:e})=>e}px;
  width: ${({$width:e})=>e}px;
  border-radius: ${({$radius:e})=>e}px;
  position: absolute;
  background-color: white;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /* opacity: 0.5; */
`,O=d.canvas`
  height: 100vh;
  width: 100vw;
  position: fixed;
  /* opacity: 0.5; */
`,Y=d.div`
  background-image: url("hdr.avif");
  background-size: 20000px;
  height: 100%;
  width: 100%;
  position: absolute;
`,Q=d.div`
  width: 100%;
  height: 100%;
  position: fixed;
`,U=d.div`
  width: 100%;
  height: 100%;
  /* background: linear-gradient(20deg, #a59170 0%, #ff8000 100%); */
  background-color: rgba(255, 184, 0, 0.4);
  background-size: 65% 100%;
  /* mix-blend-mode: multiply; */
  position: fixed;
`,V=d.div`
  background-color: #d7d7d7;
  width: 100%;
  position: absolute;
  cursor: grab;
  height: ${({$offset:e})=>e}px;
  z-index: 1;
  margin-top: -1px;

  &:active {
    cursor: grabbing;
  }
`,Z=d.div`
  height: 4px;
  width: 30%;
  position: absolute;
  left: 35%;
  bottom: ${({$margin:e})=>e}px;
  background-color: #c1c1c1;
  border-radius: 2px;
`,_=d.div`
  height: 110%;
  width: 110%;
  margin-left: -5%;
  margin-top: -5%;
  background: linear-gradient(to top, #040308, #ad4a28, #dd723c, #fc7001, #dcb697, #9ba5ae, #3e5879, #020b1a);
  position: absolute;
  mix-blend-mode: multiply;
  filter: blur(10px);
`;export{ot as Aero};
