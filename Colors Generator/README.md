# 🎨 Color Generator

A lightweight, interactive web application that generates random colors and provides their exact **RGB values** at the click of a button. Perfect for designers and developers looking for quick inspiration!

---

## 📸 Screenshots

| View | Color Genereted |
| :---: | :---: |
| ![Main Interface](https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/Colors%20Generator/screenshots/color-generator.png?raw=true) | ![Palette View](https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/Colors%20Generator/screenshots/colors.png?raw=true) |

---

## ✨ Features

* **Instant Generation:** Get a fresh color with a single click.
* **RGB Readout:** Automatically calculates and displays the specific RGB code.
* **Visual Feedback:** The background updates instantly to reflect the new color.
* **Responsive Design:** Works flawlessly on desktops, tablets, and phones.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Modern styling and smooth transitions.
* **JavaScript (ES6):** Logic for random color generation and DOM manipulation.

---

## 🚀 How It Works

The app uses a simple yet effective logic to generate colors. Since RGB is based on three values (Red, Green, Blue) ranging from **0 to 255**, the JavaScript function calculates:



1.  **Generate:** Three random integers between 0 and 255.
2.  **Apply:** Updates the `document.body.style.backgroundColor`.
3.  **Display:** Injects the string `rgb(x, y, z)` into the UI text.

---

## 📥 Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/tayyab007-dot/Mini-Web-Projects.git](https://github.com/tayyab007-dot/Mini-Web-Projects.git)
