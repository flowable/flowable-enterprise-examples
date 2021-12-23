import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import json from "rollup-plugin-json";
// import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";
import replace from "rollup-plugin-replace";

const globals = {
  "@flowable/forms": "flwforms",
  react: "React",
  moment: "moment",
  "react-dom": "reactDOM",
};
const ext = ["moment", ...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)];

const baseConfig = {
  input: "src/index.tsx",
  plugins: [
    replace({
      ENVIRONMENT: JSON.stringify("production"),
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    external(),
    postcss({
      modules: false,
      extract: true,
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs({
      namedExports: {
        "node_modules/@flowable/forms/index.js": ["Model", "_", "ComponentStore"],
        "node_modules/recharts-scale/lib/index.js": ["getNiceTickValues", "getTickValuesFixedDomain"],
        "node_modules/react-waypoint/node_modules/react-is/index.js": ["isForwardRef"],
        "node_modules/react-is/index.js": ["isForwardRef"],
      },
    }),
    json({
      // include: "src/**",
    }),
    // terser(),
    filesize(),
  ],
  external: ext,
};

const configs = [
  {
    output: [
      {
        file: pkg.module,
        format: "es",
        exports: "default",
        sourcemap: true,
      },
    ],
    external: ["moment", ...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)],
  },
  {
    output: [
      {
        format: "umd",
        sourcemap: true,
        file: pkg.main,
        name: "flwFormsWork",
        globals,
      },
    ],
    external: ["moment"],
  },
];

const res = configs.map((config) => ({ ...baseConfig, ...config }));
export default res;
