# ❌ Tic Tac Toe ⭕

A clean, interactive, and responsive **Tic Tac Toe** game built with vanilla JavaScript. Challenge a friend and see who can get three in a row first!

---

## 📸 Game Preview

| Gameplay Interface | Winner Announcement |
| :---: | :---: |
| ![Game Board](https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/Tic%20Tac%20Toe/screenshots/toe-tic-tac.png?raw=true) | ![Winner Screen](https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/Tic%20Tac%20Toe/screenshots/winner.png?raw=true) |

---

## ✨ Features

* **Win Detection:** Automatically identifies and announces the winner (X or O).
* **Draw Logic:** Recognizes when the board is full and no one has won.
* **Reset Functionality:** Quickly clear the board to start a new match.
* **Interactive UI:** Smooth hover effects and clear visual feedback for player turns.
* **Responsive Layout:** Playable on mobile, tablet, and desktop screens.

---

## 🛠️ Built With

* **HTML5:** Structured the 3x3 grid.
* **CSS3:** Styled with a modern look and feel.
* **JavaScript (ES6):** Developed the winning patterns logic and game state management.

---

## 🕹️ How to Play

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/tayyab007-dot/Mini-Web-Projects.git](https://github.com/tayyab007-dot/Mini-Web-Projects.git)
    ```
2.  **Navigate to the Folder:**
    ```bash
    cd "Tic Tac Toe"
    ```
3.  **Run the Game:**
    Open `index.html` in your browser.
4.  **The Goal:**
    Be the first to get three of your marks in a horizontal, vertical, or diagonal row!

---

## 🧠 Behind the Logic

The game checks for a winner after every move by comparing the current board state against an array of **winning combinations**:

```javascript
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];
