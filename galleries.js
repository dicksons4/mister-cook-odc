// Dropdown functionality
const menuBtn = document.getElementById('menuBtn');
const dropdownContent = document.getElementById('dropdownContent');

function showGallery(index) {
    // Hide all galleries
        // Hide all galleries
        let galleries = document.querySelectorAll('.gallery');
        galleries.forEach(gallery => gallery.style.display = 'none');
        
        // Show the selected gallery
        let galleryToShow = document.getElementById(`gallery-${index}`);
        if (galleryToShow) {
            galleryToShow.style.display = 'grid';  // or 'inline-block', 'flex', etc. depending on your layout
        } else {
            console.error(`Gallery with index ${index} not found.`);
        }
    
}
function loadMore() {
    // Example function to load more content
    alert('Loading more galleries...');
    // Implement your logic to load more galleries here
    // This can involve fetching more data, appending more elements, etc.
}

// Initially show the first gallery
document.addEventListener('DOMContentLoaded', () => {
    showGallery(1);
});

dropdownContent.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!menuBtn.matches(':hover')) {
            dropdownContent.style.display = 'none';
        }
    }, 200)});