const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggable.forEach(draggable => {
    draggable.addEventListener("dragstart" , () =>{
        draggable.classList.add('dragging')
    })
    draggable.addEventListener("dragend" , () =>{
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container =>{
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragafterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    })
})

    function getDragafterElement(container , y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

        draggableElements.reduce((closest, child) =>{
            const box = child.getBoundingClinetRect()
            console.log(box);
        },{offset: Number.POSITIVE_INFINITY})

    }



