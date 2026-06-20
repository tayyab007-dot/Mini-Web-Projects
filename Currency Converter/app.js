// Updated stable API URL endpoint
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate both dropdown selects with currencies from countryList (code.js)
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    
    // Set default select values on page load
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  // Event listener to change country flag icon when currency option alters
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Fetch exchange rates and refresh the UI text content
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const fromCode = fromCurr.value.toLowerCase();
  const toCode = toCurr.value.toLowerCase();
  const URL = `${BASE_URL}/${fromCode}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();
    
    // Extract exchange rate safely from returned data objects
    let rate = data[fromCode][toCode];

    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching current exchange rates.";
    console.error("Fetch Error: ", error);
  }
};

// Modifies the country image sources using flagsapi
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Fire on manual click handler triggers
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Run automatically on initialization setup rules
window.addEventListener("load", () => {
  updateExchangeRate();
});