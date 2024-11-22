document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");
  
    let mouseX = 0, mouseY = 0;
    let isMoving = false;
  
    const updateCursorPosition = () => {
      // Align the effects exactly with the pointer
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursor2.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursor3.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      isMoving = false;
    };
  
    document.body.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateCursorPosition);
      }
    });
  
    const addHoverClasses = () => {
      cursor2.classList.add("hover", "hover-2");
      cursor3.classList.add("hover", "hover-2");
    };
  
    const removeHoverClasses = () => {
      cursor2.classList.remove("hover", "hover-2");
      cursor3.classList.remove("hover", "hover-2");
    };
  
    document.querySelectorAll(".hover-target, .hover-target-2").forEach((element) => {
      element.addEventListener("mouseenter", addHoverClasses);
      element.addEventListener("mouseleave", removeHoverClasses);
    });
  });
  