(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[3912],{"./node_modules/.pnpm/@heroicons+react@2.0.17_react@18.2.0/node_modules/@heroicons/react/20/solid/ArrowsUpDownIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function ArrowsUpDownIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/async-local-storage.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAsyncLocalStorage=function createAsyncLocalStorage(){if(globalThis.AsyncLocalStorage)return new globalThis.AsyncLocalStorage;return new FakeAsyncLocalStorage};class FakeAsyncLocalStorage{disable(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/bailout-to-client-rendering.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bailoutToClientRendering=function bailoutToClientRendering(){const staticGenerationStore=_staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();if(null==staticGenerationStore?void 0:staticGenerationStore.forceStatic)return!0;(null==staticGenerationStore?void 0:staticGenerationStore.isStaticGeneration)&&_dynamicNoSsr.suspense();return!1};var _dynamicNoSsr=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js"),_staticGenerationAsyncStorage=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/static-generation-async-storage.js");("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/client-hook-in-server-component-error.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clientHookInServerComponentError=function clientHookInServerComponentError(hookName){0};(0,__webpack_require__("./node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/navigation.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSearchParams=function useSearchParams(){_clientHookInServerComponentError.clientHookInServerComponentError("useSearchParams");const searchParams=_react.useContext(_hooksClientContext.SearchParamsContext),readonlySearchParams=_react.useMemo((()=>searchParams?new ReadonlyURLSearchParams(searchParams):null),[searchParams]);if("undefined"==typeof window){const{bailoutToClientRendering}=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/bailout-to-client-rendering.js");if(bailoutToClientRendering())return readonlySearchParams}return readonlySearchParams},exports.usePathname=function usePathname(){return _clientHookInServerComponentError.clientHookInServerComponentError("usePathname"),_react.useContext(_hooksClientContext.PathnameContext)},Object.defineProperty(exports,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return _serverInsertedHtml.ServerInsertedHTMLContext}}),Object.defineProperty(exports,"useServerInsertedHTML",{enumerable:!0,get:function(){return _serverInsertedHtml.useServerInsertedHTML}}),exports.useRouter=function useRouter(){_clientHookInServerComponentError.clientHookInServerComponentError("useRouter");const router=_react.useContext(_appRouterContext.AppRouterContext);if(null===router)throw new Error("invariant expected app router to be mounted");return router},exports.useParams=function useParams(){_clientHookInServerComponentError.clientHookInServerComponentError("useParams");const{tree}=_react.useContext(_appRouterContext.GlobalLayoutRouterContext);if(!tree)return null;return getSelectedParams(tree)},exports.useSelectedLayoutSegments=useSelectedLayoutSegments,exports.useSelectedLayoutSegment=function useSelectedLayoutSegment(parallelRouteKey="children"){_clientHookInServerComponentError.clientHookInServerComponentError("useSelectedLayoutSegment");const selectedLayoutSegments=useSelectedLayoutSegments(parallelRouteKey);if(0===selectedLayoutSegments.length)return null;return selectedLayoutSegments[0]},Object.defineProperty(exports,"redirect",{enumerable:!0,get:function(){return _redirect.redirect}}),Object.defineProperty(exports,"notFound",{enumerable:!0,get:function(){return _notFound.notFound}});var _react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_appRouterContext=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/app-router-context.js"),_hooksClientContext=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/hooks-client-context.js"),_clientHookInServerComponentError=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/client-hook-in-server-component-error.js"),_serverInsertedHtml=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/server-inserted-html.js"),_redirect=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/redirect.js"),_notFound=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/not-found.js");const INTERNAL_URLSEARCHPARAMS_INSTANCE=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return new Error("ReadonlyURLSearchParams cannot be modified")}class ReadonlyURLSearchParams{[Symbol.iterator](){return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(urlSearchParams){this[INTERNAL_URLSEARCHPARAMS_INSTANCE]=urlSearchParams,this.entries=urlSearchParams.entries.bind(urlSearchParams),this.forEach=urlSearchParams.forEach.bind(urlSearchParams),this.get=urlSearchParams.get.bind(urlSearchParams),this.getAll=urlSearchParams.getAll.bind(urlSearchParams),this.has=urlSearchParams.has.bind(urlSearchParams),this.keys=urlSearchParams.keys.bind(urlSearchParams),this.values=urlSearchParams.values.bind(urlSearchParams),this.toString=urlSearchParams.toString.bind(urlSearchParams)}}function getSelectedParams(tree,params={}){const parallelRoutes=tree[1];var _children;const node=null!=(_children=parallelRoutes.children)?_children:Object.values(parallelRoutes)[0];if(!node)return params;const segment=node[0],isDynamicParameter=Array.isArray(segment),segmentValue=isDynamicParameter?segment[1]:segment;return!segmentValue||segmentValue.startsWith("__PAGE__")?params:(isDynamicParameter&&(params[segment[0]]=segment[1]),getSelectedParams(node,params))}function getSelectedLayoutSegmentPath(tree,parallelRouteKey,first=!0,segmentPath=[]){let node;if(first)node=tree[1][parallelRouteKey];else{const parallelRoutes=tree[1];var _children;node=null!=(_children=parallelRoutes.children)?_children:Object.values(parallelRoutes)[0]}if(!node)return segmentPath;const segment=node[0],segmentValue=Array.isArray(segment)?segment[1]:segment;return!segmentValue||segmentValue.startsWith("__PAGE__")?segmentPath:(segmentPath.push(segmentValue),getSelectedLayoutSegmentPath(node,parallelRouteKey,!1,segmentPath))}function useSelectedLayoutSegments(parallelRouteKey="children"){_clientHookInServerComponentError.clientHookInServerComponentError("useSelectedLayoutSegments");const{tree}=_react.useContext(_appRouterContext.LayoutRouterContext);return getSelectedLayoutSegmentPath(tree,parallelRouteKey)}exports.ReadonlyURLSearchParams=ReadonlyURLSearchParams,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/not-found.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.notFound=function notFound(){const error=new Error(NOT_FOUND_ERROR_CODE);throw error.digest=NOT_FOUND_ERROR_CODE,error},exports.isNotFoundError=function isNotFoundError(error){return(null==error?void 0:error.digest)===NOT_FOUND_ERROR_CODE};const NOT_FOUND_ERROR_CODE="NEXT_NOT_FOUND";("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/redirect.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.redirect=function redirect(url){const error=new Error(REDIRECT_ERROR_CODE);throw error.digest=`${REDIRECT_ERROR_CODE};${url}`,error},exports.isRedirectError=isRedirectError,exports.getURLFromRedirectError=function getURLFromRedirectError(error){return isRedirectError(error)?error.digest.slice(REDIRECT_ERROR_CODE.length+1):null};const REDIRECT_ERROR_CODE="NEXT_REDIRECT";function isRedirectError(error){return"string"==typeof(null==error?void 0:error.digest)&&error.digest.startsWith(REDIRECT_ERROR_CODE+";")&&error.digest.length>REDIRECT_ERROR_CODE.length+1}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/static-generation-async-storage.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.staticGenerationAsyncStorage=void 0;const staticGenerationAsyncStorage=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/async-local-storage.js").createAsyncLocalStorage();exports.staticGenerationAsyncStorage=staticGenerationAsyncStorage,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.suspense=suspense,exports.NoSSR=function NoSSR({children}){"undefined"==typeof window&&suspense();return children};(0,__webpack_require__("./node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));var _noSsrError=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js");function suspense(){const error=new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);throw error.digest=_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE,error}},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NEXT_DYNAMIC_NO_SSR_CODE=void 0;exports.NEXT_DYNAMIC_NO_SSR_CODE="DYNAMIC_SERVER_USAGE"},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/shared/lib/server-inserted-html.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useServerInsertedHTML=function useServerInsertedHTML(callback){const addInsertedServerHTMLCallback=_react.useContext(ServerInsertedHTMLContext);addInsertedServerHTMLCallback&&addInsertedServerHTMLCallback(callback)},exports.ServerInsertedHTMLContext=void 0;var _react=(0,__webpack_require__("./node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js").Z)(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));const ServerInsertedHTMLContext=_react.default.createContext(null);exports.ServerInsertedHTMLContext=ServerInsertedHTMLContext},"./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/navigation.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/dist/client/components/navigation.js")},"./components/DropdownMenu/SortMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SortMenu_:()=>SortMenu_,default:()=>SortMenu_stories});var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),navigation=__webpack_require__("./node_modules/.pnpm/next@13.2.5-canary.30_z72xxk7vwlamvgqemvc4ptm4du/node_modules/next/navigation.js"),ArrowsUpDownIcon=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.17_react@18.2.0/node_modules/@heroicons/react/20/solid/ArrowsUpDownIcon.js"),DropdownMenu=__webpack_require__("./ui/components/DropdownMenu.tsx"),Button=__webpack_require__("./ui/components/Button.tsx"),__jsx=react.createElement,sortRadioItems=[{label:"在看人数",value:"do"},{label:"评分人数",value:"count"},{label:"评分",value:"rating"}],orderRadioItems=[{label:"升序",value:"asc"},{label:"降序",value:"desc"}];function SortMenu(){var _searchParams$get,_searchParams$get2,path=(0,navigation.usePathname)(),searchParams=(0,navigation.useSearchParams)(),router=(0,navigation.useRouter)();return __jsx(DropdownMenu.h_,null,__jsx(DropdownMenu.$F,{asChild:!0},__jsx(Button.zx,{variant:"outline","aria-label":"sort-menu"},__jsx(ArrowsUpDownIcon,{className:"mr-2 h-5 w-5"}),"排序")),__jsx(DropdownMenu.AW,{align:"end",sideOffset:8,className:"w-36"},__jsx(DropdownMenu._x,{value:null!==(_searchParams$get=null==searchParams?void 0:searchParams.get("sort"))&&void 0!==_searchParams$get?_searchParams$get:"do",onValueChange:function handleSortSelect(value){var newSearchParams=new URLSearchParams(null==searchParams?void 0:searchParams.toString());newSearchParams.set("sort",value),router.push("".concat(null!=path?path:"/","?").concat(newSearchParams.toString()))}},sortRadioItems.map((function(_ref,index){var value=_ref.value,label=_ref.label;return __jsx(DropdownMenu.qB,{value,key:"".concat(value,"-").concat(index)},label)}))),__jsx(DropdownMenu.VD,null),__jsx(DropdownMenu._x,{value:null!==(_searchParams$get2=null==searchParams?void 0:searchParams.get("order"))&&void 0!==_searchParams$get2?_searchParams$get2:"desc",onValueChange:function handleOrderSelect(value){var newSearchParams=new URLSearchParams(null==searchParams?void 0:searchParams.toString());newSearchParams.set("order",value),router.push("".concat(null!=path?path:"/","?").concat(newSearchParams.toString()))}},orderRadioItems.map((function(_ref2,index){var value=_ref2.value,label=_ref2.label;return __jsx(DropdownMenu.qB,{value,key:"".concat(value,"-").concat(index)},label)})))))}SortMenu.displayName="SortMenu",SortMenu.__docgenInfo={description:"",methods:[],displayName:"SortMenu"};var esm=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.1.0/node_modules/@storybook/testing-library/dist/esm/index.js");const SortMenu_stories={component:SortMenu};var _play,SortMenu_={play:(_play=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref){var canvasElement,canvas;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context.next=4,esm.mV.click(canvas.getByRole("button",{name:"sort-menu"}));case 4:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};SortMenu_.parameters={...SortMenu_.parameters,docs:{...SortMenu_.parameters?.docs,source:{originalSource:'{\n  play: function () {\n    var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {\n      var canvasElement, canvas;\n      return _regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            canvasElement = _ref.canvasElement;\n            canvas = within(canvasElement);\n            _context.next = 4;\n            return userEvent.click(canvas.getByRole("button", {\n              name: "sort-menu"\n            }));\n          case 4:\n          case "end":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    function play(_x) {\n      return _play.apply(this, arguments);\n    }\n    return play;\n  }()\n}',...SortMenu_.parameters?.docs?.source}}}},"?1f41":()=>{}}]);