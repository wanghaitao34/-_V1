# 经本正一 - 个人网站

这是经本正一的个人网站，展示了作为视频博主、微软 MVP 和领英学习讲师的个人简介、作品集和联系方式。

## 🌟 网站特色

- **响应式设计**：完美适配桌面、平板和手机
- **创意设计**：采用大胆的渐变色和现代动画效果
- **流畅交互**：平滑滚动、打字机效果和悬停动画
- **功能完整**：包含导航、作品展示、博客和联系表单

## 📁 项目结构

```
个人网站/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── main.js        # JavaScript 交互逻辑
├── images/            # 图片资源文件夹
│   └── README.md      # 图片使用说明
└── README.md          # 项目说明文档
```

## 🚀 快速开始

### 1. 直接打开
由于这是纯 HTML/CSS/JavaScript 项目，您可以直接双击 `index.html` 文件在浏览器中打开。

### 2. 使用本地服务器（推荐）
为了获得最佳体验，建议使用本地服务器：

**使用 Python：**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**使用 Node.js：**
```bash
# 安装 http-server（首次使用）
npm install -g http-server

# 启动服务器
http-server -p 8000
```

**使用 VS Code：**
安装 "Live Server" 扩展，然后右键点击 `index.html` 选择 "Open with Live Server"

然后在浏览器中访问：`http://localhost:8000`

## 📝 自定义网站

### 修改个人信息
在 `index.html` 中搜索并修改以下内容：
- 姓名和标题
- 个人简介文本
- 社交媒体链接
- 联系方式

### 添加个人头像
1. 将您的头像放入 `images/` 文件夹
2. 命名为 `profile.jpg`
3. 在 HTML 中替换占位符为：`<img src="images/profile.jpg" alt="经本正一">`

### 更新作品集
在 `index.html` 的作品集部分：
1. 修改作品标题和描述
2. 添加实际的 YouTube 视频链接
3. 替换占位图片为实际作品截图

### 编辑博客内容
在博客区域更新：
- 文章标题
- 发布日期
- 文章摘要
- 阅读链接

### 自定义颜色主题
在 `css/style.css` 的 `:root` 部分修改 CSS 变量：
```css
:root {
    --primary-color: #667eea;    /* 主色调 */
    --secondary-color: #f5576c;  /* 辅助色 */
    --accent-color: #00f2fe;     /* 强调色 */
}
```

## 🎨 网站功能

### 导航栏
- 固定顶部，滚动时背景透明到实色渐变
- 移动端响应式汉堡菜单
- 平滑滚动到各个区域

### Hero 区域
- 动态打字机效果展示身份
- 渐变色背景动画
- 直达社交媒体的快捷按钮

### 关于我
- 个人简介展示
- 社交媒体链接
- 身份标签展示

### 作品集
- 网格布局展示视频/作品
- 悬停显示查看链接
- 卡片动画效果

### 博客
- 时间线样式布局
- 文章卡片展示
- 阅读更多链接

### 联系表单
- 实时表单验证
- 加载状态动画
- 成功/错误消息提示

### 页脚
- 快速导航链接
- 社交媒体图标
- 返回顶部按钮

## 🔧 技术栈

- **HTML5**：语义化结构
- **CSS3**：现代样式和动画
  - Flexbox & Grid 布局
  - CSS 变量
  - 渐变和阴影效果
  - 响应式媒体查询
- **JavaScript (ES6+)**：交互功能
  - DOM 操作
  - 事件监听
  - 表单验证
  - 滚动动画
  - 打字机效果
- **Font Awesome**：图标库

## 📱 响应式断点

- **桌面**：>992px
- **平板**：768px - 992px
- **手机**：<768px
- **小屏手机**：<480px

## 🌐 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- Opera

> 注意：IE11 可能需要额外的 polyfills

## 📧 联系表单说明

当前表单为前端模拟提交。要实现真实的邮件发送功能，您需要：

1. **使用后端 API**：
   - Node.js + Nodemailer
   - PHP + PHPMailer
   - Python + Flask/Django

2. **使用第三方服务**：
   - Formspree
   - EmailJS
   - SendGrid
   - Mailgun

3. **集成示例**（使用 EmailJS）：
```javascript
// 在 js/main.js 中替换表单提交部分
emailjs.send('service_id', 'template_id', {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
});
```

## 🚀 部署

### GitHub Pages
1. 将项目推送到 GitHub 仓库
2. 进入仓库设置 > Pages
3. 选择分支并保存
4. 访问 `https://你的用户名.github.io/仓库名`

### Netlify
1. 注册 Netlify 账号
2. 拖拽项目文件夹到 Netlify
3. 自动部署完成

### Vercel
1. 安装 Vercel CLI：`npm i -g vercel`
2. 在项目目录运行：`vercel`
3. 按照提示完成部署

## 📝 更新日志

### Version 1.0.0 (2026-01-22)
- ✅ 初始版本发布
- ✅ 响应式设计完成
- ✅ 所有核心功能实现
- ✅ 动画效果优化

## 🤝 贡献

如果您有任何改进建议，欢迎：
1. Fork 本项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 📄 许可证

此项目仅供个人使用。如需商业使用，请联系作者。

## 📞 联系方式

- **YouTube**: [https://www.youtube.com/channel/UCiR6Jwu9gPOSQC4F1ezeKoA](https://www.youtube.com/channel/UCiR6Jwu9gPOSQC4F1ezeKoA)
- **LinkedIn**: [https://www.linkedin.com/in/jbzy/](https://www.linkedin.com/in/jbzy/)

---

**经本正一** - 视频博主 | 微软 MVP | 领英学习讲师  
*致力于帮助大家创造更多、成就更多*
