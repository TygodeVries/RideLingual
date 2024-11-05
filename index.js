
GetParks();

function GetParks() {
    try {
        fetch("Translations/parks.json")
            .then((response) => response.json())
            .then((json) => console.log(json));
    } catch (error) {
        console.error("Could not get parks!\n" + error);
        window.location.href = "/error";
    }
}