
window.onload = function apiRequestFetch() {

    let filterBtn = document.getElementById("filterBtn");
    filterBtn.addEventListener("click", filterHolidays);

    let obj, holidayEvents = '';
    let startDate = new Date("2000-01-01");
    let endDate = new Date("2100-01-01");

    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();

    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    xhr.open("GET", "https://www.gov.uk/bank-holidays.json", true);


    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
            
            let list = document.getElementById("list");
            divisions = Object.keys(obj);
            holidayEvents = obj[divisions[0]]["events"];

            populateDivision(holidayEvents);

            var $select = $("#division");
            for (var idx in divisions) {
                $select.append('<option value=' + divisions[idx] + '>' + divisions[idx] + '</option>');
            }
            $select.on('change',function(){
                holidayEvents = obj[this.value]["events"];
                // console.log(holidayEvents);
                populateDivision(holidayEvents);
            })

            
        }
        else {
            console.log("File not found");
        }
    }

    // At last send the request
    xhr.send();

    function populateDivision(data){
        str = ""
        str += `<table>
        <tr>
        <th>Title</th>
        <th>Date</th>
        </tr>`
        for (key in data) {
            str += `
            <tr>
            <td>${data[key]["title"]}<td>
            <td>${data[key]["date"]}</td>
            <tr>`;
            // console.log(holidayEvents[key]["date"]);
    
        }
        list.innerHTML = str;
    }
    
    function filterHolidays(){
        startDate = document.getElementById("from").value;
        endDate = document.getElementById("to").value;
    
        startDate = new Date(startDate);
        startDate.toISOString().split('T')[0]
        endDate = new Date(endDate);
        endDate.toISOString().split('T')[0]
    
        // holidayEvents =  Object.values(data);
        // console.log("typeof holidayEvents: "+holidayEvents)
    
        var filteredHolidays = holidayEvents.filter(a => {
            var date = new Date(a.date);
            return (date >= startDate && date <= endDate);
        });
    
    
        populateDivision(filteredHolidays);
    }
}


