function updateModels() {
  var year = parseInt(document.getElementById("year").value);
  var make = document.getElementById("make").value;
  var modelDropdown = document.getElementById("model");

  // Clear existing options
  modelDropdown.innerHTML = "";

  // Logic to add options based on year and make
  if (make === "BMW") {
    if (year >= 2000 && year <= 2006) {
      addOption(modelDropdown, "E46 M3");
    } else if (year >= 2008 && year <= 2013) {
      addOption(modelDropdown, "E90 M3");
    }
  } else if (make === "Chevrolet") {
    if (year >= 2009 && year <= 2013) {
      addOption(modelDropdown, "C6 Corvette ZR1");
    }
    if (year >= 2006 && year <= 2013) {
      addOption(modelDropdown, "C6 Corvette Z06");
    }
  }
  updateDisplay();
}

function addOption(dropdown, value) {
  var option = document.createElement("option");
  option.value = value;
  option.text = value;
  dropdown.add(option);
}

function updateDisplay() {
  var model = document.getElementById("model").value;

  // Hide all details sections
  var carDetails = document.querySelectorAll(".car-details");
  carDetails.forEach(function (detail) {
    detail.style.display = "none";
  });

  // Show the selected model's details
  var selectedDetail = document.getElementById(
    "car-details-" + model.replace(/ /g, "").toLowerCase()
  );
  if (selectedDetail) {
    selectedDetail.style.display = "block";
  }
}

function populateYears() {
  var yearDropdown = document.getElementById("year");
  for (var i = 2000; i <= 2013; i++) {
    addOption(yearDropdown, i);
  }
}

// Initial setup
window.onload = function () {
  populateYears();
  updateModels();
};
