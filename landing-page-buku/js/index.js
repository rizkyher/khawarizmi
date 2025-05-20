 const data = {
    seriInfo: {
      name: "Seri Teknologi Islami"
    },
    books: [
      {
        id: "book-1",
        judul: "IT BERORIENTASI MONETITATIF",
        seri: "Seri Teknologi Islami",
        deskripsi: "Buku ini membahas bagaimana memanfaatkan teknologi informasi...",
        publishYear: 2025,
        price: {
          normal: 125000,
          discount: 99000
        },
        coverUrl: "img/IT-BM/cover.jpg",
      },
      {
      id: "book-2",
      judul: "IT BERORIENTASI PRODUKTIF",
      seri: "Seri Teknologi Islami",
      deskripsi: "Buku ini mengajak pembaca untuk memaksimalkan produktivitas melalui teknologi informasi dengan tetap berpegang pada nilai-nilai Islam. Berbagai tools, metodologi, dan pendekatan dibahas untuk membantu meningkatkan efisiensi dan efektivitas dalam pekerjaan dan kehidupan sehari-hari.",
      publishYear: 2025,
      price: {
        normal: 135000,
        discount: 108000
      },
      coverUrl: "img/IT-BP/cover.jpg",
    },
    {
      id: "book-3",
      judul: "IT DENGAN PROYEK FESTIVAL",
      seri: "Seri Teknologi Islami",
      deskripsi: "Buku ini membahas bagaimana teknologi informasi dapat dimanfaatkan dalam mengelola dan mengembangkan proyek festival dan acara berbasis komunitas yang sesuai dengan nilai-nilai Islam, dari perencanaan hingga evaluasi.",
      publishYear: 2025,
      price: {
        normal: 120000,
        discount: 95000
      },
      coverUrl: "img/IT-PF/cover.jpg",
    },
     {
      id: "book-4",
      judul: "ISLAMIC TECHNOLOGY MINDSET INSTALLATION (ITMI)",
      seri: "Seri Teknologi Islami",
      deskripsi: "Buku ini fokus pada pembentukan pola pikir (mindset) tentang teknologi yang selaras dengan nilai-nilai Islam. Pembaca akan dibimbing untuk mengembangkan cara pandang yang tepat terhadap teknologi sebagai alat untuk kebaikan dan ibadah.",
      publishYear: 2025,
      price: {
        normal: 130000,
        discount: 104000
      },
      coverUrl: "img/ITMI/cover.jpg",
    },
    {
      id: "book-5",
      judul: "LC (Licuid Curriculum)",
      seri: "Karya Independen",
      deskripsi: "Buku ini memperkenalkan konsep kurikulum cair (liquid curriculum) yang adaptif dan fleksibel dalam pendidikan, khususnya dalam pembelajaran teknologi. Pendekatan ini memungkinkan adaptasi cepat terhadap perubahan dalam dunia teknologi.",
      publishYear: 2025,
      price: {
        normal: 150000,
        discount: 120000
      },
      coverUrl: "img/LC/cover.jpg",
    },
    {
      id: "book-6",
      judul: "SEJARAH TEKNOLOGI DARI PERSPEKTIF KAUM MUSLIMIN",
      seri: "Seri Teknologi Islami",
      deskripsi: "Buku ini menelusuri sejarah perkembangan teknologi dari perspektif peradaban Islam, menampilkan kontribusi ilmuwan Muslim dalam berbagai bidang teknologi dan sains sepanjang sejarah hingga era modern.",
      publishYear: 2025,
      price: {
        normal: 175000,
        discount: 140000
      },
      coverUrl: "img/ST/cover.jpg",
    },
    {
      id: "book-7",
      judul: "MENTAL BELAJAR TEKNOLOGI",
      seri: "Seri Teknologi Islami",
      deskripsi: "Buku ini mengulas aspek psikologis dan mental dalam proses belajar teknologi, dengan pendekatan yang didasarkan pada nilai-nilai Islam. Pembaca akan dipandu untuk mengembangkan mindset yang tepat dalam menghadapi tantangan belajar teknologi baru.",
      publishYear: 2025,
      price: {
        normal: 140000,
        discount: 112000
      },
      coverUrl: "img/BT/cover.jpg",
    },

      // buku lain...
    ]
  };

   // Ambil buku pertama
  const wrapper = document.getElementById('book-swiper-wrapper');

  data.books.forEach(book => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide flex flex-col md:flex-row items-center';

    slide.innerHTML = `
      <div class="md:w-1/2 mb-8 md:mb-0" id="book-info">
        <span class="text-gray-700 font-semibold text-xl">${book.seri}</span>
        <h1 class="text-4xl md:text-5xl font-bold mt-2 mb-4">${book.judul}</h1>
        <p class="text-lg mb-8 text-gray-700">${book.deskripsi}</p>
        <div class="flex flex-wrap gap-4">
         <button
            class="get-btn bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            data-judul="${book.judul}"
          >
            Pesan Sekarang - Rp${book.price.discount.toLocaleString('id-ID')}
          </button>
          
        </div>
        <div class="mt-8 flex space-x-4 text-blue">
          <span class="flex items-center"><i class="fas fa-calendar mr-2"></i> ${book.publishYear}</span>
          <span class="flex items-center"><i class="fas fa-tag mr-2"></i> ${book.seri}</span>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <div class="relative">
          <div class="absolute -inset-4 rounded-full bg-blue-500 opacity-30 blur-lg"></div>
          <img src="${book.coverUrl}" alt="${book.judul}" class="book-cover h-80 md:h-96 relative z-10 shadow-2xl rounded-lg" />
        </div>
      </div>
    `;
    wrapper.appendChild(slide)
    slide.querySelector(".get-btn").addEventListener("click", () => {
  const pesan = `Halo, saya tertarik untuk membeli buku *${book.judul}* (${book.publishYear}) dari seri "${book.seri}" seharga Rp ${book.price.discount.toLocaleString("id-ID")}.`;
  const nomor = "6285161231559";
  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});

  });

  // <button class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition duration-300">
  //           Coba Gratis
  //         </button>
  // Inisialisasi Swiper
  const swiper = new Swiper('.book-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  document.addEventListener('DOMContentLoaded', function() {
  const bookList = document.getElementById("book-list");

  // Populate book slides
  data.books.forEach(book => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto h-full flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold mb-4">${book.judul}</h3>
          <div class="flex items-start gap-6 mb-6">
            <img src="${book.coverUrl}" alt="Cover ${book.judul}" class="w-32 h-auto object-cover rounded">
            <div>
              <p class="text-gray-700 text-sm mb-3">${book.deskripsi}</p>
              <p class="text-sm text-gray-500">Tahun: ${book.publishYear}</p>
            </div>
          </div>
          <div class="mb-6">
            <span class="line-through text-gray-500 text-sm">Rp ${book.price.normal.toLocaleString("id-ID")}</span>
            <span class="text-lg font-bold text-orange-600 ml-2">Rp ${book.price.discount.toLocaleString("id-ID")}</span>
          </div>
        </div>
        <button
          class="order-btn bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-bold py-3 px-4 w-full rounded-md transition duration-300 flex items-center justify-center gap-2"
          data-judul="${book.judul}"
          data-seri="${book.seri}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Pesan Sekarang
        </button>
      </div>
    `;

    bookList.appendChild(slide);
  });

  // Add event listeners to all order buttons
  document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener("click", () => {
      const judul = button.getAttribute('data-judul');
      const seri = button.getAttribute('data-seri');
      const pesan = `Halo, saya ingin pre-order buku: *${judul}* dari seri "${seri}".`;
      const nomor = "6285161231559";
      const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
      window.open(url, "_blank");
    });
  });

  // Initialize Swiper
  const swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
});
  

  