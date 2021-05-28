import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import {uglify} from "rollup-plugin-uglify";
import sourceMaps from "rollup-plugin-sourcemaps";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

const suiteActive = process.env.BUILDTYPE === "suite";

const input = !suiteActive ? "src/index.tsx" : "src/suite.tsx";
const outputJs = !suiteActive ? "./dist/custom.js" : "./dist-suite/index.js";

export default {
    input: input,
    output: {
        name: "flowable.externals",
        file: outputJs,
        format: "umd",
        sourcemap: true,
        globals: {
            react: "flowable.React",
            "react-dom": "flowable.ReactDOM",
            "react-router": "flowable.ReactRouter",
            "@flowable/forms": "flowable.Forms",
            "@flowable/forms-work": "flowable.FormsWork",
            "@flowable/work": "flowable.Components",
        },
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve(),
        commonjs(),
        typescript(),
        uglify(),
        sourceMaps()
    ],
    external: [
        "react",
        "react-dom",
        "react-router",
        "@flowable/forms",
        "@flowable/work",
        "@flowable/work-scripts",
        "@flowable/forms-work"
    ],
};
