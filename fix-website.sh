#!/bin/bash

echo "🔧 修復網站問題"
echo "================"

# 服務器信息
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"

echo "📡 連接到服務器進行修復..."

# 使用expect自動化修復
expect << 'EOF'
set timeout 30
spawn ssh root@101.132.99.23

expect "password:"
send "Hyr13870287190\r"

expect "root@"
send "echo '=== 重新構建項目 ==='\r"

expect "root@"
send "cd /var/www/designer-portfolio\r"

expect "root@"
send "pnpm install\r"

expect "root@"
send "pnpm build\r"

expect "root@"
send "echo '=== 檢查dist目錄 ==='\r"

expect "root@"
send "ls -la dist/\r"

expect "root@"
send "echo '=== 修復文件權限 ==='\r"

expect "root@"
send "sudo chown -R www-data:www-data /var/www/designer-portfolio/\r"

expect "root@"
send "sudo chmod -R 755 /var/www/designer-portfolio/\r"

expect "root@"
send "echo '=== 重新配置nginx ==='\r"

expect "root@"
send "sudo cat > /etc/nginx/sites-available/designer-portfolio << 'NGINX_EOF'\r"

expect "root@"
send "server {\r"

expect "root@"
send "    listen 80;\r"

expect "root@"
send "    server_name 101.132.99.23;\r"

expect "root@"
send "    root /var/www/designer-portfolio/dist;\r"

expect "root@"
send "    index index.html;\r"

expect "root@"
send "    location / {\r"

expect "root@"
send "        try_files \$uri \$uri/ /index.html;\r"

expect "root@"
send "    }\r"

expect "root@"
send "    error_log /var/log/nginx/designer-portfolio_error.log;\r"

expect "root@"
send "    access_log /var/log/nginx/designer-portfolio_access.log;\r"

expect "root@"
send "}\r"

expect "root@"
send "NGINX_EOF\r"

expect "root@"
send "sudo nginx -t\r"

expect "root@"
send "sudo systemctl restart nginx\r"

expect "root@"
send "echo '=== 測試網站 ==='\r"

expect "root@"
send "curl -I http://localhost\r"

expect "root@"
send "echo '=== 檢查nginx狀態 ==='\r"

expect "root@"
send "sudo systemctl status nginx\r"

expect "root@"
send "echo '修復完成！請訪問 http://101.132.99.23'\r"

expect "root@"
send "exit\r"

expect eof
EOF

echo "✅ 修復完成！"
echo "🌐 現在請訪問: http://101.132.99.23" 