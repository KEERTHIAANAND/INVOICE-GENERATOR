function AddRow() {
    var cname = document.getElementById("cname").value;
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var tax = document.getElementById("tax").value;

    if (cname && item && quantity && price && tax) {
        var table = document.getElementById("show");
        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = cname;
        cell2.innerHTML = item;
        cell3.innerHTML = quantity;
        cell4.innerHTML = price;
        cell5.innerHTML = tax;
        cell6.innerHTML = (quantity * price * (1 + tax / 100)).toFixed(2);

        document.getElementById("cname").value = "";
        document.getElementById("item").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";
        document.getElementById("tax").value = "";
    } else {
        alert("Please fill all fields");
    }
}