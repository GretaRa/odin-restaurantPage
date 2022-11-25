function populateContact() {
  const contentContractPage = document.createElement("div");
  contentContractPage.classList.add("contentContractPage", "tabContent");
  contentContractPage.setAttribute("id", "contact");

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = "Address";

  const address = document.createElement("p");
  address.textContent = "boulevard avenue 73";

  const contactNumberTitle = document.createElement("h2");
  contactNumberTitle.textContent = "Phone number";

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "+3158958486";

  contentContractPage.appendChild(addressTitle);
  contentContractPage.appendChild(address);
  contentContractPage.appendChild(contactNumberTitle);
  contentContractPage.appendChild(contactNumber);

  return contentContractPage;
}

function renderContact() {
  const main = document.getElementById("mainContainer");
  main.appendChild(populateContact());
}

export { renderContact };
