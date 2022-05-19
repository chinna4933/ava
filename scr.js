var x = document.querySelectorAll(".unit-item-details .d-flex a");
var y = document.querySelectorAll(".unit-item-details .description");
var z = document.querySelectorAll(".unit-item-details .available-date");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var bbs = y[i].textContent;
var date = z[i].textContent
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].href;
myarray.push([cleantext,cleanlink,date,bbs]);
};
function make_table() {
   var table = '<table><thead><th>Unit</th><th>Rent Links</th><th>Date</th><th>Bed,Bath,Sqft</th></thead><tbody>';
  for (var i=0; i<myarray.length; i++) {
           table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td><td>'+myarray[i][2]+'</td><td>'+myarray[i][3]+'</td></tr>';
   };

   var w = window.open("");
w.document.write(table);
}
make_table()
