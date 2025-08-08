#!/bin/bash

echo "🚀 快速部署React項目到阿里雲服務器"
echo "=================================="

# 服務器信息
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"

echo "📡 連接到服務器 $SERVER_IP..."

# 使用expect自動化SSH連接和命令執行
expect << 'EOF'
set timeout 30
spawn ssh root@101.132.99.23

expect "password:"
send "Hyr13870287190\r"

expect "root@"
send "echo '開始部署...'\r"

expect "root@"
send "sudo apt update -y\r"

expect "root@"
send "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -\r"

expect "root@"
send "sudo apt-get install -y nodejs\r"

expect "root@"
send "sudo npm install -g pnpm\r"

expect "root@"
send "sudo apt install -y nginx\r"

expect "root@"
send "mkdir -p /var/www/designer-portfolio\r"

expect "root@"
send "cd /var/www/designer-portfolio\r"

expect "root@"
send "git clone https://github.com/BrooklynHHH/Personal-Homepage-Brooklyn.git .\r"

expect "root@"
send "pnpm install\r"

expect "root@"
send "pnpm build\r"

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
send "}\r"

expect "root@"
send "NGINX_EOF\r"

expect "root@"
send "sudo ln -sf /etc/nginx/sites-available/designer-portfolio /etc/nginx/sites-enabled/\r"

expect "root@"
send "sudo rm -f /etc/nginx/sites-enabled/default\r"

expect "root@"
send "sudo nginx -t\r"

expect "root@"
send "sudo systemctl restart nginx\r"

expect "root@"
send "sudo systemctl enable nginx\r"

expect "root@"
send "sudo ufw allow 80\r"

expect "root@"
send "sudo ufw allow 443\r"

expect "root@"
send "sudo ufw allow 22\r"

expect "root@"
send "echo '部署完成！網站地址: http://101.132.99.23'\r"

expect "root@"
send "exit\r"

expect eof
EOF

echo "✅ 部署完成！"
echo "🌐 您的網站現在可以通過以下地址訪問："
echo "   http://101.132.99.23" 