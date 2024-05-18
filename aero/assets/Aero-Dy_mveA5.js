import{r as w,j as r,p as u}from"./index-D2wGedhP.js";const K=()=>{const[e,a]=w.useState([0,0]);return w.useLayoutEffect(()=>{const h=()=>{a([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",h),h(),()=>window.removeEventListener("resize",h)},[]),e[0]>0&&e[1]>0?e:[window.innerWidth,window.innerHeight]},ot=()=>{const e=w.useRef(0),a=w.useRef(0),[h,S]=K(),E=h<S*.75,x=window.devicePixelRatio,b=E?h*.9:S*.8*.8,l=b*1.3,j=b*.4,g=b*x,s=l*x,o=j*x,B=h*x,z=S*x,d=l/13,[p,H]=w.useState(l-d+1),T=w.useRef(null),L=t=>{t.preventDefault(),e.current=t==null?void 0:t.clientY,document.onmouseup=W,document.onmousemove=D},C=t=>{e.current=t==null?void 0:t.touches[0].clientY,document.ontouchend=W,document.ontouchmove=q},$=()=>{H(t=>t-a.current<0?0:t-a.current>l-d+1?l-d+1:t-a.current)},D=t=>{t.preventDefault(),a.current=e.current-t.clientY,e.current=t.clientY,$()},q=t=>{a.current=e.current-t.touches[0].clientY,e.current=t.touches[0].clientY,$()},W=()=>{document.onmouseup=null,document.onmousemove=null,document.ontouchend=null,document.ontouchmove=null},k=()=>{const t=T.current,n=t==null?void 0:t.getContext("2d");if(t&&n){const v=t.getBoundingClientRect(),c=Math.round(devicePixelRatio*v.right)-Math.round(devicePixelRatio*v.left),i=Math.round(devicePixelRatio*v.bottom)-Math.round(devicePixelRatio*v.top);if(t.width=c,t.height=i,p===l-d+1){n.rect(0,0,c,i),n.fillStyle="white",n.fill();return}const X=()=>{const y=c/2-g/2+o,M=i/2-s/2+o,m=c/2-g/2+o,P=i/2+s/2-o,f=z/2-s/2+(p+d)*devicePixelRatio;let R;return f<M?R=y-Math.sqrt(Math.pow(o,2)-Math.pow(M-f,2)):f<P?R=B/2-g/2:R=m-Math.sqrt(Math.pow(o,2)-Math.pow(f-P,2)),{x:R,y:f}},A=()=>{const y=c/2+g/2-o,M=i/2+s/2-o,m=z/2-s/2+(p+d)*devicePixelRatio,P=i/2+s/2-o+o*Math.sin(315);return m<P?{x:c/2+g/2-o+o*Math.cos(315),y:i/2+s/2-o+o*Math.sin(315)}:{x:y+Math.sqrt(Math.pow(o,2)-Math.pow(M-m,2)),y:m}};n.beginPath(),n.moveTo(0,0),n.lineTo(c,0),n.lineTo(c,i),n.lineTo(c/2+g/2-o+o*Math.cos(315)-(i-(i/2+s/2-o+o*Math.sin(315))),i);const{x:F,y:G}=A(),{x:I,y:J}=X();n.lineTo(F,G),n.lineTo(I,J),n.lineTo(c/2-g/2+o-o*Math.cos(315)-(i-(i/2-s/2+o-o*Math.sin(315))),i+p*2),n.lineTo(0,i),n.closePath(),n.fillStyle="white",n.fill()}};return k(),w.useEffect(()=>{k(),document.addEventListener("visibilitychange",function(){k()})},[]),r.jsxs(Q,{children:[r.jsx(Y,{}),r.jsx(U,{}),r.jsx(O,{ref:T}),r.jsxs(N,{$width:b,$height:l,$radius:j,children:[r.jsx(V,{$offset:d+p,onMouseDown:t=>L(t),onTouchStart:t=>C(t),children:r.jsx(Z,{$margin:d/3+2})}),r.jsx(Y,{}),r.jsx(_,{})]})]})},N=u.div`
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
`,O=u.canvas`
  height: 100vh;
  width: 100vw;
  position: fixed;
  /* opacity: 0.5; */
`,Y=u.div`
  background-image: url("hdr.avif");
  background-size: 20000px;
  height: 100%;
  width: 100%;
  position: absolute;
`,Q=u.div`
  width: 100%;
  height: 100%;
  position: fixed;
`,U=u.div`
  width: 100%;
  height: 100%;
  /* background: linear-gradient(20deg, #a59170 0%, #ff8000 100%); */
  background-color: rgba(255, 184, 0, 0.4);
  background-size: 65% 100%;
  /* mix-blend-mode: multiply; */
  position: fixed;
`,V=u.div`
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
`,Z=u.div`
  height: 4px;
  width: 30%;
  position: absolute;
  left: 35%;
  bottom: ${({$margin:e})=>e}px;
  background-color: #c1c1c1;
  border-radius: 2px;
`,_=u.div`
  height: 110%;
  width: 110%;
  margin-left: -5%;
  margin-top: -5%;
  background: linear-gradient(to top, #040308, #ad4a28, #dd723c, #fc7001, #dcb697, #9ba5ae, #3e5879, #020b1a);
  position: absolute;
  mix-blend-mode: multiply;
  filter: blur(10px);
`;export{ot as Aero};
