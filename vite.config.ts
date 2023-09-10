import eslint from "@nabla/vite-plugin-eslint"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint(), svgr()],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
})
