const produtos = [
  {
    id: 0,
    nome: "REDMI NOTE 11 GRAPHITE GRAY 4GB RAM 128GB ROM",
    preco: 100
  },
  { id: 1, nome: "Apple iPhone 13 (128 GB) - Meia-noite", preco: 200 }
];

function renderizarArrayDeProdutos(arrayDeProdutos = []) {
  let listaDeProdutos = document.getElementById("list-de-produtos");
  let resultado = document.getElementById("resultado");

  resultado.textContent = arrayDeProdutos.length;
  listaDeProdutos.textContent = "";

  if (arrayDeProdutos.length !== 0) {
    const ul = document.createElement("ul");
    arrayDeProdutos.forEach((produto) => {
      const li = document.createElement("li");
      li.textContent = produto.nome;
      ul.appendChild(li);
    });
    listaDeProdutos.appendChild(ul);
  } else {
    listaDeProdutos.textContent = "Nenhum Item Encontrado";
  }
}

function startListeners() {
  const preco = document.getElementById("preco");
  const busca = document.getElementById("busca");

  preco.addEventListener("change", (evento) => {
    if (evento.target.checked === true) {
      const novaLista = produtos.filter((produto) => {
        if (produto.preco > 100) {
          return produto;
        }
      });
      renderizarArrayDeProdutos(novaLista);
    } else {
      renderizarArrayDeProdutos(produtos);
    }
  });

  busca.addEventListener("input", (evento) => {
    if (evento.target.value !== "") {
      const novaListaNome = produtos.filter((produto) => {
        if (
          produto.nome.toLowerCase().includes(evento.target.value.toLowerCase())
        ) {
          return produto;
        }
      });
      renderizarArrayDeProdutos(novaListaNome);
      console.log(novaListaNome);
    } else {
      renderizarArrayDeProdutos(produtos);
    }

    //console.log(evento.target.value);
  });
}


startListeners();
renderizarArrayDeProdutos(produtos);
