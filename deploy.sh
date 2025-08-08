#!/bin/bash

# 部署腳本 - 自動部署React項目到阿里雲服務器
# 使用方法: ./deploy.sh

# 服務器配置
SERVER_IP="101.132.99.23"
SERVER_USER="root"
SERVER_PASSWORD="Hyr13870287190"
GITHUB_REPO="https://github.com/BrooklynHHH/Personal-Homepage-Brooklyn.git"
PROJECT_NAME="designer-portfolio"

echo "🚀 開始部署項目到阿里雲服務器..."

# 1. 連接到服務器並執行部署命令
sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_IP" << 'EOF'

echo "📦 更新系統包..."
sudo apt update -y

echo "🐍 安裝Node.js和npm..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

echo "📦 安裝pnpm..."
sudo npm install -g pnpm

echo "🌐 安裝nginx..."
sudo apt install -y nginx

echo "📁 創建項目目錄..."
mkdir -p /var/www/$PROJECT_NAME
cd /var/www/$PROJECT_NAME

echo "📥 克隆GitHub項目..."
if [ -d ".git" ]; then
    echo "項目已存在，更新代碼..."
    git pull origin main
else
    echo "克隆新項目..."
    git clone $GITHUB_REPO .
fi

echo "📦 安裝項目依賴..."
pnpm install

echo "🔨 構建項目..."
pnpm build

echo "📁 配置nginx..."
sudo cat > /etc/nginx/sites-available/$PROJECT_NAME << 'NGINX_CONFIG'
server {
    listen 80;
    server_name 101.132.99.23;
    root /var/www/$PROJECT_NAME/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 靜態資源緩存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 安全頭
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
NGINX_CONFIG

echo "🔗 啟用網站配置..."
sudo ln -sf /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

echo "🔧 測試nginx配置..."
sudo nginx -t

echo "🔄 重啟nginx服務..."
sudo systemctl restart nginx
sudo systemctl enable nginx

echo "🔥 配置防火牆..."
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22

echo "✅ 部署完成！"
echo "🌐 您的網站現在可以通過以下地址訪問："
echo "   http://101.132.99.23"
echo "   https://101.132.99.23 (如果配置了SSL)"

EOF

echo "🎉 部署腳本執行完成！"
echo "📱 您現在可以通過 http://101.132.99.23 訪問您的網站" 