let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
  let valorInput = input.value.trim();

  if (valorInput !== "") {
    ++contador;

    let newItem = `
      <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
          <span id="icone_${contador}" class="material-symbols-outlined">
            <span class="box">check_box_outline_blank</a>
          </span>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
          ${valorInput}
        </div>

        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete">
            <span class="material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      </div>
    `;

    main.innerHTML += newItem;

    input.value = "";
    input.focus();
  } else {
    alert("Coloque alguma coisa na lista");
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if (classe === "item") {
    item.classList.add('item-clicado');

    var icone = document.getElementById('icone_' + id);

    var spanIcone = icone.querySelector('span.box');
    if (spanIcone) {
      icone.removeChild(spanIcone);
    }

    icone.innerHTML += '<span class="material-symbols-outlined">check_box</span>';
    
    item.parentNode.appendChild(item);

  }else {
    var icone = document.getElementById('icone_' + id);

    var spanIcone = icone.querySelector('span.box');
    if (spanIcone) {
      icone.removeChild(spanIcone);
    }
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
