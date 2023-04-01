(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[6888],{"./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/outline/StarIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function StarIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"}))}));module.exports=ForwardRef},"./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/solid/StarIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function StarIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./components/Rating/Rating.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Rating});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_ui_primitive_Rating__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/primitive/Rating.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Rating=function Rating(_ref){var score=_ref.score;return __jsx(_ui_primitive_Rating__WEBPACK_IMPORTED_MODULE_1__.i,{score,maxScore:10,totalIconCount:5,variant:{color:"accent"}})};Rating.displayName="Rating",Rating.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{score:{required:!0,tsType:{name:"number"},description:""}}};try{Rating.displayName="Rating",Rating.__docgenInfo={description:"",displayName:"Rating",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Rating/Rating.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"components/Rating/Rating.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}},"./ui/primitive/Rating.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Rating});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/solid/StarIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/24/outline/StarIcon.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils.ts"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_excluded=["className","variant","score","maxScore","totalIconCount"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ratingVariant=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("flex space-x-1",{variants:{color:{primary:"text-primary-11",accent:"text-accent-11",neutral:"text-neutral-11",success:"text-success-11",error:"text-error-11",info:"text-info-11"}},defaultVariants:{color:"neutral"}}),Rating=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var className=_ref.className,variant=_ref.variant,score=_ref.score,maxScore=_ref.maxScore,totalIconCount=_ref.totalIconCount,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);if(score>maxScore||score<0)return null;var rating=Math.round(score),fillStarCount=Math.floor(rating/(maxScore/totalIconCount)),halfStarCount=rating%(maxScore/totalIconCount)<maxScore/totalIconCount/2?0:1,outlineStarCount=totalIconCount-fillStarCount-halfStarCount;return __jsx("div",(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(ratingVariant({color:variant.color}),className)},props),Array.from({length:fillStarCount}).map((function(_,index){return __jsx(RatingFillIcon,{key:index})})),halfStarCount>0&&__jsx(RatingHalfIcon,null),Array.from({length:outlineStarCount}).map((function(_,index){return __jsx(RatingEmptyIcon,{key:index})})))}));Rating.displayName="Rating";var RatingFillIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref2,ref){var className=_ref2.className,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref2,_excluded2);return __jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__,(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({"data-testid":"fill-rating-icon",ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("h-4 w-4",className)},props))}));RatingFillIcon.displayName="RatingIcon";var RatingEmptyIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref3,ref){var className=_ref3.className,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref3,_excluded3);return __jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__,(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({"data-testid":"empty-rating-icon",ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("h-4 w-4",className)},props))}));RatingEmptyIcon.displayName="RatingIcon";var RatingHalfIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref4,ref){var className=_ref4.className,props=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref4,_excluded4);return __jsx("span",(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:"relative"},props),__jsx("div",{className:"w-1/2 overflow-hidden"},__jsx(RatingFillIcon,{className})),__jsx(RatingEmptyIcon,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("absolute top-0 left-0",className)}))}));RatingHalfIcon.displayName="RatingIcon",Rating.__docgenInfo={description:"",methods:[],displayName:"Rating"};try{ForwardRefExoticComponent.displayName="Rating",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Rating",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}},maxScore:{defaultValue:null,description:"",name:"maxScore",required:!0,type:{name:"number"}},totalIconCount:{defaultValue:null,description:"",name:"totalIconCount",required:!0,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'{ color?: "primary" | "accent" | "neutral" | "success" | "error" | "info" | null | undefined; }'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/primitive/Rating.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"ui/primitive/Rating.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}},"./components/Rating/Rating.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Rating_:()=>Rating_,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Rating/Rating.tsx"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.1/node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.0.11-next.1/node_modules/@storybook/jest/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.i};var _play,Rating_={args:{score:6.6},play:(_play=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(_ref){var canvasElement,canvas;return C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement),_context.next=4,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_3__.l)(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4);case 4:return _context.next=6,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_3__.l)(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2);case 6:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Rating_.parameters={...Rating_.parameters,docs:{...Rating_.parameters?.docs,source:{originalSource:'{\n  args: {\n    score: 6.6\n  },\n  play: function () {\n    var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {\n      var canvasElement, canvas;\n      return _regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            canvasElement = _ref.canvasElement;\n            canvas = within(canvasElement); // half-rating-icon is overlapped by fill-rating-icon and empty-rating-icon\n            _context.next = 4;\n            return expect(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4);\n          case 4:\n            _context.next = 6;\n            return expect(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2);\n          case 6:\n          case "end":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    function play(_x) {\n      return _play.apply(this, arguments);\n    }\n    return play;\n  }()\n}',...Rating_.parameters?.docs?.source}}}},"?1f41":()=>{}}]);