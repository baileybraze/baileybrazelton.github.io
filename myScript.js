function upDates() {
    document.getElementById("currentyear").innerHTML = new Date().getFullYear();
    let modif = new Date(document.lastModified);
    let modified = modif.toLocaleString();
    document.getElementById("update").innerHTML = "Last Updated " + modified;
}