(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[8461],{"./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/outline/StarIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function StarIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"}))}));module.exports=ForwardRef},"./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/solid/StarIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function StarIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./ui/primitive/Rating.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Rating_:()=>Rating_,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Rating_$parameters,_Rating_$parameters2,_Rating_$parameters2$,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.0.11-next.0/node_modules/@storybook/jest/dist/esm/index.js"),_ui_primitive_Rating__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/primitive/Rating.tsx"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.1/node_modules/@storybook/testing-library/dist/esm/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Rating",component:_ui_primitive_Rating__WEBPACK_IMPORTED_MODULE_2__.i};var Rating_={args:{score:6.6,maxScore:10,totalIconCount:5,variant:{color:"accent"}},play:function play(_ref){var canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2)}};Rating_.parameters=_objectSpread(_objectSpread({},Rating_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Rating_$parameters=Rating_.parameters)||void 0===_Rating_$parameters?void 0:_Rating_$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    score: 6.6,\n    maxScore: 10,\n    totalIconCount: 5,\n    variant: {\n      color: "accent"\n    }\n  },\n  play: ({\n    canvasElement\n  }: {\n    canvasElement: HTMLElement;\n  }) => {\n    const canvas = within(canvasElement);\n\n    // half-rating-icon is overlapped by fill-rating-icon and empty-rating-icon\n    expect(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4);\n    expect(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2);\n  }\n}'},null===(_Rating_$parameters2=Rating_.parameters)||void 0===_Rating_$parameters2||null===(_Rating_$parameters2$=_Rating_$parameters2.docs)||void 0===_Rating_$parameters2$?void 0:_Rating_$parameters2$.source)})})},"./ui/primitive/Rating.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Rating});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/solid/StarIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/outline/StarIcon.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils.ts"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_excluded=["className","variant","score","maxScore","totalIconCount"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ratingVariant=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("flex space-x-1",{variants:{color:{primary:"text-primary-11",accent:"text-accent-11",neutral:"text-neutral-11",success:"text-success-11",error:"text-error-11",info:"text-info-11"}},defaultVariants:{color:"neutral"}}),Rating=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var className=_ref.className,variant=_ref.variant,score=_ref.score,maxScore=_ref.maxScore,totalIconCount=_ref.totalIconCount,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);if(score>maxScore||score<0)return null;var rating=Math.round(score),fillStarCount=Math.floor(rating/(maxScore/totalIconCount)),halfStarCount=rating%(maxScore/totalIconCount)<maxScore/totalIconCount/2?0:1,outlineStarCount=totalIconCount-fillStarCount-halfStarCount;return __jsx("div",(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(ratingVariant({color:variant.color}),className)},props),Array.from({length:fillStarCount}).map((function(_,index){return __jsx(RatingFillIcon,{key:index})})),halfStarCount>0&&__jsx(RatingHalfIcon,null),Array.from({length:outlineStarCount}).map((function(_,index){return __jsx(RatingEmptyIcon,{key:index})})))}));Rating.displayName="Rating";var RatingFillIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref2,ref){var className=_ref2.className,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref2,_excluded2);return __jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__,(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({"data-testid":"fill-rating-icon",ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("h-4 w-4",className)},props))}));RatingFillIcon.displayName="RatingIcon";var RatingEmptyIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref3,ref){var className=_ref3.className,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref3,_excluded3);return __jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__,(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({"data-testid":"empty-rating-icon",ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("h-4 w-4",className)},props))}));RatingEmptyIcon.displayName="RatingIcon";var RatingHalfIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref4,ref){var className=_ref4.className,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref4,_excluded4);return __jsx("span",(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:"relative"},props),__jsx("div",{className:"w-1/2 overflow-hidden"},__jsx(RatingFillIcon,{className})),__jsx(RatingEmptyIcon,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("absolute top-0 left-0",className)}))}));RatingHalfIcon.displayName="RatingIcon",Rating.__docgenInfo={description:"",methods:[],displayName:"Rating"};try{ForwardRefExoticComponent.displayName="Rating",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Rating",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}},maxScore:{defaultValue:null,description:"",name:"maxScore",required:!0,type:{name:"number"}},totalIconCount:{defaultValue:null,description:"",name:"totalIconCount",required:!0,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'{ color?: "primary" | "accent" | "neutral" | "success" | "error" | "info" | null | undefined; }'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/primitive/Rating.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"ui/primitive/Rating.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"?8654":()=>{}}]);