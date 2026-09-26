// =========================
// MOBILE MENU
// =========================

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("show");

  const icon =
    menuToggle.querySelector("i");

  if (navLinks.classList.contains("show")) {

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

  } else {

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});


// =========================
// CLOSE MOBILE MENU
// =========================

document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("show");

      const icon =
        menuToggle.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    });

  });


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

  let current = "";

  sections.forEach(function (section) {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      current =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach(function (link) {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


// =========================
// PACKAGE LIGHTBOX
// =========================

const packagePhotos =
  document.querySelectorAll(".package-photo img");

const packageLightbox =
  document.getElementById("packageLightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.getElementById("lightboxClose");


packagePhotos.forEach(function (image) {

  image.addEventListener("click", function (event) {

    event.stopPropagation();

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    packageLightbox.classList.add("show");

    document.body.style.overflow = "hidden";

  });

});


// =========================
// CLOSE LIGHTBOX
// =========================

function closeLightbox() {

  packageLightbox.classList.remove("show");

  lightboxImage.src = "";

  document.body.style.overflow = "";

}


lightboxClose.addEventListener(
  "click",
  closeLightbox
);


packageLightbox.addEventListener(
  "click",
  function (event) {

    if (event.target === packageLightbox) {

      closeLightbox();

    }

  }
);


// =========================
// ESC CLOSE LIGHTBOX
// =========================

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      packageLightbox.classList.contains("show")
    ) {

      closeLightbox();

    }

  }
);


// =========================
// WHATSAPP ORDER
// =========================

const phoneNumber =
  "628136884815";

const orderButtons =
  document.querySelectorAll(".order-btn");


orderButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const packageName =
      button.getAttribute("data-package");

    const packagePrice =
      button.getAttribute("data-price");


    const message =
`Halo Hunting Tour Travel Batam 👋

Saya tertarik dengan paket berikut:

📦 Paket:
${packageName}

💰 Harga:
${packagePrice}

Saya ingin mengetahui informasi lebih lanjut mengenai paket ini.

Apakah paket ini masih tersedia?

Terima kasih 🙏`;


    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappURL,
      "_blank"
    );

  });

});


// =========================
// CONTACT WHATSAPP
// =========================

const contactBtn =
  document.getElementById("contactBtn");


contactBtn.addEventListener("click", function () {

  const message =
`Halo Hunting Tour Travel Batam 👋

Saya ingin bertanya mengenai tour package yang tersedia.

Mohon informasi mengenai paket, harga, dan ketersediaannya.

Terima kasih 🙏`;


  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  window.open(
    whatsappURL,
    "_blank"
  );

});