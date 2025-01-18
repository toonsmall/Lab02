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

// app/routes/lab2.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\lab2.jsx"
  );
  import.meta.hot.lastModified = "1737175227392.7256";
}
function lab2() {
  const [product, setProduct] = (0, import_react.useState)({ name: "", price: "", image: "" });
  const [products, setProducts] = (0, import_react.useState)([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price && product.image) {
      setProducts([...products, product]);
      setProduct({ name: "", price: "", image: "" });
    } else {
      alert("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19");
    }
  };
  const handleDelete = (index) => {
    if (window.confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32" }, void 0, false, {
      fileName: "app/routes/lab2.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          name: "name",
          placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
          value: product.name,
          onChange: handleChange
        },
        void 0,
        false,
        {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "number",
          name: "price",
          placeholder: "\u0E23\u0E32\u0E04\u0E32",
          value: product.price,
          onChange: handleChange
        },
        void 0,
        false,
        {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          name: "image",
          placeholder: "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E (URL)",
          value: product.image,
          onChange: handleChange
        },
        void 0,
        false,
        {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01" }, void 0, false, {
        fileName: "app/routes/lab2.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setProduct({ name: "", price: "", image: "" }), children: "\u0E40\u0E04\u0E25\u0E35\u0E22\u0E23\u0E4C" }, void 0, false, {
        fileName: "app/routes/lab2.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/lab2.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32" }, void 0, false, {
      fileName: "app/routes/lab2.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { border: "1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "No." }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32" }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "\u0E23\u0E32\u0E04\u0E32" }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32" }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23" }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/lab2.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/lab2.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: products.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: index + 1 }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.name }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: parseFloat(item.price).toFixed(2) }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.name, width: "50" }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 92,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDelete(index), children: "\u0E25\u0E1A" }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 95,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/lab2.jsx",
          lineNumber: 94,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/routes/lab2.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/routes/lab2.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/lab2.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/lab2.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
var lab2_default = lab2;
export {
  lab2_default as default
};
//# sourceMappingURL=/build/routes/lab2-7CDJPLKP.js.map
