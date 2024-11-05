
GetParks();

function GetParks() {
    try {
        fetch("Translations/parks.json")
            .then((response) => response.json())
            .then((json) => console.log(json));

            ShowParks(json["parks"])
    } catch (error) {
        console.error("Could not get parks!\n" + error);
        window.location.href = "/error";
    }
}

function ShowParks(let parks) {
    for (var i = 0; i < parks.lenght; i++) {
        let park = parks[i];

        document.append("Park: " + park.name);
    }
}