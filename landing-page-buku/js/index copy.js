 const data = {
    seriInfo: {
      name: "Seri Teknologi Islami"
    },
    books: [
      {
        id: "book-1",
        judul: "IT BERORIENTASI MONETITATIF",
        seri: "Seri Teknologi Islami",
        deskripsi: "Keahlian teknologi menjadi salah satu kunci utama untuk meraih kesuksesan finansial. Monetisasi harus menjadi target pembelajaran, sehingga pelajar di bidang IT selalu berpikir tentang bagaimana cara menghasilkan pendapatan dari teknologi. Buku ini mengarahkan anak dan siswa kita untuk bercita-cita menjadi seorang technopreneur, yaitu wirausaha berbasis teknologi, dengan cara mencipta dan membuat suatu produk dan berlatih untuk memonetisasinya",
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
      deskripsi: "Jaman sudah berubah, portofolio menjadi lebih penting daripada ijazah.Perusahaan zaman sekarang lebih sering bertanya, \"Berapa perangkat lunak yang pernah Anda buat?\", \"Anda sudah terlibat dalam berapa proyek?\" Oleh karena itu, mari kita dorong anak dan siswa kita untuk mencari ide, untuk mengerjakan proyek dan menciptakan atau membuat produk.Buku ini memandu guru dan orangtua untuk menuntun tahap demi tahap agar anak dan siswa kita belajar IT secara produktif.",
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
      deskripsi: "Efektivitas pembelajaran IT tidak akan sempurna tanpa jam dan strategi praktik yang baik.Pembelajaran yang disertai dengan praktik lebih efektif dengan persentase keberhasilan yang lebih tinggi (85%) dibandingkan dengan pembelajaran melalui teori saja (55%). Buku ini membahas tentang bagaimana menjalankan strategi pembelajaran berbasis project.Buku ini juga membahas tentang peningkatan kualitas guru agar mampu menciptakan dan mengawal proyek-proyek di mapel IT",
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
      deskripsi: "Di buku ini dijabarkan apa itu ITMI secara detail. ITMI adalah bagian dari Liquid Curriculum yang memiliki dua fungsi utama.Fungsi ITMI yang pertama adalah sebagai metode preventif & kuratif untuk mudhorotnya teknologi, seperti nomophobia, narkolema, game addiction, dsb. Fungsi kedua dari ITMI adalah sebagai metode belajar mapel IT yang efektif, lebih cepat, sebab menggunakan strategi ajar yang unik",
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
      deskripsi: "Tujuan pendidikan dari liquid curriculum adalah mencapai stabilisasi moral, mental, dan produktifitas lebih cepat.Siapapun yang mendambakan lahirnya generasi impian, baik anda adalah seorang guru maupun orang tua, Liquid Curriculum adalah jawabannya. Insyaallah.",
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
      deskripsi: "Buku ini adalah buku tentang sejarah teknologi yang jujur, di dalam buku ini dijabarkan tentang keterlibatan kaum muslimin dalam mempelopori kebangkitan teknologi.Bagaimana ilmuwan muslim menjaga dan memelihara khazanah keilmuan peradaban-peradaban hebat di masa lalu, seperti Yunani, Persia, bahkan China.Bagaimana ilmuwan muslim meneruskan penelitian mereka dengan berpandu dengan Al-Quran yang hasilnya adalah penemuan-penemuan yang orisinil. Buku ini juga menjelaskan bagaimana peradaban keilmuan itu bisa runtuh dan berpindah ke barat.Semua isi buku ini insya Allah akan membangkitkan semangat dan gairah pemuda muslim untuk kembali bangkit dan kembali mendekati teknolog.",
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
      deskripsi: "Teknologi bagaikan kotak pandora, di dalamnya terdapat keburukan dan manfaat.Menghindari teknologi sudah tak mungkin! yang logis adalah menyiapkan anak dan siswa kita agar dia punya mental yang tangguh untuk mampu menjauhi keburukan teknologi dan punya mental yang tangguh untuk hanya fokus kepada manfaatnya serta punya mental yang produktif bahkan monetitatif dalam berteknologi.Buku ini menjadi penting bagi pendidik (orang tua dan guru) karena di dalamnya terdapat langkah demi langkah untukmembangun \"mental-mental berteknologi\" tersebut.",
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
        <p class="hidden md:block text-lg mb-8 text-gray-700">${book.deskripsi}</p>

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
  


  // Simple script for interactive elements

  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Menutup menu saat link menu diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
});
  

document.addEventListener("DOMContentLoaded", () => {
  const dataPackage = [
      {
      id: "paket-1",
      name: "Regular Lesson Plan",
      price: "Rp 799.000",
      recommended: false,
      benefits: [
          "Buku paket seri IT (7 buku)",
          "Mendapatkan akses video tutorial mapel IT"
      ]
      },
      {
      id: "paket-2",
      name: "Premium Lesson Plan",
      price: "Rp 1.299.000",
      recommended: false,
      benefits: [
          "Buku paket seri IT (7 buku)",
          "Mendapatkan akses video tutorial mapel IT",
          "Mendapatkan ticket free webinar 2 minggu sekali"
      ]
      },
      {
      id: "paket-3",
      name: "Full Lesson Plan",
      price: "Rp 1.999.000",
      recommended: true,
      benefits: [
          "Buku paket seri IT (7 buku)",
          "Mendapatkan akses video tutorial mapel IT",
          "Mendapatkan ticket free webinar 2 minggu sekali",
          "Mendapatkan event bedah buku sebanyak 7x @ durasi 120 mnt secara online",
          "Opsi offline tersedia (biaya transportasi & akomodasi terpisah)"
      ]
      }
  ];

  const packageList = document.getElementById("package-list");
  
  dataPackage.forEach((paket) => {
  const paketDiv = document.createElement("div");
  paketDiv.className = "package-card relative bg-white rounded-xl overflow-hidden shadow-lg flex flex-col w-full max-w-sm";

  // Add recommended badge if applicable
  if (paket.recommended) {
      const badge = document.createElement("div");
      badge.className = "package-badge";
      badge.textContent = "Recommended";
      paketDiv.appendChild(badge);
  }

  const benefitsList = paket.benefits.map(item =>
      `<li class="benefit-item mb-3">${item}</li>`
  ).join("");

  paketDiv.innerHTML += `
      <div class="bg-gradient-to-r ${paket.recommended ? 'from-yellow-400 to-orange-500' : 'from-gray-100 to-gray-200'} p-6">
      <h3 class="text-2xl font-bold ${paket.recommended ? 'text-white' : 'text-gray-800'}">${paket.name}</h3>
      <p class="text-xl font-semibold mt-2 ${paket.recommended ? 'text-white' : 'text-gray-700'}">${paket.price}</p>
      </div>
      <div class="p-6 flex-grow">
      <ul class="text-gray-700 mb-6">
          ${benefitsList}
      </ul>
      </div>
      <div class="px-6 pb-6">
      <button class="pesan-btn w-full ${paket.recommended ? 'bg-orange-500 hover:bg-orange-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
          Pesan Sekarang
      </button>
      </div>
  `;

  // Append card to list
  packageList.appendChild(paketDiv);

  // Add event listener to the button
  const pesanButton = paketDiv.querySelector(".pesan-btn");
  pesanButton.addEventListener("click", () => {
      const pesan = `Saya ingin melakukan pemesanan untuk paket: ${paket.name}`;
      const waURL = `https://wa.me/6285161231559?text=${encodeURIComponent(pesan)}`;
      window.open(waURL, '_blank');
  });
  });

  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  });