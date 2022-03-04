let pharmacyItems = ["Abilify", "Humira", "Nexium", "Crestor", "Enbrel"];

class patient {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

document.getElementById("task1").innerHTML = reverseAString();
function reverseAString() {
  let name = "Mr Andy Robinson";
  return name;
}

document.getElementById("task2").innerHTML = addRemovePharmacyItem();
function addRemovePharmacyItem() {
  return pharmacyItems;
}

document.getElementById("task3").innerHTML = pharmacyItems
  .map((item) => {
    return "<li>" + item + "</li>";
  })
  .join("");

function displayPatientDetails(patient) {
  document.getElementById("task4").innerHTML = Object.values(patient);
}

function onButtonClick() {
  if (confirm("Do you want to save?")) {
    displayPatientDetails("");
  }
}
