import eslintConfig from "@igorkowalczyk/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
 eslintConfig.base,
 eslintConfig.react,
 eslintConfig.next,
 eslintConfig.node,
 eslintConfig.typescript,
 {
  name: "Override",
  rules: {
   "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
  },
 },
]);
