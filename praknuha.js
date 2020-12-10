var row=1;

alert('Assalamualaikum #nuhasquad, welcome to NUHA ARSAL WEBSITE!')

function datamasuk(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (!email|| !password){
		alert("Data Belum Terisi")
	}
	else{
        alert("Assalamualaikum " + email + "\n" + "Simpan baik-baik password-mu ya " + password)
    }

    var input=document.getElementById("input");
    var newrow = input.insertRow(row);
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);

    cell1.innerHTML=email;
    cell2.innerHTML=password;

    row++;
} 