function populateContact() {
  const contentContactPage = document.createElement("div");
  contentContactPage.classList.add("contentContactPage", "tabContent");
  contentContactPage.setAttribute("id", "contact");

  const pageTitle = document.createElement('h1')
  pageTitle.classList.add("pageTitle");
  pageTitle.textContent = 'Contact Us'

  const pageDescription = document.createElement('p')
  pageDescription.classList.add("pageDescription");
  pageDescription.textContent = 'We would love to hear from you. Let us know if you are planning to make a reservation or would like to purchase a gift card'

  const allContactDetails = document.createElement('div')
  allContactDetails.classList.add('allContactDetails')

  // Address
  const addressContainer = document.createElement('div')
  addressContainer.classList.add('addressContainer')

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = "Location";

  const address = document.createElement("p");
  address.textContent = "Boulevard avenue 73, 1874RR, Espressity";

  //Contact
  const contactContainer = document.createElement('div')
  contactContainer.classList.add('contactContainer')

  const contactNumberTitle = document.createElement("h2");
  contactNumberTitle.textContent = "Contact";

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "+3158958486";

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "roastcaffee@fake.com";

  //Opening hours
  const scheduleContainer = document.createElement('div')
  scheduleContainer.classList.add('scheduleContainer')

  const openHours = document.createElement('h2')
  openHours.textContent = 'Hours'

  const scheduleDay = document.createElement('p')
  scheduleDay.textContent = 'Open Daily'

  const scheduleHours = document.createElement('p')
  scheduleHours.textContent = '7AM - 6PM'

  contentContactPage.appendChild(pageTitle);
  contentContactPage.appendChild(pageDescription)

  contentContactPage.appendChild(allContactDetails)

  allContactDetails.appendChild(addressContainer)
  addressContainer.appendChild(addressTitle);
  addressContainer.appendChild(address);

  allContactDetails.appendChild(contactContainer)
  contactContainer.appendChild(contactNumberTitle);
  contactContainer.appendChild(contactNumber);
  contactContainer.appendChild(contactEmail)

  allContactDetails.appendChild(scheduleContainer)
  scheduleContainer.appendChild(openHours)
  scheduleContainer.appendChild(scheduleDay)
  scheduleContainer.appendChild(scheduleHours)


  return contentContactPage;
}

function renderContact() {
  const main = document.getElementById("mainContainer");
  main.appendChild(populateContact());
}

export { renderContact };
