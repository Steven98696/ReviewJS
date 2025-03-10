let strings = "a";
document.getElementById("strings").textContent = strings;
const numbers = 3;
document.getElementById("numbers").textContent = numbers;
document.addEventListener("DOMContentLoaded", function () {
  const booleanRadios = document.getElementsByName("boolean");
  const booleanSpan = document.getElementById("booleans");
  let booleanValue = false;  
  booleanSpan.textContent = booleanValue; 
  booleanRadios.forEach(radio => {
      radio.addEventListener("change", function () {
          booleanValue = this.value === "true";
          booleanSpan.textContent = booleanValue;
      });
  });
});
  const obj = {
      foo: {
          1: ["A", "B"],
          2: ["C", "D"]
      },
      bar: {
          3: ["E", "F", "G"],
          4: ["H", "I", "J"]
      }
  };
  const container = document.getElementById("container");
  Object.entries(obj).forEach(([key, value]) => {
      const outerBox = document.createElement("div");
      outerBox.className = "outer-box";
      outerBox.innerHTML = `<strong>${key}</strong>`;

      Object.entries(value).forEach(([num, items]) => {
          const innerBox = document.createElement("div");
          innerBox.className = "inner-box";
          innerBox.innerHTML = `<strong>${num}</strong>`;

          items.forEach(item => {
              const itemBox = document.createElement("div");
              itemBox.className = "item-box";
              itemBox.textContent = item;
              innerBox.appendChild(itemBox);
          });
          outerBox.appendChild(innerBox);
      });
      container.appendChild(outerBox);
  });