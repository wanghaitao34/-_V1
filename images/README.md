# 图片资源文件夹

这个文件夹用于存放您的个人网站图片资源。

## 建议添加的图片

### 1. 个人头像 (profile.jpg 或 profile.png)
- **位置**：关于我部分
- **建议尺寸**：400x400 像素或更大（正方形）
- **格式**：JPG 或 PNG
- **说明**：您的专业照片，将显示在"关于我"区域

### 2. 作品集/视频缩略图
- **命名**：portfolio-1.jpg, portfolio-2.jpg, 等等
- **建议尺寸**：1280x720 像素（16:9 比例）
- **格式**：JPG 或 PNG
- **说明**：您的视频作品或项目的缩略图

### 3. 网站图标 (favicon)
- **命名**：favicon.ico 或 favicon.png
- **建议尺寸**：32x32 或 64x64 像素
- **格式**：ICO 或 PNG
- **说明**：浏览器标签页显示的小图标

## 如何使用

### 添加个人头像：
1. 将您的头像文件复制到这个文件夹
2. 命名为 `profile.jpg` 或 `profile.png`
3. 在 `index.html` 中找到关于我部分的占位符
4. 将以下代码：
   ```html
   <div class="image-placeholder">
       <i class="fas fa-user"></i>
       <p>头像占位符</p>
   </div>
   ```
   替换为：
   ```html
   <img src="images/profile.jpg" alt="经本正一">
   ```
5. 在 `css/style.css` 中添加图片样式：
   ```css
   .about-image img {
       width: 100%;
       border-radius: var(--radius-xl);
       box-shadow: var(--shadow-xl);
   }
   ```

### 添加作品集图片：
1. 将作品集图片复制到这个文件夹
2. 在 `index.html` 中找到作品集卡片
3. 将占位符替换为实际图片：
   ```html
   <img src="images/portfolio-1.jpg" alt="作品标题">
   ```

### 添加网站图标：
1. 将 favicon 文件复制到项目根目录或 images 文件夹
2. 在 `index.html` 的 `<head>` 部分添加：
   ```html
   <link rel="icon" type="image/png" href="images/favicon.png">
   ```

## 图片优化建议

- **压缩图片**：使用在线工具（如 TinyPNG）压缩图片以提高加载速度
- **使用合适的格式**：
  - 照片使用 JPG 格式
  - 图标和透明图使用 PNG 格式
  - 考虑使用 WebP 格式以获得更好的压缩比
- **响应式图片**：为不同设备准备不同尺寸的图片
- **添加 alt 属性**：为所有图片添加描述性的 alt 文本，提升可访问性和 SEO

## 注意事项

- 确保您拥有所有图片的使用权
- 避免使用过大的图片文件（单个文件建议不超过 500KB）
- 使用有意义的文件名（如 `profile-photo.jpg` 而不是 `IMG_1234.jpg`）
- 保持文件命名的一致性（全部使用小写字母和连字符）

---

如有任何问题，请查阅网站文档或联系开发者。
