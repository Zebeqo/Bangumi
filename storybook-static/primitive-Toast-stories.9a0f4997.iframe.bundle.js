(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[7692],{"./node_modules/.pnpm/@storybook+addon-actions@7.0.0-rc.4_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_NX5DM7EF.aD});var chunk_NX5DM7EF=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.0-rc.4_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/chunk-NX5DM7EF.mjs");__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.0-rc.4_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/chunk-27H5MDCK.mjs")},"./ui/primitive/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toast_:()=>Toast_,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),_Toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/primitive/Toast.tsx"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.1/node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.0.11-next.0/node_modules/@storybook/jest/dist/esm/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.0-rc.4_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Toast"};var _play,Toast_={args:{title:"更新成功！",description:"进度已更新至第 8 集。",actionLabel:"跳转至评论页",isOpen:!0,toastType:"success",onOpenChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.aD)("trigger close"),onClickAction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.aD)("toast action")},render:function render(_ref){var title=_ref.title,toastType=_ref.toastType,description=_ref.description,actionLabel=_ref.actionLabel,isOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,onClickAction=_ref.onClickAction;return __jsx(_Toast__WEBPACK_IMPORTED_MODULE_2__.VW,null,__jsx(_Toast__WEBPACK_IMPORTED_MODULE_2__.FN,{toastType,open:isOpen,onOpenChange},__jsx(_Toast__WEBPACK_IMPORTED_MODULE_2__.Mi,null,title),__jsx(_Toast__WEBPACK_IMPORTED_MODULE_2__.lj,null,description),__jsx(_Toast__WEBPACK_IMPORTED_MODULE_2__.gD,{altText:actionLabel,onClick:onClickAction,"aria-label":actionLabel},actionLabel)))},argTypes:{toastType:{control:{type:"radio"},options:["success","error","info"]}},play:(_play=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.Z)(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(_ref2){var canvasElement,args,canvas,toast;return C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref2.canvasElement,args=_ref2.args,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement),toast=canvas.getByRole("status"),_context.next=5,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(toast).toBeInTheDocument();case 5:return _context.next=7,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(toast).toHaveTextContent(args.title);case 7:return _context.next=9,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(toast).toHaveTextContent(args.description);case 9:return _context.next=11,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(toast).toHaveTextContent(args.actionLabel);case 11:return _context.next=13,new Promise((function(r){return setTimeout(r,1)}));case 13:return _context.next=15,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.mV.click((0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.uh)(toast).getByRole("button",{name:args.actionLabel}));case 15:return _context.next=17,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(args.onOpenChange).toHaveBeenCalledTimes(1);case 17:return _context.next=19,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.mV.click((0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.uh)(toast).getByRole("button",{name:"Close"}));case 19:return _context.next=21,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(args.onClickAction).toHaveBeenCalledTimes(1);case 21:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Toast_.parameters={...Toast_.parameters,docs:{...Toast_.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "更新成功！",\n    description: "进度已更新至第 8 集。",\n    actionLabel: "跳转至评论页",\n    isOpen: true,\n    toastType: "success",\n    onOpenChange: action("trigger close"),\n    onClickAction: action("toast action")\n  },\n  render: function render(_ref) {\n    var title = _ref.title,\n      toastType = _ref.toastType,\n      description = _ref.description,\n      actionLabel = _ref.actionLabel,\n      isOpen = _ref.isOpen,\n      onOpenChange = _ref.onOpenChange,\n      onClickAction = _ref.onClickAction;\n    return __jsx(ToastProvider, null, __jsx(Toast, {\n      toastType: toastType,\n      open: isOpen,\n      onOpenChange: onOpenChange\n    }, __jsx(ToastTitle, null, title), __jsx(ToastDescription, null, description), __jsx(ToastAction, {\n      altText: actionLabel,\n      onClick: onClickAction,\n      "aria-label": actionLabel\n    }, actionLabel)));\n  },\n  argTypes: {\n    toastType: {\n      control: {\n        type: "radio"\n      },\n      options: ["success", "error", "info"]\n    }\n  },\n  play: function () {\n    var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {\n      var canvasElement, args, canvas, toast;\n      return _regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            canvasElement = _ref2.canvasElement, args = _ref2.args;\n            canvas = within(canvasElement);\n            toast = canvas.getByRole("status");\n            _context.next = 5;\n            return expect(toast).toBeInTheDocument();\n          case 5:\n            _context.next = 7;\n            return expect(toast).toHaveTextContent(args.title);\n          case 7:\n            _context.next = 9;\n            return expect(toast).toHaveTextContent(args.description);\n          case 9:\n            _context.next = 11;\n            return expect(toast).toHaveTextContent(args.actionLabel);\n          case 11:\n            _context.next = 13;\n            return new Promise(function (r) {\n              return setTimeout(r, 1);\n            });\n          case 13:\n            _context.next = 15;\n            return userEvent.click(within(toast).getByRole("button", {\n              name: args.actionLabel\n            }));\n          case 15:\n            _context.next = 17;\n            return expect(args.onOpenChange).toHaveBeenCalledTimes(1);\n          case 17:\n            _context.next = 19;\n            return userEvent.click(within(toast).getByRole("button", {\n              name: "Close"\n            }));\n          case 19:\n            _context.next = 21;\n            return expect(args.onClickAction).toHaveBeenCalledTimes(1);\n          case 21:\n          case "end":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    function play(_x) {\n      return _play.apply(this, arguments);\n    }\n    return play;\n  }()\n}',...Toast_.parameters?.docs?.source}}}},"?1f41":()=>{}}]);