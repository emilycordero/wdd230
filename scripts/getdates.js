const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const d = new Date()
let currentYear = d.getFullYear();

document.getElementById("year").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = Date();

