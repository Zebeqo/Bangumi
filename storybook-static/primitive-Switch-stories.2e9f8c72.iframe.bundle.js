(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[875,554],{"./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/.pnpm/@radix-ui+react-use-size@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./lib/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>colorArray});var colorArray=["primary","accent","neutral","success","error","info"]},"./ui/primitive/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Switch_:()=>Switch_,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Switch_$parameters,_Switch_$parameters2,_Switch_$parameters2$,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/regenerator/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),_storybook_jest__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.0.11-next.0/node_modules/@storybook/jest/dist/esm/index.js"),_ui_primitive_Switch__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/primitive/Switch.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.0-beta.45_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.1/node_modules/@storybook/testing-library/dist/esm/index.js"),_lib_color__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./lib/color.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { expect } from "@storybook/jest";\nimport type { Meta, StoryObj } from "@storybook/react";\nimport { Switch } from "@/ui/primitive/Switch";\nimport type { Color } from "@/lib/color";\nimport { action } from "@storybook/addon-actions";\nimport { userEvent, within } from "@storybook/testing-library";\nimport { colorArray } from "@/lib/color";\nconst meta: Meta = {\n  title: "Switch",\n  argTypes: {\n    colorVariant: {\n      control: {\n        type: "radio"\n      },\n      options: colorArray\n    }\n  }\n};\nexport default meta;\nexport const Switch_: StoryObj<{\n  colorVariant: Color;\n  checked: boolean;\n  onCheckedChange: () => void;\n}> = {\n  args: {\n    colorVariant: "accent",\n    checked: true,\n    onCheckedChange: action("checked change")\n  },\n  render: ({\n    colorVariant,\n    checked,\n    onCheckedChange\n  }) => {\n    return <Switch colorVariant={colorVariant} checked={checked} onCheckedChange={onCheckedChange} />;\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    const switchEl = canvas.getByRole("switch");\n    await userEvent.click(switchEl);\n    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);\n  }\n};\nSwitch_.parameters = {\n  ...Switch_.parameters,\n  docs: {\n    ...Switch_.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    colorVariant: \\"accent\\",\\n    checked: true,\\n    onCheckedChange: action(\\"checked change\\")\\n  },\\n  render: ({\\n    colorVariant,\\n    checked,\\n    onCheckedChange\\n  }) => {\\n    return <Switch colorVariant={colorVariant} checked={checked} onCheckedChange={onCheckedChange} />;\\n  },\\n  play: async ({\\n    canvasElement,\\n    args\\n  }) => {\\n    const canvas = within(canvasElement);\\n    const switchEl = canvas.getByRole(\\"switch\\");\\n    await userEvent.click(switchEl);\\n    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);\\n  }\\n}",\n      ...Switch_.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{switch:{startLoc:{col:5,line:24},endLoc:{col:1,line:46},startBody:{col:5,line:24},endBody:{col:1,line:46}}}}},title:"Switch",argTypes:{colorVariant:{control:{type:"radio"},options:_lib_color__WEBPACK_IMPORTED_MODULE_7__.S}}};var _play,Switch_={args:{colorVariant:"accent",checked:!0,onCheckedChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.aD)("checked change")},render:function render(_ref){var colorVariant=_ref.colorVariant,checked=_ref.checked,onCheckedChange=_ref.onCheckedChange;return __jsx(_ui_primitive_Switch__WEBPACK_IMPORTED_MODULE_4__.r,{colorVariant,checked,onCheckedChange})},play:(_play=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(_ref2){var canvasElement,args,canvas,switchEl;return C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref2.canvasElement,args=_ref2.args,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_6__.uh)(canvasElement),switchEl=canvas.getByRole("switch"),_context.next=5,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_6__.mV.click(switchEl);case 5:return _context.next=7,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_3__.l)(args.onCheckedChange).toHaveBeenCalledTimes(1);case 7:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Switch_.parameters=_objectSpread(_objectSpread({},Switch_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Switch_$parameters=Switch_.parameters)||void 0===_Switch_$parameters?void 0:_Switch_$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    colorVariant: "accent",\n    checked: true,\n    onCheckedChange: action("checked change")\n  },\n  render: ({\n    colorVariant,\n    checked,\n    onCheckedChange\n  }) => {\n    return <Switch colorVariant={colorVariant} checked={checked} onCheckedChange={onCheckedChange} />;\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    const switchEl = canvas.getByRole("switch");\n    await userEvent.click(switchEl);\n    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);\n  }\n}'},null===(_Switch_$parameters2=Switch_.parameters)||void 0===_Switch_$parameters2||null===(_Switch_$parameters2$=_Switch_$parameters2.docs)||void 0===_Switch_$parameters2$?void 0:_Switch_$parameters2$.source)})})},"./ui/primitive/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+primitive@1.0.0/node_modules/@radix-ui/primitive/dist/index.module.js"),dist_index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.0_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.module.js"),react_context_dist_index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.0_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.module.js"),react_use_controllable_state_dist_index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_use_previous_dist_index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.module.js"),react_use_size_dist_index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-size@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.module.js"),react_primitive_dist_index_module=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-primitive@1.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-primitive/dist/index.module.js");const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist_index_module.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist_index_module.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react.createElement)(react_primitive_dist_index_module.WV.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,index_module.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)(react_primitive_dist_index_module.WV.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist_index_module.D)(checked),controlSize=(0,react_use_size_dist_index_module.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106;var utils=__webpack_require__("./lib/utils.ts"),index_esm=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_excluded=["className","colorVariant"],__jsx=react.createElement,switchVariant=(0,index_esm.j)("",{variants:{colorVariant:{primary:"radix-state-checked:bg-primary-10",accent:"radix-state-checked:bg-accent-10",neutral:"radix-state-checked:bg-neutral-10",success:"radix-state-checked:bg-success-10",error:"radix-state-checked:bg-error-10",info:"radix-state-checked:bg-info-10"}}}),Switch=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,colorVariant=_ref.colorVariant,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx($6be4966fd9bbc698$export$be92b6f5f03c0fe9,(0,esm_extends.Z)({ref,className:(0,utils.cn)("group",switchVariant({colorVariant}),"radix-state-unchecked:bg-neutral-4 dark:radix-state-unchecked:bg-gray-800","relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out","focus:outline-none",className)},props),__jsx($6be4966fd9bbc698$export$6521433ed15a34db,{className:(0,utils.cn)("group-radix-state-checked:translate-x-5","group-radix-state-unchecked:translate-x-0","pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out")}))}));Switch.displayName=$6be4966fd9bbc698$export$be92b6f5f03c0fe9.displayName,Switch.__docgenInfo={description:"",methods:[]};try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{colorVariant:{defaultValue:null,description:"",name:"colorVariant",required:!0,type:{name:'"success" | "error" | "info" | "primary" | "accent" | "neutral" | null'}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/primitive/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"ui/primitive/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"?8654":()=>{}}]);