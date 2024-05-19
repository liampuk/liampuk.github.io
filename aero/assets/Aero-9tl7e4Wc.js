import{r as p,j as r,p as u}from"./index-2ve1wWS-.js";const J=()=>{const[e,a]=p.useState([0,0]);return p.useLayoutEffect(()=>{const h=()=>{a([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",h),h(),()=>window.removeEventListener("resize",h)},[]),e[0]>0&&e[1]>0?e:[window.innerWidth,window.innerHeight]},tt=()=>{const e=p.useRef(0),a=p.useRef(0),[h,k]=J(),E=h<k*.75,w=window.devicePixelRatio,b=E?h*.9:k*.8*.8,l=b*1.3,R=b*.4,g=b*w,c=l*w,o=R*w,z=h*w,y=k*w,d=l/13,[x,H]=p.useState(l-d+1),T=p.useRef(null),L=t=>{t.preventDefault(),e.current=t==null?void 0:t.clientY,document.onmouseup=W,document.onmousemove=D},B=t=>{e.current=t==null?void 0:t.touches[0].clientY,document.ontouchend=W,document.ontouchmove=C},$=()=>{H(t=>t-a.current<0?0:t-a.current>l-d+1?l-d+1:t-a.current)},D=t=>{t.preventDefault(),a.current=e.current-t.clientY,e.current=t.clientY,$()},C=t=>{a.current=e.current-t.touches[0].clientY,e.current=t.touches[0].clientY,$()},W=()=>{document.onmouseup=null,document.onmousemove=null,document.ontouchend=null,document.ontouchmove=null},P=()=>{const t=T.current,n=t==null?void 0:t.getContext("2d");if(t&&n){const s=z,i=y;if(t.width=s,t.height=i,x===l-d+1){n.rect(0,0,s,i),n.fillStyle="white",n.fill();return}const q=()=>{const j=s/2-g/2+o,v=i/2-c/2+o,m=s/2-g/2+o,M=i/2+c/2-o,f=y/2-c/2+(x+d)*devicePixelRatio;let S;return f<v?S=j-Math.sqrt(Math.pow(o,2)-Math.pow(v-f,2)):f<M?S=z/2-g/2:S=m-Math.sqrt(Math.pow(o,2)-Math.pow(f-M,2)),{x:S,y:f}},X=()=>{const j=s/2+g/2-o,v=i/2+c/2-o,m=y/2-c/2+(x+d)*devicePixelRatio,M=i/2+c/2-o+o*Math.sin(315);return m<M?{x:s/2+g/2-o+o*Math.cos(315),y:i/2+c/2-o+o*Math.sin(315)}:{x:j+Math.sqrt(Math.pow(o,2)-Math.pow(v-m,2)),y:m}};n.beginPath(),n.moveTo(0,0),n.lineTo(s,0),n.lineTo(s,i),n.lineTo(s/2+g/2-o+o*Math.cos(315)-(i-(i/2+c/2-o+o*Math.sin(315))),i);const{x:A,y:F}=X(),{x:G,y:I}=q();n.lineTo(A,F),n.lineTo(G,I),n.lineTo(s/2-g/2+o-o*Math.cos(315)-(i-(i/2-c/2+o-o*Math.sin(315))),i+x*2),n.lineTo(0,i),n.closePath(),n.fillStyle="white",n.fill()}};return P(),p.useEffect(()=>{P(),document.addEventListener("visibilitychange",function(){P()})},[]),r.jsxs(O,{children:[r.jsx(Y,{}),r.jsx(Q,{}),r.jsx(N,{ref:T}),r.jsxs(K,{$width:b,$height:l,$radius:R,children:[r.jsx(U,{$offset:d+x,onMouseDown:t=>L(t),onTouchStart:t=>B(t),children:r.jsx(V,{$margin:d/3+2})}),r.jsx(Y,{}),r.jsx(Z,{})]})]})},K=u.div`
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
`,N=u.canvas`
  height: 100%;
  width: 100%;
  position: fixed;
  /* opacity: 0.5; */
`,Y=u.div`
  background-image: url("hdr.avif");
  background-size: 20000px 20000px;
  height: 100%;
  width: 100%;
  position: absolute;
`,O=u.div`
  width: 100%;
  height: 100%;
  position: fixed;
`,Q=u.div`
  width: 100%;
  height: 100%;
  /* background: linear-gradient(20deg, #a59170 0%, #ff8000 100%); */
  background-color: rgba(255, 184, 0, 0.4);
  background-size: 65% 100%;
  /* mix-blend-mode: multiply; */
  position: fixed;
`,U=u.div`
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
`,V=u.div`
  height: 4px;
  width: 30%;
  position: absolute;
  left: 35%;
  bottom: ${({$margin:e})=>e}px;
  background-color: #c1c1c1;
  border-radius: 2px;
`,Z=u.div`
  height: 110%;
  width: 110%;
  margin-left: -5%;
  margin-top: -5%;
  background: linear-gradient(to top, #040308, #ad4a28, #dd723c, #fc7001, #dcb697, #9ba5ae, #3e5879, #020b1a);
  position: absolute;
  mix-blend-mode: multiply;
  filter: blur(10px);
`;export{tt as Aero};
