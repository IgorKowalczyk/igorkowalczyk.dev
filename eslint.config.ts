import baseConfig from "@igorkowalczyk/eslint-config/base";
import nextConfig from "@igorkowalczyk/eslint-config/next";
import nodeConfig from "@igorkowalczyk/eslint-config/node";
import reactConfig from "@igorkowalczyk/eslint-config/react";
import typescriptConfig from "@igorkowalczyk/eslint-config/typescript";
import { defineConfig } from "eslint/config";

export default defineConfig(
  //
  ...baseConfig,
  ...reactConfig,
  ...nextConfig,
  ...nodeConfig,
  ...typescriptConfig,
  {
    name: "Override",
    rules: {
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
    },
  }
);
