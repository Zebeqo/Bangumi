(self.webpackChunkbangumi_app=self.webpackChunkbangumi_app||[]).push([[5284],{"./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/20/solid/BoltIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ForwardRef=React.forwardRef((function BoltIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{d:"M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"}))}));module.exports=ForwardRef},"./ui/primitive/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip_:()=>Tooltip_,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/regenerator/index.js"),C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),_storybook_jest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+jest@0.0.11-next.1/node_modules/@storybook/jest/dist/esm/index.js"),_ui_primitive_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/primitive/Tooltip.tsx"),_ui_primitive_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/primitive/Button.tsx"),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.16_react@18.2.0/node_modules/@heroicons/react/20/solid/BoltIcon.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@storybook+testing-library@0.0.14-next.1/node_modules/@storybook/testing-library/dist/esm/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Tooltip"};var _play,Tooltip_={args:{content:"This is a tooltip.",side:"top",align:"center",sideOffset:4},render:function render(_ref){var content=_ref.content,side=_ref.side,align=_ref.align,sideOffset=_ref.sideOffset;return __jsx(_ui_primitive_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u,{content,side,align,sideOffset},__jsx(_ui_primitive_Button__WEBPACK_IMPORTED_MODULE_4__.z,{variant:{type:"ghost",iconOnly:!0}},__jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_6__,{className:"h-6 w-6"})))},play:(_play=(0,C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)(C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(_ref2){var canvasElement,args,canvas,button,tooltip;return C_Users_z7155_WebstormProjects_dev_bangumi_dashboard_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref2.canvasElement,args=_ref2.args,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),button=canvas.getByRole("button"),_context.next=5,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.mV.hover(button);case 5:return _context.next=7,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_5__.sp.findByRole("tooltip");case 7:return tooltip=_context.sent,_context.next=10,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_2__.l)(tooltip).toHaveTextContent(args.content);case 10:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)}),argTypes:{side:{control:{type:"radio"},options:["top","right","bottom","left"]},align:{control:{type:"radio"},options:["start","center","end"]},sideOffset:{control:{type:"range",min:0,max:20,step:1}}}};Tooltip_.parameters={...Tooltip_.parameters,docs:{...Tooltip_.parameters?.docs,source:{originalSource:'{\n  args: {\n    content: "This is a tooltip.",\n    side: "top",\n    align: "center",\n    sideOffset: 4\n  },\n  render: function render(_ref) {\n    var content = _ref.content,\n      side = _ref.side,\n      align = _ref.align,\n      sideOffset = _ref.sideOffset;\n    return __jsx(Tooltip, {\n      content: content,\n      side: side,\n      align: align,\n      sideOffset: sideOffset\n    }, __jsx(Button, {\n      variant: {\n        type: "ghost",\n        iconOnly: true\n      }\n    }, __jsx(BoltIcon, {\n      className: "h-6 w-6"\n    })));\n  },\n  play: function () {\n    var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {\n      var canvasElement, args, canvas, button, tooltip;\n      return _regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            canvasElement = _ref2.canvasElement, args = _ref2.args;\n            canvas = within(canvasElement);\n            button = canvas.getByRole("button");\n            _context.next = 5;\n            return userEvent.hover(button);\n          case 5:\n            _context.next = 7;\n            return screen.findByRole("tooltip");\n          case 7:\n            tooltip = _context.sent;\n            _context.next = 10;\n            return expect(tooltip).toHaveTextContent(args.content);\n          case 10:\n          case "end":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    function play(_x) {\n      return _play.apply(this, arguments);\n    }\n    return play;\n  }(),\n  argTypes: {\n    side: {\n      control: {\n        type: "radio"\n      },\n      options: ["top", "right", "bottom", "left"]\n    },\n    align: {\n      control: {\n        type: "radio"\n      },\n      options: ["start", "center", "end"]\n    },\n    sideOffset: {\n      control: {\n        type: "range",\n        min: 0,\n        max: 20,\n        step: 1\n      }\n    }\n  }\n}',...Tooltip_.parameters?.docs?.source}}}},"?1f41":()=>{}}]);