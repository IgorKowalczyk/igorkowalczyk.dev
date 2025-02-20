// @ts-expect-error Missing type definitions
import eslintConfig from "@igorkowalczyk/eslint-config";
import type { Linter } from "eslint";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.react,
 ...eslintConfig.next,
 ...eslintConfig.node,
 ...eslintConfig.tailwindcss,
 ...eslintConfig.typescript,
 {
  name: "Override",
  rules: {
   "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
  },
 },
] satisfies Linter.Config[];
