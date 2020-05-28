//Hospital Array
var hospital = [{
	name: "Fortis hospital ",
	location: ""
}, {
	name: "Mayo Clinic",
	location: ""
}, {
	name: "The Johns Hopkins Hospital",
	location: ""
}, {
	name: "UCSF Medical Center",
	location: ""
}, {
	name: "Angers University Hospital",
	location: ""
}, {
	name: "Aditya Birla Hospital",
	location: ""
}, {
	name: "Apollo Hospitals",
	location: ""
}, {
	name: "Sanjeevan Hospitals",
	location: ""
}, {
	name: "Beaujon Hospital",
	location: ""
}];
// Country Array
var country = [{
	name: "India"

}, {
	name: "France",

}];
// Loading country div
var countryContainer = $("#country_container");
var hospitalContainer = $("#hospital_container");
country.forEach(function (text) {
	var div = $("<div>", {
		class: "div-added",
		id: text.name
	});
	var label = $("<label>", {
		text: text.name,
		class: "label-added",
	});
	countryContainer.append(label);
	countryContainer.append(div);
});
hospital.forEach(function (text, event) {
	var div = $("<div>", {
		class: "button-added",
		text: text.name,
		id: text.name,
		draggable: "true"

	});

	hospitalContainer.append(div);
});
//Method to show toast message with given message
function showToast(message) {
	var x = document.getElementById("snackbar");
	x.innerHTML = message;
	x.className = "show";
	setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text", ev.target.id);
	ev.currentTarget.classList.add("grab");
	
	

}

function allowDrop(ev) {
	ev.preventDefault();
	//ev.dataTransfer.dropEffect = "move"
}



function drop(ev) {
	ev.preventDefault();
	
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));

	var position = $(ev.toElement).position();

	var element = document.elementFromPoint(
		position.left,
		position.top,

	);
	//Mapping hospital to given country
	if (element) {
		var countryName = element.id;
		var hospitalName = data;
		for (var i = 0; i < hospital.length; i++) {
			if (hospital[i].name == hospitalName) {
				hospital[i].location = countryName;
				showToast("Hospital mapped with " + element.id)
				break;
			}
		}

	}


}