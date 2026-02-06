# ✊ Stone Paper Scissors 🤚

A fun, interactive version of the classic Rock Paper Scissors game. Challenge the computer and see who can reach the highest score!

---

## 📸 Game Preview

<p align="center">
  <img src="https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/STONE%20PAPER%20SCSSOR%20GAME/screenshots/stone-paper-scissors.png?raw=true" alt="Stone Paper Scissors Gameplay" width="700">
</p>

---

## ✨ Features

* **Interactive Gameplay:** Click on your choice (Stone, Paper, or Scissors) and see the result instantly.
* **Smart Computer:** The computer makes a random choice every round using JavaScript math logic.
* **Live Score Tracking:** Keep track of your wins and the computer's wins throughout the session.
* **Visual Feedback:** Dynamic messages tell you if you won, lost, or tied.
* **Responsive Design:** Styled with CSS to look great on any screen size.

---

## 🛠️ Tech Stack

* **HTML5:** For the game structure and buttons.
* **CSS3 (SCSS):** For modern styling and layout.
* **JavaScript (ES6):** To handle game logic, event listeners, and score updates.

---

## 🕹️ How to Play

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/tayyab007-dot/Mini-Web-Projects.git](https://github.com/tayyab007-dot/Mini-Web-Projects.git)
    ```
2.  **Navigate to the Folder:**
    ```bash
    cd "STONE PAPER SCSSOR GAME"
    ```
3.  **Launch the Game:**
    Open `index.html` in your favorite web browser.

---

## 🧠 Game Logic

The winner is determined by the classic rules:
* **Stone** beats **Scissors**
* **Paper** beats **Stone**
* **Scissors** beats **Paper**

The computer's choice is generated using:
```javascript
const choices = ['stone', 'paper', 'scissors'];
const computerChoice = choices[Math.floor(Math.random() * 3)];
