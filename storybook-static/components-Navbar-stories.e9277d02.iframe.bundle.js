"use strict";(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[8425],{"./ui/components/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Navbar_:()=>Navbar_,default:()=>Navbar_stories});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),vanilla=__webpack_require__("./node_modules/.pnpm/jotai@2.0.4_react@18.2.0/node_modules/jotai/esm/vanilla.mjs"),esm_react=__webpack_require__("./node_modules/.pnpm/jotai@2.0.4_react@18.2.0/node_modules/jotai/esm/react.mjs"),next_link=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),Button=__webpack_require__("./ui/components/Button.tsx"),__jsx=react.createElement,navbarStore=(0,vanilla.MT)(),activeValueAtom=(0,vanilla.cn)(null),Navbar=function Navbar(_ref){var value=_ref.value,children=_ref.children;return navbarStore.set(activeValueAtom,value),__jsx(esm_react.zt,{store:navbarStore},__jsx("nav",{className:"flex h-fit items-center space-x-1"},children))};Navbar.displayName="Navbar";var _Navbar_$parameters,_Navbar_$parameters2,_Navbar_$parameters2$,NavbarItem=function NavbarItem(_ref2){var value=_ref2.value,children=_ref2.children,isSelectedAtom=(0,react.useMemo)((function(){return(0,vanilla.cn)((function(get){return get(activeValueAtom)===value}))}),[value]),isSelected=(0,esm_react.Dv)(isSelectedAtom);return __jsx(Button.zx,{as:link_default(),variant:isSelected?"selected":"ghost",href:"".concat(value)},children)};NavbarItem.displayName="NavbarItem",NavbarItem.displayName="NavbarItem",Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},NavbarItem.__docgenInfo={description:"",methods:[],displayName:"NavbarItem",props:{value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{NavbarItem.displayName="NavbarItem",NavbarItem.__docgenInfo={description:"",displayName:"NavbarItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/Navbar.tsx#NavbarItem"]={docgenInfo:NavbarItem.__docgenInfo,name:"NavbarItem",path:"ui/components/Navbar.tsx#NavbarItem"})}catch(__react_docgen_typescript_loader_error){}var Navbar_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Navbar_stories={title:"Navbar"};var Navbar_={args:{value:"home"},render:function render(_ref){var value=_ref.value;return Navbar_stories_jsx(Navbar,{value},Navbar_stories_jsx(NavbarItem,{value:"home"},"主页"),Navbar_stories_jsx(NavbarItem,{value:"posts"},"文章"),Navbar_stories_jsx(NavbarItem,{value:"projects"},"项目"),Navbar_stories_jsx(NavbarItem,{value:"collections"},"收藏"))},argTypes:{value:{control:{type:"radio"},options:["home","posts","projects","collections"]}}};Navbar_.parameters=_objectSpread(_objectSpread({},Navbar_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Navbar_$parameters=Navbar_.parameters)||void 0===_Navbar_$parameters?void 0:_Navbar_$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    value: "home"\n  },\n  render: ({\n    value\n  }) => {\n    return <Navbar value={value}>\n        <NavbarItem value="home">主页</NavbarItem>\n        <NavbarItem value="posts">文章</NavbarItem>\n        <NavbarItem value="projects">项目</NavbarItem>\n        <NavbarItem value="collections">收藏</NavbarItem>\n      </Navbar>;\n  },\n  argTypes: {\n    value: {\n      control: {\n        type: "radio"\n      },\n      options: ["home", "posts", "projects", "collections"]\n    }\n  }\n}'},null===(_Navbar_$parameters2=Navbar_.parameters)||void 0===_Navbar_$parameters2||null===(_Navbar_$parameters2$=_Navbar_$parameters2.docs)||void 0===_Navbar_$parameters2$?void 0:_Navbar_$parameters2$.source)})})}}]);