const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:typescript-sort-keys/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:jsx-a11y/recommended",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: ["react-refresh", "sort-keys-fix"],
	rules: {
		"sort-keys-fix/sort-keys-fix": "warn",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
	settings: {
		react: { version: "detect" },
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			typescript: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			alias: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				map: [["@", "./src"]],
			},
		},
	},
})
