
let fetchBtn = document.getElementById("fetchBtn");
let filterBtn = document.getElementById("filterBtn");

let obj = '';


fetchBtn.addEventListener("click", buttonclickhandler);
filterBtn.addEventListener("click", filterHolidays);

function buttonclickhandler() {

    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();

    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    xhr.open("GET",
"https://www.gov.uk/bank-holidays.json", true);




    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
            

            
        }
        else {
            console.log("File not found");
        }
    }

    // At last send the request
    xhr.send();
}

function filterHolidays(){
    startDate = document.getElementById("from").value;
    endDate = document.getElementById("to").value;

    holidayEvents = obj["england-and-wales"]["events"];

    // Getting the ul element
    let list = document.getElementById("list");

    let startDate = new Date("2000-01-01");
    let endDate = new Date("2100-01-01");

    var filteredHolidays = holidayEvents.filter(a => {
        console.log(a);
        var date = new Date(a.date);
        return (date >= startDate && date <= endDate);
      });
    console.log(filteredHolidays);

    holidayEvents = filteredHolidays;

    str = ""
    str += `<table>
    <tr>
      <th>Title</th>
      <th>Date</th>
    </tr>`
    for (key in holidayEvents) {
        // str += `<li>${obj.data[key].employee_name}</li>`;
        str += `
        <tr>
        <td>${holidayEvents[key]["title"]}<td>
        <td>${holidayEvents[key]["date"]}</td>
        <tr>`;
        // console.log(holidayEvents[key]["date"]);

    }
    list.innerHTML = str;
    const d = new Date();
    console.log(d);

}
