(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cartItems": ()=>cartItems,
    "products": ()=>products
});
const products = [
    {
        id: 1,
        name: 'Adidas CoreFit T-Shirt',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 39.9,
        sizes: [
            's',
            'm',
            'l',
            'xl',
            'xxl'
        ],
        colors: [
            'gray',
            'purple',
            'green'
        ],
        images: {
            gray: '/products/1g.png',
            purple: '/products/1p.png',
            green: '/products/1gr.png'
        }
    },
    {
        id: 2,
        name: 'Puma Ultra Warm Zip',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 59.9,
        sizes: [
            's',
            'm',
            'l',
            'xl'
        ],
        colors: [
            'gray',
            'green'
        ],
        images: {
            gray: '/products/2g.png',
            green: '/products/2gr.png'
        }
    },
    {
        id: 3,
        name: 'Nike Air Essentials Pullover',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 69.9,
        sizes: [
            's',
            'm',
            'l'
        ],
        colors: [
            'green',
            'blue',
            'black'
        ],
        images: {
            green: '/products/3gr.png',
            blue: '/products/3b.png',
            black: '/products/3bl.png'
        }
    },
    {
        id: 4,
        name: 'Nike Dri Flex T-Shirt',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 29.9,
        sizes: [
            's',
            'm',
            'l'
        ],
        colors: [
            'white',
            'pink'
        ],
        images: {
            white: '/products/4w.png',
            pink: '/products/4p.png'
        }
    },
    {
        id: 5,
        name: 'Under Armour StormFleece',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 49.9,
        sizes: [
            's',
            'm',
            'l'
        ],
        colors: [
            'red',
            'orange',
            'black'
        ],
        images: {
            red: '/products/5r.png',
            orange: '/products/5o.png',
            black: '/products/5bl.png'
        }
    },
    {
        id: 6,
        name: 'Nike Air Max 270',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 59.9,
        sizes: [
            '40',
            '42',
            '43',
            '44'
        ],
        colors: [
            'gray',
            'white'
        ],
        images: {
            gray: '/products/6g.png',
            white: '/products/6w.png'
        }
    },
    {
        id: 7,
        name: 'Nike Ultraboost Pulse ',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 69.9,
        sizes: [
            '40',
            '42',
            '43'
        ],
        colors: [
            'gray',
            'pink'
        ],
        images: {
            gray: '/products/7g.png',
            pink: '/products/7p.png'
        }
    },
    {
        id: 8,
        name: 'Levi’s Classic Denim',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 59.9,
        sizes: [
            's',
            'm',
            'l'
        ],
        colors: [
            'blue',
            'green'
        ],
        images: {
            blue: '/products/8b.png',
            green: '/products/8gr.png'
        }
    }
];
const cartItems = [
    {
        id: 1,
        name: 'Adidas CoreFit T-Shirt',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 39.9,
        sizes: [
            's',
            'm',
            'l',
            'xl',
            'xxl'
        ],
        colors: [
            'gray',
            'purple',
            'green'
        ],
        images: {
            gray: '/products/1g.png',
            purple: '/products/1p.png',
            green: '/products/1gr.png'
        },
        quantity: 2,
        selectedSize: 'l',
        selectedColor: 'purple'
    },
    {
        id: 2,
        name: 'Puma Ultra Warm Zip',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 59.9,
        sizes: [
            's',
            'm',
            'l',
            'xl'
        ],
        colors: [
            'gray',
            'green'
        ],
        images: {
            gray: '/products/2g.png',
            green: '/products/2gr.png'
        },
        quantity: 1,
        selectedSize: 'xl',
        selectedColor: 'gray'
    },
    {
        id: 3,
        name: 'Nike Air Essentials Pullover',
        shortDescription: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
        price: 69.9,
        sizes: [
            's',
            'm',
            'l'
        ],
        colors: [
            'green',
            'blue',
            'black'
        ],
        images: {
            green: '/products/3gr.png',
            blue: '/products/3b.png',
            black: '/products/3bl.png'
        },
        quantity: 2,
        selectedSize: 'l',
        selectedColor: 'green'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/cart/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/src/app/cart/page.tsx'\n\nExpected '</', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}}),
"[project]/node_modules/.pnpm/lucide-react@0.539.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ArrowRight
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$539$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.539.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$539$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.539.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ArrowRight": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$539$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$539$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.539.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_b62942e7._.js.map