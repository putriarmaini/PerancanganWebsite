var row=1;

var entry = document.getElementById("submit");
entry.addEventListener("click",datamasukk);

alert('Assalamualaikum #nuhasquad, Silahkan untuk daftar Sharing Nuha')

function datamasukk(){
	var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;

	if (!email|| !name|| !gender|| !date){
		alert("Data Belum Terisi")
	}
	else{
        alert("Jazakallah Khairan  " + name + "\n"+"Kamu sudah terdaftar sebagai peserta " + "\n" + "sharing nuha " + date)
    }

    var inputt=document.getElementById("inputt");
    var newrow = inputt.insertRow(row);
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);

    cell1.innerHTML=email;
    cell2.innerHTML=name;
    cell3.innerHTML=gender;
    cell4.innerHTML=date;

    row++;
} 