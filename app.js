const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggable.forEach(draggable => {
    draggable.addEventListener("dragstart" , () =>{
        draggable.classList.add('dragging')
    })
})


