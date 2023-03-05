(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({290:"primitive-AvatarCard-stories",554:"primitive-Button-stories",790:"DropdownMenu-MoreMenu-stories",891:"Select-RatingSelect-stories",1163:"Color-stories",1399:"primitive-Panel-stories",1429:"primitive-Card-stories",1447:"LoadMore-stories",1521:"primitive-DropdownMenu-stories",1527:"Demo-stories",1682:"Skeleton-EPItemSkeleton-stories",1794:"primitive-Badge-stories",2141:"primitive-Select-stories",2248:"Skeleton-AvatarCardSkeleton-stories",2429:"primitive-Switch-stories",3325:"AvatarCard-RelationSubjectAvatarCard-stories",3729:"Dialog-Dialog-stories",3901:"Skeleton-CardGridSkeleton-stories",3912:"DropdownMenu-SortMenu-stories",4274:"Skeleton-RelationSubjectSkeleton-stories",4345:"Card-CollectionCard-stories",4374:"Toast-Toast-stories",4584:"SubjectContent-SubjectContent-stories",4692:"EPItem-EPItemList-stories",4816:"primitive-EPItem-stories",4831:"primitive-Dialog-stories",5315:"Select-CollectionTypeSelect-stories",5346:"DropdownMenu-AvatarMenu-stories",5798:"Skeleton-CardSkeleton-stories",6888:"Rating-Rating-stories",7158:"Panel-Panel-stories",7669:"Skeleton-SubjectPanelSkeleton-stories",7692:"primitive-Toast-stories",8461:"primitive-Rating-stories",8602:"Sidebar-stories",9525:"Subnav-stories",9946:"primitive-SubjectContent-stories"}[chunkId]||chunkId)+"."+{243:"7937264d",290:"bb578cb9",554:"15706015",790:"52bff5c4",891:"ae4a96c2",1126:"0312b9ef",1163:"dbe770dc",1399:"e9530bc3",1429:"23f001e6",1447:"37adc74d",1521:"e1ac291d",1527:"8679d234",1596:"a33895c4",1663:"29039a3f",1682:"4242ccad",1794:"c6bafda1",2141:"8235e83c",2248:"ca76b3d1",2429:"d43a4de3",2771:"dc6ba8f8",2834:"ee8a4542",3325:"b5cc456e",3571:"2b331e1f",3729:"dae34419",3791:"cb22fb33",3901:"445fc7ae",3912:"5b24d8e3",4058:"a0508aee",4274:"fda0454a",4345:"4028518e",4374:"334aaf31",4464:"bb9993a2",4584:"58927a7b",4686:"366e3d79",4692:"a2b11417",4800:"96d23150",4816:"d26021d0",4831:"2991a33f",5242:"f9a208a6",5315:"0dc0187c",5346:"c349e68e",5564:"539330da",5677:"9657a96f",5798:"dabd003d",5857:"9cb6cd6a",5889:"51382dad",6158:"779b31fd",6642:"92aca86d",6888:"d8bad123",6895:"14b71abb",7002:"a3fdf4e6",7158:"85923754",7669:"df1ffea9",7692:"19d28e94",8175:"4016efe3",8461:"c66e9970",8602:"1ced94bc",8743:"bf19f740",9099:"cfca510a",9525:"43b1785d",9612:"c0041f95",9946:"7967f434"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="bangumi.app:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","bangumi.app:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();