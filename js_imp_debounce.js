const imputfield = document.getElementById("input");
function debounce(func, delay = 300) {
  let timeoutid;
  return function (...args) {
    // console.log("Debounced function called with args:", ...args);
    if (timeoutid) {
      clearTimeout(timeoutid);
    }
    timeoutid = setTimeout(() => {
      // console.log(this);
      func(...args);
    }, delay);
  };
}
let cachedData = null;

function searchfor(inputValue) {
  const outputDiv = document.getElementById("output");

  if (inputValue === "") {
    outputDiv.innerHTML = "";
    return;
  }

  const fetchData = cachedData
    ? Promise.resolve(cachedData)
    : fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (!res.ok) throw new Error("Network error");
          return res.json();
        })
        .then((data) => {
          cachedData = data;
          return data;
        });

  fetchData
    .then((data) => {
      outputDiv.innerHTML = ""; // clear previous results
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      for (const item of filtered) {
        outputDiv.innerHTML += `<div class="card">
            <h2>${item.title}</h2>
            <p>${item.body}</p>
          </div>`;
      }
    })
    .catch((err) => console.error("Error:", err));
}

const searchDebounce = debounce(searchfor, 500);
// function searchfor() {
imputfield.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  searchDebounce(inputValue);
  // You can add more functionality here based on the input value
});
