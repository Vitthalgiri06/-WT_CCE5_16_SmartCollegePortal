

const cache = {};   


function getData(name) {
  if (!cache[name]) {
    cache[name] = fetch("data/" + name + ".json")
      .then(function (response) {
        if (!response.ok) throw new Error("Could not load " + name);
        return response.json();
      })
      .then(function (data) { return data[name]; }) 
      .catch(function (error) {
        delete cache[name];   
        throw error;
      });
  }
  return cache[name];
}


async function populate(box, names, loadingText, render) {
  box.textContent = loadingText;
  try {
    const results = await Promise.all(names.map(getData));
    box.textContent = "";
    render(...results);
  } catch (error) {
    box.className = "error-box";
    box.textContent = "Sorry, this content could not be loaded.";
  }
}


function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
