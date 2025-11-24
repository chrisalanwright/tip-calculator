import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'tip-calculator' with your actual repo name if different
export default defineConfig({
  base: "/tip-calculator/",
  plugins: [react()],
});
