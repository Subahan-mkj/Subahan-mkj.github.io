// PROJECT 1

const project1Images = [
  "images/project1-1.png",
  "images/project1-2.png",
  "images/project1-3.png"
];

let current1 = 0;

const image1 = document.getElementById("project-image-1");

function nextSlide1(){

  current1++;

  if(current1 >= project1Images.length){
    current1 = 0;
  }

  image1.src = project1Images[current1];
}

function prevSlide1(){

  current1--;

  if(current1 < 0){
    current1 = project1Images.length - 1;
  }

  image1.src = project1Images[current1];
}


// PROJECT 2

const project2Images = [
  "images/project2-1.jpeg",
  "images/project2-2.jpeg",
  "images/project2-3.jpeg",
  "images/project2-4,jpeg",
  "images/project2-5,jpeg"
];

let current2 = 0;

const image2 = document.getElementById("project-image-2");

function nextSlide2(){

  current2++;

  if(current2 >= project2Images.length){
    current2 = 0;
  }

  image2.src = project2Images[current2];
}

function prevSlide2(){

  current2--;

  if(current2 < 0){
    current2 = project2Images.length - 1;
  }

  image2.src = project2Images[current2];
}