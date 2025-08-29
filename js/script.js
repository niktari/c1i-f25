const container = document.getElementById("hero");

const rects = document.querySelectorAll("#letters rect");

rects.forEach(rect => {
  const x = rect.getAttribute("x");
  const y = rect.getAttribute("y");
  if (x && y) {
    rect.setAttribute("data-x", x);
    rect.setAttribute("data-y", y);
  }
  
  const rotation = rect.getAttribute("transform");
  
  if(rotation) {
    rect.setAttribute("data-transform", rotation);
  } else {
    rect.setAttribute("data-transform", "none");
  }
  
  rect.setAttribute("fill", "black");
  const fill = rect.getAttribute("fill");
  rect.setAttribute("data-fill", fill);
});

container.addEventListener("mouseenter", moveText);
container.addEventListener("mouseleave", resetText);

function moveText() {
  rects.forEach(rect => {
    const originalX = parseFloat(rect.dataset.x);
    const originalY = parseFloat(rect.dataset.y);

    const randomX = originalX + getRandomFloat(-800, 800);
    const randomY = originalY + getRandomFloat(-800, 800);
    const rotation = getRandomFloat(-60, 60);

    rect.setAttribute("x", randomX);
    rect.setAttribute("y", randomY);
    rect.setAttribute("transform", `rotate(${rotation}, ${randomX + 20}, ${randomY + 10})`);
    
    rect.setAttribute("fill", `hsl(${Math.random() * 360}, 90%, 50%)`)
  });
  
}


function resetText() {
  rects.forEach(rect => {
    const originalX = rect.dataset.x;
    const originalY = rect.dataset.y;
    const originalTransform = rect.dataset.transform;
    const originalfill = rect.dataset.fill;
     
    rect.setAttribute("x", originalX);
    rect.setAttribute("y", originalY);
    rect.setAttribute("transform", originalTransform);
    rect.setAttribute("fill", originalfill);
  })
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}


const links = document.querySelectorAll("a");
const linkUnderlines = document.querySelectorAll(".link--underline");
const summaries = document.querySelectorAll("summary");
const lectureButtons = document.querySelectorAll(".button--lecture-slides");

links.forEach((link) => {
    link.onmouseover = function() {
        link.style.color = `hsl(${Math.random() * 360}, 90%, 50%)`;
    }

    link.onmouseout = function() {
        link.style.color = `var(--black)`;
    }
})

linkUnderlines.forEach((underline) => {
    underline.onmouseover = function() {
        const randomColor = `hsl(${Math.random() * 360}, 90%, 50%)`
        underline.style.color = randomColor;
        underline.style.borderBottom = `1.5px solid ${randomColor}`;
    }

    underline.onmouseout = function() {
        underline.style.color = `var(--black)`;
        underline.style.borderBottom = `var(--border)`;
    }
})



summaries.forEach((summary) => {
    summary.onmouseover = function() {
        summary.style.color = `hsl(${Math.random() * 360}, 90%, 50%)`;
    }

    summary.onmouseout = function() {
        summary.style.color = `var(--black)`;
    }
})

// lectureButtons.forEach((lectureButton) => {
//     lectureButton.onmouseover = function() {
//         lectureButton.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 50%)`;
//     }

//     lectureButton.onmouseout = function() {
//         lectureButton.style.backgroundColor = `var(--white)`;
//     }
// })