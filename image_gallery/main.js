// Open Modal
function openModal(imageSrc) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Close Modal
function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}