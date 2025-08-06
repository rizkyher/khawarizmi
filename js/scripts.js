(function ($) {
  "use strict";

  /* Navbar Scripts */
  $(window).on("scroll load", function () {
    if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  $('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });

  function toggleDropdown(e) {
    const _d = $(e.target).closest(".dropdown"),
      _m = $(".dropdown-menu", _d);
    setTimeout(function () {
      const shouldOpen = e.type !== "click" && _d.is(":hover");
      _m.toggleClass("show", shouldOpen);
      _d.toggleClass("show", shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
    }, e.type === "mouseleave" ? 300 : 0);
  }

  $("body")
    .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
    .on("click", ".dropdown-menu a", toggleDropdown);

  $(".popup-with-move-anim").magnificPopup({
    type: "inline",
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
  });

  var cardSlider = new Swiper(".card-slider", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
      767: { slidesPerView: 1 },
      1023: { slidesPerView: 2, spaceBetween: 40 },
    },
  });

  var a = 0;
  $(window).scroll(function () {
    if ($("#counter").length) {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
        a = 1;
      }
    }
  });

  $("input, textarea").keyup(function () {
    if ($(this).val() != "") {
      $(this).addClass("notEmpty");
    } else {
      $(this).removeClass("notEmpty");
    }
  });

  $("body").prepend(
    '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
  );
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });

  function getMenuItems() {
    var menuItems = [];
    $(".nav-link").each(function () {
      var hash = $(this).attr("href").substr(1);
      if (hash !== "") menuItems.push(hash);
    });
    return menuItems;
  }

  $(".nav-link").click(function (e) {
    var hash = $(this).attr("href").substr(1);
    if (hash == "") e.preventDefault();
  });

  changeActive();
  $(document).scroll(function () {
    changeActive();
  });

  function changeActive() {
    const menuItems = getMenuItems();
    $.each(menuItems, function (index, value) {
      var section = $("#" + value);
      if (section.length) {
        var offsetSection = section.offset().top;
        var docScroll = $(document).scrollTop() + 1;

        if (docScroll >= offsetSection) {
          $(".nav-link").removeClass("active");
          $('.nav-link[href$="#' + value + '"]').addClass("active");
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const youtubeChannelId = 'UCGaPL10pZk09k_anyhRf5qw'; 
    const apiKey = 'AIzaSyCe5ixS37xZ4Ud-4kZ3iLrj59aGNo7jnLE';
    const maxResults = 3;

    async function fetchLatestVideos() {
        if (!videoContainer) {
            console.error('Elemen #video-container tidak ditemukan.');
            return;
        }

        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=${maxResults}`);
            const data = await response.json();
            
            if (data.items && data.items.length > 0) {
                videoContainer.innerHTML = '';
                data.items.forEach(item => {
                    if (item.id.kind === 'youtube#video') {
                        const videoId = item.id.videoId;
                        const title = item.snippet.title;
                        const thumbnailUrl = item.snippet.thumbnails.high.url;

                        const cardHtml = `
                            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                                <a href="https://www.youtube.com/embed/${videoId}" class="popup-youtube relative block w-full aspect-[16/9]">
                                    <img src="${thumbnailUrl}" alt="${title}" class="w-full h-full object-cover">
                                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </a>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold text-gray-800 mb-1">${title}</h3>
                                </div>
                            </div>
                        `;
                        videoContainer.insertAdjacentHTML('beforeend', cardHtml);
                    }
                });

              $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                iframe: {
                  patterns: {
                    youtube: {
                      index: 'https://www.youtube.com/embed/$',
                      id: 'v=',
                      src: '//www.youtube.com/embed/%id%?autoplay=1&mute=1' // URL dengan autoplay dan mute
                    }
                  }
                }
              });
            } else {
                videoContainer.innerHTML = `<p class="text-center text-gray-500">Tidak ada video yang ditemukan.</p>`;
            }
        } catch (error) {
            console.error('Gagal mengambil video dari YouTube API', error);
            videoContainer.innerHTML = `<p class="text-center text-gray-500">Gagal memuat video terbaru. Silakan coba lagi nanti.</p>`;
        }
    }

    fetchLatestVideos();
});
})(jQuery);
