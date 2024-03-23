document.addEventListener("DOMContentLoaded", function () {
  const carMake = document.getElementById("carMake");
  const carModel = document.getElementById("carModel");

  // Example data - replace with API calls or more sophisticated data structures as needed
  const cars = {
    Chevrolet: ["Corvette", "Camaro", "Impala"],
    Ford: ["Fiesta", "Focus", "Mustang"],
    Honda: ["Civic", "Accord", "CR-V"],
    Toyota: ["Corolla", "Camry", "RAV4"],
    Nissan: ["Sentra", "Altima", "Maxima"],
    Hyundai: ["Elantra", "Sonata", "Tucson"],
    Kia: ["Rio", "Forte", "Sportage"],
    Mazda: ["Mazda3", "Mazda6", "CX-5"],
    Subaru: ["Impreza", "Legacy", "Outback"],
    Volkswagen: ["Golf", "Passat", "Tiguan"],
    BMW: ["3 Series", "5 Series", "X5"],
    Mercedes: ["C-Class", "E-Class", "GLC"],
    Audi: ["A3", "A4", "Q5"],
    Lexus: ["IS", "ES", "RX"],
    Acura: ["ILX", "TLX", "MDX"],
    Infiniti: ["Q50", "Q60", "QX50"],
    Volvo: ["S60", "S90", "XC60"],
    Tesla: ["Model 3", "Model S", "Model X"],
    Jaguar: ["XE", "XF", "F-PACE"],
    LandRover: ["Discovery", "Range Rover", "Range Rover Sport"],
    Porsche: ["911", "Cayenne", "Panamera"],
    Maserati: ["Ghibli", "Quattroporte", "Levante"],
    Ferrari: ["488", "812", "SF90"],
    Lamborghini: ["Huracan", "Aventador"],
    RollsRoyce: ["Phantom", "Ghost"],
    Bugatti: ["Chiron"],
    McLaren: ["720S"],
    AstonMartin: ["DB11", "Vantage"],
    Bentley: ["Continental GT"],
    AlfaRomeo: ["Giulia", "Stelvio"],
    Mini: ["Cooper", "Countryman"],
    Fiat: ["500", "124 Spider"],
    Smart: ["Fortwo"],
    Jeep: ["Wrangler", "Grand Cherokee"],
    GMC: ["Sierra", "Yukon"],
    Ram: ["1500"],
    Dodge: ["Challenger", "Charger"],
    Chrysler: ["300"],
    Buick: ["Regal", "Enclave"],
    Cadillac: ["CT4", "CT5", "Escalade"],
    Lincoln: ["MKZ", "Navigator"],
    // Add more makes and models as required
  };

  // Populate the car make dropdown
  for (let make in cars) {
    let option = new Option(make, make);
    carMake.options.add(option);
  }

  // Update car model dropdown based on selected make
  carMake.addEventListener("change", function () {
    carModel.innerHTML = '<option value="">Select Model</option>'; // Reset models dropdown
    carModel.disabled = false; // Enable the model dropdown

    let models = cars[this.value]; // Get models for selected make
    models.forEach(function (model) {
      let option = new Option(model, model);
      carModel.options.add(option);
    });
  });

  // Intercept the form submission to redirect user to the car's HTML page
  carSearchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // URL structure /cars/make/model.html
    const make = carMake.value;
    const model = carModel.value;
    const url = `./cars/${make}/${model}.html`; // Construct the URL

    // Redirect the user to the constructed URL
    window.location.href = url;
  });
});
