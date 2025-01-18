import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-H22ZXFQC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/myCardForm.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\myCardForm.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\myCardForm.jsx"
  );
  import.meta.hot.lastModified = "1737174602665.0208";
}
var MyCardFrom = () => {
  _s();
  const [myName, setMyname] = (0, import_react.useState)("");
  const [myStatus, setMyStatus] = (0, import_react.useState)(true);
  const [myMajor, setMymajor] = (0, import_react.useState)("");
  const [myTemplate, setmyTemplate] = (0, import_react.useState)("");
  const [myIndex, setIndex] = (0, import_react.useState)(0);
  const [myCards, setmyCards] = (0, import_react.useState)([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    setmyCards([...myCards, {
      id: myIndex,
      name: formJson.myName
    }]);
    setIndex(myIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-lg font-bold", children: "\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E32\u0E21\u0E1A\u0E31\u0E15\u0E23" }, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 :",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "myName", className: "border-solid border-2 border-indigo-600", onChange: (event) => setMyname(event.target.value) }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 51,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E19\u0E32\u0E21\u0E1A\u0E31\u0E15\u0E23 :",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "myStatus", defaultChecked: true, className: "border border-blue-300", onChange: (event) => setMyStatus(event.target.checked) }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u0E2A\u0E32\u0E02\u0E32\u0E27\u0E34\u0E0A\u0E32 :",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 60,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "myMajor", value: "IT", onChange: (event) => setMymajor(event.target.value) }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "m-2", children: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28" }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 62,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "myMajor", value: "CS", onChange: (event) => setMymajor(event.target.value) }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "m-2", children: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C" }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "myMajor", value: "DBI", onChange: (event) => setMymajor(event.target.value) }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "m-2", children: "\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E14\u0E34\u0E08\u0E34\u0E15\u0E2D\u0E25" }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E19\u0E32\u0E21\u0E1A\u0E31\u0E15\u0E23 : ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 78,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "myTemplate", className: "border border-blue-300", onChange: (event) => setmyTemplate(event.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "--\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A--" }, void 0, false, {
            fileName: "app/routes/myCardForm.jsx",
            lineNumber: 80,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "bg-red-300", children: "Apple" }, void 0, false, {
            fileName: "app/routes/myCardForm.jsx",
            lineNumber: 83,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "bg-yellow-300", children: "Banana" }, void 0, false, {
            fileName: "app/routes/myCardForm.jsx",
            lineNumber: 86,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "bg-orange-300", children: "Orange" }, void 0, false, {
            fileName: "app/routes/myCardForm.jsx",
            lineNumber: 89,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 79,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-green-300 m-2 p-2", children: "SAVE" }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "reset", className: "bg-red-300 m-2 p-2", children: "CLEAR" }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 99,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/myCardForm.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/myCardForm.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-lg font-bold", children: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E32\u0E21\u0E1A\u0E31\u0E15\u0E23\u0E08\u0E32\u0E01 Object Array" }, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "border border-blue-300 rounded-lg p-3 m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: myCards.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        item.name + "",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-red-300 p-2 m-2", onClick: () => {
          setmyCards(myCards.filter((temp) => temp.id !== item.id));
        }, children: "Delete" }, void 0, false, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 114,
          columnNumber: 29
        }, this)
      ] }, index, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 112,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 111,
        columnNumber: 16
      }, this) }, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "border border-green-200 border-radius-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: myTemplate !== "" ? "shadow bx-border  border-3 " + myTemplate : "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 : ",
          myName !== "" ? myName : "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"
        ] }, void 0, true, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 125,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E19\u0E32\u0E21\u0E1A\u0E31\u0E15\u0E23 : ",
          myStatus !== false ? "On" : "Close"
        ] }, void 0, true, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 128,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "\u0E2A\u0E32\u0E02\u0E32\u0E27\u0E34\u0E0A\u0E32 : ",
          myMajor !== "" ? myMajor : "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E32\u0E02\u0E32\u0E27\u0E34\u0E0A\u0E32"
        ] }, void 0, true, {
          fileName: "app/routes/myCardForm.jsx",
          lineNumber: 131,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/myCardForm.jsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/myCardForm.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/myCardForm.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s(MyCardFrom, "T3DEKjUYytmluWeVcqG3aMYWiU0=");
_c = MyCardFrom;
var myCardForm_default = MyCardFrom;
var _c;
$RefreshReg$(_c, "MyCardFrom");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  myCardForm_default as default
};
//# sourceMappingURL=/build/routes/myCardForm-V5A5PIP6.js.map
