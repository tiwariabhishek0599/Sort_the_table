let btn = document.querySelector("button");
// const contents = document.querySelectorAll("#customerLis"); 

let audio = document.querySelector("audio");

function sortTable() {
    let table;
    let indx;
    let x;
    let y;
    table = document.querySelector("table");
    let switching = true; //boolean value
    while (switching) {
        switching = false;
        let rows = table.rows;
        //console.log(rows);
    for (indx = 1; indx < (rows.length - 1); indx++) {
        var Switch = false;
        x = rows[indx].getElementsByTagName("td")[0];
        y = rows[indx + 1].getElementsByTagName("td")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        Switch = true;
            break;
        }
    }
        if (Switch) {
            rows[indx].parentNode.insertBefore(rows[indx + 1], rows[indx]);
            switching = true;
        }
    }
    audio.play();
}

  btn.addEventListener("click",sortTable);