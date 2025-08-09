#!/bin/bash

echo "🔄 更新服務器代碼..."
echo "=================================="

# 服務器信息
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"
PROJECT_PATH="/var/www/designer-portfolio"

echo "📡 連接到服務器 $SERVER_IP..."

# 使用sshpass執行遠程命令
sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_IP" << 'EOF'

echo "📁 進入項目目錄..."
cd /var/www/designer-portfolio

echo "📥 拉取最新代碼..."
git pull origin master

echo "📦 安裝依賴..."
pnpm install

echo "🔨 重新構建項目..."
pnpm build

echo "🔄 重啟nginx服務..."
sudo systemctl restart nginx

echo "✅ 服務器更新完成！"
echo "🌐 您的網站現在可以通過以下地址訪問："
echo "   http://101.132.99.23"

EOF

echo "🎉 服務器更新完成！"
echo "📱 您現在可以通過 http://101.132.99.23 訪問更新後的網站" 