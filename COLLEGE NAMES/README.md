# 🏛️ Global College Finder

A powerful, API-driven web application that allows users to search for universities and colleges in any country. Simply type a country name, and the app fetches a comprehensive list of institutions using a real-time global database.

---

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/tayyab007-dot/Mini-Web-Projects/blob/main/COLLEGE%20NAMES/screenshots/colleges-names.png?raw=true" alt="College Finder Interface" width="700">
</p>

---

## ✨ Features

* **Real-time API Integration:** Connects to the [Hipo University Domains API](http://universities.hipolabs.com/) to provide up-to-date data.
* **Global Search:** Search for colleges across hundreds of countries (e.g., "Pakistan", "United States", "Germany").
* **Detailed Information:** Displays not just the college name, but also its official website link and state/province (where available).
* **Loading States:** Handles asynchronous requests smoothly for a better user experience.
* **Responsive Design:** Clean, grid-based layout that works on all devices.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic layout and search inputs.
* **CSS3:** Custom styling for the results cards and layout.
* **JavaScript (ES6):** * `fetch()` API for data retrieval.
    * `async/await` for handling API calls.
    * Dynamic DOM manipulation to display results.

---

## 🚀 How It Works

The app works by taking user input and sending a `GET` request to the University Domains API.

1.  **Input:** User types a country name.
2.  **Fetch:** The app calls `http://universities.hipolabs.com/search?country=[NAME]`.
3.  **Process:** JavaScript filters and parses the JSON response.
4.  **Display:** The results are injected into the HTML as clickable cards.

```javascript
// Quick peek at the logic:
async function getColleges(country) {
    let url = "[http://universities.hipolabs.com/search?country=](http://universities.hipolabs.com/search?country=)" + country;
    let res = await fetch(url);
    let data = await res.json();
    return data;
}
