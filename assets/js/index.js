let data = [
  {
    id: "001",
    city: "Islamabad",
    Name: "Doha Emporium",
    Image: "assets/img/bvokegv0emiewd1pskp6.jpeg",
  },
  {
    id: "002",
    city: "Peshawar",
    Name: "091 Mall",
    Image: "assets/img/c6cgo6eu9isnc3mws1wb.jpeg",
  },
  {
    id: "003",
    city: "Islamabad",
    Name: "Naseem Arcade",
    Image: "assets/img/ccwffkc9pcailpcdtgt6.jpeg",
  },
  {
    id: "004",
    city: "Hangu",
    Name: "Mall Of Hangu",
    Image: "assets/img/cjd9ynv1mvk8ays5w9yq.jpeg",
  },
  {
    id: "005",
    city: "Hangu",
    Name: "Florenza Mall and Residencia",
    Image: "assets/img/cylzea9zieywplgebtq7.jpeg",
  },
  {
    id: "006",
    city: "Peshawar",
    Name: "AH Tower",
    Image: "assets/img/dhzkv5zmfvfifhzbiows.jpeg",
  },
  {
    id: "007",
    city: "Islamabad",
    Name: "Aimal Tower",
    Image: "assets/img/ds7vjhetsjkiobdgewxx.jpeg",
  },
  {
    id: "008",
    city: "DI_Khan",
    Name: "AH City",
    Image: "assets/img/ewadvpli4pm4dre8uwvd.jpeg",
  },
  {
    id: "009",
    city: "DI_Khan",
    Name: "DI Khan New City",
    Image: "assets/img/fwtxtyza4rpv6tc6yjiy.jpeg",
  },
  {
    id: "010",
    city: "Islamabad",
    Name: "J7 Global Mall",
    Image: "assets/img/ihosps0em0tscvofrfvl.jpeg",
  },
  {
    id: "011",
    city: "Islamabad",
    Name: "Aryan Tower",
    Image: "assets/img/mczful3a0gl2f4ur8ttg.jpeg",
  },
  {
    id: "012",
    city: "Islamabad",
    Name: "U_Tower",
    Image: "assets/img/qawtmvpaglv9s6fuuf6c.jpeg",
  },
  {
    id: "013",
    city: "Murree",
    Name: "North Hills",
    Image: "assets/img/kv4buopotodc0hiro0gd.jpg",
  },
];

function relodbtn() {
  data.map((item) => {
    list.innerHTML += `
        <div id="insidecard" >
        <p id="Image">Project Image </p><img class="image"
        src="${item.Image}"
        alt="">
        <p id="Name">Project Name:<h1>${item.Name}</h1></p>
      </div>
        `;
  }); 
}

/////////////////////////////show cards////////////////////////////////

function justHtml(data) {
  return `
  <div>
          <p id="Image">Project Image </p>
          <img class="image" src="${data.Image}" alt="">
          <p id="Name">Project Name:<h1>${data.Name}</h1></p>
        </div>
  `;
}

const list = document.getElementById("cards");
data.map((item) => {
  list.innerHTML += justHtml(item);

  return null;
});

///////////////////////////////Select City///////////////////////
const selectbox = document.getElementById("selectcity");

data.map((area) => {
  selectbox.innerHTML += `<option  value="${area.Name}">${area.Name}</option>`;
});

//////// find where item.name is equal to select box  ///////////////////////////
function optionbtn() {
  var selectbox = document.getElementById("selectcity").value;

  if (selectbox === "defaultselect") {
    selectbox = data.map((item) => {
      list.innerHTML += justHtml(item);
    });
  } else {
    let result = data.find((item) => {
      return item.Name === selectbox;
    });
    list.innerHTML = justHtml(result);
    console.log(result);
  }
}

////////////////search result in console//////////////////
console.log(selectbox);
