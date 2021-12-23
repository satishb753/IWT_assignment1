# IWT_assignment1

Open bankholidays.html file in web-browser. Left side of the app shows filters and right side shows output.


Code architecture:

Html file -> bankholidays.html
Javascript file -> ajax.js

Method:
Step 1. Fetching data from api and populate our webpage

Step 2. Filtering: Three different types of filtering applied 
    a) Filter by division
    b) Filter by yesterday, lastweek and lastmonth
    c) Filter by date-range

Important functions to look for are:

For fetching data:
    xhr.open(); xhr.onload(); xhr.send();

For populating web-page
    populateDivision();

For filtering data based on date range
    filterHolidays();


Languages used:
Html, javascript

Helper libraries used:
    1) jquery-3.2.1
    2) bootstrap-4.0.0


