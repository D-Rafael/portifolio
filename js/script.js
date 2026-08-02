async function carregandoPartes(url, placeholderId) {
  const response = await fetch(url, { cache: "no-store" });
  const html = await response.text();
  document.getElementById(placeholderId).innerHTML = html;
}

carregandoPartes("partials/header.txt", "header-placeholder");
carregandoPartes("partials/footer.txt", "footer-placeholder");
