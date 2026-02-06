# 🎵 Modern Song Player

A sleek, functional web-based music player built with HTML, CSS, and JavaScript. This application allows users to browse a music library, play their favorite tracks, and manage their listening experience with a modern UI.

---

## 📸 Project Preview

| Music Library View | Active Player Interface |
| :---: | :---: |
| ![Library](https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/Song%20Player/ScreenShots/library.png?raw=true) | ![Player](https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/Song%20Player/ScreenShots/song-player.png?raw=true) |

---

## ✨ Key Features

* **Dynamic Library:** View and select songs from a scrollable list.
* **Custom Audio Controls:** Play, pause, skip, and seek functionality.
* **Add to Library:** Easily expandable code structure to add your own `.mp3` files.
* **Responsive Design:** Optimized for both desktop and mobile viewing.
* **Real-time Progress:** Visual seek bar that updates as the song plays.

---

## 🛠️ Built With

* **HTML5:** For the structure and Audio API.
* **CSS3:** Featuring Flexbox/Grid for the layout and smooth transitions.
* **JavaScript (ES6):** For playlist logic and DOM manipulation.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the Repo**
    ```bash
    git clone [https://github.com/tayyab007-dot/Mini-Web-Projects.git](https://github.com/tayyab007-dot/Mini-Web-Projects.git)
    ```
2.  **Navigate to the Directory**
    ```bash
    cd "Song Player"
    ```
3.  **Launch the App**
    Open `index.html` in any modern web browser.

---

## 🎵 How to Add Your Own Songs

To add your own music to the library:
1. Place your `.mp3` files in the `songs/` folder.
2. Update the `songs` array in your JavaScript file with the new path and song details:
   ```javascript
   {
     name: "Song Name",
     artist: "Artist Name",
     path: "songs/your-song.mp3",
     cover: "images/cover.jpg"
   }
