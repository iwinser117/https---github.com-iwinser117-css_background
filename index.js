document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("background");
  const themeToggle = document.getElementById("theme-toggle");
  let currentTheme = "galaxy";
  let ripplesInterval;
  const themes = ["galaxy", "bubbles", "ripples", "matrix"];

  function createStars() {
    background.innerHTML = "";
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      background.appendChild(star);
    }
  }

  function createBubbles() {
    background.innerHTML = "";
    const bubbleCount = 50;
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.width = `${Math.random() * 50 + 10}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.animationDuration = `${Math.random() * 4 + 6}s`;
      background.appendChild(bubble);
    }
  }

  function createRipples() {
    background.innerHTML = "";

    function createRipple(x, y) {
      const rippleCount = 3; // Number of ripples per drop
      for (let i = 0; i < rippleCount; i++) {
        const ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        const size = Math.random() * 100 + 50; // Random size between 50 and 150px
        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        const duration = 2 + Math.random() * 2; // Random duration between 2 and 4 seconds
        ripple.style.animation = `rippleEffect ${duration}s linear ${i * 0.2}s`; // Stagger the start of each ripple

        background.appendChild(ripple);

        // Remove the ripple after animation completes
        setTimeout(() => {
          ripple.remove();
        }, duration * 1000);
      }
    }

    function createRandomRipple() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createRipple(x, y);
    }

    // Create initial set of ripples
    for (let i = 0; i < 3; i++) {
      createRandomRipple();
    }

    // Continuously create new ripples
    ripplesInterval = setInterval(() => {
      if (background.children.length < 30) {
        // Limit the total number of ripple elements
        createRandomRipple();
      }
    }, 1000); // Create a new set of ripples every second
  }

  function toggleTheme() {
    document.body.classList.remove(currentTheme);
    const currentIndex = themes.indexOf(currentTheme);
    currentTheme = themes[(currentIndex + 1) % themes.length];
    document.body.classList.add(currentTheme);

    if (ripplesInterval) {
      clearInterval(ripplesInterval);
      ripplesInterval = null;
    }

    switch (currentTheme) {
      case "galaxy":
        createStars();
        break;
      case "bubbles":
        createBubbles();
        break;
      case "futuristic":
        createFuturisticNetwork();
        break;
      case "ripples":
        createRipples();
        break;
      case "matrix":
        createMatrixEffect();
        break;
    }
  }

  function createMatrixEffect() {
    background.innerHTML = '<div id="matrix"></div>'; 
    startMatrix(); 
}

  themeToggle.addEventListener("click", toggleTheme);

  // Inicializar con el tema de galaxia
  document.body.classList.add("galaxy");
  createStars();
});
