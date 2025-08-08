# 阿里雲服務器部署指南

## 服務器信息
- **IP地址**: 101.132.99.23
- **用戶名**: root
- **密碼**: Hyr13870287190
- **操作系統**: Ubuntu 24.04

## 方法一：使用Workbench連接（推薦）

### 1. 通過阿里雲控制台連接
1. 登錄阿里雲控制台
2. 進入ECS實例管理
3. 點擊"遠程連接"按鈕
4. 選擇"Workbench 一鍵連接"
5. 點擊"立即登錄"

### 2. 在服務器上執行以下命令

```bash
# 更新系統
sudo apt update -y

# 安裝Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# 安裝pnpm
sudo npm install -g pnpm

# 安裝nginx
sudo apt install -y nginx

# 創建項目目錄
mkdir -p /var/www/designer-portfolio
cd /var/www/designer-portfolio

# 克隆GitHub項目
git clone https://github.com/BrooklynHHH/Personal-Homepage-Brooklyn.git .

# 安裝依賴
pnpm install

# 構建項目
pnpm build

# 配置nginx
sudo cat > /etc/nginx/sites-available/designer-portfolio << 'EOF'
server {
    listen 80;
    server_name 101.132.99.23;
    root /var/www/designer-portfolio/dist;
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
EOF

# 啟用網站配置
sudo ln -sf /etc/nginx/sites-available/designer-portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 測試nginx配置
sudo nginx -t

# 重啟nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# 配置防火牆
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22
```

## 方法二：使用SSH命令行連接

### 1. 在本地終端執行
```bash
ssh root@101.132.99.23
```

### 2. 輸入密碼
```
Hyr13870287190
```

### 3. 執行上述部署命令

## 驗證部署

部署完成後，您可以通過以下方式訪問網站：

- **HTTP**: http://101.132.99.23
- **HTTPS**: https://101.132.99.23 (如果配置了SSL)

## 更新代碼

如果需要更新代碼，在服務器上執行：

```bash
cd /var/www/designer-portfolio
git pull origin main
pnpm install
pnpm build
sudo systemctl restart nginx
```

## 故障排除

### 1. 如果無法連接
- 檢查阿里雲安全組是否開放80端口
- 確認服務器狀態為"運行中"

### 2. 如果網站無法訪問
- 檢查nginx狀態: `sudo systemctl status nginx`
- 查看nginx錯誤日誌: `sudo tail -f /var/log/nginx/error.log`

### 3. 如果構建失敗
- 檢查Node.js版本: `node --version`
- 檢查pnpm版本: `pnpm --version`
- 清理緩存: `pnpm store prune`

## 安全建議

1. 更改默認SSH端口
2. 配置防火牆規則
3. 定期更新系統
4. 配置SSL證書（可選）

## 自動化部署腳本

您也可以使用提供的 `deploy.sh` 腳本進行自動化部署：

```bash
chmod +x deploy.sh
./deploy.sh
```

注意：需要先安裝 `sshpass`：
```bash
# macOS
brew install sshpass

# Ubuntu/Debian
sudo apt install sshpass
``` 