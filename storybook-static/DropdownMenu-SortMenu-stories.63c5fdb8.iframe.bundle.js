(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[3912],{"./node_modules/.pnpm/@heroicons+react@2.0.17_react@18.2.0/node_modules/@heroicons/react/20/solid/ArrowsUpDownIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function ArrowsUpDownIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./components/DropdownMenu/SortMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SortMenu_:()=>SortMenu_,default:()=>SortMenu_stories});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),navigation=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js"),ArrowsUpDownIcon=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.17_react@18.2.0/node_modules/@heroicons/react/20/solid/ArrowsUpDownIcon.js"),DropdownMenu=__webpack_require__("./ui/components/DropdownMenu.tsx"),Button=__webpack_require__("./ui/components/Button.tsx"),__jsx=react.createElement,sortRadioItems=[{label:"在看人数",value:"do"},{label:"评分人数",value:"count"},{label:"评分",value:"rating"}],orderRadioItems=[{label:"升序",value:"asc"},{label:"降序",value:"desc"}];function SortMenu(){var _searchParams$get,_searchParams$get2,path=(0,navigation.usePathname)(),searchParams=(0,navigation.useSearchParams)(),router=(0,navigation.useRouter)();return __jsx(DropdownMenu.h_,null,__jsx(DropdownMenu.$F,{asChild:!0},__jsx(Button.zx,{variant:"outline","aria-label":"sort-menu"},__jsx(ArrowsUpDownIcon,{className:"mr-2 h-5 w-5"}),"排序")),__jsx(DropdownMenu.AW,{align:"end",sideOffset:8,className:"w-36"},__jsx(DropdownMenu._x,{value:null!==(_searchParams$get=null==searchParams?void 0:searchParams.get("sort"))&&void 0!==_searchParams$get?_searchParams$get:"do",onValueChange:function handleSortSelect(value){var newSearchParams=new URLSearchParams(null==searchParams?void 0:searchParams.toString());newSearchParams.set("sort",value),router.push("".concat(null!=path?path:"/","?").concat(newSearchParams.toString()))}},sortRadioItems.map((function(_ref,index){var value=_ref.value,label=_ref.label;return __jsx(DropdownMenu.qB,{value,key:"".concat(value,"-").concat(index)},label)}))),__jsx(DropdownMenu.VD,null),__jsx(DropdownMenu._x,{value:null!==(_searchParams$get2=null==searchParams?void 0:searchParams.get("order"))&&void 0!==_searchParams$get2?_searchParams$get2:"desc",onValueChange:function handleOrderSelect(value){var newSearchParams=new URLSearchParams(null==searchParams?void 0:searchParams.toString());newSearchParams.set("order",value),router.push("".concat(null!=path?path:"/","?").concat(newSearchParams.toString()))}},orderRadioItems.map((function(_ref2,index){var value=_ref2.value,label=_ref2.label;return __jsx(DropdownMenu.qB,{value,key:"".concat(value,"-").concat(index)},label)})))))}SortMenu.displayName="SortMenu",SortMenu.__docgenInfo={description:"",methods:[],displayName:"SortMenu"};var _SortMenu_$parameters,_SortMenu_$parameters2,_SortMenu_$parameters3,esm=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.1.0/node_modules/@storybook/testing-library/dist/esm/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const SortMenu_stories={component:SortMenu};var _play,SortMenu_={play:(_play=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref){var canvasElement,canvas;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context.next=4,esm.mV.click(canvas.getByRole("button",{name:"sort-menu"}));case 4:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};SortMenu_.parameters=_objectSpread(_objectSpread({},SortMenu_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SortMenu_$parameters=SortMenu_.parameters)||void 0===_SortMenu_$parameters?void 0:_SortMenu_$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  play: async ({\n    canvasElement\n  }: {\n    canvasElement: HTMLElement;\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole("button", {\n      name: "sort-menu"\n    }));\n  }\n}'},null===(_SortMenu_$parameters2=SortMenu_.parameters)||void 0===_SortMenu_$parameters2||null===(_SortMenu_$parameters3=_SortMenu_$parameters2.docs)||void 0===_SortMenu_$parameters3?void 0:_SortMenu_$parameters3.source)})})},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});class FakeAsyncLocalStorage{disable(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}function createAsyncLocalStorage(){return globalThis.AsyncLocalStorage?new globalThis.AsyncLocalStorage:new FakeAsyncLocalStorage}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"bailoutToClientRendering",{enumerable:!0,get:function(){return bailoutToClientRendering}});const _dynamicnossr=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js"),_staticgenerationasyncstorage=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/static-generation-async-storage.js");function bailoutToClientRendering(){const staticGenerationStore=_staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();return!!(null==staticGenerationStore?void 0:staticGenerationStore.forceStatic)||((null==staticGenerationStore?void 0:staticGenerationStore.isStaticGeneration)&&(0,_dynamicnossr.suspense)(),!1)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/client-hook-in-server-component-error.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function clientHookInServerComponentError(hookName){0}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return _serverinsertedhtml.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return _serverinsertedhtml.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return _redirect.redirect},notFound:function(){return _notfound.notFound}});const _react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_approutercontext=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js"),_hooksclientcontext=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.js"),_clienthookinservercomponenterror=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/client-hook-in-server-component-error.js"),_getsegmentvalue=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js"),_serverinsertedhtml=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js"),_redirect=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect.js"),_notfound=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found.js"),INTERNAL_URLSEARCHPARAMS_INSTANCE=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return new Error("ReadonlyURLSearchParams cannot be modified")}class ReadonlyURLSearchParams{[Symbol.iterator](){return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(urlSearchParams){this[INTERNAL_URLSEARCHPARAMS_INSTANCE]=urlSearchParams,this.entries=urlSearchParams.entries.bind(urlSearchParams),this.forEach=urlSearchParams.forEach.bind(urlSearchParams),this.get=urlSearchParams.get.bind(urlSearchParams),this.getAll=urlSearchParams.getAll.bind(urlSearchParams),this.has=urlSearchParams.has.bind(urlSearchParams),this.keys=urlSearchParams.keys.bind(urlSearchParams),this.values=urlSearchParams.values.bind(urlSearchParams),this.toString=urlSearchParams.toString.bind(urlSearchParams)}}function useSearchParams(){(0,_clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");const searchParams=(0,_react.useContext)(_hooksclientcontext.SearchParamsContext),readonlySearchParams=(0,_react.useMemo)((()=>searchParams?new ReadonlyURLSearchParams(searchParams):null),[searchParams]);if("undefined"==typeof window){const{bailoutToClientRendering}=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js");if(bailoutToClientRendering())return readonlySearchParams}return readonlySearchParams}function usePathname(){return(0,_clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname"),(0,_react.useContext)(_hooksclientcontext.PathnameContext)}function useRouter(){(0,_clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");const router=(0,_react.useContext)(_approutercontext.AppRouterContext);if(null===router)throw new Error("invariant expected app router to be mounted");return router}function getSelectedParams(tree,params){void 0===params&&(params={});const parallelRoutes=tree[1];var _parallelRoutes_children;const node=null!=(_parallelRoutes_children=parallelRoutes.children)?_parallelRoutes_children:Object.values(parallelRoutes)[0];if(!node)return params;const segment=node[0],isDynamicParameter=Array.isArray(segment),segmentValue=isDynamicParameter?segment[1]:segment;return!segmentValue||segmentValue.startsWith("__PAGE__")?params:(isDynamicParameter&&(params[segment[0]]=segment[1]),getSelectedParams(node,params))}function useParams(){(0,_clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");const globalLayoutRouterContext=(0,_react.useContext)(_approutercontext.GlobalLayoutRouterContext);return globalLayoutRouterContext?getSelectedParams(globalLayoutRouterContext.tree):null}function getSelectedLayoutSegmentPath(tree,parallelRouteKey,first,segmentPath){let node;if(void 0===first&&(first=!0),void 0===segmentPath&&(segmentPath=[]),first)node=tree[1][parallelRouteKey];else{const parallelRoutes=tree[1];var _parallelRoutes_children;node=null!=(_parallelRoutes_children=parallelRoutes.children)?_parallelRoutes_children:Object.values(parallelRoutes)[0]}if(!node)return segmentPath;const segment=node[0],segmentValue=(0,_getsegmentvalue.getSegmentValue)(segment);return!segmentValue||segmentValue.startsWith("__PAGE__")?segmentPath:(segmentPath.push(segmentValue),getSelectedLayoutSegmentPath(node,parallelRouteKey,!1,segmentPath))}function useSelectedLayoutSegments(parallelRouteKey){void 0===parallelRouteKey&&(parallelRouteKey="children"),(0,_clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");const{tree}=(0,_react.useContext)(_approutercontext.LayoutRouterContext);return getSelectedLayoutSegmentPath(tree,parallelRouteKey)}function useSelectedLayoutSegment(parallelRouteKey){void 0===parallelRouteKey&&(parallelRouteKey="children"),(0,_clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");const selectedLayoutSegments=useSelectedLayoutSegments(parallelRouteKey);return 0===selectedLayoutSegments.length?null:selectedLayoutSegments[0]}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/not-found.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});const NOT_FOUND_ERROR_CODE="NEXT_NOT_FOUND";function notFound(){const error=new Error(NOT_FOUND_ERROR_CODE);throw error.digest=NOT_FOUND_ERROR_CODE,error}function isNotFoundError(error){return(null==error?void 0:error.digest)===NOT_FOUND_ERROR_CODE}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/redirect.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{redirect:function(){return redirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError}});const REDIRECT_ERROR_CODE="NEXT_REDIRECT";function redirect(url){const error=new Error(REDIRECT_ERROR_CODE);throw error.digest=REDIRECT_ERROR_CODE+";"+url,error}function isRedirectError(error){return"string"==typeof(null==error?void 0:error.digest)&&error.digest.startsWith(REDIRECT_ERROR_CODE+";")&&error.digest.length>REDIRECT_ERROR_CODE.length+1}function getURLFromRedirectError(error){return isRedirectError(error)?error.digest.slice(REDIRECT_ERROR_CODE.length+1):null}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js":(module,exports)=>{"use strict";function getSegmentValue(segment){return Array.isArray(segment)?segment[1]:segment}Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/static-generation-async-storage.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"staticGenerationAsyncStorage",{enumerable:!0,get:function(){return staticGenerationAsyncStorage}});const staticGenerationAsyncStorage=(0,__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js").createAsyncLocalStorage)();("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{suspense:function(){return suspense},NoSSR:function(){return NoSSR}});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const _nossrerror=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js");function suspense(){const error=new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);throw error.digest=_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE,error}function NoSSR(param){let{children}=param;return"undefined"==typeof window&&suspense(),children}},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"NEXT_DYNAMIC_NO_SSR_CODE",{enumerable:!0,get:function(){return NEXT_DYNAMIC_NO_SSR_CODE}});const NEXT_DYNAMIC_NO_SSR_CODE="DYNAMIC_SERVER_USAGE"},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{ServerInsertedHTMLContext:function(){return ServerInsertedHTMLContext},useServerInsertedHTML:function(){return useServerInsertedHTML}});const _react=__webpack_require__("./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),ServerInsertedHTMLContext=_react.default.createContext(null);function useServerInsertedHTML(callback){const addInsertedServerHTMLCallback=(0,_react.useContext)(ServerInsertedHTMLContext);addInsertedServerHTMLCallback&&addInsertedServerHTMLCallback(callback)}},"./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/next@13.3.2_@babel+core@7.21.5_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation.js")},"?1f41":()=>{}}]);