(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[4374],{"./node_modules/.pnpm/@storybook+addon-actions@7.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./components/Toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toast:()=>Toast,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),_hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./hooks/use-toast.ts"),_ui_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/Button.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.0.2_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.1.0/node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.1.0/node_modules/@storybook/jest/dist/esm/index.js"),_ui_StorybookDecorator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/StorybookDecorator.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { useToast } from "@/hooks/use-toast";\nimport { Button } from "@/ui/components/Button";\nimport { action } from "@storybook/addon-actions";\nimport { userEvent, within } from "@storybook/testing-library";\nimport { expect } from "@storybook/jest";\nimport { ToastDecorator } from "@/ui/StorybookDecorator";\n\nconst meta: Meta = {\n  title: "Toast",\n  decorators: [ToastDecorator],\n};\n\nexport default meta;\n\nexport const Toast: StoryObj<{\n  title: string;\n  description: string;\n  actionLabel: string;\n  toastType: "success" | "error" | "info";\n  onClickAction: () => void;\n}> = {\n  args: {\n    title: "更新成功！",\n    description: "进度已更新至第 8 集。",\n    actionLabel: "跳转至评论页",\n    toastType: "success",\n    onClickAction: action("toast action"),\n  },\n  render: ({ title, toastType, description, actionLabel, onClickAction }) => {\n    const toast = useToast();\n\n    return (\n      <Button\n        data-testid="toast"\n        onClick={() => {\n          toast({\n            type: toastType,\n            title: title,\n            description: description,\n            action: {\n              label: actionLabel,\n              onClick: onClickAction,\n            },\n          });\n        }}\n        variant="primary"\n        color={toastType}\n      >\n        success toast\n      </Button>\n    );\n  },\n  argTypes: {\n    toastType: {\n      control: {\n        type: "radio",\n      },\n      options: ["success", "error", "info"],\n    },\n  },\n  play: async ({ canvasElement, args }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByTestId("toast"));\n\n    const toast = await canvas.findByRole("status");\n    await expect(toast).toBeInTheDocument();\n    await expect(toast).toHaveTextContent(args.title);\n    await expect(toast).toHaveTextContent(args.description);\n    await expect(toast).toHaveTextContent(args.actionLabel);\n\n    await new Promise((r) => setTimeout(r, 200));\n    await userEvent.click(\n      within(toast).getByRole("button", { name: args.actionLabel })\n    );\n    await userEvent.click(within(toast).getByRole("button", { name: "Close" }));\n  },\n};\n',locationsMap:{toast:{startLoc:{col:5,line:22},endLoc:{col:1,line:78},startBody:{col:5,line:22},endBody:{col:1,line:78}}}}},title:"Toast",decorators:[_ui_StorybookDecorator__WEBPACK_IMPORTED_MODULE_7__.d$]};var _play,Toast={args:{title:"更新成功！",description:"进度已更新至第 8 集。",actionLabel:"跳转至评论页",toastType:"success",onClickAction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.aD)("toast action")},render:function render(_ref){var title=_ref.title,toastType=_ref.toastType,description=_ref.description,actionLabel=_ref.actionLabel,onClickAction=_ref.onClickAction,toast=(0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__.p)();return __jsx(_ui_components_Button__WEBPACK_IMPORTED_MODULE_3__.zx,{"data-testid":"toast",onClick:function onClick(){toast({type:toastType,title,description,action:{label:actionLabel,onClick:onClickAction}})},variant:"primary",color:toastType},"success toast")},argTypes:{toastType:{control:{type:"radio"},options:["success","error","info"]}},play:(_play=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(_ref2){var canvasElement,args,canvas,toast;return C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref2.canvasElement,args=_ref2.args,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),_context.next=4,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.mV.click(canvas.getByTestId("toast"));case 4:return _context.next=6,canvas.findByRole("status");case 6:return toast=_context.sent,_context.next=9,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_6__.l)(toast).toBeInTheDocument();case 9:return _context.next=11,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_6__.l)(toast).toHaveTextContent(args.title);case 11:return _context.next=13,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_6__.l)(toast).toHaveTextContent(args.description);case 13:return _context.next=15,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_6__.l)(toast).toHaveTextContent(args.actionLabel);case 15:return _context.next=17,new Promise((function(r){return setTimeout(r,200)}));case 17:return _context.next=19,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.mV.click((0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.uh)(toast).getByRole("button",{name:args.actionLabel}));case 19:return _context.next=21,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.mV.click((0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.uh)(toast).getByRole("button",{name:"Close"}));case 21:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Toast.parameters={...Toast.parameters,docs:{...Toast.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "更新成功！",\n    description: "进度已更新至第 8 集。",\n    actionLabel: "跳转至评论页",\n    toastType: "success",\n    onClickAction: action("toast action")\n  },\n  render: function render(_ref) {\n    var title = _ref.title,\n      toastType = _ref.toastType,\n      description = _ref.description,\n      actionLabel = _ref.actionLabel,\n      onClickAction = _ref.onClickAction;\n    var toast = useToast();\n    return __jsx(Button, {\n      "data-testid": "toast",\n      onClick: function onClick() {\n        toast({\n          type: toastType,\n          title: title,\n          description: description,\n          action: {\n            label: actionLabel,\n            onClick: onClickAction\n          }\n        });\n      },\n      variant: "primary",\n      color: toastType\n    }, "success toast");\n  },\n  argTypes: {\n    toastType: {\n      control: {\n        type: "radio"\n      },\n      options: ["success", "error", "info"]\n    }\n  },\n  play: function () {\n    var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {\n      var canvasElement, args, canvas, toast;\n      return _regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            canvasElement = _ref2.canvasElement, args = _ref2.args;\n            canvas = within(canvasElement);\n            _context.next = 4;\n            return userEvent.click(canvas.getByTestId("toast"));\n          case 4:\n            _context.next = 6;\n            return canvas.findByRole("status");\n          case 6:\n            toast = _context.sent;\n            _context.next = 9;\n            return expect(toast).toBeInTheDocument();\n          case 9:\n            _context.next = 11;\n            return expect(toast).toHaveTextContent(args.title);\n          case 11:\n            _context.next = 13;\n            return expect(toast).toHaveTextContent(args.description);\n          case 13:\n            _context.next = 15;\n            return expect(toast).toHaveTextContent(args.actionLabel);\n          case 15:\n            _context.next = 17;\n            return new Promise(function (r) {\n              return setTimeout(r, 200);\n            });\n          case 17:\n            _context.next = 19;\n            return userEvent.click(within(toast).getByRole("button", {\n              name: args.actionLabel\n            }));\n          case 19:\n            _context.next = 21;\n            return userEvent.click(within(toast).getByRole("button", {\n              name: "Close"\n            }));\n          case 21:\n          case "end":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    function play(_x) {\n      return _play.apply(this, arguments);\n    }\n    return play;\n  }()\n}',...Toast.parameters?.docs?.source}}}},"?1f41":()=>{}}]);