"use strict";(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[525],{"./components/Subnav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CalendarSubnav:()=>CalendarSubnav,CollectionSubnav:()=>CollectionSubnav,HotSubnav:()=>HotSubnav,default:()=>Subnav_stories});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/.pnpm/next@13.2.2-canary.1_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),navigation=__webpack_require__("./node_modules/.pnpm/next@13.2.2-canary.1_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/navigation.js"),Button=__webpack_require__("./ui/primitive/Button.tsx"),__jsx=react.createElement;function Subnav(_ref){var navItems=_ref.navItems,selectedItemName=_ref.selectedItemName,children=_ref.children,searchParams=(0,navigation.useSearchParams)();return __jsx("div",{className:"flex justify-between px-16"},__jsx("div",{className:"flex space-x-1"},navItems.slice(0).map((function(item){return __jsx(link_default(),{href:null!=searchParams&&searchParams.toString()?"".concat(item.href,"?").concat(searchParams.toString()):"".concat(item.href),key:item.name,className:selectedItemName===item.name?(0,Button.I1)({colorVariant:"neutral"}):(0,Button.DO)({colorVariant:"neutral"})},item.value)}))),children)}Subnav.displayName="Subnav",Subnav.__docgenInfo={description:"",methods:[],displayName:"Subnav",props:{navItems:{required:!0,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:""},selectedItemName:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Subnav.displayName="Subnav",Subnav.__docgenInfo={description:"",displayName:"Subnav",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavItem[]"}},selectedItemName:{defaultValue:null,description:"",name:"selectedItemName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Subnav.tsx#Subnav"]={docgenInfo:Subnav.__docgenInfo,name:"Subnav",path:"components/Subnav.tsx#Subnav"})}catch(__react_docgen_typescript_loader_error){}var ArrowsUpDownIcon=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/20/solid/ArrowsUpDownIcon.js"),DropdownMenu=__webpack_require__("./ui/primitive/DropdownMenu.tsx"),SortDropdownMenu_jsx=react.createElement,sortRadioItems=[{label:"在看人数",value:"do"},{label:"评分人数",value:"count"},{label:"评分",value:"rating"}],orderRadioItems=[{label:"升序",value:"asc"},{label:"降序",value:"desc"}];function SortDropdownMenu(){var _searchParams$get,_searchParams$get2,path=(0,navigation.usePathname)(),searchParams=(0,navigation.useSearchParams)(),router=(0,navigation.useRouter)();return SortDropdownMenu_jsx(DropdownMenu.h_,null,SortDropdownMenu_jsx(DropdownMenu.$F,{asChild:!0},SortDropdownMenu_jsx(Button.f5,{colorVariant:"neutral","aria-label":"sort"},SortDropdownMenu_jsx(ArrowsUpDownIcon,{className:"mr-2 h-5 w-5"}),"排序")),SortDropdownMenu_jsx(DropdownMenu.AW,{colorVariant:"neutral",align:"end",sideOffset:8,className:"w-36"},SortDropdownMenu_jsx(DropdownMenu._x,{value:null!==(_searchParams$get=null==searchParams?void 0:searchParams.get("sort"))&&void 0!==_searchParams$get?_searchParams$get:"do",onValueChange:function handleSortSelect(value){var newSearchParams=new URLSearchParams(null==searchParams?void 0:searchParams.toString());newSearchParams.set("sort",value),router.push("".concat(null!=path?path:"/","?").concat(newSearchParams.toString()))}},sortRadioItems.map((function(_ref,index){var value=_ref.value,label=_ref.label;return SortDropdownMenu_jsx(DropdownMenu.qB,{colorVariant:"neutral",value,key:"".concat(value,"-").concat(index)},label)}))),SortDropdownMenu_jsx(DropdownMenu.VD,{colorVariant:"neutral"}),SortDropdownMenu_jsx(DropdownMenu._x,{value:null!==(_searchParams$get2=null==searchParams?void 0:searchParams.get("order"))&&void 0!==_searchParams$get2?_searchParams$get2:"desc",onValueChange:function handleOrderSelect(value){var newSearchParams=new URLSearchParams(null==searchParams?void 0:searchParams.toString());newSearchParams.set("order",value),router.push("".concat(null!=path?path:"/","?").concat(newSearchParams.toString()))}},orderRadioItems.map((function(_ref2,index){var value=_ref2.value,label=_ref2.label;return SortDropdownMenu_jsx(DropdownMenu.qB,{colorVariant:"neutral",value,key:"".concat(value,"-").concat(index)},label)})))))}SortDropdownMenu.displayName="SortDropdownMenu",SortDropdownMenu.__docgenInfo={description:"",methods:[],displayName:"SortDropdownMenu"};var _CalendarSubnav$param,_CalendarSubnav$param2,_CalendarSubnav$param3,_HotSubnav$parameters,_HotSubnav$parameters2,_HotSubnav$parameters3,_CollectionSubnav$par,_CollectionSubnav$par2,_CollectionSubnav$par3,storybook=__webpack_require__("./ui/storybook.tsx"),slicedToArray=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),utils=__webpack_require__("./node_modules/.pnpm/jotai@2.0.2_react@18.2.0/node_modules/jotai/esm/vanilla/utils.mjs"),Switch=__webpack_require__("./ui/primitive/Switch.tsx"),esm_react=__webpack_require__("./node_modules/.pnpm/jotai@2.0.2_react@18.2.0/node_modules/jotai/esm/react.mjs"),personalViewSwitch_jsx=react.createElement,personalViewModeAtom=(0,utils.O4)("personalViewMode",!1),PersonalViewSwitch=function PersonalViewSwitch(){var _useAtom=(0,esm_react.KO)(personalViewModeAtom),_useAtom2=(0,slicedToArray.Z)(_useAtom,2),checked=_useAtom2[0],setChecked=_useAtom2[1];return(0,react.useEffect)((function(){function handleKeyDown(event){"p"===event.key&&setChecked(!checked)}return document.addEventListener("keydown",handleKeyDown),function(){document.removeEventListener("keydown",handleKeyDown)}}),[checked,setChecked]),personalViewSwitch_jsx(Switch.r,{colorVariant:"accent",checked,onCheckedChange:function handleChecked(checked){setChecked(checked)}})};PersonalViewSwitch.displayName="PersonalViewSwitch",PersonalViewSwitch.__docgenInfo={description:"",methods:[],displayName:"PersonalViewSwitch"};var Subnav_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Subnav_stories={title:"Subnav",component:Subnav,parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { Subnav } from "@/components/Subnav";\nimport { SortDropdownMenu } from "@/components/DropdownMenu/SortDropdownMenu";\nimport { headerMarginDecorator } from "@/ui/storybook";\nimport { PersonalViewSwitch } from "@/components/Switch/personalViewSwitch";\nconst meta: Meta<typeof Subnav> = {\n  title: "Subnav",\n  component: Subnav,\n  parameters: {\n    layout: "fullscreen"\n  },\n  decorators: [headerMarginDecorator]\n};\nexport default meta;\ntype Story = StoryObj<typeof Subnav>;\nexport const CalendarSubnav: Story = {\n  args: {\n    navItems: [{\n      name: "monday",\n      value: "周一",\n      href: "/calendar/monday"\n    }, {\n      name: "tuesday",\n      value: "周二",\n      href: "/calendar/tuesday"\n    }, {\n      name: "wednesday",\n      value: "周三",\n      href: "/calendar/wednesday"\n    }, {\n      name: "thursday",\n      value: "周四",\n      href: "/calendar/thursday"\n    }, {\n      name: "friday",\n      value: "周五",\n      href: "/calendar/friday"\n    }, {\n      name: "saturday",\n      value: "周六",\n      href: "/calendar/saturday"\n    }, {\n      name: "sunday",\n      value: "周日",\n      href: "/calendar/sunday"\n    }],\n    selectedItemName: "monday",\n    children: <SortDropdownMenu />\n  }\n};\nexport const HotSubnav: Story = {\n  args: {\n    navItems: [{\n      name: "anime",\n      value: "动画",\n      href: "/hot/anime"\n    }, {\n      name: "book",\n      value: "书籍",\n      href: "/hot/book"\n    }, {\n      name: "music",\n      value: "音乐",\n      href: "/hot/music"\n    }, {\n      name: "game",\n      value: "游戏",\n      href: "/hot/game"\n    }, {\n      name: "real",\n      value: "三次元",\n      href: "/hot/real"\n    }],\n    selectedItemName: "anime"\n  }\n};\nconst collectionType = "do";\nexport const CollectionSubnav: Story = {\n  args: {\n    navItems: [{\n      name: "anime",\n      value: "动画",\n      href: `/collection/${collectionType}/anime`\n    }, {\n      name: "book",\n      value: "书籍",\n      href: `/collection/${collectionType}/book`\n    }, {\n      name: "music",\n      value: "音乐",\n      href: `/collection/${collectionType}/music`\n    }, {\n      name: "game",\n      value: "游戏",\n      href: `/collection/${collectionType}/game`\n    }, {\n      name: "real",\n      value: "三次元",\n      href: `/collection/${collectionType}/real`\n    }],\n    selectedItemName: "anime",\n    children: <div className="flex items-center space-x-3">\r\n        <span className="font-medium text-neutral-11">\r\n          个人视角<span className="text-xs font-normal ">（按 p 切换）</span>\r\n        </span>\r\n        <PersonalViewSwitch />\r\n      </div>\n  }\n};\nCalendarSubnav.parameters = {\n  ...CalendarSubnav.parameters,\n  docs: {\n    ...CalendarSubnav.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    navItems: [{\\n      name: \\"monday\\",\\n      value: \\"\\u5468\\u4E00\\",\\n      href: \\"/calendar/monday\\"\\n    }, {\\n      name: \\"tuesday\\",\\n      value: \\"\\u5468\\u4E8C\\",\\n      href: \\"/calendar/tuesday\\"\\n    }, {\\n      name: \\"wednesday\\",\\n      value: \\"\\u5468\\u4E09\\",\\n      href: \\"/calendar/wednesday\\"\\n    }, {\\n      name: \\"thursday\\",\\n      value: \\"\\u5468\\u56DB\\",\\n      href: \\"/calendar/thursday\\"\\n    }, {\\n      name: \\"friday\\",\\n      value: \\"\\u5468\\u4E94\\",\\n      href: \\"/calendar/friday\\"\\n    }, {\\n      name: \\"saturday\\",\\n      value: \\"\\u5468\\u516D\\",\\n      href: \\"/calendar/saturday\\"\\n    }, {\\n      name: \\"sunday\\",\\n      value: \\"\\u5468\\u65E5\\",\\n      href: \\"/calendar/sunday\\"\\n    }],\\n    selectedItemName: \\"monday\\",\\n    children: <SortDropdownMenu />\\n  }\\n}",\n      ...CalendarSubnav.parameters?.docs?.source\n    }\n  }\n};\nHotSubnav.parameters = {\n  ...HotSubnav.parameters,\n  docs: {\n    ...HotSubnav.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    navItems: [{\\n      name: \\"anime\\",\\n      value: \\"\\u52A8\\u753B\\",\\n      href: \\"/hot/anime\\"\\n    }, {\\n      name: \\"book\\",\\n      value: \\"\\u4E66\\u7C4D\\",\\n      href: \\"/hot/book\\"\\n    }, {\\n      name: \\"music\\",\\n      value: \\"\\u97F3\\u4E50\\",\\n      href: \\"/hot/music\\"\\n    }, {\\n      name: \\"game\\",\\n      value: \\"\\u6E38\\u620F\\",\\n      href: \\"/hot/game\\"\\n    }, {\\n      name: \\"real\\",\\n      value: \\"\\u4E09\\u6B21\\u5143\\",\\n      href: \\"/hot/real\\"\\n    }],\\n    selectedItemName: \\"anime\\"\\n  }\\n}",\n      ...HotSubnav.parameters?.docs?.source\n    }\n  }\n};\nCollectionSubnav.parameters = {\n  ...CollectionSubnav.parameters,\n  docs: {\n    ...CollectionSubnav.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    navItems: [{\\n      name: \\"anime\\",\\n      value: \\"\\u52A8\\u753B\\",\\n      href: `/collection/${collectionType}/anime`\\n    }, {\\n      name: \\"book\\",\\n      value: \\"\\u4E66\\u7C4D\\",\\n      href: `/collection/${collectionType}/book`\\n    }, {\\n      name: \\"music\\",\\n      value: \\"\\u97F3\\u4E50\\",\\n      href: `/collection/${collectionType}/music`\\n    }, {\\n      name: \\"game\\",\\n      value: \\"\\u6E38\\u620F\\",\\n      href: `/collection/${collectionType}/game`\\n    }, {\\n      name: \\"real\\",\\n      value: \\"\\u4E09\\u6B21\\u5143\\",\\n      href: `/collection/${collectionType}/real`\\n    }],\\n    selectedItemName: \\"anime\\",\\n    children: <div className=\\"flex items-center space-x-3\\">\\r\\n        <span className=\\"font-medium text-neutral-11\\">\\r\\n          \\u4E2A\\u4EBA\\u89C6\\u89D2<span className=\\"text-xs font-normal \\">\\uFF08\\u6309 p \\u5207\\u6362\\uFF09</span>\\r\\n        </span>\\r\\n        <PersonalViewSwitch />\\r\\n      </div>\\n  }\\n}",\n      ...CollectionSubnav.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{"calendar-subnav":{startLoc:{col:37,line:16},endLoc:{col:1,line:50},startBody:{col:37,line:16},endBody:{col:1,line:50}},"hot-subnav":{startLoc:{col:32,line:51},endLoc:{col:1,line:76},startBody:{col:32,line:51},endBody:{col:1,line:76}},"collection-subnav":{startLoc:{col:39,line:78},endLoc:{col:1,line:109},startBody:{col:39,line:78},endBody:{col:1,line:109}}}},layout:"fullscreen"},decorators:[storybook.X]};var CalendarSubnav={args:{navItems:[{name:"monday",value:"周一",href:"/calendar/monday"},{name:"tuesday",value:"周二",href:"/calendar/tuesday"},{name:"wednesday",value:"周三",href:"/calendar/wednesday"},{name:"thursday",value:"周四",href:"/calendar/thursday"},{name:"friday",value:"周五",href:"/calendar/friday"},{name:"saturday",value:"周六",href:"/calendar/saturday"},{name:"sunday",value:"周日",href:"/calendar/sunday"}],selectedItemName:"monday",children:Subnav_stories_jsx(SortDropdownMenu,null)}},HotSubnav={args:{navItems:[{name:"anime",value:"动画",href:"/hot/anime"},{name:"book",value:"书籍",href:"/hot/book"},{name:"music",value:"音乐",href:"/hot/music"},{name:"game",value:"游戏",href:"/hot/game"},{name:"real",value:"三次元",href:"/hot/real"}],selectedItemName:"anime"}},CollectionSubnav={args:{navItems:[{name:"anime",value:"动画",href:"/collection/".concat("do","/anime")},{name:"book",value:"书籍",href:"/collection/".concat("do","/book")},{name:"music",value:"音乐",href:"/collection/".concat("do","/music")},{name:"game",value:"游戏",href:"/collection/".concat("do","/game")},{name:"real",value:"三次元",href:"/collection/".concat("do","/real")}],selectedItemName:"anime",children:Subnav_stories_jsx("div",{className:"flex items-center space-x-3"},Subnav_stories_jsx("span",{className:"font-medium text-neutral-11"},"个人视角",Subnav_stories_jsx("span",{className:"text-xs font-normal "},"（按 p 切换）")),Subnav_stories_jsx(PersonalViewSwitch,null))}};CalendarSubnav.parameters=_objectSpread(_objectSpread({},CalendarSubnav.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CalendarSubnav$param=CalendarSubnav.parameters)||void 0===_CalendarSubnav$param?void 0:_CalendarSubnav$param.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    navItems: [{\n      name: "monday",\n      value: "周一",\n      href: "/calendar/monday"\n    }, {\n      name: "tuesday",\n      value: "周二",\n      href: "/calendar/tuesday"\n    }, {\n      name: "wednesday",\n      value: "周三",\n      href: "/calendar/wednesday"\n    }, {\n      name: "thursday",\n      value: "周四",\n      href: "/calendar/thursday"\n    }, {\n      name: "friday",\n      value: "周五",\n      href: "/calendar/friday"\n    }, {\n      name: "saturday",\n      value: "周六",\n      href: "/calendar/saturday"\n    }, {\n      name: "sunday",\n      value: "周日",\n      href: "/calendar/sunday"\n    }],\n    selectedItemName: "monday",\n    children: <SortDropdownMenu />\n  }\n}'},null===(_CalendarSubnav$param2=CalendarSubnav.parameters)||void 0===_CalendarSubnav$param2||null===(_CalendarSubnav$param3=_CalendarSubnav$param2.docs)||void 0===_CalendarSubnav$param3?void 0:_CalendarSubnav$param3.source)})}),HotSubnav.parameters=_objectSpread(_objectSpread({},HotSubnav.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_HotSubnav$parameters=HotSubnav.parameters)||void 0===_HotSubnav$parameters?void 0:_HotSubnav$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    navItems: [{\n      name: "anime",\n      value: "动画",\n      href: "/hot/anime"\n    }, {\n      name: "book",\n      value: "书籍",\n      href: "/hot/book"\n    }, {\n      name: "music",\n      value: "音乐",\n      href: "/hot/music"\n    }, {\n      name: "game",\n      value: "游戏",\n      href: "/hot/game"\n    }, {\n      name: "real",\n      value: "三次元",\n      href: "/hot/real"\n    }],\n    selectedItemName: "anime"\n  }\n}'},null===(_HotSubnav$parameters2=HotSubnav.parameters)||void 0===_HotSubnav$parameters2||null===(_HotSubnav$parameters3=_HotSubnav$parameters2.docs)||void 0===_HotSubnav$parameters3?void 0:_HotSubnav$parameters3.source)})}),CollectionSubnav.parameters=_objectSpread(_objectSpread({},CollectionSubnav.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CollectionSubnav$par=CollectionSubnav.parameters)||void 0===_CollectionSubnav$par?void 0:_CollectionSubnav$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    navItems: [{\n      name: "anime",\n      value: "动画",\n      href: `/collection/${collectionType}/anime`\n    }, {\n      name: "book",\n      value: "书籍",\n      href: `/collection/${collectionType}/book`\n    }, {\n      name: "music",\n      value: "音乐",\n      href: `/collection/${collectionType}/music`\n    }, {\n      name: "game",\n      value: "游戏",\n      href: `/collection/${collectionType}/game`\n    }, {\n      name: "real",\n      value: "三次元",\n      href: `/collection/${collectionType}/real`\n    }],\n    selectedItemName: "anime",\n    children: <div className="flex items-center space-x-3">\r\n        <span className="font-medium text-neutral-11">\r\n          个人视角<span className="text-xs font-normal ">（按 p 切换）</span>\r\n        </span>\r\n        <PersonalViewSwitch />\r\n      </div>\n  }\n}'},null===(_CollectionSubnav$par2=CollectionSubnav.parameters)||void 0===_CollectionSubnav$par2||null===(_CollectionSubnav$par3=_CollectionSubnav$par2.docs)||void 0===_CollectionSubnav$par3?void 0:_CollectionSubnav$par3.source)})})},"./ui/primitive/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-switch@1.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-switch/dist/index.module.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils.ts"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_excluded=["className","colorVariant"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,switchVariant=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("",{variants:{colorVariant:{primary:"radix-state-checked:bg-primary-10",accent:"radix-state-checked:bg-accent-10",neutral:"radix-state-checked:bg-neutral-10",success:"radix-state-checked:bg-success-10",error:"radix-state-checked:bg-error-10",info:"radix-state-checked:bg-info-10"}}}),Switch=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var className=_ref.className,colorVariant=_ref.colorVariant,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__.fC,(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("group",switchVariant({colorVariant}),"radix-state-unchecked:bg-neutral-4 dark:radix-state-unchecked:bg-gray-800","relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out","focus:outline-none",className)},props),__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__.bU,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("group-radix-state-checked:translate-x-5","group-radix-state-unchecked:translate-x-0","pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out")}))}));Switch.displayName=_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__.fC.displayName,Switch.__docgenInfo={description:"",methods:[]};try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{colorVariant:{defaultValue:null,description:"",name:"colorVariant",required:!0,type:{name:'"success" | "error" | "info" | "primary" | "accent" | "neutral" | null'}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/primitive/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"ui/primitive/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);