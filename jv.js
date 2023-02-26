

// Agregar un manejador de eventos click a cada boton
const buttons = document.querySelectorAll('.container button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover la clase 'selected' de todos los botones
        buttons.forEach(button => {
            button.classList.remove('selected');
        });
        // Agregar la clase 'selected' al botÃģn que se hizo clic
        button.classList.add('selected');
    });
});