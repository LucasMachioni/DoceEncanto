function mostrarReceita(idReceita) {
    var receita = document.getElementById(idReceita);
    if (receita.style.display === "block") {
        receita.style.display = "none";
    } else {
        receita.style.display = "block";
    }
}