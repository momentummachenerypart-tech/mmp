// products.js

// Data produk default
const defaultProducts = [
  {
    id: 1,
    name: "Rantai Industri Heavy Duty",
    category: "Rantai",
    price: 1250000,
    description: "Rantai industri berkualitas tinggi untuk aplikasi berat dengan daya tahan ekstra.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    badge: "new",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    ],
    specs: {
      material: "Baja Alloy",
      type: "Heavy Duty",
      size: "1/2\" x 3/16\"",
      tensile: "12.500 kg",
      madeIn: "USA"
    },
    pdfs: [
      { name: "Katalog Produk", size: "2.4 MB", id: "katalog-1", url: "pdfs/katalog-rantai.pdf" },
      { name: "Spesifikasi Teknis", size: "1.8 MB", id: "spesifikasi-1", url: "pdfs/spesifikasi-rantai.pdf" },
      { name: "Manual Instalasi", size: "3.2 MB", id: "manual-1", url: "pdfs/manual-rantai.pdf" }
    ]
  },
  {
    id: 2,
    name: "Bantalan Bola Presisi",
    category: "Bantalan",
    price: 850000,
    description: "Bantalan bola presisi tinggi untuk aplikasi yang membutuhkan keakuratan maksimal.",
    image: "https://images.unsplash.com/photo-1558618666-fcd44c00d6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    badge: "sale",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd44c00d6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd44c00d6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      material: "Baja Karbon",
      type: "Presisi",
      size: "60mm x 25mm",
      tensile: "8.500 kg",
      madeIn: "Jerman"
    },
    pdfs: [
      { name: "Katalog Produk", size: "1.8 MB", id: "katalog-2", url: "pdfs/katalog-bantalan.pdf" },
      { name: "Spesifikasi Teknis", size: "1.2 MB", id: "spesifikasi-2", url: "pdfs/spesifikasi-bantalan.pdf" }
    ]
  },
  {
    id: 3,
    name: "Kopling Fleksibel",
    category: "Kopling",
    price: 1100000,
    description: "Kopling fleksibel untuk menghubungkan poros dengan toleransi misalignment yang tinggi.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    specs: {
      material: "Baja Paduan",
      type: "Fleksibel",
      size: "50mm x 50mm",
      tensile: "10.000 kg",
      madeIn: "Jepang"
    },
    pdfs: [
      { name: "Katalog Produk", size: "2.1 MB", id: "katalog-3", url: "pdfs/katalog-kopling.pdf" }
    ]
  },
  {
    id: 4,
    name: "Roda Gigi Heliks",
    category: "Roda Gigi",
    price: 1750000,
    description: "Roda gigi heliks untuk transmisi daya halus dengan operasi yang lebih hening.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    badge: "new",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      material: "Baja Keras",
      type: "Heliks",
      size: "100mm x 20mm",
      tensile: "15.000 kg",
      madeIn: "USA"
    },
    pdfs: [
      { name: "Katalog Produk", size: "2.8 MB", id: "katalog-4", url: "pdfs/katalog-gear.pdf" },
      { name: "Spesifikasi Teknis", size: "1.5 MB", id: "spesifikasi-4", url: "pdfs/spesifikasi-gear.pdf" },
      { name: "Manual Aplikasi", size: "2.2 MB", id: "manual-4", url: "pdfs/manual-gear.pdf" }
    ]
  },
  {
    id: 5,
    name: "Conveyor Belt Heavy Duty",
    category: "Konveyor",
    price: 2250000,
    description: "Conveyor belt heavy duty untuk aplikasi industri dengan beban berat.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      material: "Karet Sintetis",
      type: "Heavy Duty",
      size: "500mm x 10mm",
      tensile: "20.000 kg",
      madeIn: "Korea"
    },
    pdfs: [
      { name: "Katalog Produk", size: "3.1 MB", id: "katalog-5", url: "pdfs/katalog-conveyor.pdf" },
      { name: "Spesifikasi Teknis", size: "2.0 MB", id: "spesifikasi-5", url: "pdfs/spesifikasi-conveyor.pdf" }
    ]
  },
  {
    id: 6,
    name: "Motor Induksi Premium",
    category: "Motor",
    price: 3250000,
    description: "Motor induksi premium dengan efisiensi tinggi untuk berbagai aplikasi industri.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "sale",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    ],
    specs: {
      material: "Aluminium Kualitas Tinggi",
      type: "Induksi",
      size: "200mm x 150mm",
      tensile: "25.000 kg",
      madeIn: "Jerman"
    },
    pdfs: [
      { name: "Katalog Produk", size: "4.2 MB", id: "katalog-6", url: "pdfs/katalog-motor.pdf" },
      { name: "Spesifikasi Teknis", size: "2.8 MB", id: "spesifikasi-6", url: "pdfs/spesifikasi-motor.pdf" },
      { name: "Manual Instalasi", size: "3.5 MB", id: "manual-6", url: "pdfs/manual-motor.pdf" },
      { name: "Manual Pemeliharaan", size: "2.1 MB", id: "pemeliharaan-6", url: "pdfs/pemeliharaan-motor.pdf" }
    ]
  }
];

// Produk Manager - Kelas untuk mengelola data produk
class ProductManager {
  constructor() {
    this.products = this.loadProducts();
  }

  // Memuat produk dari localStorage atau menggunakan data default
  loadProducts() {
    const storedProducts = localStorage.getItem('momentumProducts');
    
    if (storedProducts) {
      try {
        return JSON.parse(storedProducts);
      } catch (e) {
        console.error('Error parsing stored products:', e);
        return defaultProducts;
      }
    } else {
      return defaultProducts;
    }
  }

  // Menyimpan produk ke localStorage
  saveProducts() {
    localStorage.setItem('momentumProducts', JSON.stringify(this.products));
  }

  // Mendapatkan semua produk
  getProducts() {
    return this.products;
  }

  // Mendapatkan produk berdasarkan ID
  getProductById(id) {
    return this.products.find(product => product.id === parseInt(id));
  }

  // Mendapatkan produk berdasarkan kategori
  getProductsByCategory(category) {
    return this.products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Mendapatkan kategori unik
  getUniqueCategories() {
    return [...new Set(this.products.map(product => product.category))];
  }

  // Menambah produk baru
  addProduct(product) {
    // Generate ID baru
    const newId = Math.max(...this.products.map(p => p.id), 0) + 1;
    product.id = newId;
    
    // Tambahkan produk
    this.products.push(product);
    
    // Simpan ke localStorage
    this.saveProducts();
    
    return newId;
  }

  // Memperbarui produk
  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex(product => product.id === parseInt(id));
    
    if (index !== -1) {
      // Pertahankan ID asli
      updatedProduct.id = parseInt(id);
      
      // Update produk
      this.products[index] = updatedProduct;
      
      // Simpan ke localStorage
      this.saveProducts();
      
      return true;
    }
    
    return false;
  }

  // Menghapus produk
  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === parseInt(id));
    
    if (index !== -1) {
      // Hapus produk
      this.products.splice(index, 1);
      
      // Simpan ke localStorage
      this.saveProducts();
      
      return true;
    }
    
    return false;
  }

  // Menambah PDF ke produk
  addPdfToProduct(productId, pdf) {
    const product = this.getProductById(productId);
    
    if (product) {
      // Generate ID baru untuk PDF
      const newPdfId = `pdf-${Date.now()}`;
      pdf.id = newPdfId;
      
      // Tambahkan PDF
      if (!product.pdfs) {
        product.pdfs = [];
      }
      
      product.pdfs.push(pdf);
      
      // Simpan ke localStorage
      this.saveProducts();
      
      return newPdfId;
    }
    
    return null;
  }

  // Menghapus PDF dari produk
  deletePdfFromProduct(productId, pdfId) {
    const product = this.getProductById(productId);
    
    if (product && product.pdfs) {
      const index = product.pdfs.findIndex(pdf => pdf.id === pdfId);
      
      if (index !== -1) {
        // Hapus PDF
        product.pdfs.splice(index, 1);
        
        // Simpan ke localStorage
        this.saveProducts();
        
        return true;
      }
    }
    
    return false;
  }

  // Mencari produk
  searchProducts(query) {
    const lowercaseQuery = query.toLowerCase();
    
    return this.products.filter(product => {
      return (
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery)
      );
    });
  }

  // Memformat harga
  formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  }

  // Mendapatkan produk untuk slider (dibagi per slide)
  getProductsForSlider(productsPerSlide = 3) {
    const slides = [];
    
    for (let i = 0; i < this.products.length; i += productsPerSlide) {
      slides.push(this.products.slice(i, i + productsPerSlide));
    }
    
    return slides;
  }
}

// Utility functions
const ProductUtils = {
  // Fungsi untuk menampilkan notifikasi toast
  showToast(message, type = 'success') {
    // Buat elemen toast jika belum ada
    let toast = document.getElementById('toast');
    
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    
    // Set konten toast
    toast.innerHTML = `
      <i class="fas toast-icon"></i>
      <div class="toast-message">${message}</div>
    `;
    
    // Set type
    toast.className = 'toast toast-' + type;
    const toastIcon = toast.querySelector('.toast-icon');
    
    if (type === 'success') {
      toastIcon.className = 'fas toast-icon fa-check-circle';
    } else if (type === 'error') {
      toastIcon.className = 'fas toast-icon fa-exclamation-circle';
    } else if (type === 'info') {
      toastIcon.className = 'fas toast-icon fa-info-circle';
    }
    
    // Tampilkan toast
    toast.classList.add('show');
    
    // Sembunyikan toast setelah 3 detik
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  },

  // Fungsi untuk membuka PDF
  openPdf(url) {
    // Buka PDF di tab baru
    window.open(url, '_blank');
  },

  // Fungsi untuk konfirmasi
  confirm(message) {
    return confirm(message);
  },

  // Fungsi untuk memformat tanggal
  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  }
};

// Inisialisasi Product Manager
const productManager = new ProductManager();

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProductManager, ProductUtils, productManager };
} else {
  // Untuk penggunaan di browser
  window.ProductManager = ProductManager;
  window.ProductUtils = ProductUtils;
  window.productManager = productManager;
}