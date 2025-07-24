// Company → Model
document.getElementById("compony").addEventListener("change", function () {
  const selectedMake = this.value;

  fetch("/get_models", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ make: selectedMake })
  })
  .then(response => response.json())
  .then(models => {
    const modelDropdown = document.getElementById("model");
    modelDropdown.innerHTML = '<option value="">-- Select Model --</option>';
    models.forEach(model => {
      const opt = document.createElement("option");
      opt.value = model;
      opt.textContent = model;
      modelDropdown.appendChild(opt);
    });
  });
});

// State → City
document.getElementById("state").addEventListener("change", function () {
  const selectedState = this.value;

  fetch("/get_cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: selectedState })
  })
  .then(response => response.json())
  .then(cities => {
    const cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = '<option value="">-- Select City --</option>';
    cities.forEach(city => {
      const opt = document.createElement("option");
      opt.value = city;
      opt.textContent = city;
      cityDropdown.appendChild(opt);
    });
  });
});


function from_handler(event) {
  event.preventDefault()
}


function send_data() {
  document.querySelector('form').addEventListener('submit', from_handler);

  var fd = new FormData(document.querySelector('form'));

  var xhr = new XMLHttpRequest();

  xhr.open("POST", "/predict", true);
  document.getElementById('prediction').innerHTML = 'Wait! Predicting Price...';

  xhr.onreadystatechange = function () {
    if (xhr.readyState ===  XMLHttpRequest.DONE) {
      document.getElementById('prediction').innerHTML = "Prediction: $" + xhr.responseText;
    }
  }
  xhr.onload = function(){};
  xhr.send(fd);

}