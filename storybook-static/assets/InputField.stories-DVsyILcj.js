import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{r as t}from"./index-GiUgBvb1.js";import{c as j,a as u,L as fe,b as ce,C as F,d as k,e as V,f as pe,g as D,h as A,i as ue}from"./card-C732Tbox.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=j("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=j("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=j("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=j("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ce=ce("flex w-full rounded-md border transition-colors duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{filled:"bg-muted border-transparent hover:bg-muted/80 focus:bg-background focus:border-border",outlined:"bg-background border-border hover:border-muted-foreground focus:border-primary",ghost:"border-transparent bg-transparent hover:bg-muted/50 focus:bg-muted/30 focus:border-border"},size:{sm:"h-8 px-3 py-1 text-sm",md:"h-10 px-3 py-2",lg:"h-12 px-4 py-3 text-lg"},state:{default:"",invalid:"border-destructive focus:border-destructive focus:ring-destructive",valid:"border-success focus:border-success focus:ring-success"}},defaultVariants:{variant:"outlined",size:"md",state:"default"}}),Se=ce("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",{variants:{state:{default:"text-foreground",invalid:"text-destructive",valid:"text-success"}},defaultVariants:{state:"default"}}),a=t.forwardRef(({className:l,variant:s,size:n,state:o,label:i,helperText:d,errorMessage:r,loading:c,clearable:N,showPasswordToggle:p,onClear:E,type:P="text",value:C,disabled:S,...T},me)=>{const[I,be]=t.useState(!1),[Te,z]=t.useState(!1),xe=p&&I?"text":P,M=r?"invalid":o,ge=C!==void 0&&C!=="",ve=()=>{E&&E()},ye=()=>{be(!I)};return e.jsxs("div",{className:"w-full space-y-2",children:[i&&e.jsxs("label",{className:u(Se({state:M})),htmlFor:T.id,children:[i,T.required&&e.jsx("span",{className:"text-destructive ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:xe,className:u(Ce({variant:s,size:n,state:M}),(c||N||p)&&"pr-10",N&&p&&"pr-16",l),ref:me,value:C,disabled:S||c,onFocus:()=>z(!0),onBlur:()=>z(!1),...T}),c&&e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:e.jsx(fe,{className:"h-4 w-4 animate-spin text-muted-foreground"})}),!c&&N&&ge&&e.jsx("button",{type:"button",onClick:ve,className:u("absolute top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors",p?"right-8":"right-2"),disabled:S,tabIndex:-1,children:e.jsx(Ne,{className:"h-3 w-3"})}),!c&&p&&P==="password"&&e.jsx("button",{type:"button",onClick:ye,className:"absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors",disabled:S,tabIndex:-1,children:I?e.jsx(we,{className:"h-4 w-4"}):e.jsx(je,{className:"h-4 w-4"})})]}),(d||r)&&e.jsx("p",{className:u("text-xs",r?"text-destructive":"text-muted-foreground"),children:r||d})]})});a.displayName="InputField";try{a.displayName="InputField",a.__docgenInfo={description:"",displayName:"InputField",props:{}}}catch{}const Ve={title:"Components/InputField",component:a,parameters:{layout:"centered",docs:{description:{component:`
## InputField Component

A flexible, accessible input component with validation states, multiple variants, and interactive features.

### Key Features
- **Multiple Variants**: filled, outlined, ghost
- **Size Options**: small, medium, large
- **Validation States**: default, valid, invalid
- **Interactive Elements**: clear button, password toggle, loading state
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Theme Support**: Light and dark theme compatible

### Use Cases
- Form inputs with validation
- Search fields with clear functionality
- Password fields with visibility toggle
- Loading states for async operations
- Different visual styles for various contexts
        `}}},argTypes:{variant:{control:{type:"select"},options:["filled","outlined","ghost"],description:"Visual style variant of the input",table:{type:{summary:"'filled' | 'outlined' | 'ghost'"},defaultValue:{summary:"outlined"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input field",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}}},state:{control:{type:"select"},options:["default","valid","invalid"],description:"Visual state of the input",table:{type:{summary:"'default' | 'valid' | 'invalid'"},defaultValue:{summary:"default"}}},disabled:{control:{type:"boolean"},description:"Whether the input is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:{type:"boolean"},description:"Shows loading spinner",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},clearable:{control:{type:"boolean"},description:"Shows clear button when input has value",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},showPasswordToggle:{control:{type:"boolean"},description:"Shows password visibility toggle",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},required:{control:{type:"boolean"},description:"Marks field as required",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},tags:["autodocs"]},h={args:{label:"Email Address",placeholder:"Enter your email",helperText:"We'll never share your email with anyone else."}},m={render:()=>e.jsx("div",{className:"space-y-6 w-96",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Input Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Filled Variant",placeholder:"This is a filled input",variant:"filled",helperText:"Filled variant with background color"}),e.jsx(a,{label:"Outlined Variant",placeholder:"This is an outlined input",variant:"outlined",helperText:"Outlined variant with border"}),e.jsx(a,{label:"Ghost Variant",placeholder:"This is a ghost input",variant:"ghost",helperText:"Ghost variant with minimal styling"})]})]})}),parameters:{docs:{description:{story:"Demonstrates the three visual variants: filled, outlined, and ghost. Each variant has distinct styling while maintaining consistent behavior."}}}},b={render:()=>e.jsx("div",{className:"space-y-6 w-96",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Input Sizes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Small Size",placeholder:"Small input",size:"sm",helperText:"Compact size for dense layouts"}),e.jsx(a,{label:"Medium Size",placeholder:"Medium input",size:"md",helperText:"Default size for most use cases"}),e.jsx(a,{label:"Large Size",placeholder:"Large input",size:"lg",helperText:"Prominent size for important fields"})]})]})}),parameters:{docs:{description:{story:"Shows the three available sizes: small (sm), medium (md), and large (lg). Each size maintains proper proportions and touch targets."}}}},x={render:()=>e.jsx("div",{className:"space-y-6 w-96",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Input States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Default State",placeholder:"Normal input field",helperText:"Default state with no special styling"}),e.jsx(a,{label:"Valid State",placeholder:"Valid input",state:"valid",helperText:"Green styling for successful validation"}),e.jsx(a,{label:"Invalid State",placeholder:"Invalid input",errorMessage:"This field is required"}),e.jsx(a,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,helperText:"Cannot be interacted with"}),e.jsx(a,{label:"Loading State",placeholder:"Loading...",loading:!0,helperText:"Shows spinner during async operations"})]})]})}),parameters:{docs:{description:{story:"Demonstrates various input states including default, valid, invalid, disabled, and loading. Each state provides clear visual feedback."}}}},g={render:()=>{const[l,s]=t.useState(""),[n,o]=t.useState("");return e.jsx("div",{className:"space-y-6 w-96",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Features"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Clearable Input",placeholder:"Type something to see clear button",value:l,onChange:i=>s(i.target.value),clearable:!0,onClear:()=>s(""),helperText:"Click the X button to clear the input"}),e.jsx(a,{label:"Password with Toggle",type:"password",placeholder:"Enter your password",value:n,onChange:i=>o(i.target.value),showPasswordToggle:!0,helperText:"Click the eye icon to toggle password visibility"}),e.jsx(a,{label:"Required Field",placeholder:"This field is required",required:!0,helperText:"Required fields are marked with a red asterisk (*)"})]})]})})},parameters:{docs:{description:{story:"Shows interactive features like clear button, password visibility toggle, and required field indicators. These enhance user experience and form usability."}}}},v={render:()=>{const[l,s]=t.useState(""),[n,o]=t.useState(""),[i,d]=t.useState("");return e.jsxs("div",{className:"space-y-8 w-96",children:[e.jsxs(F,{children:[e.jsxs(k,{children:[e.jsxs(V,{className:"flex items-center gap-2",children:[e.jsx(pe,{className:"h-5 w-5 text-green-500"}),"Login Form"]}),e.jsx(D,{children:"Example of a typical login form with validation states"})]}),e.jsxs(A,{className:"space-y-4",children:[e.jsx(a,{label:"Email Address",type:"email",placeholder:"your@email.com",value:l,onChange:r=>s(r.target.value),required:!0,helperText:"We'll use this for account recovery"}),e.jsx(a,{label:"Password",type:"password",placeholder:"Enter your password",value:n,onChange:r=>o(r.target.value),showPasswordToggle:!0,required:!0,helperText:"Must be at least 8 characters"})]})]}),e.jsxs(F,{children:[e.jsxs(k,{children:[e.jsxs(V,{className:"flex items-center gap-2",children:[e.jsx(he,{className:"h-5 w-5 text-blue-500"}),"Search Interface"]}),e.jsx(D,{children:"Search field with clear functionality and loading state"})]}),e.jsx(A,{children:e.jsx(a,{label:"Search",placeholder:"Search for anything...",value:i,onChange:r=>d(r.target.value),clearable:!0,onClear:()=>d(""),helperText:"Type to search, click X to clear"})})]}),e.jsxs(F,{children:[e.jsxs(k,{children:[e.jsxs(V,{className:"flex items-center gap-2",children:[e.jsx(ue,{className:"h-5 w-5 text-orange-500"}),"Error Handling"]}),e.jsx(D,{children:"Demonstrates error states and validation feedback"})]}),e.jsxs(A,{className:"space-y-4",children:[e.jsx(a,{label:"Username",placeholder:"Choose a username",errorMessage:"Username must be at least 3 characters long",helperText:"This will be your public display name"}),e.jsx(a,{label:"Phone Number",placeholder:"+1 (555) 123-4567",errorMessage:"Please enter a valid phone number"})]})]})]})},parameters:{docs:{description:{story:"Real-world examples showing how InputField can be used in common scenarios like login forms, search interfaces, and error handling."}}}},y={render:()=>e.jsx("div",{className:"space-y-6 w-96",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Accessibility Features"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Screen Reader Friendly",placeholder:"This input is accessible",helperText:"Proper ARIA labels and descriptions","aria-describedby":"accessibility-help"}),e.jsx("div",{id:"accessibility-help",className:"text-xs text-muted-foreground",children:"This helper text is properly associated with the input for screen readers."}),e.jsx(a,{label:"Keyboard Navigation",placeholder:"Try tabbing to this input",helperText:"Supports keyboard navigation and focus management"}),e.jsx(a,{label:"High Contrast",placeholder:"Visible in all color schemes",helperText:"Maintains contrast in light and dark themes"})]})]})}),parameters:{docs:{description:{story:"Demonstrates accessibility features including proper ARIA labels, keyboard navigation support, and high contrast visibility."}}}},f={render:()=>e.jsx("div",{className:"space-y-6 w-96",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Best Practices & Guidelines"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-green-600 mb-2 flex items-center gap-2",children:[e.jsx(pe,{className:"h-4 w-4"}),"Do's"]}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• Always provide descriptive labels"}),e.jsx("li",{children:"• Use helper text for additional context"}),e.jsx("li",{children:"• Implement proper error handling"}),e.jsx("li",{children:"• Ensure keyboard navigation works"}),e.jsx("li",{children:"• Use appropriate input types"}),e.jsx("li",{children:"• Provide clear validation feedback"})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-red-600 mb-2 flex items-center gap-2",children:[e.jsx(ue,{className:"h-4 w-4"}),"Don'ts"]}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• Don't use placeholder as label replacement"}),e.jsx("li",{children:"• Avoid generic error messages"}),e.jsx("li",{children:"• Don't disable without explanation"}),e.jsx("li",{children:"• Avoid excessive validation on every keystroke"}),e.jsx("li",{children:"• Don't use unclear helper text"})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-blue-600 mb-2 flex items-center gap-2",children:[e.jsx(he,{className:"h-4 w-4"}),"Accessibility Notes"]}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• Proper ARIA roles and labels"}),e.jsx("li",{children:"• Keyboard navigation support"}),e.jsx("li",{children:"• Screen reader compatibility"}),e.jsx("li",{children:"• High contrast support"}),e.jsx("li",{children:"• Focus management"})]})]})]})]})}),parameters:{docs:{description:{story:"Guidelines and best practices for using InputField effectively, including accessibility considerations and common pitfalls to avoid."}}}},w={render:l=>{const[s,n]=t.useState("");return e.jsxs("div",{className:"w-96",children:[e.jsx(a,{...l,value:s,onChange:o=>n(o.target.value)}),e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-md",children:e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsx("strong",{children:"Current value:"})," ",s||"(empty)"]})})]})},args:{label:"Playground Input",placeholder:"Try different props in the controls panel",helperText:"Use the controls below to experiment with different configurations"},parameters:{docs:{description:{story:"Interactive playground where you can experiment with different props and see how they affect the InputField component."}}}};var q,R,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: 'We\\'ll never share your email with anyone else.'
  }
}`,...(L=(R=h.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var H,U,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Input Variants</h3>\r
        <div className="space-y-4">\r
          <InputField label="Filled Variant" placeholder="This is a filled input" variant="filled" helperText="Filled variant with background color" />\r
          <InputField label="Outlined Variant" placeholder="This is an outlined input" variant="outlined" helperText="Outlined variant with border" />\r
          <InputField label="Ghost Variant" placeholder="This is a ghost input" variant="ghost" helperText="Ghost variant with minimal styling" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three visual variants: filled, outlined, and ghost. Each variant has distinct styling while maintaining consistent behavior.'
      }
    }
  }
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var _,O,W;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Input Sizes</h3>\r
        <div className="space-y-4">\r
          <InputField label="Small Size" placeholder="Small input" size="sm" helperText="Compact size for dense layouts" />\r
          <InputField label="Medium Size" placeholder="Medium input" size="md" helperText="Default size for most use cases" />\r
          <InputField label="Large Size" placeholder="Large input" size="lg" helperText="Prominent size for important fields" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Shows the three available sizes: small (sm), medium (md), and large (lg). Each size maintains proper proportions and touch targets.'
      }
    }
  }
}`,...(W=(O=b.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var B,X,K;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Input States</h3>\r
        <div className="space-y-4">\r
          <InputField label="Default State" placeholder="Normal input field" helperText="Default state with no special styling" />\r
          <InputField label="Valid State" placeholder="Valid input" state="valid" helperText="Green styling for successful validation" />\r
          <InputField label="Invalid State" placeholder="Invalid input" errorMessage="This field is required" />\r
          <InputField label="Disabled State" placeholder="Disabled input" disabled helperText="Cannot be interacted with" />\r
          <InputField label="Loading State" placeholder="Loading..." loading helperText="Shows spinner during async operations" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates various input states including default, valid, invalid, disabled, and loading. Each state provides clear visual feedback.'
      }
    }
  }
}`,...(K=(X=x.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var J,Q,Y;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    return <div className="space-y-6 w-96">\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">Interactive Features</h3>\r
          <div className="space-y-4">\r
            <InputField label="Clearable Input" placeholder="Type something to see clear button" value={value} onChange={e => setValue(e.target.value)} clearable onClear={() => setValue('')} helperText="Click the X button to clear the input" />\r
            <InputField label="Password with Toggle" type="password" placeholder="Enter your password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} showPasswordToggle helperText="Click the eye icon to toggle password visibility" />\r
            <InputField label="Required Field" placeholder="This field is required" required helperText="Required fields are marked with a red asterisk (*)" />\r
          </div>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows interactive features like clear button, password visibility toggle, and required field indicators. These enhance user experience and form usability.'
      }
    }
  }
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState('');
    return <div className="space-y-8 w-96">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <CheckCircle className="h-5 w-5 text-green-500" />\r
              Login Form\r
            </CardTitle>\r
            <CardDescription>\r
              Example of a typical login form with validation states\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-4">\r
            <InputField label="Email Address" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required helperText="We'll use this for account recovery" />\r
            <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} showPasswordToggle required helperText="Must be at least 8 characters" />\r
          </CardContent>\r
        </Card>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Info className="h-5 w-5 text-blue-500" />\r
              Search Interface\r
            </CardTitle>\r
            <CardDescription>\r
              Search field with clear functionality and loading state\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <InputField label="Search" placeholder="Search for anything..." value={search} onChange={e => setSearch(e.target.value)} clearable onClear={() => setSearch('')} helperText="Type to search, click X to clear" />\r
          </CardContent>\r
        </Card>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <AlertCircle className="h-5 w-5 text-orange-500" />\r
              Error Handling\r
            </CardTitle>\r
            <CardDescription>\r
              Demonstrates error states and validation feedback\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-4">\r
            <InputField label="Username" placeholder="Choose a username" errorMessage="Username must be at least 3 characters long" helperText="This will be your public display name" />\r
            <InputField label="Phone Number" placeholder="+1 (555) 123-4567" errorMessage="Please enter a valid phone number" />\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing how InputField can be used in common scenarios like login forms, search interfaces, and error handling.'
      }
    }
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Accessibility Features</h3>\r
        <div className="space-y-4">\r
          <InputField label="Screen Reader Friendly" placeholder="This input is accessible" helperText="Proper ARIA labels and descriptions" aria-describedby="accessibility-help" />\r
          <div id="accessibility-help" className="text-xs text-muted-foreground">\r
            This helper text is properly associated with the input for screen readers.\r
          </div>\r
          \r
          <InputField label="Keyboard Navigation" placeholder="Try tabbing to this input" helperText="Supports keyboard navigation and focus management" />\r
          \r
          <InputField label="High Contrast" placeholder="Visible in all color schemes" helperText="Maintains contrast in light and dark themes" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including proper ARIA labels, keyboard navigation support, and high contrast visibility.'
      }
    }
  }
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,le,ie;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Best Practices & Guidelines</h3>\r
        \r
        <div className="space-y-6">\r
          <div>\r
            <h4 className="font-medium text-green-600 mb-2 flex items-center gap-2">\r
              <CheckCircle className="h-4 w-4" />\r
              Do's\r
            </h4>\r
            <ul className="text-sm space-y-1 text-muted-foreground">\r
              <li>• Always provide descriptive labels</li>\r
              <li>• Use helper text for additional context</li>\r
              <li>• Implement proper error handling</li>\r
              <li>• Ensure keyboard navigation works</li>\r
              <li>• Use appropriate input types</li>\r
              <li>• Provide clear validation feedback</li>\r
            </ul>\r
          </div>\r
\r
          <div>\r
            <h4 className="font-medium text-red-600 mb-2 flex items-center gap-2">\r
              <AlertCircle className="h-4 w-4" />\r
              Don'ts\r
            </h4>\r
            <ul className="text-sm space-y-1 text-muted-foreground">\r
              <li>• Don't use placeholder as label replacement</li>\r
              <li>• Avoid generic error messages</li>\r
              <li>• Don't disable without explanation</li>\r
              <li>• Avoid excessive validation on every keystroke</li>\r
              <li>• Don't use unclear helper text</li>\r
            </ul>\r
          </div>\r
\r
          <div>\r
            <h4 className="font-medium text-blue-600 mb-2 flex items-center gap-2">\r
              <Info className="h-4 w-4" />\r
              Accessibility Notes\r
            </h4>\r
            <ul className="text-sm space-y-1 text-muted-foreground">\r
              <li>• Proper ARIA roles and labels</li>\r
              <li>• Keyboard navigation support</li>\r
              <li>• Screen reader compatibility</li>\r
              <li>• High contrast support</li>\r
              <li>• Focus management</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Guidelines and best practices for using InputField effectively, including accessibility considerations and common pitfalls to avoid.'
      }
    }
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,oe,de;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="w-96">\r
        <InputField {...args} value={value} onChange={e => setValue(e.target.value)} />\r
        <div className="mt-4 p-3 bg-muted rounded-md">\r
          <p className="text-sm text-muted-foreground">\r
            <strong>Current value:</strong> {value || '(empty)'}\r
          </p>\r
        </div>\r
      </div>;
  },
  args: {
    label: 'Playground Input',
    placeholder: 'Try different props in the controls panel',
    helperText: 'Use the controls below to experiment with different configurations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground where you can experiment with different props and see how they affect the InputField component.'
      }
    }
  }
}`,...(de=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const De=["Default","Variants","Sizes","States","InteractiveFeatures","RealWorldExamples","Accessibility","BestPractices","Playground"];export{y as Accessibility,f as BestPractices,h as Default,g as InteractiveFeatures,w as Playground,v as RealWorldExamples,b as Sizes,x as States,m as Variants,De as __namedExportsOrder,Ve as default};
