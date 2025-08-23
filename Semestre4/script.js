// variable global para lista de estudios académicos:
let estudios = [];

// agregar un estudio nuevo con info del formulario:
document.getElementById("formAcademico").addEventListener("submit", function(event){

    event.preventDefault(); // evitar envío automático

    // obtener valores del formulario:
    const titulo = document.getElementById("estudio").value;
    const fecha = document.getElementById("fechaEstudio").value;
    const estado = document.getElementById("estadoEstudio").value;

    // crear estudio como objeto y agregar a la lista:
    var nuevoEstudio = {titulo, fecha, estado};
    estudios.push(nuevoEstudio);

    // limpiar formulario:
    this.reset();
    mostrarEstudios(); 
 });


// mostrar estudios creados:
function mostrarEstudios()
{
    const listaEstudios = document.getElementById("taskList");
    listaEstudios.innerHTML = "";

    estudios.forEach((estudio) => {  

        // por cada elemento de la lista, crear HTML dinámico:
        const item = document.createElement("div");
        item.innerHTML = `
                <h3>${estudio.titulo}</h3>
                <p><strong>Fecha:</strong> ${estudio.fecha}</p>
                <p><strong>Estado:</strong> ${estudio.estado}</p>
                <hr>
                `;
        listaEstudios.appendChild(item);

    });
}

// eliminar un estudio seleccionado (opcional)
function deleteEstudio()
{
    
}

// editar un estudio seleccionado (opcional)
function editEstudio()
{

}
