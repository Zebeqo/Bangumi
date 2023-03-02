(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[692,554],{"./ui/primitive/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toast_:()=>Toast_,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Toast_$parameters,_Toast_$parameters2,_Toast_$parameters2$d,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/regenerator/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),_Toast__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/primitive/Toast.tsx"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.1/node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.0.11-next.0/node_modules/@storybook/jest/dist/esm/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.0-beta.45_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { Toast, ToastAction, ToastDescription, ToastProvider, ToastTitle } from "./Toast";\nimport { userEvent, within } from "@storybook/testing-library";\nimport { expect } from "@storybook/jest";\nimport { action } from "@storybook/addon-actions";\nconst meta: Meta = {\n  title: "Toast"\n};\nexport default meta;\nexport const Toast_: StoryObj<{\n  title: string;\n  description: string;\n  actionLabel: string;\n  isOpen: boolean;\n  toastType: "success" | "error" | "info";\n  onOpenChange: () => void;\n  onClickAction: () => void;\n}> = {\n  args: {\n    title: "更新成功！",\n    description: "进度已更新至第 8 集。",\n    actionLabel: "跳转至评论页",\n    isOpen: true,\n    toastType: "success",\n    onOpenChange: action("trigger close"),\n    onClickAction: action("toast action")\n  },\n  render: ({\n    title,\n    toastType,\n    description,\n    actionLabel,\n    isOpen,\n    onOpenChange,\n    onClickAction\n  }) => <ToastProvider>\r\n      <Toast toastType={toastType} open={isOpen} onOpenChange={onOpenChange}>\r\n        <ToastTitle>{title}</ToastTitle>\r\n        <ToastDescription>{description}</ToastDescription>\r\n        <ToastAction altText={actionLabel} onClick={onClickAction} aria-label={actionLabel}>\r\n          {actionLabel}\r\n        </ToastAction>\r\n      </Toast>\r\n    </ToastProvider>,\n  argTypes: {\n    toastType: {\n      control: {\n        type: "radio"\n      },\n      options: ["success", "error", "info"]\n    }\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    const toast = canvas.getByRole("status");\n    await expect(toast).toBeInTheDocument();\n    await expect(toast).toHaveTextContent(args.title);\n    await expect(toast).toHaveTextContent(args.description);\n    await expect(toast).toHaveTextContent(args.actionLabel);\n    await new Promise(r => setTimeout(r, 1));\n    await userEvent.click(within(toast).getByRole("button", {\n      name: args.actionLabel\n    }));\n    await expect(args.onOpenChange).toHaveBeenCalledTimes(1);\n    await userEvent.click(within(toast).getByRole("button", {\n      name: "Close"\n    }));\n    await expect(args.onClickAction).toHaveBeenCalledTimes(1);\n  }\n};\nToast_.parameters = {\n  ...Toast_.parameters,\n  docs: {\n    ...Toast_.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    title: \\"\\u66F4\\u65B0\\u6210\\u529F\\uFF01\\",\\n    description: \\"\\u8FDB\\u5EA6\\u5DF2\\u66F4\\u65B0\\u81F3\\u7B2C 8 \\u96C6\\u3002\\",\\n    actionLabel: \\"\\u8DF3\\u8F6C\\u81F3\\u8BC4\\u8BBA\\u9875\\",\\n    isOpen: true,\\n    toastType: \\"success\\",\\n    onOpenChange: action(\\"trigger close\\"),\\n    onClickAction: action(\\"toast action\\")\\n  },\\n  render: ({\\n    title,\\n    toastType,\\n    description,\\n    actionLabel,\\n    isOpen,\\n    onOpenChange,\\n    onClickAction\\n  }) => <ToastProvider>\\r\\n      <Toast toastType={toastType} open={isOpen} onOpenChange={onOpenChange}>\\r\\n        <ToastTitle>{title}</ToastTitle>\\r\\n        <ToastDescription>{description}</ToastDescription>\\r\\n        <ToastAction altText={actionLabel} onClick={onClickAction} aria-label={actionLabel}>\\r\\n          {actionLabel}\\r\\n        </ToastAction>\\r\\n      </Toast>\\r\\n    </ToastProvider>,\\n  argTypes: {\\n    toastType: {\\n      control: {\\n        type: \\"radio\\"\\n      },\\n      options: [\\"success\\", \\"error\\", \\"info\\"]\\n    }\\n  },\\n  play: async ({\\n    canvasElement,\\n    args\\n  }) => {\\n    const canvas = within(canvasElement);\\n    const toast = canvas.getByRole(\\"status\\");\\n    await expect(toast).toBeInTheDocument();\\n    await expect(toast).toHaveTextContent(args.title);\\n    await expect(toast).toHaveTextContent(args.description);\\n    await expect(toast).toHaveTextContent(args.actionLabel);\\n    await new Promise(r => setTimeout(r, 1));\\n    await userEvent.click(within(toast).getByRole(\\"button\\", {\\n      name: args.actionLabel\\n    }));\\n    await expect(args.onOpenChange).toHaveBeenCalledTimes(1);\\n    await userEvent.click(within(toast).getByRole(\\"button\\", {\\n      name: \\"Close\\"\\n    }));\\n    await expect(args.onClickAction).toHaveBeenCalledTimes(1);\\n  }\\n}",\n      ...Toast_.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{toast:{startLoc:{col:5,line:18},endLoc:{col:1,line:73},startBody:{col:5,line:18},endBody:{col:1,line:73}}}}},title:"Toast"};var _play,Toast_={args:{title:"更新成功！",description:"进度已更新至第 8 集。",actionLabel:"跳转至评论页",isOpen:!0,toastType:"success",onOpenChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.aD)("trigger close"),onClickAction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.aD)("toast action")},render:function render(_ref){var title=_ref.title,toastType=_ref.toastType,description=_ref.description,actionLabel=_ref.actionLabel,isOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,onClickAction=_ref.onClickAction;return __jsx(_Toast__WEBPACK_IMPORTED_MODULE_3__.VW,null,__jsx(_Toast__WEBPACK_IMPORTED_MODULE_3__.FN,{toastType,open:isOpen,onOpenChange},__jsx(_Toast__WEBPACK_IMPORTED_MODULE_3__.Mi,null,title),__jsx(_Toast__WEBPACK_IMPORTED_MODULE_3__.lj,null,description),__jsx(_Toast__WEBPACK_IMPORTED_MODULE_3__.gD,{altText:actionLabel,onClick:onClickAction,"aria-label":actionLabel},actionLabel)))},argTypes:{toastType:{control:{type:"radio"},options:["success","error","info"]}},play:(_play=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(_ref2){var canvasElement,args,canvas,toast;return C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_20_7_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref2.canvasElement,args=_ref2.args,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement),toast=canvas.getByRole("status"),_context.next=5,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(toast).toBeInTheDocument();case 5:return _context.next=7,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(toast).toHaveTextContent(args.title);case 7:return _context.next=9,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(toast).toHaveTextContent(args.description);case 9:return _context.next=11,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(toast).toHaveTextContent(args.actionLabel);case 11:return _context.next=13,new Promise((function(r){return setTimeout(r,1)}));case 13:return _context.next=15,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_4__.mV.click((0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_4__.uh)(toast).getByRole("button",{name:args.actionLabel}));case 15:return _context.next=17,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(args.onOpenChange).toHaveBeenCalledTimes(1);case 17:return _context.next=19,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_4__.mV.click((0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_4__.uh)(toast).getByRole("button",{name:"Close"}));case 19:return _context.next=21,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(args.onClickAction).toHaveBeenCalledTimes(1);case 21:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Toast_.parameters=_objectSpread(_objectSpread({},Toast_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Toast_$parameters=Toast_.parameters)||void 0===_Toast_$parameters?void 0:_Toast_$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "更新成功！",\n    description: "进度已更新至第 8 集。",\n    actionLabel: "跳转至评论页",\n    isOpen: true,\n    toastType: "success",\n    onOpenChange: action("trigger close"),\n    onClickAction: action("toast action")\n  },\n  render: ({\n    title,\n    toastType,\n    description,\n    actionLabel,\n    isOpen,\n    onOpenChange,\n    onClickAction\n  }) => <ToastProvider>\r\n      <Toast toastType={toastType} open={isOpen} onOpenChange={onOpenChange}>\r\n        <ToastTitle>{title}</ToastTitle>\r\n        <ToastDescription>{description}</ToastDescription>\r\n        <ToastAction altText={actionLabel} onClick={onClickAction} aria-label={actionLabel}>\r\n          {actionLabel}\r\n        </ToastAction>\r\n      </Toast>\r\n    </ToastProvider>,\n  argTypes: {\n    toastType: {\n      control: {\n        type: "radio"\n      },\n      options: ["success", "error", "info"]\n    }\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    const toast = canvas.getByRole("status");\n    await expect(toast).toBeInTheDocument();\n    await expect(toast).toHaveTextContent(args.title);\n    await expect(toast).toHaveTextContent(args.description);\n    await expect(toast).toHaveTextContent(args.actionLabel);\n    await new Promise(r => setTimeout(r, 1));\n    await userEvent.click(within(toast).getByRole("button", {\n      name: args.actionLabel\n    }));\n    await expect(args.onOpenChange).toHaveBeenCalledTimes(1);\n    await userEvent.click(within(toast).getByRole("button", {\n      name: "Close"\n    }));\n    await expect(args.onClickAction).toHaveBeenCalledTimes(1);\n  }\n}'},null===(_Toast_$parameters2=Toast_.parameters)||void 0===_Toast_$parameters2||null===(_Toast_$parameters2$d=_Toast_$parameters2.docs)||void 0===_Toast_$parameters2$d?void 0:_Toast_$parameters2$d.source)})})},"?8654":()=>{}}]);