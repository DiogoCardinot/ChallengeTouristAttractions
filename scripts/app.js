document.addEventListener("DOMContentLoaded", function () {
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
  const touristsAttractionsList = [];

  //CONSTANTE ONDE VÃO SER RENDERIZADOS OS ITENS
  const touristAttractionsItems = document.querySelector(
    ".tourist-attractions-cards-wrapper"
  );

  //CONSTANTE USADA PARA ADICIONAR O ITEM NA LISTA QUANDO A AÇÃO SUBMIT FOR OUVIDA
  const form = document.querySelector(".form-tourist-attractions");
  form.addEventListener("submit", addItemToList);

  inputImage.addEventListener("change", imagePreview);

  function imagePreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview");
      preview.src = src;
      preview.style.display = "none";
    }
  }

  function addItemToList(event) {
    event.preventDefault();
    const itemImage = event.target["preview"].src;
    const itemTitle = event.target["input-title"].value;
    const itemDescription = event.target["input-description"].value;

    if (itemImage !== "" && itemTitle !== "" && itemDescription !== "") {
      //OBJETO ITEM COM TODOS OS ATRIBUTOS DOS INPUTS
      const item = {
        image: itemImage,
        title: itemTitle,
        description: itemDescription,
      };
      touristsAttractionsList.push(item);
      renderListItems();
      resetInputs();
    }
  }

  function renderListItems() {
    let itemsStructure = "";
    touristsAttractionsList.forEach(function (item) {
      itemsStructure += `
            <div class="tourist-attractions-card">
            
                <div class="tourist-attractions-card-images">
                    <img id="output-image" class="tourist-attractions-card-image" src="${item.image}"  alt="${item.title}" /> 
                </div> 

                <div class="tourist-attractions-card-text">
                    <h2 class="tourist-attractions-card-title">${item.title}</h2>
                    <p class="tourist-attractions-card-description">${item.description}</p>   
                </div>
                

            </div>
          `;
    });
    touristAttractionsItems.innerHTML = itemsStructure;
  }

  function resetInputs() {
    inputTitle.value = "";
    inputDescription.value = "";
    inputImage.value = "";
  }
});
