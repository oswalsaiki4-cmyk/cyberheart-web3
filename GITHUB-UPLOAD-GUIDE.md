# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

GitHub会显示命令。在你的**本地终端**运行：

```bash
cd /path/to/cyberheart  # 进入项目目录

# 添加GitHub仓库地址（替换YOUR_USERNAME和YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送代码
git branch -M main
git push -u origin main
```

**示例（替换成你的）：**
```bash
git remote add origin https://github.com/username/cyberheart-website.git
git branch -M main  
git push -u origin main
```

## 步骤3：上传Logo和白皮书

### 方法1：通过GitHub网页上传

1. 进入你的GitHub仓库
2. 点击 `public` 文件夹
3. 点击 **Add file** → **Upload files**
4. 拖拽你的文件：
   - `logo.png` (你的logo)
   - `litepaper.pdf` (你的白皮书)
5. 填写提交信息，点击 **Commit changes**

### 方法2：通过命令行上传

```bash
# 在本地cyberheart/public文件夹中放入你的文件
cp /path/to/your/logo.png cyberheart/public/logo.png
cp /path/to/your/litepaper.pdf cyberheart/public/litepaper.pdf

# 提交并推送
cd cyberheart
git add public/logo.png public/litepaper.pdf
git commit -m "Add logo and litepaper"
git push
```

## 文件要求

### Logo (`public/logo.png`)
- 文件名：必须是 `logo.png`  
- 推荐尺寸：512x512px 或 1024x1024px
- 格式：PNG（支持透明背景最佳）
- 文件大小：建议 < 500KB

### 白皮书 (`public/litepaper.pdf`)
- 文件名：必须是 `litepaper.pdf`
- 格式：PDF
- 文件大小：建议 < 10MB

## 如果要修改文件名

 `logo.png` 或 `litepaper.pdf`，需要修改代码：

### 修改Logo文件名
 `src/app/layout.tsx` 和 `src/app/page.tsx`，将所有 `/logo.png` 改为你的文件名。

### 修改白皮书文件名  
 `src/app/page.tsx`，找到：
```tsx
<a href="/litepaper.pdf"
```
cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

GitHub会显示命令。在你的**本地终端**运行：

```bash
cd /path/to/cyberheart  # 进入项目目录

# 添加GitHub仓库地址（替换YOUR_USERNAME和YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送代码
git branch -M main
git push -u origin main
```

**示例（替换成你的）：**
```bash
git remote add origin https://github.com/username/cyberheart-website.git
git branch -M main  
git push -u origin main
```

## 步骤3：上传Logo和白皮书

### 方法1：通过GitHub网页上传

1. 进入你的GitHub仓库
2. 点击 `public` 文件夹
3. 点击 **Add file** → **Upload files**
4. 拖拽你的文件：
   - `logo.png` (你的logo)
   - `litepaper.pdf` (你的白皮书)
5. 填写提交信息，点击 **Commit changes**

### 方法2：通过命令行上传

```bash
# 在本地cyberheart/public文件夹中放入你的文件
cp /path/to/your/logo.png cyberheart/public/logo.png
cp /path/to/your/litepaper.pdf cyberheart/public/litepaper.pdf

# 提交并推送
cd cyberheart
git add public/logo.png public/litepaper.pdf
git commit -m "Add logo and litepaper"
git push
```

## 文件要求

### Logo (`public/logo.png`)
- 文件名：必须是 `logo.png`  
- 推荐尺寸：512x512px 或 1024x1024px
- 格式：PNG（支持透明背景最佳）
- 文件大小：建议 < 500KB

### 白皮书 (`public/litepaper.pdf`)
- 文件名：必须是 `litepaper.pdf`
- 格式：PDF
- 文件大小：建议 < 10MB

## 如果要修改文件名

 `logo.png` 或 `litepaper.pdf`，需要修改代码：

### 修改Logo文件名
 `src/app/layout.tsx` 和 `src/app/page.tsx`，将所有 `/logo.png` 改为你的文件名。

### 修改白皮书文件名  
 `src/app/page.tsx`，找到：
```tsx
<a href="/litepaper.pdf"
```

```tsx
<a href="/your-filename.pdf"
```

## 部署到生产环境

cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

GitHub会显示命令。在你的**本地终端**运行：

```bash
cd /path/to/cyberheart  # 进入项目目录

# 添加GitHub仓库地址（替换YOUR_USERNAME和YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送代码
git branch -M main
git push -u origin main
```

**示例（替换成你的）：**
```bash
git remote add origin https://github.com/username/cyberheart-website.git
git branch -M main  
git push -u origin main
```

## 步骤3：上传Logo和白皮书

### 方法1：通过GitHub网页上传

1. 进入你的GitHub仓库
2. 点击 `public` 文件夹
3. 点击 **Add file** → **Upload files**
4. 拖拽你的文件：
   - `logo.png` (你的logo)
   - `litepaper.pdf` (你的白皮书)
5. 填写提交信息，点击 **Commit changes**

### 方法2：通过命令行上传

```bash
# 在本地cyberheart/public文件夹中放入你的文件
cp /path/to/your/logo.png cyberheart/public/logo.png
cp /path/to/your/litepaper.pdf cyberheart/public/litepaper.pdf

# 提交并推送
cd cyberheart
git add public/logo.png public/litepaper.pdf
git commit -m "Add logo and litepaper"
git push
```

## 文件要求

### Logo (`public/logo.png`)
- 文件名：必须是 `logo.png`  
- 推荐尺寸：512x512px 或 1024x1024px
- 格式：PNG（支持透明背景最佳）
- 文件大小：建议 < 500KB

### 白皮书 (`public/litepaper.pdf`)
- 文件名：必须是 `litepaper.pdf`
- 格式：PDF
- 文件大小：建议 < 10MB

## 如果要修改文件名

 `logo.png` 或 `litepaper.pdf`，需要修改代码：

### 修改Logo文件名
 `src/app/layout.tsx` 和 `src/app/page.tsx`，将所有 `/logo.png` 改为你的文件名。

### 修改白皮书文件名  
 `src/app/page.tsx`，找到：
```tsx
<a href="/litepaper.pdf"
```
cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

cd /home/project && npm_config_yes=true cd cyberheart && cat > GITHUB-UPLOAD-GUIDE.md << 'EOF'
# 📤 如何将CyberHeart网站上传到GitHub

## 步骤1：在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`cyberheart-website` (或你喜欢的名字)
3. 描述：`CyberHeart (CYHT) Official Website - Web3 Value Network`
4. 选择 **Public** 或 **Private**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 **Create repository**

## 步骤2：上传代码到GitHub

GitHub会显示命令。在你的**本地终端**运行：

```bash
cd /path/to/cyberheart  # 进入项目目录

# 添加GitHub仓库地址（替换YOUR_USERNAME和YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送代码
git branch -M main
git push -u origin main
```

**示例（替换成你的）：**
```bash
git remote add origin https://github.com/username/cyberheart-website.git
git branch -M main  
git push -u origin main
```

## 步骤3：上传Logo和白皮书

### 方法1：通过GitHub网页上传

1. 进入你的GitHub仓库
2. 点击 `public` 文件夹
3. 点击 **Add file** → **Upload files**
4. 拖拽你的文件：
   - `logo.png` (你的logo)
   - `litepaper.pdf` (你的白皮书)
5. 填写提交信息，点击 **Commit changes**

### 方法2：通过命令行上传

```bash
# 在本地cyberheart/public文件夹中放入你的文件
cp /path/to/your/logo.png cyberheart/public/logo.png
cp /path/to/your/litepaper.pdf cyberheart/public/litepaper.pdf

# 提交并推送
cd cyberheart
git add public/logo.png public/litepaper.pdf
git commit -m "Add logo and litepaper"
git push
```

## 文件要求

### Logo (`public/logo.png`)
- 文件名：必须是 `logo.png`  
- 推荐尺寸：512x512px 或 1024x1024px
- 格式：PNG（支持透明背景最佳）
- 文件大小：建议 < 500KB

### 白皮书 (`public/litepaper.pdf`)
- 文件名：必须是 `litepaper.pdf`
- 格式：PDF
- 文件大小：建议 < 10MB

## 如果要修改文件名

 `logo.png` 或 `litepaper.pdf`，需要修改代码：

### 修改Logo文件名
 `src/app/layout.tsx` 和 `src/app/page.tsx`，将所有 `/logo.png` 改为你的文件名。

### 修改白皮书文件名  
 `src/app/page.tsx`，找到：
```tsx
<a href="/litepaper.pdf"
```

```tsx
<a href="/your-filename.itHub后，你可以：

1. **部署到Netlify**（推荐）
   - 连接GitHub仓库
   - 自动部署
   
2. **部署到Vercel**
   - 导入GitHub仓库
   - 一键部署

3. **其他平台**
   - GitHub Pages
   - Cloudflare Pages

---

