// Portfolio data
const portfolioApps = [
    {
        name: "Stable Hub",
        url: "https://apps.apple.com/az/app/stable-hub/id1556437401#?platform=iphone",
        description: "Comprehensive stable management application",
        platforms: ["iOS", "Swift"]
    },
    {
        name: "Mind Mapping - Resilience", 
        url: "https://apps.apple.com/us/app/mindmapping-resilience/id1626979283",
        description: "Mental health and resilience building tool",
        platforms: ["iOS", "SwiftUI"]
    },
    {
        name: "Cintona",
        url: "https://apps.apple.com/in/app/cintona/id1554648094", 
        description: "Professional communication platform",
        platforms: ["iOS", "Swift"]
    },
    {
        name: "LittleSouls",
        url: "https://apps.apple.com/ca/app/littlesouls/id1553078697",
        description: "Child care and development application",
        platforms: ["iOS", "Flutter"]
    },
    {
        name: "Nazaray",
        url: "https://apps.apple.com/in/app/nazaray/id6443620350",
        description: "Cultural and educational platform",
        platforms: ["iOS", "React Native"]
    },
    {
        name: "Neuro Physio Rx.",
        url: "https://apps.apple.com/in/app/neuro-physio-rx/id6478271730",
        description: "Neurological physiotherapy application",
        platforms: ["iOS", "SwiftUI"]
    },
    {
        name: "DiNGr",
        url: "https://apps.apple.com/us/app/dingr/id6499414611", 
        description: "Social networking and communication app",
        platforms: ["iOS", "Flutter"]
    },
    {
        name: "Tradeasia",
        url: "https://apps.apple.com/sk/app/tradeasia/id6478198700",
        description: "Trading and business platform",
        platforms: ["iOS", "Swift"]
    },
    {
        name: "Doggy Date by Dog Days",
        url: "https://apps.apple.com/ca/app/doggy-date-by-dog-days/id1462254114",
        description: "Pet social networking application",
        platforms: ["iOS", "React Native"]
    },
    {
        name: "Added Food Delivery",
        url: "https://apps.apple.com/us/app/added-food-delivery/id1626500994",
        description: "Food delivery customer application",
        platforms: ["iOS", "Flutter"]
    },
    {
        name: "Added Driver", 
        url: "https://apps.apple.com/us/app/added-driver/id1626500465",
        description: "Delivery driver management app",
        platforms: ["iOS", "FlutterFlow"]
    },
    {
        name: "Added Restaurant",
        url: "https://apps.apple.com/us/app/added-restaurant/id1626786117",
        description: "Restaurant management platform",
        platforms: ["iOS", "FlutterFlow"]
    },
    {
        name: "Stem Driver Solutions",
        url: "https://apps.apple.com/ca/app/stem-driver-solutions/id1556178641",
        description: "Professional driver management system",
        platforms: ["iOS", "Swift"]
    },
    {
        name: "Formzi",
        url: "https://apps.apple.com/in/app/formzi/id1192981423",
        description: "Form building and data collection tool",
        platforms: ["iOS", "SwiftUI"]
    }
];

// State management
let showAllApps = false;
let mobileMenuOpen = false;

// Platform color mapping
function getPlatformColor(platform) {
    const colors = {
        'ios': 'platform-ios',
        'swift': 'platform-swift',
        'swiftui': 'platform-swiftui',
        'flutter': 'platform-flutter',
        'flutterflow': 'platform-flutterflow',
        'react native': 'platform-react-native'
    };
    return colors[platform.toLowerCase()] || 'platform-default';
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Handle resume download
function handleDownloadResume() {
    // Option 1: Direct download (uncomment if you have a resume file)
    // const link = document.createElement('a');
    // link.href = '/resume-meet-patel.pdf';
    // link.download = 'Meet_Patel_iOS_Developer_Resume.pdf';
    // link.click();
    
    // Option 2: Google Drive link (replace with actual file ID)
    // window.open('https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view', '_blank');
    
    // Option 3: Alert for now
    showToast('Resume download will be available soon! Please contact me directly for now.', 'success');
}

// Render portfolio items
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioActions = document.getElementById('portfolio-actions');
    const remainingCount = document.getElementById('remaining-count');
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    const displayedApps = showAllApps ? portfolioApps : portfolioApps.slice(0, 6);
    
    // Clear grid
    portfolioGrid.innerHTML = '';
    
    // Render portfolio cards
    displayedApps.forEach((app, index) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        
        const platforms = app.platforms.map(platform => 
            `<span class="platform-badge ${getPlatformColor(platform)}">${platform}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="portfolio-header">
                <h3 class="portfolio-title">${app.name}</h3>
                <div class="portfolio-platforms">
                    ${platforms}
                </div>
            </div>
            <div class="portfolio-content">
                <p class="portfolio-description">${app.description}</p>
                <button class="btn btn-outline portfolio-link" onclick="window.open('${app.url}', '_blank')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    View on App Store
                </button>
            </div>
        `;
        
        portfolioGrid.appendChild(card);
    });
    
    // Update view more button
    if (!showAllApps && portfolioApps.length > 6) {
        remainingCount.textContent = portfolioApps.length - 6;
        portfolioActions.style.display = 'block';
    } else {
        portfolioActions.style.display = 'none';
    }
}

// Show all apps
function showAllPortfolioApps() {
    showAllApps = true;
    renderPortfolio();
}

// Toast notification system
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Form validation and submission
function setupForm() {
    const form = document.getElementById('project-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Basic validation
        if (!data.name || !data.email || !data.details) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Create mailto link
        const subject = `New iOS Project Inquiry from ${data.name}`;
        const body = `
Name: ${data.name}
Email: ${data.email}
Company/Organization: ${data.company || 'Not specified'}
Project Type: ${data.projectType || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}
Budget Range: ${data.budget || 'Not specified'}

Project Details:
${data.details}
        `.trim();
        
        const mailtoLink = `mailto:patelmeet12@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_self');
        
        showToast('Thank you! Your project inquiry has been sent.', 'success');
        
        // Reset form
        form.reset();
    });
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll('.highlight-card, .skill-card, .portfolio-card, .social-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });
}

// Theme management
let currentTheme = 'system';

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'system') {
        const systemTheme = getSystemTheme();
        root.classList.toggle('dark', systemTheme === 'dark');
    } else {
        root.classList.toggle('dark', theme === 'dark');
    }
    
    updateThemeIcons(theme === 'system' ? getSystemTheme() : theme);
}

function updateThemeIcons(appliedTheme) {
    const lightIcons = document.querySelectorAll('#theme-icon-light-desktop');
    const darkIcons = document.querySelectorAll('#theme-icon-dark-desktop');
    
    lightIcons.forEach(icon => {
        icon.style.display = appliedTheme === 'dark' ? 'none' : 'block';
    });
    
    darkIcons.forEach(icon => {
        icon.style.display = appliedTheme === 'dark' ? 'block' : 'none';
    });
}

function toggleTheme() {
    const themes = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    
    currentTheme = themes[nextIndex];
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
    
    // Apply theme
    applyTheme(currentTheme);
    
    // Show toast notification
    const themeNames = {
        'light': 'Light Mode',
        'dark': 'Dark Mode', 
        'system': 'System Theme'
    };
    
    showToast(`Switched to ${themeNames[currentTheme]}`, 'success');
}

function setupDarkMode() {
    // Load saved theme or default to system
    const savedTheme = localStorage.getItem('portfolio-theme') || 'system';
    currentTheme = savedTheme;
    
    // Apply initial theme
    applyTheme(currentTheme);
    
    // Listen for system theme changes
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addEventListener('change', () => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Close mobile menu when clicking outside
function setupOutsideClick() {
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}



// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup all functionality
    renderPortfolio();
    setupForm();
    setupAnimations();
    setupHeaderScroll();
    setupDarkMode();
    setupSmoothScrolling();
    setupOutsideClick();
    
    // Add scroll-based animations
    const heroElements = document.querySelectorAll('.hero-logo, .hero-content, .hero-badges, .hero-description, .hero-actions, .scroll-indicator');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.6s ease';
        }, index * 200);
    });
    
    // Animate availability banner
    const banner = document.getElementById('availability-banner');
    banner.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        banner.style.transform = 'translateY(0)';
        banner.style.transition = 'transform 0.5s ease-out';
    }, 100);
    
    console.log('Meet Patel Portfolio - All systems initialized! 🚀');
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth >= 768 && mobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Performance optimization: Debounce scroll events
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

// Add some easter eggs
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
            showToast('🎉 Konami Code activated! You found the secret! 🎉', 'success');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Expose global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.handleDownloadResume = handleDownloadResume;
window.showAllApps = showAllPortfolioApps;
window.toggleTheme = toggleTheme;