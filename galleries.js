// Dropdown functionality
const menuBtn = document.getElementById('menuBtn');
const dropdownContent = document.getElementById('dropdownContent');

menuBtn.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
});

menuBtn.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!dropdownContent.matches(':hover')) {
            dropdownContent.style.display = 'none';
        }
    }, 200);
});

dropdownContent.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
});
function showGallery(index) {
    // Hide all galleries
    let galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => gallery.style.display = 'none');
    
    // Show the selected gallery
    document.getElementById(`gallery-${index}`).style.display = 'grid';
}

// Initially show the first gallery
document.addEventListener('DOMContentLoaded', () => {
    showGallery(0);
});

dropdownContent.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!menuBtn.matches(':hover')) {
            dropdownContent.style.display = 'none';
        }
    }, 200);