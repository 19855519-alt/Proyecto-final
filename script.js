
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const carousel = document.getElementById("menuCarousel");
const carouselCards = Array.from(carousel.querySelectorAll(".carousel-slide"));
const carouselDots = Array.from(document.querySelectorAll(".carousel-dot"));
const carouselStatus = document.getElementById("carouselStatus");
let activeCarouselIndex = 0;
const translations = {
  es: {
    topbar: "¡Sabor salvadoreño en cada pupusa! <span>Hechas con cariño 🇸🇻</span>",
    navHome: "Inicio", navMenu: "Menú", navPromos: "Promociones", navAbout: "Nosotros", navContact: "Contáctenos",
    heroEyebrow: "ORGULLO SALVADOREÑO", heroTitle: "El sabor que<br>siempre <span>se antoja.</span>",
    heroDescription: "Pupusas calientitas, deliciosas y preparadas para compartir. ¡Porque una nunca es suficiente!",
    heroMenu: "Ver nuestro menú ↗", heroContact: "Hacé tu consulta",
    heroNoteTitle: "Tradición en cada bocado", heroNoteText: "El sabor de nuestra tierra",
    heroPhotoTitle: "Tu foto principal", heroPhotoText: "Agregá aquí una foto de tus pupusas",
    altPupusas: "Pupusas recién preparadas", altCheese: "Pupusa de queso", altMixed: "Pupusa revuelta",
    altBeanCheese: "Pupusa de frijol con queso", altPork: "Pupusa de chicharrón",
    altLoroco: "Pupusa de queso con loroco", altSquash: "Pupusa de ayote con queso",
    altCombo: "Combo de pupusas", altPreparation: "Preparación de pupusas",
    fallbackCheese: "📸 Foto de pupusa de queso", fallbackMixed: "📸 Foto de pupusa revuelta",
    fallbackBeanCheese: "📸 Foto de frijol con queso", fallbackPork: "📸 Foto de pupusa de chicharrón",
    fallbackLoroco: "📸 Foto de queso con loroco", fallbackSquash: "📸 Foto de pupusa de ayote",
    promoPhotoTitle: "Foto de la promoción", promoPhotoText: "Colocá aquí tu combo de pupusas",
    photoSticker: "¡Qué<br>rico! <span>♥</span>",
    benefitTradition: "Tradición", benefitTraditionText: "Sabor salvadoreño",
    benefitFlavor: "Buen sabor", benefitFlavorText: "Para disfrutar",
    benefitCare: "Hechas con cariño", benefitCareText: "Para compartir",
    menuEyebrow: "DE NUESTRA COCINA", menuTitle: "Un menú para <span>antojarte</span>",
    menuDescription: "Elegí tu favorita y disfrutá del sabor de El Salvador.", menuStamp: "Hecho con<br>amor ♡",
    favorite: "Favorita", foodCheese: "Queso", foodCheeseText: "Quesito derretido en cada bocado.",
    foodMixed: "Revuelta", foodMixedText: "Una mezcla clásica y deliciosa.",
    foodBeanCheese: "Frijol con queso", foodBeanCheeseText: "La combinación que nunca falla.",
    foodPork: "Chicharrón", foodPorkText: "Para quienes aman el sabor tradicional.",
    special: "Especial", foodLoroco: "Queso con loroco", foodLorocoText: "Un toque aromático y especial.",
    foodSquash: "Ayote con queso", foodSquashText: "Una opción diferente y sabrosa.",
    priceNote: "Precios de ejemplo: actualizalos según los precios reales de tu emprendimiento.",
    promoEyebrow: "¡UNA PROMO PARA COMPARTIR!", promoTitle: "¡Tres pupusas<br>por solo <span>$2.00!</span>",
    promoDescription: "Reuní a tus amigos o a tu familia y disfrutá de una buena pupuseada.",
    promoButton: "Quiero más información ↗", promoNote: "*Promoción de ejemplo. Confirmá su disponibilidad antes de publicarla.",
    promoBurst: "BUEN<br>SABOR<br>♥", aboutPhotoTitle: "Foto de tu emprendimiento", aboutPhotoText: "Tu cocina o tus pupusas",
    aboutEyebrow: "SOMOS PUPUSAS 3X1", aboutTitle: "Lo nuestro es el<br><span>auténtico sabor.</span>",
    aboutText: "En Pupusas 3x1 queremos compartir uno de los sabores más queridos de El Salvador. Nuestro objetivo es ofrecer una experiencia rica, cercana y accesible para quienes disfrutan de unas buenas pupusas.",
    aboutThanks: "Gracias por apoyar nuestro emprendimiento. ¡Esperamos que cada visita te deje con ganas de volver!",
    aboutLink: "Conocé más y escribinos ↗", contactEyebrow: "ESTAMOS PARA AYUDARTE",
    contactTitle: "¿Hablamos de<br><span>pupusas?</span>",
    contactDescription: "Dejanos tu consulta y nos pondremos en contacto. También podés escribirnos para preguntar por el menú o las promociones.",
    contactLabel: "Contacto", contactHint: "Enviá tu mensaje desde el formulario.",
    country: "El Salvador", countryNote: "El sabor de nuestra tierra.",
    formTitle: "Escribinos", formDescription: "Completá los datos para enviar tu mensaje.",
    nameLabel: "Tu nombre", namePlaceholder: "¿Cómo te llamás?",
    emailLabel: "Correo electrónico", emailPlaceholder: "tunombre@correo.com",
    reasonLabel: "Motivo de tu mensaje", reasonPlaceholder: "Seleccioná una opción",
    reasonMenu: "Consulta sobre el menú", reasonPromos: "Pregunta sobre promociones",
    reasonInfo: "Pedido de información", reasonOther: "Otro",
    messageLabel: "Tu mensaje", messagePlaceholder: "Escribí tu consulta aquí...",
    submitButton: "Enviar mensaje ↗", privacyNote: "Tus datos se usan para responder a tu consulta.",
    footerText: "Hecho con cariño y sabor salvadoreño 🇸🇻",
    copyright: "© <span id=\"year\"></span> Pupusas 3x1. Todos los derechos reservados.",
    themeDark: "🌙 Modo oscuro", themeLight: "☀️ Modo claro",
    switchToDark: "Cambiar a modo oscuro", switchToLight: "Cambiar a modo claro",
    menuOpen: "Abrir menú", menuClose: "Cerrar menú",
    carouselLabel: "Carrusel de pupusas", carouselChoose: "Elegir pupusa",
    carouselEyebrow: "NUESTRAS PUPUSAS", carouselTitle: "Conocé nuestros <span>sabores</span>",
    carouselItem: "Pupusa",
    carouselPrevious: "Pupusa anterior", carouselNext: "Siguiente pupusa",
    carouselGoTo: "Ir a pupusa {number}", carouselPosition: "Pupusa {number} de 6",
    sending: "Enviando mensaje...", sent: "¡Mensaje enviado! Gracias por escribirnos.",
    send: "Enviar mensaje ↗", sendError: "Hubo un problema. Intentá nuevamente más tarde."
  },
  en: {
    topbar: "Salvadoran flavor in every pupusa! <span>Made with love 🇸🇻</span>",
    navHome: "Home", navMenu: "Menu", navPromos: "Specials", navAbout: "About us", navContact: "Contact us",
    heroEyebrow: "SALVADORAN PRIDE", heroTitle: "The flavor<br>you'll <span>crave.</span>",
    heroDescription: "Warm, delicious pupusas made to share. Because one is never enough!",
    heroMenu: "View our menu ↗", heroContact: "Get in touch",
    heroNoteTitle: "Tradition in every bite", heroNoteText: "A taste of our homeland",
    heroPhotoTitle: "Your main photo", heroPhotoText: "Add a photo of your pupusas here",
    altPupusas: "Freshly made pupusas", altCheese: "Cheese pupusa", altMixed: "Mixed pupusa",
    altBeanCheese: "Bean and cheese pupusa", altPork: "Pork pupusa",
    altLoroco: "Cheese and loroco pupusa", altSquash: "Squash and cheese pupusa",
    altCombo: "Pupusa combo", altPreparation: "Pupusa preparation",
    fallbackCheese: "📸 Cheese pupusa photo", fallbackMixed: "📸 Mixed pupusa photo",
    fallbackBeanCheese: "📸 Bean and cheese photo", fallbackPork: "📸 Pork pupusa photo",
    fallbackLoroco: "📸 Cheese and loroco photo", fallbackSquash: "📸 Squash pupusa photo",
    promoPhotoTitle: "Special offer photo", promoPhotoText: "Add your pupusa combo here",
    photoSticker: "So<br>tasty! <span>♥</span>",
    benefitTradition: "Tradition", benefitTraditionText: "Salvadoran flavor",
    benefitFlavor: "Great flavor", benefitFlavorText: "Made to enjoy",
    benefitCare: "Made with love", benefitCareText: "Made to share",
    menuEyebrow: "FROM OUR KITCHEN", menuTitle: "A menu to <span>make you crave</span>",
    menuDescription: "Pick your favorite and enjoy the taste of El Salvador.", menuStamp: "Made with<br>love ♡",
    favorite: "Favorite", foodCheese: "Cheese", foodCheeseText: "Melted cheese in every bite.",
    foodMixed: "Mixed", foodMixedText: "A delicious, classic combination.",
    foodBeanCheese: "Beans and cheese", foodBeanCheeseText: "A combination that never disappoints.",
    foodPork: "Pork", foodPorkText: "For those who love traditional flavor.",
    special: "Special", foodLoroco: "Cheese and loroco", foodLorocoText: "A special, aromatic touch.",
    foodSquash: "Squash and cheese", foodSquashText: "A tasty option with a twist.",
    priceNote: "Sample prices: update them to match your business's current prices.",
    promoEyebrow: "A SPECIAL TO SHARE!", promoTitle: "Three pupusas<br>for just <span>$2.00!</span>",
    promoDescription: "Gather your friends or family and enjoy a pupusa feast.",
    promoButton: "I want more information ↗", promoNote: "*Sample special. Confirm availability before publishing.",
    promoBurst: "GREAT<br>FLAVOR<br>♥", aboutPhotoTitle: "Photo of your business", aboutPhotoText: "Your kitchen or your pupusas",
    aboutEyebrow: "WE ARE PUPUSAS 3X1", aboutTitle: "We serve<br><span>authentic flavor.</span>",
    aboutText: "At Pupusas 3x1, we want to share one of El Salvador's most beloved flavors. Our goal is to offer a delicious, welcoming, and affordable experience for everyone who enjoys great pupusas.",
    aboutThanks: "Thank you for supporting our small business. We hope every visit leaves you wanting to come back!",
    aboutLink: "Learn more and get in touch ↗", contactEyebrow: "WE'RE HERE TO HELP",
    contactTitle: "Shall we talk<br><span>pupusas?</span>",
    contactDescription: "Send us a message and we'll get back to you. You can also ask us about the menu or our specials.",
    contactLabel: "Contact", contactHint: "Send your message using the form.",
    country: "El Salvador", countryNote: "A taste of our homeland.",
    formTitle: "Send us a message", formDescription: "Fill out the form to send your message.",
    nameLabel: "Your name", namePlaceholder: "What is your name?",
    emailLabel: "Email address", emailPlaceholder: "yourname@email.com",
    reasonLabel: "What's your message about?", reasonPlaceholder: "Choose an option",
    reasonMenu: "Menu question", reasonPromos: "Specials question",
    reasonInfo: "Request for information", reasonOther: "Other",
    messageLabel: "Your message", messagePlaceholder: "Write your message here...",
    submitButton: "Send message ↗", privacyNote: "Your information is only used to reply to your message.",
    footerText: "Made with love and Salvadoran flavor 🇸🇻",
    copyright: "© <span id=\"year\"></span> Pupusas 3x1. All rights reserved.",
    themeDark: "🌙 Dark mode", themeLight: "☀️ Light mode",
    switchToDark: "Switch to dark mode", switchToLight: "Switch to light mode",
    menuOpen: "Open menu", menuClose: "Close menu",
    carouselLabel: "Pupusa carousel", carouselChoose: "Choose a pupusa",
    carouselEyebrow: "OUR PUPUSAS", carouselTitle: "Discover our <span>flavors</span>",
    carouselItem: "Pupusa",
    carouselPrevious: "Previous pupusa", carouselNext: "Next pupusa",
    carouselGoTo: "Go to pupusa {number}", carouselPosition: "Pupusa {number} of 6",
    sending: "Sending message...", sent: "Message sent! Thanks for reaching out.",
    send: "Send message ↗", sendError: "Something went wrong. Please try again later."
  }
};
let currentLanguage = "es";
let isDarkMode = false;

function updateControls() {
  themeToggle.textContent = translations[currentLanguage][isDarkMode ? "themeLight" : "themeDark"];
  themeToggle.setAttribute("aria-label", translations[currentLanguage][isDarkMode ? "switchToLight" : "switchToDark"]);
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  languageToggle.textContent = currentLanguage === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-label", currentLanguage === "es" ? "Switch to English" : "Cambiar a español");
  menuToggle.setAttribute("aria-label", nav.classList.contains("open")
    ? translations[currentLanguage].menuClose
    : translations[currentLanguage].menuOpen);
  updateCarouselControls();
}

function updateCarouselControls() {
  const language = translations[currentLanguage];
  carousel.setAttribute("aria-label", language.carouselLabel);
  document.getElementById("carouselDots").setAttribute("aria-label", language.carouselChoose);
  document.getElementById("carouselPrevious").setAttribute("aria-label", language.carouselPrevious);
  document.getElementById("carouselNext").setAttribute("aria-label", language.carouselNext);

  carouselDots.forEach((dot, index) => {
    dot.setAttribute("aria-label", language.carouselGoTo.replace("{number}", String(index + 1)));
    if (index === activeCarouselIndex) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
  carouselStatus.textContent = language.carouselPosition.replace("{number}", String(activeCarouselIndex + 1));
}

function scrollToCarouselCard(index) {
  activeCarouselIndex = (index + carouselCards.length) % carouselCards.length;
  const carouselLeft = carousel.getBoundingClientRect().left;
  const cardLeft = carouselCards[activeCarouselIndex].getBoundingClientRect().left;
  carousel.scrollTo({
    left: carousel.scrollLeft + cardLeft - carouselLeft,
    behavior: "smooth"
  });
  updateCarouselControls();
}

function applyTranslations() {
  const language = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = language[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = language[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = language[element.dataset.i18nAlt];
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelector('meta[name="description"]').content = currentLanguage === "es"
    ? "Pupusas 3x1: pupusas salvadoreñas con sabor casero, promociones y mucho queso."
    : "Pupusas 3x1: Salvadoran pupusas with homemade flavor, specials, and plenty of cheese.";
  updateControls();
}

applyTranslations();

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
  updateControls();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
    updateControls();
  });
});

document.getElementById("carouselPrevious").addEventListener("click", () => {
  scrollToCarouselCard(activeCarouselIndex - 1);
});

document.getElementById("carouselNext").addEventListener("click", () => {
  scrollToCarouselCard(activeCarouselIndex + 1);
});

carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => scrollToCarouselCard(index));
});

carousel.addEventListener("scroll", () => {
  const carouselLeft = carousel.getBoundingClientRect().left;
  let nearestIndex = 0;
  let nearestDistance = Infinity;

  carouselCards.forEach((card, index) => {
    const distance = Math.abs(card.getBoundingClientRect().left - carouselLeft);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  if (nearestIndex !== activeCarouselIndex) {
    activeCarouselIndex = nearestIndex;
    updateCarouselControls();
  }
});

carousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    scrollToCarouselCard(activeCarouselIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    scrollToCarouselCard(activeCarouselIndex + 1);
  }
});

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  updateControls();
});

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  applyTranslations();
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formStatus.textContent = "";
  formStatus.className = "form-status";
  submitButton.disabled = true;
  submitButton.textContent = translations[currentLanguage].sending;

  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    motivo: document.getElementById("motivo").value,
    mensaje: document.getElementById("mensaje").value.trim()
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    const resultado = await response.json();

    if (!response.ok) {
      throw new Error(resultado.error || "No se pudo enviar el mensaje.");
    }

    formStatus.textContent = translations[currentLanguage].sent;
    formStatus.classList.add("success");
    contactForm.reset();
  } catch (error) {
    formStatus.textContent =
      error.message || translations[currentLanguage].sendError;
    formStatus.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = translations[currentLanguage].send;
  }
});
