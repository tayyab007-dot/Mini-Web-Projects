const API_KEY = 'ad3f112b';
const movieGrid = document.getElementById('movie-grid');
const searchInput = document.getElementById('search-input');
const typeFilter = document.getElementById('type-filter');
const detailsModal = document.getElementById('details-modal');
const modalBodyContent = document.getElementById('modal-body-content');
const closeModalBtn = document.getElementById('close-modal');

let currentSearch = 'Avenger'; // Default dashboard state

// 1. Fetch search lists from OMDb API
async function fetchMovies() {
    const searchTerm = searchInput.value.trim() || currentSearch;
    const filterType = typeFilter.value;
    
    movieGrid.innerHTML = '<div class="status-msg">Searching records...</div>';
    
    try {
        // Build URL dynamically based on whether format selection overrides are present
        let url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`;
        if (filterType) {
            url += `&type=${filterType}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            movieGrid.innerHTML = `<div class="status-msg">No results matching details found.</div>`;
        }
    } catch (error) {
        movieGrid.innerHTML = '<div class="status-msg" style="color:#ff6b6b;">Failed to fetch network content. Check your internet pipeline.</div>';
        console.error("Fetch Exception:", error);
    }
}

// 2. Render cards to screen interface
function displayMovies(movies) {
    movieGrid.innerHTML = '';
    
    movies.forEach(movie => {
        const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Found";
        
        const card = document.createElement('div');
        card.className = 'card';
        // Secure identification pointer onto data block
        card.dataset.id = movie.imdbID; 
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${poster}" alt="${movie.Title}" loading="lazy">
            </div>
            <div class="card-info">
                <h3>${movie.Title}</h3>
                <div class="card-meta">
                    <span>📅 ${movie.Year}</span>
                    <span>🏷️ ${movie.Type}</span>
                </div>
            </div>
        `;
        
        // Modal event listener trigger configuration
        card.addEventListener('click', () => fetchMovieDetails(movie.imdbID));
        movieGrid.appendChild(card);
    });
}

// 3. Deep item fetching profile (Ratings, Plots, Crew data definitions)
async function fetchMovieDetails(imdbId) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${API_KEY}`);
        const movie = await response.json();
        
        if (movie.Response === "True") {
            const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster";
            
            modalBodyContent.innerHTML = `
                <img src="${poster}" alt="${movie.Title}" class="modal-poster">
                <div class="modal-details">
                    <h2 class="modal-title">${movie.Title}</h2>
                    <div class="rating-badge">⭐ ${movie.imdbRating} / 10</div>
                    <div class="modal-meta">
                        <span>📅 ${movie.Released}</span>
                        <span>⏱️ ${movie.Runtime}</span>
                        <span>🎬 ${movie.Genre}</span>
                    </div>
                    <p class="modal-plot">${movie.Plot}</p>
                    <div class="credits">
                        <p><strong>Director:</strong> ${movie.Director}</p>
                        <p><strong>Writers:</strong> ${movie.Writer}</p>
                        <p><strong>Cast Stars:</strong> ${movie.Actors}</p>
                    </div>
                </div>
            `;
            
            // Activate Modal Display Window
            detailsModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background parsing scrollbars
        }
    } catch (error) {
        console.error("Modal compilation lookup failure:", error);
    }
}

// 4. Modal Event Control Management closures
function closeModal() {
    detailsModal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock structural layout scroll
}

closeModalBtn.addEventListener('click', closeModal);
detailsModal.addEventListener('click', (e) => {
    if (e.target === detailsModal) closeModal();
});

// Close modal when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailsModal.classList.contains('active')) closeModal();
});

// 5. Debounced Action Observers configuration
let timeoutId;
searchInput.addEventListener('input', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fetchMovies, 400);
});

typeFilter.addEventListener('change', fetchMovies);

// Init baseline fetch initialization loop
fetchMovies();