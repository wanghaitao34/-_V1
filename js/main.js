// ===== 导航栏功能 =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// 滚动时导航栏背景变化
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // 返回顶部按钮显示/隐藏
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// 移动端菜单切换
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时平滑滚动并关闭菜单
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // 关闭移动端菜单
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 点击菜单外部关闭菜单
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== 打字机效果 =====
const typingText = document.getElementById('typingText');
const texts = [
    '视频博主',
    '微软 MVP',
    '领英学习讲师'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // 完成当前文本，暂停后开始删除
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // 删除完成，切换到下一个文本
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// 启动打字机效果
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ===== 滚动动画效果 (AOS - Animate On Scroll) =====
function initAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // 观察所有带有 data-aos 属性的元素
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => observer.observe(el));
}

// 初始化 AOS
document.addEventListener('DOMContentLoaded', initAOS);

// ===== 返回顶部按钮 =====
const backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== 页面加载动画 =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== 鼠标跟随效果（可选的增强效果） =====
function createCursorEffect() {
    // 只在桌面设备上启用
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #667eea;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease, opacity 0.2s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // 悬停在链接和按钮上时放大光标
        const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, .blog-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.borderColor = '#f5576c';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#667eea';
            });
        });
    }
}

// 可选：启用自定义光标效果（如果不需要可以注释掉）
// createCursorEffect();

// ===== 性能优化：防抖函数 =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件性能
const handleScroll = debounce(() => {
    // 可以在这里添加其他滚动相关的逻辑
}, 100);

window.addEventListener('scroll', handleScroll);

// ===== 响应式处理 =====
function handleResize() {
    // 关闭移动端菜单
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', debounce(handleResize, 250));

// ===== 控制台输出（开发者彩蛋） =====
console.log('%c👋 你好！欢迎来到经本正一的个人网站！', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c🚀 如果您对这个网站感兴趣，欢迎联系我！', 'color: #f5576c; font-size: 14px;');
console.log('%c💼 YouTube: https://www.youtube.com/channel/UCiR6Jwu9gPOSQC4F1ezeKoA', 'color: #00f2fe; font-size: 12px;');
console.log('%c💼 LinkedIn: https://www.linkedin.com/in/jbzy/', 'color: #00f2fe; font-size: 12px;');

// ===== 初始化提示 =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ 网站已成功加载！');
    console.log('📝 提示：这是一个演示版本，表单提交功能需要连接后端API才能实际发送邮件。');
});
