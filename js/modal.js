function clickedModal(modalName) {
    var modal = document.getElementById(modalName);
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}