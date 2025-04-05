//xml Http Request

const showElementsBtn = document.querySelector(".show-btn");
const allClinetsDivElem = document.querySelector(".all-cilents");

let allClinets;

let flag = 0;

showElementsBtn.addEventListener("click", function () {
  if (0 === flag) {
    allClinetsDivElem.classList.remove("d-none");
    showElementsBtn.innerHTML = "Hide Clients";
    flag = 1;
    console.log("Btn Hello");
    const request = new XMLHttpRequest();

    request.open("GET", "clients.json");
    request.send();

    request.addEventListener("readystatechange", function () {
      if (
        request.readyState == 4 &&
        request.status >= 200 &&
        request.status < 300
      ) {
        console.log(request.response);
        allClinets = JSON.parse(request.response);

        console.log(allClinets);
        addClientsToUI(allClinets);
      }
    });
  } else if (1 == flag) {
    flag = 0;
    showElementsBtn.innerHTML = "Show Clients";
    allClinetsDivElem.classList.add("d-none");
  }
});

function addClientsToUI(clients) {
  let package = "";

  console.log(clients.length);

  for (var i = 0; i < clients.length; i++) {
    package += `
    <div class="col-lg-6">
    <div class="bg-primary p-3 text-center mb-3 ">
                <h2>User Name : ${clients[i].userName}</h2>
                <h3>User Email : ${clients[i].userEmail}</h3>
                <h3>User Phone : ${clients[i].phoneNumber}</h3>
                <h3>User Address : ${clients[i].address}</h3>
            </div>
    
    </div>`;
  }

  allClinetsDivElem.innerHTML = package;
}
