document
  .getElementById("clubelivroform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const genres = [];
    document.querySelectorAll('input[name="genre"]:checked').forEach((checkbox) => {
      genres.push(checkbox.value);
    });

    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      genero: genres,
      p_evento: document.getElementById("p_evento").value,
    };

    console.log("Dados:", formData);

    fetch("https://api.exemplo.com/clube-do-livro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao realizar o cadastro.");
      });
  });
