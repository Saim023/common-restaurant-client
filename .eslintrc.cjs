module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",

		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-no-target-blank": "off",
		"react/prop-types": "off",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
	}
};
