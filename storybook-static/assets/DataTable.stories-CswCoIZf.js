import{j as r}from"./jsx-runtime-dsZ8nYAA.js";import{r as l,a as Pe}from"./index-GiUgBvb1.js";import{c as q,a as w,L as Te,b as Ie,C as J,d as G,e as K,f as Ue,h as X,i as Me}from"./card-C732Tbox.js";import"./index-B7pcWWqY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function Y(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ce(...e){return t=>{let a=!1;const o=e.map(s=>{const n=Y(s,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let s=0;s<o.length;s++){const n=o[s];typeof n=="function"?n():Y(e[s],null)}}}}function W(...e){return l.useCallback(Ce(...e),e)}function Be(e,t=[]){let a=[];function o(n,c){const i=l.createContext(c),d=a.length;a=[...a,c];const u=m=>{var g;const{scope:b,children:y,...v}=m,N=((g=b==null?void 0:b[e])==null?void 0:g[d])||i,k=l.useMemo(()=>v,Object.values(v));return r.jsx(N.Provider,{value:k,children:y})};u.displayName=n+"Provider";function p(m,b){var N;const y=((N=b==null?void 0:b[e])==null?void 0:N[d])||i,v=l.useContext(y);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${n}\``)}return[u,p]}const s=()=>{const n=a.map(c=>l.createContext(c));return function(i){const d=(i==null?void 0:i[e])||n;return l.useMemo(()=>({[`__scope${e}`]:{...i,[e]:d}}),[i,d])}};return s.scopeName=e,[o,Le(s,...t)]}function Le(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(n){const c=o.reduce((i,{useScope:d,scopeName:u})=>{const m=d(n)[`__scope${u}`];return{...i,...m}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return a.scopeName=t.scopeName,a}function ee(e,t,{checkForDefaultPrevented:a=!0}={}){return function(s){if(e==null||e(s),a===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}var L=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{},Ve=Pe[" useInsertionEffect ".trim().toString()]||L;function ze({prop:e,defaultProp:t,onChange:a=()=>{},caller:o}){const[s,n,c]=qe({defaultProp:t,onChange:a}),i=e!==void 0,d=i?e:s;{const p=l.useRef(e!==void 0);l.useEffect(()=>{const m=p.current;m!==i&&console.warn(`${o} is changing from ${m?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,o])}const u=l.useCallback(p=>{var m;if(i){const b=We(p)?p(e):p;b!==e&&((m=c.current)==null||m.call(c,b))}else n(p)},[i,e,n,c]);return[d,u]}function qe({defaultProp:e,onChange:t}){const[a,o]=l.useState(e),s=l.useRef(a),n=l.useRef(t);return Ve(()=>{n.current=t},[t]),l.useEffect(()=>{var c;s.current!==a&&((c=n.current)==null||c.call(n,a),s.current=a)},[a,s]),[a,o,n]}function We(e){return typeof e=="function"}function $e(e){const t=l.useRef({value:e,previous:e});return l.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Fe(e){const[t,a]=l.useState(void 0);return L(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const n=s[0];let c,i;if("borderBoxSize"in n){const d=n.borderBoxSize,u=Array.isArray(d)?d[0]:d;c=u.inlineSize,i=u.blockSize}else c=e.offsetWidth,i=e.offsetHeight;a({width:c,height:i})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}function He(e,t){return l.useReducer((a,o)=>t[a][o]??a,e)}var ke=e=>{const{present:t,children:a}=e,o=Je(t),s=typeof a=="function"?a({present:o.isPresent}):l.Children.only(a),n=W(o.ref,Ge(s));return typeof a=="function"||o.isPresent?l.cloneElement(s,{ref:n}):null};ke.displayName="Presence";function Je(e){const[t,a]=l.useState(),o=l.useRef(null),s=l.useRef(e),n=l.useRef("none"),c=e?"mounted":"unmounted",[i,d]=He(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const u=A(o.current);n.current=i==="mounted"?u:"none"},[i]),L(()=>{const u=o.current,p=s.current;if(p!==e){const b=n.current,y=A(u);e?d("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(p&&b!==y?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),L(()=>{if(t){let u;const p=t.ownerDocument.defaultView??window,m=y=>{const N=A(o.current).includes(y.animationName);if(y.target===t&&N&&(d("ANIMATION_END"),!s.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",u=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},b=y=>{y.target===t&&(n.current=A(o.current))};return t.addEventListener("animationstart",b),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{p.clearTimeout(u),t.removeEventListener("animationstart",b),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:l.useCallback(u=>{o.current=u?getComputedStyle(u):null,a(u)},[])}}function A(e){return(e==null?void 0:e.animationName)||"none"}function Ge(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}function Ke(e){const t=Xe(e),a=l.forwardRef((o,s)=>{const{children:n,...c}=o,i=l.Children.toArray(n),d=i.find(Qe);if(d){const u=d.props.children,p=i.map(m=>m===d?l.Children.count(u)>1?l.Children.only(null):l.isValidElement(u)?u.props.children:null:m);return r.jsx(t,{...c,ref:s,children:l.isValidElement(u)?l.cloneElement(u,void 0,p):null})}return r.jsx(t,{...c,ref:s,children:n})});return a.displayName=`${e}.Slot`,a}function Xe(e){const t=l.forwardRef((a,o)=>{const{children:s,...n}=a;if(l.isValidElement(s)){const c=et(s),i=Ye(n,s.props);return s.type!==l.Fragment&&(i.ref=o?Ce(o,c):c),l.cloneElement(s,i)}return l.Children.count(s)>1?l.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Ze=Symbol("radix.slottable");function Qe(e){return l.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ze}function Ye(e,t){const a={...t};for(const o in t){const s=e[o],n=t[o];/^on[A-Z]/.test(o)?s&&n?a[o]=(...i)=>{const d=n(...i);return s(...i),d}:s&&(a[o]=s):o==="style"?a[o]={...s,...n}:o==="className"&&(a[o]=[s,n].filter(Boolean).join(" "))}return{...e,...a}}function et(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var tt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$=tt.reduce((e,t)=>{const a=Ke(`Primitive.${t}`),o=l.forwardRef((s,n)=>{const{asChild:c,...i}=s,d=c?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),r.jsx(d,{...i,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),V="Checkbox",[rt,ut]=Be(V),[at,F]=rt(V);function st(e){const{__scopeCheckbox:t,checked:a,children:o,defaultChecked:s,disabled:n,form:c,name:i,onCheckedChange:d,required:u,value:p="on",internal_do_not_use_render:m}=e,[b,y]=ze({prop:a,defaultProp:s??!1,onChange:d,caller:V}),[v,N]=l.useState(null),[k,g]=l.useState(null),C=l.useRef(!1),D=v?!!c||!!v.closest("form"):!0,f={checked:b,disabled:n,setChecked:y,control:v,setControl:N,name:i,form:c,value:p,hasConsumerStoppedPropagationRef:C,required:u,defaultChecked:R(s)?!1:s,isFormControl:D,bubbleInput:k,setBubbleInput:g};return r.jsx(at,{scope:t,...f,children:nt(m)?m(f):o})}var we="CheckboxTrigger",Se=l.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:a,...o},s)=>{const{control:n,value:c,disabled:i,checked:d,required:u,setControl:p,setChecked:m,hasConsumerStoppedPropagationRef:b,isFormControl:y,bubbleInput:v}=F(we,e),N=W(s,p),k=l.useRef(d);return l.useEffect(()=>{const g=n==null?void 0:n.form;if(g){const C=()=>m(k.current);return g.addEventListener("reset",C),()=>g.removeEventListener("reset",C)}},[n,m]),r.jsx($.button,{type:"button",role:"checkbox","aria-checked":R(d)?"mixed":d,"aria-required":u,"data-state":_e(d),"data-disabled":i?"":void 0,disabled:i,value:c,...o,ref:N,onKeyDown:ee(t,g=>{g.key==="Enter"&&g.preventDefault()}),onClick:ee(a,g=>{m(C=>R(C)?!0:!C),v&&y&&(b.current=g.isPropagationStopped(),b.current||g.stopPropagation())})})});Se.displayName=we;var H=l.forwardRef((e,t)=>{const{__scopeCheckbox:a,name:o,checked:s,defaultChecked:n,required:c,disabled:i,value:d,onCheckedChange:u,form:p,...m}=e;return r.jsx(st,{__scopeCheckbox:a,checked:s,defaultChecked:n,disabled:i,required:c,onCheckedChange:u,name:o,form:p,value:d,internal_do_not_use_render:({isFormControl:b})=>r.jsxs(r.Fragment,{children:[r.jsx(Se,{...m,ref:t,__scopeCheckbox:a}),b&&r.jsx(Ee,{__scopeCheckbox:a})]})})});H.displayName=V;var je="CheckboxIndicator",Re=l.forwardRef((e,t)=>{const{__scopeCheckbox:a,forceMount:o,...s}=e,n=F(je,a);return r.jsx(ke,{present:o||R(n.checked)||n.checked===!0,children:r.jsx($.span,{"data-state":_e(n.checked),"data-disabled":n.disabled?"":void 0,...s,ref:t,style:{pointerEvents:"none",...e.style}})})});Re.displayName=je;var De="CheckboxBubbleInput",Ee=l.forwardRef(({__scopeCheckbox:e,...t},a)=>{const{control:o,hasConsumerStoppedPropagationRef:s,checked:n,defaultChecked:c,required:i,disabled:d,name:u,value:p,form:m,bubbleInput:b,setBubbleInput:y}=F(De,e),v=W(a,y),N=$e(n),k=Fe(o);l.useEffect(()=>{const C=b;if(!C)return;const D=window.HTMLInputElement.prototype,x=Object.getOwnPropertyDescriptor(D,"checked").set,h=!s.current;if(N!==n&&x){const j=new Event("click",{bubbles:h});C.indeterminate=R(n),x.call(C,R(n)?!1:n),C.dispatchEvent(j)}},[b,N,n,s]);const g=l.useRef(R(n)?!1:n);return r.jsx($.input,{type:"checkbox","aria-hidden":!0,defaultChecked:c??g.current,required:i,disabled:d,name:u,value:p,form:m,...t,tabIndex:-1,ref:v,style:{...t.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});Ee.displayName=De;function nt(e){return typeof e=="function"}function R(e){return e==="indeterminate"}function _e(e){return R(e)?"indeterminate":e?"checked":"unchecked"}const E=l.forwardRef(({className:e,...t},a)=>r.jsx(H,{ref:a,className:w("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:r.jsx(Re,{className:w("flex items-center justify-center text-current"),children:r.jsx(Oe,{className:"h-4 w-4"})})}));E.displayName=H.displayName;try{E.displayName="Checkbox",E.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const S=({data:e,columns:t,loading:a=!1,selectable:o=!1,multiSelect:s=!0,onRowSelect:n,className:c,emptyMessage:i="No data available",stickyHeader:d=!1})=>{const[u,p]=l.useState(new Set),[m,b]=l.useState({column:null,direction:null}),y=l.useMemo(()=>!m.column||!m.direction?e:[...e].sort((f,x)=>{const h=f[m.column],j=x[m.column];return h<j?m.direction==="asc"?-1:1:h>j?m.direction==="asc"?1:-1:0}),[e,m]),v=f=>{const x=t.find(h=>h.key===f);x!=null&&x.sortable&&b(h=>{if(h.column===f){if(h.direction==="asc")return{column:f,direction:"desc"};if(h.direction==="desc")return{column:null,direction:null}}return{column:f,direction:"asc"}})},N=(f,x)=>{const h=new Set(u);if(x?(s||h.clear(),h.add(f)):h.delete(f),p(h),n){const j=Array.from(h).map(Ae=>y[Ae]);n(j)}},k=f=>{if(f){const x=new Set(y.map((h,j)=>j));p(x),n&&n(y)}else p(new Set),n&&n([])},g=u.size===y.length&&y.length>0,C=u.size>0&&u.size<y.length,D=f=>{const x=t.find(h=>h.key===f);if(!(x!=null&&x.sortable))return null;if(m.column===f){if(m.direction==="asc")return r.jsx(Q,{className:"h-4 w-4"});if(m.direction==="desc")return r.jsx(Z,{className:"h-4 w-4"})}return r.jsxs("div",{className:"flex flex-col opacity-30",children:[r.jsx(Q,{className:"h-3 w-3 -mb-1"}),r.jsx(Z,{className:"h-3 w-3"})]})};return a?r.jsx("div",{className:w("border rounded-lg",c),children:r.jsxs("div",{className:"p-8 text-center",children:[r.jsx(Te,{className:"h-8 w-8 animate-spin mx-auto mb-4 text-muted-foreground"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading data..."})]})}):r.jsx("div",{className:w("border rounded-lg overflow-hidden",c),children:r.jsx("div",{className:w("overflow-auto",d&&"max-h-96"),children:r.jsxs("table",{className:"w-full",children:[r.jsx("thead",{className:w("border-b bg-muted/50",d&&"sticky top-0 z-10"),children:r.jsxs("tr",{children:[o&&r.jsx("th",{className:"w-12 p-4",children:s&&r.jsx(E,{checked:g,onCheckedChange:k,"aria-label":"Select all rows",className:C?"data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground":""})}),t.map(f=>r.jsx("th",{className:w("text-left p-4 font-medium text-muted-foreground",f.sortable&&"cursor-pointer hover:text-foreground transition-colors select-none"),style:{width:f.width},onClick:()=>v(f.key),children:r.jsxs("div",{className:"flex items-center gap-2",children:[f.header,D(f.key)]})},String(f.key)))]})}),r.jsx("tbody",{children:y.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:t.length+(o?1:0),className:"p-8 text-center text-muted-foreground",children:i})}):y.map((f,x)=>r.jsxs("tr",{className:w("border-b hover:bg-muted/50 transition-colors",u.has(x)&&"bg-muted/30"),children:[o&&r.jsx("td",{className:"p-4",children:r.jsx(E,{checked:u.has(x),onCheckedChange:h=>N(x,h),"aria-label":`Select row ${x+1}`})}),t.map(h=>r.jsx("td",{className:"p-4 text-sm",style:{width:h.width},children:h.render?h.render(f[h.key],f,x):f[h.key]},String(h.key)))]},x))})]})})})};try{S.displayName="DataTable",S.__docgenInfo={description:"",displayName:"DataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column<T>[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},multiSelect:{defaultValue:{value:"true"},description:"",name:"multiSelect",required:!1,type:{name:"boolean"}},onRowSelect:{defaultValue:null,description:"",name:"onRowSelect",required:!1,type:{name:"(selectedRows: T[]) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"No data available"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},stickyHeader:{defaultValue:{value:"false"},description:"",name:"stickyHeader",required:!1,type:{name:"boolean"}}}}}catch{}const ot=Ie("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function _({className:e,variant:t,...a}){return r.jsx("div",{className:w(ot({variant:t}),e),...a})}try{_.displayName="Badge",_.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"destructive"'},{value:'"outline"'}]}}}}}catch{}const z=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",joinDate:"2024-02-01"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"inactive",joinDate:"2024-01-30"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"pending",joinDate:"2024-03-10"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"active",joinDate:"2024-02-15"}],mt={title:"Components/DataTable",component:S,parameters:{layout:"centered",docs:{description:{component:`
## DataTable Component

A powerful, accessible data table component with sorting, selection, and customizable rendering capabilities.

### Key Features
- **Data Display**: Tabular data presentation with customizable columns
- **Sorting**: Click column headers to sort data ascending/descending
- **Row Selection**: Single or multiple row selection with checkboxes
- **Loading States**: Built-in loading spinner and empty state handling
- **Custom Rendering**: Flexible column rendering with custom components
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Responsive**: Adapts to different screen sizes with horizontal scrolling

### Use Cases
- User management tables
- Product catalogs
- Financial data display
- Analytics dashboards
- Admin panels
- Data-heavy applications
        `}}},argTypes:{loading:{control:{type:"boolean"},description:"Shows loading spinner and message"},selectable:{control:{type:"boolean"},description:"Enables row selection with checkboxes"},multiSelect:{control:{type:"boolean"},description:"Allows multiple row selection"},stickyHeader:{control:{type:"boolean"},description:"Makes header stick to top during scroll"}},tags:["autodocs"]},P={render:()=>{const e=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",sortable:!0},{key:"joinDate",header:"Join Date",sortable:!0}];return r.jsx("div",{className:"w-full max-w-4xl",children:r.jsx(S,{data:z,columns:e})})}},T={render:()=>{const[e,t]=l.useState([]),a=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",sortable:!0}];return r.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"User Management"}),e.length>0&&r.jsxs(_,{variant:"outline",className:"bg-blue-50 text-blue-700 border-blue-200",children:[e.length," user(s) selected"]})]}),r.jsx(S,{data:z,columns:a,selectable:!0,onRowSelect:t})]})}},I={render:()=>{const e=[{key:"name",header:"Name",sortable:!0},{key:"role",header:"Role",sortable:!0,render:t=>r.jsx(_,{variant:t==="Admin"?"default":"secondary",children:t})},{key:"status",header:"Status",sortable:!0,render:t=>r.jsx(_,{variant:t==="active"?"default":t==="inactive"?"destructive":"secondary",children:t})},{key:"joinDate",header:"Join Date",sortable:!0,render:t=>new Date(t).toLocaleDateString()}];return r.jsx("div",{className:"w-full max-w-4xl",children:r.jsx(S,{data:z,columns:e})})}},U={render:()=>{const e=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0}];return r.jsx("div",{className:"w-full max-w-4xl",children:r.jsx(S,{data:[],columns:e,loading:!0})})}},M={render:()=>{const e=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0}];return r.jsx("div",{className:"w-full max-w-4xl",children:r.jsx(S,{data:[],columns:e,emptyMessage:"No users found. Try adjusting your search criteria."})})}},O={render:()=>r.jsx("div",{className:"w-full max-w-4xl space-y-6",children:r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Best Practices & Guidelines"}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[r.jsxs(J,{children:[r.jsx(G,{children:r.jsxs(K,{className:"flex items-center gap-2 text-green-600",children:[r.jsx(Ue,{className:"h-4 w-4"}),"Do's"]})}),r.jsxs(X,{className:"text-sm space-y-2",children:[r.jsx("p",{children:"• Use descriptive column headers"}),r.jsx("p",{children:"• Implement proper sorting for relevant columns"}),r.jsx("p",{children:"• Provide loading and empty states"}),r.jsx("p",{children:"• Use appropriate data types and formatting"}),r.jsx("p",{children:"• Ensure responsive design for mobile"})]})]}),r.jsxs(J,{children:[r.jsx(G,{children:r.jsxs(K,{className:"flex items-center gap-2 text-red-600",children:[r.jsx(Me,{className:"h-4 w-4"}),"Don'ts"]})}),r.jsxs(X,{className:"text-sm space-y-2",children:[r.jsx("p",{children:"• Don't overload tables with too many columns"}),r.jsx("p",{children:"• Avoid complex nested data structures"}),r.jsx("p",{children:"• Don't use tables for layout purposes"}),r.jsx("p",{children:"• Avoid auto-sorting without user control"})]})]})]})]})})},B={render:e=>{const[t,a]=l.useState([]),o=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",sortable:!0}];return r.jsx("div",{className:"w-full max-w-4xl space-y-4",children:r.jsx(S,{...e,data:z,columns:o,onRowSelect:a})})},args:{selectable:!0,loading:!1,stickyHeader:!1,emptyMessage:"No data available"}};var te,re,ae;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const columns: Column<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      sortable: true
    }, {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true
    }];
    return <div className="w-full max-w-4xl">\r
        <DataTable data={sampleUsers} columns={columns} />\r
      </div>;
  }
}`,...(ae=(re=P.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    const columns: Column<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      sortable: true
    }];
    return <div className="w-full max-w-4xl space-y-4">\r
        <div className="flex items-center justify-between">\r
          <h3 className="text-lg font-semibold">User Management</h3>\r
          {selectedUsers.length > 0 && <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">\r
              {selectedUsers.length} user(s) selected\r
            </Badge>}\r
        </div>\r
        \r
        <DataTable data={sampleUsers} columns={columns} selectable onRowSelect={setSelectedUsers} />\r
      </div>;
  }
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ie,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const columns: Column<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      render: value => <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>\r
          {value}\r
        </Badge>
    }, {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: value => <Badge variant={value === 'active' ? 'default' : value === 'inactive' ? 'destructive' : 'secondary'}>\r
          {value}\r
        </Badge>
    }, {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true,
      render: value => new Date(value).toLocaleDateString()
    }];
    return <div className="w-full max-w-4xl">\r
        <DataTable data={sampleUsers} columns={columns} />\r
      </div>;
  }
}`,...(ce=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const columns: Column<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }];
    return <div className="w-full max-w-4xl">\r
        <DataTable data={[]} columns={columns} loading />\r
      </div>;
  }
}`,...(me=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,fe,he;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const columns: Column<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }];
    return <div className="w-full max-w-4xl">\r
        <DataTable data={[]} columns={columns} emptyMessage="No users found. Try adjusting your search criteria." />\r
      </div>;
  }
}`,...(he=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,ye,xe;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl space-y-6">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Best Practices & Guidelines</h3>\r
        \r
        <div className="grid md:grid-cols-2 gap-6">\r
          <Card>\r
            <CardHeader>\r
              <CardTitle className="flex items-center gap-2 text-green-600">\r
                <CheckCircle className="h-4 w-4" />\r
                Do's\r
              </CardTitle>\r
            </CardHeader>\r
            <CardContent className="text-sm space-y-2">\r
              <p>• Use descriptive column headers</p>\r
              <p>• Implement proper sorting for relevant columns</p>\r
              <p>• Provide loading and empty states</p>\r
              <p>• Use appropriate data types and formatting</p>\r
              <p>• Ensure responsive design for mobile</p>\r
            </CardContent>\r
          </Card>\r
\r
          <Card>\r
            <CardHeader>\r
              <CardTitle className="flex items-center gap-2 text-red-600">\r
                <AlertCircle className="h-4 w-4" />\r
                Don'ts\r
              </CardTitle>\r
            </CardHeader>\r
            <CardContent className="text-sm space-y-2">\r
              <p>• Don't overload tables with too many columns</p>\r
              <p>• Avoid complex nested data structures</p>\r
              <p>• Don't use tables for layout purposes</p>\r
              <p>• Avoid auto-sorting without user control</p>\r
            </CardContent>\r
          </Card>\r
        </div>\r
      </div>\r
    </div>
}`,...(xe=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ge,ve,Ne;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => {
    const [selectedData, setSelectedData] = useState<User[]>([]);
    const columns: Column<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      sortable: true
    }];
    return <div className="w-full max-w-4xl space-y-4">\r
        <DataTable {...args} data={sampleUsers} columns={columns} onRowSelect={setSelectedData} />\r
      </div>;
  },
  args: {
    selectable: true,
    loading: false,
    stickyHeader: false,
    emptyMessage: 'No data available'
  }
}`,...(Ne=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};const pt=["Default","WithSelection","CustomRendering","LoadingState","EmptyState","BestPractices","Playground"];export{O as BestPractices,I as CustomRendering,P as Default,M as EmptyState,U as LoadingState,B as Playground,T as WithSelection,pt as __namedExportsOrder,mt as default};
