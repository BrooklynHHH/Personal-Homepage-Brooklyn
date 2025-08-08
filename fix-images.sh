#!/bin/bash

echo "🖼️ 修復圖片加載問題"
echo "=================="

# 服務器信息
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"

echo "📡 連接到服務器修復圖片問題..."

# 使用expect自動化修復
expect << 'EOF'
set timeout 30
spawn ssh root@101.132.99.23

expect "password:"
send "Hyr13870287190\r"

expect "root@"
send "echo '=== 修復Vite配置 ==='\r"

expect "root@"
send "cd /var/www/designer-portfolio\r"

expect "root@"
send "cat > vite.config.js << 'VITE_EOF'\r"

expect "root@"
send "import { defineConfig } from 'vite'\r"

expect "root@"
send "import react from '@vitejs/plugin-react'\r"

expect "root@"
send "import tailwindcss from '@tailwindcss/vite'\r"

expect "root@"
send "import path from 'path'\r"

expect "root@"
send "\r"

expect "root@"
send "// https://vite.dev/config/\r"

expect "root@"
send "export default defineConfig({\r"

expect "root@"
send "  base: '/',\r"

expect "root@"
send "  plugins: [react(),tailwindcss()],\r"

expect "root@"
send "  resolve: {\r"

expect "root@"
send "    alias: {\r"

expect "root@"
send "      \"@\": path.resolve(__dirname, \"./src\"),\r"

expect "root@"
send "    },\r"

expect "root@"
send "  },\r"

expect "root@"
send "  build: {\r"

expect "root@"
send "    assetsDir: 'assets',\r"

expect "root@"
send "    rollupOptions: {\r"

expect "root@"
send "      output: {\r"

expect "root@"
send "        assetFileNames: 'assets/[name].[hash].[ext]'\r"

expect "root@"
send "      }\r"

expect "root@"
send "    }\r"

expect "root@"
send "  }\r"

expect "root@"
send "})\r"

expect "root@"
send "VITE_EOF\r"

expect "root@"
send "echo '=== 清理並重新構建 ==='\r"

expect "root@"
send "rm -rf dist/\r"

expect "root@"
send "pnpm build\r"

expect "root@"
send "echo '=== 檢查構建結果 ==='\r"

expect "root@"
send "ls -la dist/assets/\r"

expect "root@"
send "echo '=== 修復文件權限 ==='\r"

expect "root@"
send "sudo chown -R www-data:www-data /var/www/designer-portfolio/\r"

expect "root@"
send "sudo chmod -R 755 /var/www/designer-portfolio/\r"

expect "root@"
send "echo '=== 重啟nginx ==='\r"

expect "root@"
send "sudo systemctl restart nginx\r"

expect "root@"
send "echo '=== 測試網站 ==='\r"

expect "root@"
send "curl -I http://localhost\r"

expect "root@"
send "echo '修復完成！請訪問 http://101.132.99.23'\r"

expect "root@"
send "exit\r"

expect eof
EOF

echo "✅ 圖片修復完成！"
echo "🌐 現在請訪問: http://101.132.99.23" 