const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


function showDetails(btn) {
    const card = btn.closest('.service-card');

    const details = card.dataset.details;

    document.getElementById('detailsBody').innerHTML = details;

    document.getElementById('detailsModal').classList.add('active');
}

function closeDetails() {
    document.getElementById('detailsModal').classList.remove('active');
}