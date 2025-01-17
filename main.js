// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
        'data-theme',
        currentTheme === 'dark' ? 'light' : 'dark'
    );
});

// 滚动加载动画
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.article-card').forEach((card) => observer.observe(card));
