#!/bin/bash

echo "🔍 檢查服務器代碼狀態並強制更新..."

# 服務器信息
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"

echo "📡 連接到服務器檢查狀態..."

# 使用expect自動化SSH連接
expect << 'EOF'
set timeout 60
spawn ssh root@101.132.99.23

expect "password:"
send "Hyr13870287190\r"

expect "root@"
send "cd /var/www/designer-portfolio\r"

expect "root@"
send "git status\r"

expect "root@"
send "git log --oneline -5\r"

expect "root@"
send "git stash\r"

expect "root@"
send "git reset --hard origin/master\r"

expect "root@"
send "git pull origin master\r"

expect "root@"
send "pnpm install\r"

expect "root@"
send "pnpm build\r"

expect "root@"
send "sudo systemctl restart nginx\r"

expect "root@"
send "echo '強制更新完成！'\r"

expect "root@"
send "exit\r"

expect eof
EOF

echo "✅ 服務器強制更新完成！"
echo "🌐 您的網站現在可以通過以下地址訪問："
echo "   http://101.132.99.23" 