const books = [
  {
    id: "book-1",
    title: "Liquid Curicullum",
    description: `Tujuan pendidikan dari Liquid Curriculum adalah mencapai stabilisasi
moral, mental, dan produktifitas lebih cepat.
Siapapun yang mendambakan lahirnya generasi impian, baik anda
adalah seorang guru maupun orang tua, Liquid Curriculum adalah
jawabannya. InsyaAllah`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Pendidikan", "Parenting", "Islami"],
    pageCount: "x + 326",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-470-8",
    series: "Karya Independen",
    images: ["img/LC/cover.jpg", "img/LC/b-cover.jpg","img/LC/1.jpg","img/LC/2.jpg",]
  },
  {
    id: "book-2",
    title: "Islamic Technology Mindset Installation",
    description: `Di buku kedua ini dijabarkan apa itu ITMI secara detail...`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Agama Islam", "Teknologi"],
    pageCount: "xii + 311",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-458-6",
    series: "Seri Teknologi Islami",
    images: ["img/ITMI/cover.jpg", "img/ITMI/b-cover.jpg","img/ITMI/1.jpg","img/ITMI/2.jpg", "img/ITMI/3.jpg", "img/ITMI/4.jpg", "img/ITMI/5.jpg"],
  },
  {
    id: "book-3",
    title: "Sejarah Teknologi",
    description: `Buku ini adalah buku tentang sejarah teknologi yang jujur...`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Agama Islam", "Sejarah", "Teknologi"],
    pageCount: "x + 156",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-466-1",
    series: "Seri Teknologi Islami",
    images: ["img/ST/cover.jpg", "img/ST/b-cover.jpg", "img/ST/1.jpg","img/ST/2.jpg", "img/ST/3.jpg", "img/ST/4.jpg" ]
  },
  {
    id: "book-4",
    title: "Mental Belajar Teknologi",
    description: `Teknologi bagaikan kotak pandora...`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Agama Islam", "Teknologi"],
    pageCount: "x + 114",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-460-9",
    series: "Seri Teknologi Islami",
    images: ["img/BT/cover.jpg", "img/BT/b-cover.jpg", "img/BT/1.jpg","img/BT/2.jpg", ]
  },
  {
    id: "book-5",
    title: "IT DENGAN PROYEK FESTIVAL",
    description: `Efektivitas pembelajaran IT tidak akan sempurna tanpa jam dan strategi praktik yang baik...`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Agama Islam", "Teknologi"],
    pageCount: "x + 114",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-460-9",
    series: "Seri Teknologi Islami",
    images: ["img/IT-PF/cover.jpg", "img/IT-PF/b-cover.jpg", "img/IT-PF/1.jpg","img/IT-PF/2.jpg", ]
  },
  {
    id: "book-6",
    title: "IT BERORIENTASI PRODUKTIF",
    description: `Jaman sudah berubah, portofolio menjadi lebih penting daripada ijazah...`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Agama Islam", "Teknologi"],
    pageCount: "x + 114",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-460-9",
    series: "Seri Teknologi Islami",
    images: ["img/IT-BP/cover.jpg", "img/IT-BP/b-cover.jpg", "img/IT-BP/1.jpg","img/IT-BP/2.jpg",]
  },
  {
    id: "book-7",
    title: "IT BERORIENTASI MONETITATIF",
    description: `Keahlian teknologi menjadi salah satu kunci utama untuk meraih kesuksesan finansial...`,
    author: "Ustadz Purwanto Abdul Ghaffar",
    publisher: "Bintang Semesta Media",
    categories: ["Agama Islam", "Teknologi"],
    pageCount: "x + 114",
    language: "Indonesia",
    dimensions: "14 x 20",
    isbn: "978-623-129-460-9",
    series: "Seri Teknologi Islami",
    images: ["img/IT-BM/cover.jpg", "img/IT-BM/b-cover.jpg", "img/IT-BM/1.jpg","img/IT-BM/2.jpg", "img/IT-BM/3.jpg", ]
  }
];


        // Function to get book ID from URL
     // Function to get book ID from URL
function getBookIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id"); // Contoh: ?id=book-3
}


        // Function to find book by ID
        function findBookById(id) {
            return books.find(book => book.id === id);
        }

        // Function to render book details
    function renderBookDetail(book) {
    if (!book) {
        document.getElementById('bookDetailContainer').innerHTML = `
            <div class="p-8 text-center">
                <h2 class="text-2xl font-bold text-gray-800">Book not found</h2>
            </div>
        `;
        return;
    }

    const categoriesHtml = book.categories.map(category =>
        `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">${category}</span>`
    ).join('');

    const thumbnailsHtml = book.images.map((image, index) =>
        `<img src="${image}" alt="Book image ${index + 1}" 
        class="w-16 h-20 object-cover border-2 cursor-pointer transition-all duration-200 ${index === 0 ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'}" 
        onclick="changeMainImage('${image}', this)">`
    ).join('');

    const mainImage = book.images.length > 0 ? book.images[0] : '/api/placeholder/300/450';

    const currentIndex = books.findIndex(b => b.id === book.id);
    const prevBook = books[currentIndex - 1];
    const nextBook = books[currentIndex + 1];

    // Tampilkan harga jika tersedia
    const priceDisplay = book.price ? 
        `<div class="text-2xl font-bold text-green-700 mb-6">Rp ${book.price.toLocaleString('id-ID')}</div>` : 
        '';

    const navigationButtonsHtml = `
        <div class="mt-8 flex gap-4">
            ${
                prevBook ? `<button id="prevBookBtn" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded transition duration-200 flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Sebelumnya
                </button>` : ''
            }
            ${
                nextBook ? `<button id="nextBookBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-200 flex items-center">
                    Berikutnya
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>` : ''
            }
        </div>
    `;

    document.getElementById('bookDetailContainer').innerHTML = `
        <div class="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div class="flex flex-col md:flex-row gap-8">
                <div class="flex flex-col w-full md:w-1/3">
                    <div class="mb-4">
                        <img src="${mainImage}" alt="${book.title}" class="w-full h-auto object-cover rounded-lg shadow-md" id="mainBookImage">
                    </div>
                    <div class="flex flex-wrap gap-2 justify-center">
                        ${thumbnailsHtml}
                    </div>
                    <div class="mt-6">
                        <button id="orderBookBtn" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
                
                <div class="w-full md:w-2/3">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">${book.title}</h1>
                    <h2 class="text-xl text-gray-700 mb-4">by ${book.author}</h2>
                    
                    <p class="text-gray-600 mb-6 leading-relaxed">${book.description}</p>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                            <div class="flex flex-col">
                                <span class="text-sm text-gray-500">Publisher</span>
                                <span class="font-medium text-gray-800">${book.publisher}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm text-gray-500">Page Count</span>
                                <span class="font-medium text-gray-800">${book.pageCount}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm text-gray-500">Language</span>
                                <span class="font-medium text-gray-800">${book.language}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm text-gray-500">Dimensions</span>
                                <span class="font-medium text-gray-800">${book.dimensions}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm text-gray-500">ISBN</span>
                                <span class="font-medium text-gray-800">${book.isbn}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm text-gray-500">Series</span>
                                <span class="font-medium text-gray-800">${book.series}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="text-sm text-gray-500 mb-2">Categories</h3>
                        <div class="flex flex-wrap">
                            ${categoriesHtml}
                        </div>
                    </div>
                    
                    ${navigationButtonsHtml}
                </div>
            </div>
        </div>
    `;

    // Event listener untuk tombol navigasi
    if (nextBook) {
        document.getElementById('nextBookBtn').addEventListener('click', () => {
            window.location.href = `detailbuku.html?id=${nextBook.id}`;
        });
    }

    if (prevBook) {
        document.getElementById('prevBookBtn').addEventListener('click', () => {
            window.location.href = `detailbuku.html?id=${prevBook.id}`;
        });
    }

    // Event listener untuk tombol pesan
    document.getElementById('orderBookBtn').addEventListener('click', () => {
        // Fungsi untuk menangani pemesanan buku
        orderBook(book.id, book.title);
    });
}
        // Function to change main image when thumbnail is clicked
        window.changeMainImage = function(src, element) {
            document.getElementById('mainBookImage').src = src;
            
            // Update active thumbnail
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            element.classList.add('active');
        }

        // When page loads
        document.addEventListener('DOMContentLoaded', function() {
            const bookId = getBookIdFromUrl();
            const book = findBookById(bookId);
            renderBookDetail(book);
        });
