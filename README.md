# IWT_assignment1

Open bankholidays.html file in web-browser. Left side of the app shows filters and right side shows output.


Code architecture:

Html file -> bankholidays.html <br/>
Javascript file -> ajax.js

Method:
Step 1. Fetching data from api and populate our webpage

Step 2. Filtering: Three different types of filtering applied <br/>
    a) Filter by division <br/>
    b) Filter by yesterday, lastweek and lastmonth <br/>
    c) Filter by date-range <br/>

Important functions to look for are:

For fetching data:<br/>
    xhr.open(); xhr.onload(); xhr.send();<br/>

For populating web-page<br/>
    populateDivision();<br/>

For filtering data based on date range<br/>
    filterHolidays();<br/>


Languages used:
Html, javascript

Helper libraries used:
    1) jquery-3.2.1
    2) bootstrap-4.0.0


