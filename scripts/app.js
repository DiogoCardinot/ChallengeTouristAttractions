document.addEventListener("DOMContentLoaded", function () {
  //CONSTANTE USADA PARA ADICIONAR O ITEM NA LISTA QUANDO A AÇÃO SUBMIT FOR OUVIDA
  const form = document.querySelector(".form-tourist-attractions");

  //CONSTANTES USADAS APENAS PARA RESETAR OS INPUTS
  const inputImage = document.querySelector(
    ".form-tourist-attractions-input-image"
  );
  const inputTitle = document.querySelector(
    ".form-tourist-attractions-input-title"
  );
  const inputDescription = document.querySelector(
    ".form-tourist-attractions-input-description"
  );

  //CONSTANTE QUE VAI RECEBER OS ITENS DOS INPUTS
  const list = [];

  //CONSTANTE ONDE VÃO SER RENDERIZADOS OS ITENS
  const items = document.querySelector(".tourist-attractions-cards-wrapper");

  form.addEventListener("submit", addItemToList);

  function addItemToList(event) {
    event.preventDefault();
    const itemImage = event.target["input-image"].value;
    const itemTitle = event.target["input-title"].value;
    const itemDescription = event.target["input-description"].value;

    if (itemImage !== "" && itemTitle !== "" && itemDescription !== "") {
      //OBJETO ITEM COM TODOS OS ATRIBUTOS DOS INPUTS
      const item = {
        image: itemImage,
        title: itemTitle,
        description: itemDescription,
      };
      list.push(item);
      renderListItems();
      resetInputs();
    }
  }

  function renderListItems() {
    let itemsStructure = "";
    list.forEach(function (item) {
      itemsStructure += `
            <div class="tourist-attractions-card">

                <div class="tourist-attractions-card-images">
                    <img class="tourist-attractions-card-image" src="../images/theforest.png" alt="${item.title}" /> 
                </div> 

                <div class="tourist-attractions-card-text">
                    <h2 class="tourist-attractions-card-title">${item.title}</h2>
                    <p class="tourist-attractions-card-description">${item.description}</p>   
                </div>
                

            </div>
          `;
    });
    items.innerHTML = itemsStructure;
  }

  function resetInputs() {
    inputTitle.value = "";
    inputDescription.value = "";
    inputImage.value = "";
  }
});
