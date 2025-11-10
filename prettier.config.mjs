import config from "@igorkowalczyk/prettier-config";

/**
 * @type {import("prettier").Options}
 */
const prettierConfig = {
 ...config,
 plugins: ["prettier-plugin-tailwindcss"],
};

export default prettierConfig;
