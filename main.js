/**
 * Main JavaScript for Momentum Machinery Part Website
 * Vanilla JavaScript - No dependencies required
 */

// Global variables
let catalogData = null;
let currentProducts = [];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const torqueFilter = document.getElementById('torqueFilter');
const boreFilter = document.getElementById('boreFilter');
const productsGrid = document.getElementById('productsGrid');
const categoryTabs = document.getElementById('categoryTabs');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    loadCatalog();
    setupEventListeners();
    initializeFilters();
    displayProducts();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Filter dropdowns
    if (categoryFilter) {
        categoryFilter.addEventListener('change', performSearch);
    }
    if (torqueFilter) {
        torqueFilter.addEventListener('change', performSearch);
    }
    if (boreFilter) {
        boreFilter.addEventListener('change', performSearch);
    }

    // Quick search buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const searchTerm = this.textContent.trim();
            quickSearch(searchTerm);
        });
    });

    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });

    // Product cards
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-detail')) {
            const model = e.target.dataset.model;
            showProductDetail(model);
        }
    });

    // Modal close
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
        if (e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

/**
 * Load catalog data
 */
async function loadCatalog() {
    try {
        const response = await fetch('catalog-official.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        catalogData = data;
        console.log('Catalog loaded successfully:', data);
        
        // Initialize category tabs
        initializeCategoryTabs();
        
        // Display products
        displayProducts();
        
    } catch (error) {
        console.error('Error loading catalog:', error);
        showError('Gagal memuat katalog produk. Silakan refresh halaman.');
    }
}

/**
 * Initialize filters
 */
function initializeFilters() {
    // Populate category filter
    if (categoryFilter && catalogData) {
        categoryFilter.innerHTML = '<option value="">Semua Kategori</option>';
        catalogData.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.name;
            categoryFilter.appendChild(option);
        });
    }

    // Populate torque filter
    if (torqueFilter) {
        const torqueRanges = [
            { value: '', text: 'Semua Torque' },
            { value: '1000', text: 'Hingga 1,000 Nm' },
            { value: '5000', text: 'Hingga 5,000 Nm' },
            { value: '10000', text: 'Hingga 10,000 Nm' },
            { value: '50000', text: 'Hingga 50,000 Nm' },
            { value: '100000', text: 'Hingga 100,000 Nm' }
        ];
        
        torqueFilter.innerHTML = '';
        torqueRanges.forEach(range => {
            const option = document.createElement('option');
            option.value = range.value;
            option.textContent = range.text;
            torqueFilter.appendChild(option);
        });
    }

    // Populate bore filter
    if (boreFilter) {
        const boreRanges = [
            { value: '', text: 'Semua Bore' },
            { value: '50', text: 'Hingga 50 mm' },
            { value: '100', text: 'Hingga 100 mm' },
            { value: '150', text: 'Hingga 150 mm' },
            { value: '200', text: 'Hingga 200 mm' },
            { value: '250', text: 'Hingga 250 mm' }
        ];
        
        boreFilter.innerHTML = '';
        boreRanges.forEach(range => {
            const option = document.createElement('option');
            option.value = range.value;
            option.textContent = range.text;
            boreFilter.appendChild(option);
        });
    }
}

/**
 * Initialize category tabs
 */
function initializeCategoryTabs() {
    if (!categoryTabs || !catalogData) return;

    categoryTabs.innerHTML = '';
    
    // Add "All" tab
    const allTab = createCategoryTab('all', 'Semua Produk', true);
    categoryTabs.appendChild(allTab);
    
    // Add category tabs
    catalogData.categories.forEach(category => {
        const tab = createCategoryTab(category.id, category.name, false);
        categoryTabs.appendChild(tab);
    });
}

/**
 * Create category tab element
 */
function createCategoryTab(categoryId, categoryName, isActive) {
    const tab = document.createElement('button');
    tab.className = `category-tab ${isActive ? 'active' : ''}`;
    tab.dataset.category = categoryId;
    tab.textContent = categoryName;
    return tab;
}

/**
 * Get products to display
 */
function getProductsToDisplay() {
    if (!catalogData) return [];
    
    const products = [];
    
    catalogData.categories.forEach(category => {
        const items = category.models || category.products || [];
        items.forEach(item => {
            products.push({
                id: `${category.id}-${item.model}`,
                model: item.model,
                categoryName: category.name,
                categoryId: category.id,
                category: category,
                boreRange: item.boreRange || 'N/A',
                maxTorqueNm: item.maxTorqueNm || null,
                maxRPM: item.maxRPM || null,
                catalogNumber: item.catalogNumber || 'N/A',
                description: item.description || category.description || '',
                applications: item.applications || category.applications || [],
                features: item.features || category.features || [],
                pdf: item.pdf || '',
                dimensions: item.dimensions || {},
                maintenance: item.maintenance || {},
                performance: item.performance || {},
                installation: item.installation || {}
            });
        });
    });
    
    currentProducts = products;
    return products;
}

/**
 * Apply filters to products
 */
function applyFiltersToProducts(products) {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const categoryFilterValue = categoryFilter ? categoryFilter.value : '';
    const torqueFilterValue = torqueFilter ? parseInt(torqueFilter.value) : 0;
    const boreFilterValue = boreFilter ? parseInt(boreFilter.value) : 0;

    return products.filter(product => {
        // Search filter
        if (searchTerm) {
            const searchTerms = searchTerm.split(' ').filter(term => term.length > 0);
            const searchableFields = [
                product.model ? product.model.toLowerCase() : '',
                product.categoryName.toLowerCase(),
                (product.description || '').toLowerCase(),
                (product.category.description || '').toLowerCase(),
                (product.catalogNumber || '').toLowerCase(),
                (product.dimensions.size || product.package || '').toLowerCase(),
                ...(product.applications || product.category.applications || []).map(app => app.toLowerCase()),
                ...(product.features || product.category.features || []).map(feature => feature.toLowerCase())
            ].join(' ');
            
            const matchesSearch = searchTerms.every(term => {
                // Exact match for model numbers
                if (term.match(/^[0-9]+[a-z]?$/i)) {
                    return searchableFields.includes(term);
                }
                // Partial match for other terms
                return searchableFields.includes(term);
            });
            
            if (!matchesSearch) return false;
        }

        // Category filter
        if (categoryFilterValue && product.categoryId !== categoryFilterValue) {
            return false;
        }

        // Torque filter
        if (torqueFilterValue > 0 && product.maxTorqueNm && product.maxTorqueNm > torqueFilterValue) {
            return false;
        }

        // Bore filter
        if (boreFilterValue > 0 && product.boreRange) {
            let maxBore = 0;
            const boreStr = product.boreRange.toLowerCase();
            
            if (boreStr.includes('-')) {
                maxBore = parseInt(boreStr.split('-')[1] || boreStr.split('–')[1]);
            } else if (boreStr.includes('–')) {
                maxBore = parseInt(boreStr.split('–')[1]);
            } else if (boreStr.includes('mm')) {
                maxBore = parseInt(boreStr.replace('mm', '').trim());
            } else {
                maxBore = parseInt(boreStr);
            }
            
            if (maxBore > boreFilterValue) {
                return false;
            }
        }

        return true;
    });
}

/**
 * Display products
 */
function displayProducts() {
    if (!productsGrid) return;
    
    const products = getProductsToDisplay();
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Debug logging
    if (searchTerm) {
        console.log('Search term:', searchTerm);
        console.log('Products found:', products.length);
        console.log('Products:', products.map(p => ({ model: p.model, category: p.categoryName })));
    }
    
    const filteredProducts = applyFiltersToProducts(products);
    
    if (filteredProducts.length === 0) {
        showNoResults(searchTerm);
        return;
    }

    // Show search results summary
    let searchSummary = '';
    if (searchTerm) {
        const categoryMatches = {};
        filteredProducts.forEach(product => {
            categoryMatches[product.categoryName] = (categoryMatches[product.categoryName] || 0) + 1;
        });
        
        searchSummary = `
            <div class="search-summary">
                <h4><i class="fas fa-search"></i> Hasil Pencarian: "${searchTerm}"</h4>
                <p>Ditemukan ${filteredProducts.length} produk dari ${Object.keys(categoryMatches).length} kategori:
                ${Object.entries(categoryMatches).map(([cat, count]) => `<strong>${cat}</strong> (${count})`).join(', ')}
                </p>
            </div>
        `;
    }

    // Generate product cards
    const productCards = filteredProducts.map(product => createProductCard(product)).join('');
    
    productsGrid.innerHTML = searchSummary + productCards;
}

/**
 * Show no results message
 */
function showNoResults(searchTerm) {
    const suggestions = getSearchSuggestions(searchTerm);
    const debugInfo = getDebugInfo(searchTerm);
    
    productsGrid.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <h3>Tidak ada produk yang ditemukan</h3>
            <p>Pencarian "${searchTerm}" tidak menghasilkan produk yang cocok</p>
            
            <div class="debug-info">
                <h4>🔍 Debug Info:</h4>
                <pre>${debugInfo}</pre>
            </div>
            
            ${suggestions.length > 0 ? `
                <div class="suggestions">
                    <h4>Saran pencarian:</h4>
                    <div class="suggestion-buttons">
                        ${suggestions.map(suggestion => `
                            <button class="btn btn-outline" onclick="quickSearch('${suggestion}')">
                                ${suggestion}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="quick-searches">
                <h4>Coba pencarian ini:</h4>
                <div class="quick-buttons">
                    <button class="btn btn-outline" onclick="quickSearch('steelflex')">steelflex</button>
                    <button class="btn btn-outline" onclick="quickSearch('gear coupling')">gear coupling</button>
                    <button class="btn btn-outline" onclick="quickSearch('wrapflex')">wrapflex</button>
                    <button class="btn btn-outline" onclick="quickSearch('t10')">t10</button>
                    <button class="btn btn-outline" onclick="quickSearch('t20')">t20</button>
                    <button class="btn btn-outline" onclick="quickSearch('1010G')">1010G</button>
                    <button class="btn btn-outline" onclick="quickSearch('1020T')">1020T</button>
                    <button class="btn btn-outline" onclick="quickSearch('5R')">5R</button>
                </div>
            </div>
            
            <div class="reset-section">
                <button class="btn btn-primary" onclick="resetFilters()">
                    <i class="fas fa-redo"></i>
                    Reset Filter
                </button>
            </div>
        </div>
    `;
}

/**
 * Get search suggestions
 */
function getSearchSuggestions(searchTerm) {
    if (!searchTerm || searchTerm.length < 3) return [];
    
    const allTerms = new Set();
    if (catalogData) {
        catalogData.categories.forEach(category => {
            allTerms.add(category.name.toLowerCase());
            if (category.models) {
                category.models.forEach(model => {
                    allTerms.add(model.model.toLowerCase());
                });
            }
        });
    }
    
    const suggestions = Array.from(allTerms)
        .filter(term => term.includes(searchTerm) && term !== searchTerm)
        .slice(0, 5);
    
    return suggestions;
}

/**
 * Get debug info
 */
function getDebugInfo(searchTerm) {
    if (!searchTerm || !catalogData) return 'No search term or catalog data';
    
    let debug = `Search term: "${searchTerm}"\n`;
    debug += `Categories in catalog: ${catalogData.categories.length}\n\n`;
    
    catalogData.categories.forEach(category => {
        const items = category.models || category.products || [];
        debug += `${category.name}: ${items.length} items\n`;
        
        items.forEach(item => {
            const searchableFields = [
                item.model || '',
                (item.description || ''),
                ...(item.applications || []).join(', '),
                ...(item.features || []).join(', ')
            ].join(' ').toLowerCase();
            
            const matches = searchableFields.includes(searchTerm);
            debug += `  - ${item.model}: ${matches ? 'MATCH' : 'NO MATCH'}\n`;
        });
        debug += '\n';
    });
    
    return debug;
}

/**
 * Create product card HTML
 */
function createProductCard(product) {
    // Generate placeholder image
    const categoryColors = {
        'Steelflex Couplings': '#1a365d',
        'Gear Couplings': '#2c5282', 
        'Wrapflex Couplings': '#d4af37',
        'T10 Grid Couplings': '#4a5568',
        'T20 Disc Couplings': '#718096',
        'Long-Term Grease': '#2d3748'
    };
    
    const bgColor = categoryColors[product.categoryName] || '#1a365d';
    const textColor = product.categoryName === 'Wrapflex Couplings' ? '#1a365d' : '#ffffff';
    const imageUrl = `https://via.placeholder.com/400x200/${bgColor.replace('#', '')}/${textColor.replace('#', '')}?text=${encodeURIComponent(product.model)}`;
    
    return `
        <div class="product-card fade-in-up">
            <div class="product-image">
                <img src="${imageUrl}" alt="${product.model}" loading="lazy">
                <div class="product-badge">${product.categoryName}</div>
            </div>
            <div class="product-content">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-name">${product.model}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-specs">
                    <div class="spec-grid">
                        <div class="spec-item">
                            <span class="spec-label">Bore Range:</span>
                            <span class="spec-value">${product.boreRange}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Max Torque:</span>
                            <span class="spec-value">${product.maxTorqueNm ? product.maxTorqueNm.toLocaleString() + ' Nm' : 'N/A'}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Max RPM:</span>
                            <span class="spec-value">${product.maxRPM ? product.maxRPM.toLocaleString() + ' RPM' : 'N/A'}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Catalog:</span>
                            <span class="spec-value">${product.catalogNumber}</span>
                        </div>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-detail" data-model="${product.model}" onclick="showProductDetail('${product.id}')">
                        <i class="fas fa-info-circle"></i>
                        Detail Lengkap
                    </button>
                    <a href="${product.pdf}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-file-pdf"></i>
                        PDF
                    </a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Perform search
 */
function performSearch() {
    displayProducts();
}

/**
 * Quick search
 */
function quickSearch(term) {
    if (searchInput) {
        searchInput.value = term;
    }
    performSearch();
}

/**
 * Select category
 */
function selectCategory(categoryId) {
    if (categoryFilter) {
        categoryFilter.value = categoryId === 'all' ? '' : categoryId;
    }
    
    // Update tab active state
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === categoryId);
    });
    
    performSearch();
}

/**
 * Reset filters
 */
function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (torqueFilter) torqueFilter.value = '';
    if (boreFilter) boreFilter.value = '';
    
    // Reset tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === 'all');
    });
    
    performSearch();
}

/**
 * Show product detail modal
 */
function showProductDetail(productId) {
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = createProductModal(product);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

/**
 * Create product modal
 */
function createProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${product.model} - ${product.categoryName}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="product-detail-grid">
                    <div class="detail-section">
                        <h3>Spesifikasi Teknis</h3>
                        <div class="spec-table">
                            <div class="spec-row">
                                <span class="spec-label">Model:</span>
                                <span class="spec-value">${product.model}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Bore Range:</span>
                                <span class="spec-value">${product.boreRange}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Max Torque:</span>
                                <span class="spec-value">${product.maxTorqueNm ? product.maxTorqueNm.toLocaleString() + ' Nm' : 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Max RPM:</span>
                                <span class="spec-value">${product.maxRPM ? product.maxRPM.toLocaleString() + ' RPM' : 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Catalog Number:</span>
                                <span class="spec-value">${product.catalogNumber}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Dimensi & Berat</h3>
                        <div class="spec-table">
                            <div class="spec-row">
                                <span class="spec-label">Size:</span>
                                <span class="spec-value">${product.dimensions.size || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Weight:</span>
                                <span class="spec-value">${product.dimensions.weight || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Length:</span>
                                <span class="spec-value">${product.dimensions.length || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Diameter:</span>
                                <span class="spec-value">${product.dimensions.diameter || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Aplikasi</h3>
                        <ul class="feature-list">
                            ${(product.applications || []).map(app => `<li>${app}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Fitur</h3>
                        <ul class="feature-list">
                            ${(product.features || []).map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Performa</h3>
                        <div class="spec-table">
                            <div class="spec-row">
                                <span class="spec-label">Torsional Stiffness:</span>
                                <span class="spec-value">${product.performance.torsionalStiffness || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Windup:</span>
                                <span class="spec-value">${product.performance.windup || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Efficiency:</span>
                                <span class="spec-value">${product.performance.efficiency || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Instalasi</h3>
                        <div class="spec-table">
                            <div class="spec-row">
                                <span class="spec-label">Installation Time:</span>
                                <span class="spec-value">${product.installation.time || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Tools Required:</span>
                                <span class="spec-value">${product.installation.tools || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Complexity:</span>
                                <span class="spec-value">${product.installation.complexity || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Maintenance</h3>
                        <div class="spec-table">
                            <div class="spec-row">
                                <span class="spec-label">Type:</span>
                                <span class="spec-value">${product.maintenance.type || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Interval:</span>
                                <span class="spec-value">${product.maintenance.interval || 'N/A'}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Expected Life:</span>
                                <span class="spec-value">${product.maintenance.expectedLife || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="${product.pdf}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-pdf"></i>
                    Download PDF
                </a>
                <button class="btn btn-secondary modal-close">
                    <i class="fas fa-times"></i>
                    Tutup
                </button>
            </div>
        </div>
    `;
    
    return modal;
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

/**
 * Show error message
 */
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
        <button class="error-close">&times;</button>
    `;
    
    document.body.appendChild(errorDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
    
    // Manual close
    errorDiv.querySelector('.error-close').addEventListener('click', () => {
        errorDiv.remove();
    });
}

/**
 * Debounce function for search
 */
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

/**
 * Utility functions
 */
const utils = {
    /**
     * Format number with locale
     */
    formatNumber: (num) => {
        return num ? num.toLocaleString('id-ID') : 'N/A';
    },
    
    /**
     * Get color for category
     */
    getCategoryColor: (categoryName) => {
        const colors = {
            'Steelflex Couplings': '#1a365d',
            'Gear Couplings': '#2c5282', 
            'Wrapflex Couplings': '#d4af37',
            'T10 Grid Couplings': '#4a5568',
            'T20 Disc Couplings': '#718096',
            'Long-Term Grease': '#2d3748'
        };
        return colors[categoryName] || '#1a365d';
    },
    
    /**
     * Generate placeholder image URL
     */
    generatePlaceholderImage: (model, categoryName) => {
        const bgColor = utils.getCategoryColor(categoryName);
        const textColor = categoryName === 'Wrapflex Couplings' ? '#1a365d' : '#ffffff';
        return `https://via.placeholder.com/400x200/${bgColor.replace('#', '')}/${textColor.replace('#', '')}?text=${encodeURIComponent(model)}`;
    }
};

// Export for global access
window.MomentumMachinery = {
    performSearch,
    quickSearch,
    selectCategory,
    resetFilters,
    showProductDetail,
    closeModal,
    utils
};
