#!/bin/bash

echo "🔍 診斷網站問題"
echo "================"

# 服務器信息
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"

echo "📡 連接到服務器進行診斷..."

# 使用expect自動化診斷
expect << 'EOF'
set timeout 30
spawn ssh root@101.132.99.23

expect "password:"
send "Hyr13870287190\r"

expect "root@"
send "echo '=== 檢查項目目錄 ==='\r"

expect "root@"
send "ls -la /var/www/designer-portfolio/\r"

expect "root@"
send "echo '=== 檢查dist目錄 ==='\r"

expect "root@"
send "ls -la /var/www/designer-portfolio/dist/\r"

expect "root@"
send "echo '=== 檢查nginx配置 ==='\r"

expect "root@"
send "cat /etc/nginx/sites-available/designer-portfolio\r"

expect "root@"
send "echo '=== 檢查nginx錯誤日誌 ==='\r"

expect "root@"
send "tail -20 /var/log/nginx/error.log\r"

expect "root@"
send "echo '=== 檢查nginx訪問日誌 ==='\r"

expect "root@"
send "tail -20 /var/log/nginx/access.log\r"

expect "root@"
send "echo '=== 檢查防火牆狀態 ==='\r"

expect "root@"
send "sudo ufw status\r"

expect "root@"
send "echo '=== 檢查80端口 ==='\r"

expect "root@"
send "sudo netstat -tlnp | grep :80\r"

expect "root@"
send "echo '=== 測試本地訪問 ==='\r"

expect "root@"
send "curl -I http://localhost\r"

expect "root@"
send "echo '=== 檢查nginx進程 ==='\r"

expect "root@"
send "ps aux | grep nginx\r"

expect "root@"
send "exit\r"

expect eof
EOF

echo "✅ 診斷完成！" 