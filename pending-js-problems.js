function deepcopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
// Example usage
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

function deepmerge(arr1, arr2) {
  const result = [...arr1];

  for (const item of arr2) {
    const index = result.findIndex((el) => el.id === item.id);
    if (index !== -1) {
      result[index] = { ...result[index], ...item };
    } else {
      result.push(item);
    }
  }

  return result;
}
// Example usage
const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const arr2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Charlie" },
];
console.log(deepmerge(arr1, arr2));

function deepmergeofobj(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null) {
        result[key] = deepmergeofobj(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}
function debounce(fn, delay) {
  let timestap = 0;
}
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Define routes and corresponding render functions
  const routes = {
    home: () => `<h2>🏠 Home</h2><p>Welcome to the homepage!</p>`,
    about: () => `<h2>📘 About</h2><p>This is an about page.</p>`,
    contact: () => `<h2>📞 Contact</h2><p>Reach us at contact@example.com.</p>`,
  };

  // Render content based on hash
  function router() {
    const hash = window.location.hash.slice(1).toLowerCase(); // remove '#'
    const render = routes[hash];
    // console.log(render);

    if (render) {
      app.innerHTML = render();
    } else if (hash === "") {
      app.innerHTML = routes["home"](); // default route
    } else {
      app.innerHTML = `<h2>❌ 404</h2><p>Page not found: <code>#${hash}</code></p>`;
    }
  }

  window.addEventListener("hashchange", router);
  router(); // run once on load
});

/// pending  question to implemnt a module pattern of api congigration

const ApiClient = (function (config) {
  // Private variables
  const baseUrl = config.baseUrl;
  const apiKey = config.apiKey;
  let requestCount = 0;

  // Private methods
  function makeRequest(endpoint, options = {}) {
    requestCount++;
    const url = `${baseUrl}${endpoint}`;
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    };

    return fetch(url, { ...options, headers });
  }

  function logRequest(endpoint, method = "GET") {
    console.log(`[${requestCount}] ${method} ${endpoint}`);
  }

  // Public API
  return {
    get: function (endpoint) {
      logRequest(endpoint, "GET");
      return makeRequest(endpoint, { method: "GET" });
    },

    post: function (endpoint, data) {
      logRequest(endpoint, "POST");
      return makeRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
      });
    },

    getRequestCount: function () {
      return requestCount;
    },
  };
})({
  baseUrl: "https://api.example.com",
  apiKey: "your-api-key",
});
