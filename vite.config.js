import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg','src/assets/react.svg'],
      display: "standalone",
      manifest: {
        name: '"Tic-Tac Toe" Game',
        short_name: 'Tic-Tac-Toe',
        description: 'Tic-Tac-Toe - play with friends!',
        theme_color: '#2a2a2a',
        icons: [
          {
            "src": "public/icon192.png",
            "sizes": "192x192",
          },
          {
            "src": "public/icon512.png",
            "sizes": "512x512"
          },
        ]
      }
     })
  ]
})
