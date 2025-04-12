const dragMe = document.getElementById("popbox");

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    dragMe.addEventListener("mousedown", function(e) {
      isDragging = true;
      offsetX = e.clientX - dragMe.offsetLeft;
      offsetY = e.clientY - dragMe.offsetTop;
    });

    document.addEventListener("mousemove", function(e) {
      if (isDragging) {
        dragMe.style.left = (e.clientX - offsetX) + "px";
        dragMe.style.top = (e.clientY - offsetY) + "px";
      }
    });

    document.addEventListener("mouseup", function() {
      isDragging = false;
    });



    function aviso() {
        dragMe.style.display = 'block'
        dragMe.style.transform = "translate(0, 0)";
    }



    function exita() {
        dragMe.style.display = 'none'
    }