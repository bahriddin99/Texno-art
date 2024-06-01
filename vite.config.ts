import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias : [
      {find: "@", replacement: "/src/*"},
      {find: "@pages", replacement: "/src/pages"},
      {find: "@services", replacement: "/src/services/config"},
      {find: "@routers", replacement: "/src/router/routers.tsx"},
      {find: "@auth-services", replacement: "/src/services/auth/auth.ts"},

      {find: "@interface", replacement: "/src/interface"},
      {find: "@auth", replacement: "/src/interfaces/auth.ts"},
      {find: "@container", replacement: "/src/components/containers"},

      {find: "@layout", replacement: "/src/components/layout/layout.tsx"},
      {find: "@account", replacement: "/src/components/ui/account.tsx"},

      {find: "@cookies", replacement: "/src/utils/cookies.ts"},
      {find: "@validation", replacement: "/src/utils/validations.ts"},
      {find: "@notifation", replacement: "/src/utils/notifation.ts"},
    ]
  }
})  
