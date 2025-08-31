// Portfolio Website JavaScript Functionality

// Portfolio data
const portfolioApps = [
    {
        title: "TaskMaster Pro",
        description: "Advanced task management app with team collaboration features",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        platforms: ["iOS", "Swift"],
        rating: 4.8,
        downloads: "50K+"
    },
    {
        title: "FitTracker Elite",
        description: "Comprehensive fitness tracking with AI-powered insights",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        platforms: ["Flutter", "iOS", "Android"],
        rating: 4.9,
        downloads: "100K+"
    },
    {
        title: "ShopSmart",
        description: "E-commerce app with AR product visualization",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        platforms: ["React Native", "iOS", "Android"],
        rating: 4.7,
        downloads: "200K+"
    },
    {
        title: "MindfulMoments",
        description: "Meditation and mindfulness app with guided sessions",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
        platforms: ["SwiftUI", "iOS"],
        rating: 4.9,
        downloads: "75K+"
    },
    {
        title: "CryptoTracker",
        description: "Real-time cryptocurrency tracking and portfolio management",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop",
        platforms: ["Flutter", "iOS", "Android"],
        rating: 4.6,
        downloads: "150K+"
    },
    {
        title: "RecipeVault",
        description: "Smart recipe organizer with meal planning features",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        platforms: ["iOS", "Swift"],
        rating: 4.8,
        downloads: "80K+"
    },
    {
        title: "WeatherWise",
        description: "Advanced weather forecasting with location-based alerts",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
        platforms: ["FlutterFlow", "iOS", "Android"],
        rating: 4.7,
        downloads: "300K+"
    },
    {
        title: "StudyBuddy",
        description: "Educational app with interactive learning modules",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        platforms: ["React Native", "iOS", "Android"],
        rating: 4.9,
        downloads: "120K+"
    },
    {
        title: "TravelGuide",
        description: "Comprehensive travel companion with offline maps",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
        platforms: ["Swift", "iOS"],
        rating: 4.8,
        downloads: "90K+"
    },
    {
        title: "PhotoEditor Pro",
        description: "Professional photo editing with AI-powered filters",
        image: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=300&fit=crop",
        platforms: ["SwiftUI", "iOS"],
        rating: 4.7,
        downloads: "250K+"
    },
    {
        title: "MusicStream",
        description: "Music streaming app with personalized recommendations",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        platforms: ["Flutter", "iOS", "Android"],
        rating: 4.6,
        downloads: "500K+"
    },
    {
        title: "ExpenseTracker",
        description: "Personal finance management with budget insights",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
        platforms: ["iOS", "Swift"],
        rating: 4.8,
        downloads: "180K+"
    },
    {
        title: "NewsReader",
        description: "Personalized news aggregator with offline reading",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
        platforms: ["React Native", "iOS", "Android"],
        rating: 4.5,
        downloads: "220K+"
    },
    {
        title: "LanguageLearner",
        description: "Interactive language learning with speech recognition",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        platforms: ["FlutterFlow", "iOS", "Android"],
        rating: 4.9,
        downloads: "350K+"
    }
];

let showingAll = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    generatePortfolio();
    setupFormHandling();
    setupScrollAnimations();
    lucide.createIcons();
});

// Generate portfolio items
function generatePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const itemsToShow = showingAll ? portfolioApps.length : 6;
    
    portfolioGrid.innerHTML = '';
    
    for (let i = 0; i < itemsToShow; i++) {
        const app = portfolioApps[i];
        const platformBadges = app.platforms.map(platform => {
            const badgeClass = getBadgeClass(platform);
            return `<span class="badge ${badgeClass}">${platform}</span>`;
        }).join('');

        const portfolioItem = createPortfolioItem(app, platformBadges);
        portfolioGrid.innerHTML += portfolioItem;
    }
    
    updateViewMoreButton();
    lucide.createIcons();
}

// Get badge class for platform
function getBadgeClass(platform) {
    const badgeClasses = {
        'iOS': 'badge-blue',
        'Swift': 'badge-purple',
        'Flutter': 'badge-cyan',
        'SwiftUI': 'badge-indigo',
        'React Native': 'badge-green',
        'FlutterFlow': 'badge-cyan',
        'Android': 'badge-green'
    };
    return badgeClasses[platform] || 'badge-green';
}

// Create portfolio item HTML
function createPortfolioItem(app, platformBadges) {
    return `
        <div class="portfolio-item card overflow-hidden">
            <img src="${app.image}" alt="${app.title}" class="w-full h-48 object-cover" loading="lazy">
            <div class="p-6">
                <h4 class="font-semibold mb-2">${app.title}</h4>
                <p class="text-sm text-gray-500 mb-4">${app.description}</p>
                <div class="flex flex-wrap gap-1 mb-4">
                    ${platformBadges}
                </div>
                <div class="flex justify-between items-center text-sm">
                    <span class="flex items-center gap-1">
                        <i data-lucide="star" class="w-4 h-4 text-yellow-500"></i>
                        ${app.rating}
                    </span>
                    <span class="text-gray-500">${app.downloads} downloads</span>
                </div>
            </div>
        </div>
    `;
}

// Update view more button
function updateViewMoreButton() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    viewMoreBtn.textContent = showingAll ? 'Show Less' : 'View More Projects';
}

// Toggle portfolio display
function togglePortfolio() {
    showingAll = !showingAll;
    generatePortfolio();
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download resume
function downloadResume() {
    // Replace with actual resume download logic
    showToast('Resume download will be available soon! Please contact me directly for now.', 'info');
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type === 'error' ? 'error' : ''} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Setup form handling
function setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }

    // Create mailto link
    const mailtoLink = createMailtoLink(data);
    window.open(mailtoLink, '_self');
    
    showToast('Thank you! Your project inquiry has been sent.');
    e.target.reset();
}

// Validate form data
function validateForm(data) {
    if (!data.name || !data.email || !data.details) {
        showToast('Please fill in all required fields', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Please enter a valid email address', 'error');
        return false;
    }

    return true;
}

// Create mailto link
function createMailtoLink(data) {
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

    return `mailto:patelmeet12@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Setup scroll animations
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// Utility functions
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

// Optional: Add dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// Load dark mode preference
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark');
    }
}

// Call on page load
loadDarkModePreference();