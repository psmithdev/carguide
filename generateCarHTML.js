const fs = require("fs");

const carData = require("./carData.json"); // Load our car data
const template = fs.readFileSync("carTemplate.html", "utf8"); // Load the HTML template

// Ensure the 'output' directory exists
const outputDir = "./cars";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

carData.cars.forEach((car) => {
  const make = car.make;
  car.models.forEach((model) => {
    const fileName = `${outputDir}/${model}.html`;
    // Perform global replacement for both {{MAKE}} and {{MODEL}}
    let carPageContent = template
      .replace(/{{MAKE}}/g, make)
      .replace(/{{MODEL}}/g, model);

    fs.writeFileSync(fileName, carPageContent); // Write the file to disk
    console.log(`Generated HTML file for: ${make} ${model}`);
  });
});

console.log("All car model HTML files have been generated successfully.");
