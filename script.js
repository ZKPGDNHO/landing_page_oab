document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
  
          // Close mobile menu if open
          const navbarCollapse = document.querySelector(".navbar-collapse")
          if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show")
          }
        }
      })
    })
  
    // Navbar background change on scroll
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar")
      if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 0"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        navbar.style.padding = "1rem 0"
        navbar.style.boxShadow = "none"
      }
    })
  
    // Contact form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`)
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // PDF Modal
    const viewPdfBtn = document.getElementById("viewPdfBtn")
    if (viewPdfBtn) {
      viewPdfBtn.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Show modal
        const pdfModalElement = document.getElementById("pdfModal")
        const pdfModal = new bootstrap.Modal(pdfModalElement)
        pdfModal.show()
      })
    }
  })
  