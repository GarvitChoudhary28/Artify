// Carousel functionality
const carouselSlide = document.getElementById('carousel-slide');
const carouselVideos = document.querySelectorAll('.carousel-slide video');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = carouselVideos[0].clientWidth;

function changeSlide() {
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    counter = (counter + 1) % carouselVideos.length;
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);

// Button controls
nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % carouselVideos.length;
    changeSlide();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + carouselVideos.length) % carouselVideos.length;
    changeSlide();
});
document.addEventListener("DOMContentLoaded", () => {
    const orderNowButton = document.getElementById("orderNowButton");
    const modal = document.getElementById("orderFormModal");
    const closeModalButton = modal.querySelector(".close-modal");
    const orderForm = document.getElementById("orderForm");

    // Open Modal
    orderNowButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close Modal
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close Modal on Outside Click
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Form Submission
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(orderForm);
        alert(`
            Order Placed Successfully!\n
            Name: ${formData.get("name")}\n
            Size: ${formData.get("size")}\n
            Reference Image: ${formData.get("referenceImage").name}\n
            Requirements: ${formData.get("requirements")}
        `);
        modal.style.display = "none";
        orderForm.reset();
    });
});
