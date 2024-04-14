import{j as R,a as L}from"./jsx-runtime-29545a09.js";import{R as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k(Object(n),!0).forEach(function(o){$(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function T(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function H(t){var e=T(t,"string");return typeof e=="symbol"?e:String(e)}function $(t,e,n){return e=H(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B(t,e){if(t==null)return{};var n={},o=Object.keys(t),r,c;for(c=0;c<o.length;c++)r=o[c],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function G(t,e){if(t==null)return{};var n=B(t,e),o,r;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)o=c[r],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}const U=["component"],q="heading",z="code_block",W="paragraph",Y="blockquote",J="ordered_list",Q="bullet_list",V="list_item",X="horizontal_rule",F="hard_break",Z="image",ee="emoji",te="bold",ne="italic",oe="strike",re="underline",se="code",le="link",ce="styled",ie="subscript",ae="superscript",ue="highlight",pe="textStyle",fe="anchor";function me(t,e={}){if(typeof t=="object"&&t.type==="doc"&&Array.isArray(t.content)){const n=e.blokResolvers,o=n===void 0?{}:n,r=e.defaultBlokResolver,c=r===void 0?function(){return null}:r,p=e.nodeResolvers,C=p===void 0?{}:p,_=e.markResolvers,S=_===void 0?{}:_,O=e.textResolver,A=O===void 0?function(s){return s}:O,D=v(v({},Ee),C),M=v(v({},ke),S);let w=0;const y=function(s){return l.isValidElement(s)?l.cloneElement(s,{key:w++}):s},E=function(s){const a=s?s.map(I).filter(function(f){return f!=null}):null;return Array.isArray(a)&&a.length===0?null:a},I=function(s){if(s.type==="blok")return s.attrs.body.map(function(h){let i=h.component,m=G(h,U);const d=o[i],K=d?d(m):c(i,m);return y(K)});{var a;let f;if(s.type==="text")f=A(s.text);else{const i=D[s.type];f=i?y(i(E(s.content),s.attrs)):null}return((a=s.marks)!==null&&a!==void 0?a:[]).reduceRight(function(i,m){const d=M[m.type];return d?y(d(i,m.attrs)):i},f)}};return E(t.content)}else if(typeof t=="string"){const n=e.defaultStringResolver,o=n===void 0?function(p){return p}:n,r=e.textResolver;return o((r===void 0?function(p){return p}:r)(t))}return null}const g=function(t){return function(e){return e!=null?l.createElement(t,null,e):null}},x=function(t){return function(){return l.createElement(t)}},de=function(t,e){return l.createElement(`h${e.level}`,null,t)},ge=function(t,e){return l.createElement("img",e,t)},ve=function(t,e){const n={className:e.class},o=l.createElement("code",n,t);return l.createElement("pre",null,o)},be=function(t,e){if(!e)return null;const n={"data-type":"emoji","data-name":e.name,emoji:e.emoji};if(e.emoji||!e.fallbackImage)return l.createElement("span",n,e.emoji);{const o={src:e.fallbackImage,draggable:"false",loading:"lazy",align:"absmiddle",alt:e.name},r=l.createElement("img",o);return l.createElement("span",n,r)}},u=function(t){return function(e){return l.createElement(t,null,e)}},Re=function(t,e){const n=e?{href:e.linktype==="email"?`mailto:${e.href}`:e.href,target:e.target}:{};return l.createElement("a",n,t)},ye=function(t,e){const n=e?{className:e.class}:{};return l.createElement("span",n,t)},he=function(t,e){const n=e?{style:{backgroundColor:e.color}}:{};return l.createElement("span",n,t)},_e=function(t,e){const n=e!=null&&e.color?{style:{color:e.color}}:{};return l.createElement("span",n,t)},Oe=function(t,e){const n=e?{id:e.id}:{};return l.createElement("span",n,t)},Ee={[q]:de,[z]:ve,[Z]:ge,[W]:g("p"),[Y]:g("blockquote"),[J]:g("ol"),[Q]:g("ul"),[V]:g("li"),[X]:x("hr"),[F]:x("br"),[ee]:be},ke={[le]:Re,[ce]:ye,[te]:u("b"),[ne]:u("i"),[oe]:u("s"),[re]:u("u"),[se]:u("code"),[ie]:u("sub"),[ae]:u("sup"),[ue]:he,[pe]:_e,[fe]:Oe};function xe({document:t}){return R("div",{children:me(t)})}function Ne({blok:t}){return L("div",{className:"flex flex-col gap-4 md:flex-row",children:[R(xe,{document:t.splitComponentText}),R("div",{className:`${t.imageOnLeft?"md:order-first":""}`,children:R("img",{src:t.splitComponentImage.filename,alt:t.splitComponentImage.alt||"",className:"w-full h-full object-contain rounded"})})]})}const je="68ce21d6-ceda-4c20-887f-8749a31b43c9",Pe="splitComponent",Ce=!1,Se="Make this type safe before proceeding.",Ae="That is the next big piece to this task",De={type:"doc",content:[{type:"paragraph",content:[{text:"Here is some Rich text Here is some Rich text Here is some Rich text Here is some Rich text",type:"text"}]}]},Me={id:691324,alt:"Lofi girl working on homework with the city lights at night in the background.",name:"",focus:"",title:"",source:"",filename:"https://a-us.storyblok.com/f/1019786/660x722/acdf57edb0/screenshot-2024-04-13-at-11-19-00-pm.png",copyright:"",fieldtype:"asset",meta_data:{alt:"Lofi girl working on homework with the city lights at night in the background.",title:"",source:"",copyright:""},is_private:!1,is_external_url:!1},we='<!--#storyblok#{"name": "splitComponent", "space": "1019786", "uid": "68ce21d6-ceda-4c20-887f-8749a31b43c9", "id": "5373870"}-->',Ie={_uid:je,component:Pe,imageOnLeft:Ce,leftContent:Se,rightContent:Ae,splitComponentText:De,splitComponentImage:Me,_editable:we},He={component:Ne,title:"SplitComponent",tags:["autodocs"]},b={args:{blok:Ie}};var N,j,P;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    blok: data
  }
}`,...(P=(j=b.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const $e=["Default"];export{b as Default,$e as __namedExportsOrder,He as default};