
// class SongNode {
//     constructor(title, artist, src) {
//         this.title = title;
//         this.artist = artist;
//         this.src = src;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.current = null;
//         this.isPlaying = false;
//     }

//     // Add Node to end of list (O(1))
//     append(title, artist, src) {
//         const newNode = new SongNode(title, artist, src);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.current = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         renderPlaylist();
//     }

//     playCurrent() {
//         if (!this.current) return;
//         const audio = document.getElementById('audio-player');
//         const playBtn = document.getElementById('play-btn');

//         // Check if we need to load a new source
//         if (!audio.src.includes(encodeURI(this.current.src))) {
//             audio.src = this.current.src;
//         }

//         audio.play();
//         this.isPlaying = true;
//         playBtn.innerHTML = "&#10074;&#10074;"; // Pause Symbol
        
//         updateSongInfoUI();
//         renderPlaylist();
//     }

//     pause() {
//         const audio = document.getElementById('audio-player');
//         const playBtn = document.getElementById('play-btn');
        
//         audio.pause();
//         this.isPlaying = false;
//         playBtn.innerHTML = "&#9658;"; // Play Symbol
//     }

//     next() {
//         if (this.current && this.current.next) {
//             this.current = this.current.next;
//             this.playCurrent();
//         } else {
//             alert("End of Playlist reached.");
//         }
//     }

//     prev() {
//         if (this.current && this.current.prev) {
//             this.current = this.current.prev;
//             this.playCurrent();
//         } else {
//             alert("This is the first song.");
//         }
//     }
// }



// const playlist = new DoublyLinkedList();
// const audioPlayer = document.getElementById('audio-player');
// const progress = document.getElementById('progress');

// // 1. Play/Pause Button Logic
// document.getElementById('play-btn').addEventListener('click', () => {
//     if (playlist.isPlaying) {
//         playlist.pause();
//     } else {
//         playlist.playCurrent();
//     }
// });

// // 2. Next Button Logic
// document.getElementById('next-btn').addEventListener('click', () => playlist.next());

// // 3. Prev Button Logic
// document.getElementById('prev-btn').addEventListener('click', () => playlist.prev());

// // 4. Progress Bar Logic (Visual only, no clicking)
// // 4. Progress Bar Logic (Visual only)
// audioPlayer.addEventListener('timeupdate', (e) => {
//     // We use e.target instead of e.srcElement for better browser support
//     const currentTime = e.target.currentTime; 
//     const duration = e.target.duration;

//     // Check if duration is a valid number (NaN check)
//     if (duration && !isNaN(duration)) { 
//         const progressPercent = (currentTime / duration) * 100;
//         progress.style.width = `${progressPercent}%`;
//     }
// });

// // 5. Add Custom Node Logic
// document.getElementById('add-btn').addEventListener('click', () => {
//     const title = document.getElementById('input-title').value;
//     const artist = document.getElementById('input-artist').value;
    
//     if (title && artist) {
//         // Placeholder link for user added songs
//         playlist.append(title, artist, "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
        
//         document.getElementById('input-title').value = '';
//         document.getElementById('input-artist').value = '';
//     }
// });

// // Helper: Update Title/Artist Text
// function updateSongInfoUI() {
//     if (playlist.current) {
//         document.getElementById('title').innerText = playlist.current.title;
//         document.getElementById('artist').innerText = playlist.current.artist;
//     }
// }

// // Helper: Render Queue
// function renderPlaylist() {
//     const list = document.getElementById('playlist-ui');
//     list.innerHTML = "";
//     let temp = playlist.head;
    
//     while (temp !== null) {
//         const li = document.createElement('li');
//         li.innerHTML = `<span>${temp.title}</span> <small>${temp.artist}</small>`;
        
//         if (temp === playlist.current) li.classList.add('active');
        
//         list.appendChild(li);
//         temp = temp.next;
//     }
// }


// window.onload = () => {
//     // Song 1
//     playlist.append("Sci-Fi Beat", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    
//     // Song 2
//     playlist.append("Jazz Groove", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
    
//     // Song 3
//     playlist.append("Piano Mood", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3");

//     // Song 4
//     playlist.append("Synth Wave", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3");

//     playlist.append("Techno Dream", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3");

//     playlist.append("Lo-Fi Beats", "SoundHelix", "https://youtu.be/Romu7Pz0Kec?si=QSPKa902L7_QXAjH");


//     // Display info for first song but don't play yet
//     updateSongInfoUI();
// };

























/* ==========================================
   DSA LOGIC: DOUBLY LINKED LIST
   ========================================== */

class SongNode {
    constructor(title, artist, src) {
        this.title = title;
        this.artist = artist;
        this.src = src;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.isPlaying = false;
    }

    append(title, artist, src) {
        const newNode = new SongNode(title, artist, src);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        renderPlaylist();
    }

    playCurrent() {
        if (!this.current) return;
        const audio = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');

        if (!audio.src.includes(encodeURI(this.current.src))) {
            audio.src = this.current.src;
        }

        audio.play().catch(e => console.log("Chrome policy requires user interaction first"));
        this.isPlaying = true;
        playBtn.innerHTML = "&#10074;&#10074;"; // Pause Symbol
        
        updateSongInfoUI();
        renderPlaylist();
    }

    pause() {
        const audio = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        audio.pause();
        this.isPlaying = false;
        playBtn.innerHTML = "&#9658;"; // Play Symbol
    }

    next() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            this.playCurrent();
        } else {
            alert("End of Playlist reached.");
        }
    }

    prev() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            this.playCurrent();
        } else {
            alert("This is the first song.");
        }
    }
}

/* ==========================================
   DOM MANIPULATION & PAGE NAVIGATION
   ========================================== */

const playlist = new DoublyLinkedList();
const audioPlayer = document.getElementById('audio-player');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

// --- PAGE SWITCHING LOGIC (New Feature) ---
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active-page');
    });
    // Remove active styles from nav links
    document.querySelectorAll('.nav-links li').forEach(link => {
        link.classList.remove('active-link');
    });

    // Show specific page
    document.getElementById(pageId).classList.add('active-page');
    
    // Highlight specific nav button (Simple logic)
    const navIndex = pageId === 'home' ? 0 : pageId === 'library' ? 1 : 2;
    document.querySelectorAll('.nav-links li')[navIndex].classList.add('active-link');
}

// 1. Play/Pause Button
document.getElementById('play-btn').addEventListener('click', () => {
    if (playlist.isPlaying) {
        playlist.pause();
    } else {
        playlist.playCurrent();
    }
});

// 2. Next/Prev Buttons
document.getElementById('next-btn').addEventListener('click', () => playlist.next());
document.getElementById('prev-btn').addEventListener('click', () => playlist.prev());

// 3. Update Bar
audioPlayer.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.target;
    if (duration && !isNaN(duration)) { 
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
});

// 4. Click Bar to Seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    if (duration && !isNaN(duration)) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
});

// 5. Add Song Manually
document.getElementById('add-btn').addEventListener('click', () => {
    const title = document.getElementById('input-title').value;
    const artist = document.getElementById('input-artist').value;
    
    if (title && artist) {
        playlist.append(title, artist, "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
        document.getElementById('input-title').value = '';
        document.getElementById('input-artist').value = '';
        alert("Song added to Linked List Tail!");
    }
});

// UI Helper Functions
function updateSongInfoUI() {
    if (playlist.current) {
        document.getElementById('title').innerText = playlist.current.title;
        document.getElementById('artist').innerText = playlist.current.artist;
        
        // Update Preview Text (New Feature)
        const nextPreview = document.getElementById('next-song-preview');
        if (playlist.current.next) {
            nextPreview.innerText = playlist.current.next.title;
        } else {
            nextPreview.innerText = "End of List";
        }
    }
}

function renderPlaylist() {
    const list = document.getElementById('playlist-ui');
    list.innerHTML = "";
    let temp = playlist.head;
    while (temp !== null) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${temp.title}</span> <small>${temp.artist}</small>`;
        
        if (temp === playlist.current) {
            li.classList.add('active');
            li.innerHTML += ` <span>(Playing)</span>`;
        }
        
        list.appendChild(li);
        temp = temp.next;
    }
}

/* ==========================================
   DEFAULT SONGS (INIT)
   ========================================== */
window.onload = () => {
    // Add default songs so player isn't empty
    playlist.append("Sci-Fi Beat", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    playlist.append("Jazz Groove", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
    playlist.append("Piano Mood", "SoundHelix", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3");
    
    updateSongInfoUI();
};