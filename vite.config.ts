import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias : [
      {find: "@", replacement: "/src/*"},
      {find: "@authstore", replacement: "/src/store/auth.ts"},
      {find: "delet", replacement: "/src/delet.tsx"},
      {find: "edit", replacement: "/src/edit.tsx"},

      {find: "@pages", replacement: "/src/pages"},
      {find: "@routers", replacement: "/src/router/routers.tsx"},

      {find: "@services", replacement: "/src/services/config"},
      {find: "@auth-services", replacement: "/src/services/auth/auth.ts"},
      {find: "@category-services", replacement: "/src/services/category/category.ts"},

      {find: "@interface", replacement: "/src/interface"},
      {find: "@auth", replacement: "/src/interfaces/auth.ts"},
      {find: "@global", replacement: "/src/interfaces/global.ts"},
      {find: "@category", replacement: "/src/interfaces/category.ts"},
      
      {find: "@container", replacement: "/src/components/containers"},
      {find: "@layout", replacement: "/src/components/layout/layout.tsx"},
      {find: "@account", replacement: "/src/components/ui/account.tsx"},
      {find: "@globaltable", replacement: "/src/components/ui/table.tsx"},
      {find: "@globalpaganation", replacement: "/src/components/ui/pagination.tsx"},

      {find: "@cookies", replacement: "/src/utils/cookies.ts"},
      {find: "@validation", replacement: "/src/utils/validations.ts"},
      {find: "@notifation", replacement: "/src/utils/notifation.ts"},
    ]
  }
})  
