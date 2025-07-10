// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Project Modal Functionality
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Project data
const projectData = {
    'meta-recon': {
        title: 'Meta Recon Tool',
        subtitle: 'Advanced Linux-based Reconnaissance Framework',
        date: 'October 2024',
        tags: ['Linux', 'Bash Scripting', 'Nmap', 'Hydra', 'ARP Scanning', 'Cybersecurity'],
        overview: 'A comprehensive reconnaissance tool designed for cybersecurity professionals to automate the initial phases of penetration testing and security assessments.',
        description: 'The Meta Recon Tool is a sophisticated Linux-based framework that integrates multiple security utilities into a unified reconnaissance platform. This tool streamlines the information gathering process by combining network scanning, service enumeration, and vulnerability detection capabilities.',
        features: [
            {
                title: 'Automated OS Detection',
                description: 'Advanced fingerprinting techniques to identify target operating systems with high accuracy'
            },
            {
                title: 'Service Enumeration',
                description: 'Comprehensive port scanning and service identification across multiple protocols'
            },
            {
                title: 'Vulnerability Scanning',
                description: 'Integration with vulnerability databases for automated security assessment'
            },
            {
                title: 'ARP Network Discovery',
                description: 'Local network mapping and device discovery using ARP protocols'
            },
            {
                title: 'Brute Force Capabilities',
                description: 'Integrated Hydra for credential testing across various services'
            },
            {
                title: 'Reporting System',
                description: 'Automated report generation with detailed findings and recommendations'
            }
        ],
        technologies: 'Built using Bash scripting with integration of industry-standard tools including Nmap for network scanning, Hydra for brute force attacks, and custom ARP scanning modules. The tool leverages Linux system capabilities for optimal performance.',
        impact: 'This tool significantly reduces the time required for initial reconnaissance phases in penetration testing, improving efficiency by approximately 60% compared to manual processes. It has been tested in controlled environments and demonstrates reliable performance across various network configurations.'
    },
    'wazuh-siem': {
        title: 'Wazuh SIEM Deployment',
        subtitle: 'Enterprise Security Information and Event Management System',
        date: 'December 2024',
        tags: ['Wazuh', 'SIEM', 'Log Analysis', 'Incident Response', 'Compliance', 'Security Monitoring'],
        overview: 'A comprehensive SIEM implementation using Wazuh for real-time security monitoring, threat detection, and compliance management in enterprise environments.',
        description: 'This project involved the complete deployment and configuration of Wazuh SIEM solution to provide centralized security monitoring, log analysis, and incident response capabilities. The implementation focuses on real-time threat detection and automated response mechanisms.',
        features: [
            {
                title: 'Real-time Log Analysis',
                description: 'Continuous monitoring and analysis of security logs from multiple sources'
            },
            {
                title: 'Intrusion Detection',
                description: 'Advanced IDS capabilities with custom rule sets for threat identification'
            },
            {
                title: 'Compliance Monitoring',
                description: 'Automated compliance checking against industry standards (PCI DSS, GDPR, HIPAA)'
            },
            {
                title: 'Incident Response Automation',
                description: 'Automated alert generation and response workflows for security incidents'
            },
            {
                title: 'Vulnerability Assessment',
                description: 'Integrated vulnerability scanning and assessment capabilities'
            },
            {
                title: 'Custom Dashboards',
                description: 'Interactive dashboards for security metrics and threat visualization'
            }
        ],
        technologies: 'Deployed on Linux infrastructure with Elasticsearch for data storage, Kibana for visualization, and custom Python scripts for enhanced automation. Integration with existing security tools and network infrastructure.',
        impact: 'The SIEM deployment improved security incident detection time by 75% and reduced false positives by 40%. The system now monitors over 10,000 events per minute and provides comprehensive security visibility across the entire network infrastructure.'
    },
    'ai-recipe': {
        title: 'AI-Based Recipe Generator',
        subtitle: 'Intelligent Culinary Assistant Web Application',
        date: 'May 2024',
        tags: ['AI/ML', 'Python', 'Web Development', 'Natural Language Processing', 'API Integration'],
        overview: 'An innovative web application that leverages artificial intelligence to generate personalized recipes based on available ingredients and dietary preferences.',
        description: 'This project demonstrates the application of AI/ML technologies in everyday life by creating an intelligent recipe generation system. The application uses natural language processing and machine learning algorithms to create unique, practical recipes.',
        features: [
            {
                title: 'Ingredient Recognition',
                description: 'Smart ingredient parsing and categorization using NLP techniques'
            },
            {
                title: 'Recipe Generation',
                description: 'AI-powered recipe creation based on available ingredients and preferences'
            },
            {
                title: 'Dietary Restrictions',
                description: 'Support for various dietary requirements including vegan, gluten-free, and keto'
            },
            {
                title: 'Nutritional Analysis',
                description: 'Automatic calculation of nutritional information for generated recipes'
            },
            {
                title: 'User Preferences',
                description: 'Personalized recommendations based on user taste preferences and history'
            },
            {
                title: 'Recipe Optimization',
                description: 'Intelligent suggestions for ingredient substitutions and cooking improvements'
            }
        ],
        technologies: 'Built with Python using Flask framework for the backend, integrated with machine learning libraries including scikit-learn and NLTK. Frontend developed with HTML5, CSS3, and JavaScript. Database management with SQLite for user data and recipe storage.',
        impact: 'The application has generated over 1,000 unique recipes during testing phase with 85% user satisfaction rate. The AI model demonstrates 92% accuracy in ingredient compatibility prediction and has helped reduce food waste by suggesting recipes for leftover ingredients.'
    }
};

// Open modal when project card is clicked
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            displayProjectModal(project);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function displayProjectModal(project) {
    const featuresHTML = project.features.map(feature => `
        <div class="feature-item">
            <h4>${feature.title}</h4>
            <p>${feature.description}</p>
        </div>
    `).join('');

    const tagsHTML = project.tags.map(tag => `
        <span class="modal-tag">${tag}</span>
    `).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-subtitle">${project.subtitle}</p>
            <div class="modal-tags">${tagsHTML}</div>
            <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 1rem;">${project.date}</p>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>Project Overview</h3>
                <p>${project.overview}</p>
            </div>
            
            <div class="modal-section">
                <h3>Description</h3>
                <p>${project.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Key Features</h3>
                <div class="feature-grid">
                    ${featuresHTML}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Technologies Used</h3>
                <p>${project.technologies}</p>
            </div>
            
            <div class="modal-section">
                <h3>Impact & Results</h3>
                <p>${project.impact}</p>
            </div>
        </div>
    `;
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-category, .cert-card, .timeline-item, .stat-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
    
    // Create additional floating particles
    createFloatingParticles();
});

// Create floating particles animation
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ffff;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 6px #00ffff;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add particle float animation to CSS
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0% { 
                    transform: translateY(100vh) translateX(0px) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                    transform: translateY(90vh) translateX(10px) scale(1);
                }
                90% {
                    opacity: 1;
                    transform: translateY(10vh) translateX(-10px) scale(1);
                }
                100% { 
                    transform: translateY(-10vh) translateX(0px) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add smooth reveal animation for stats
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 30);
    });
}

// Trigger stats animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});