let cards = document.querySelector(".cards");
let nextBtn = document.getElementById("nextLong");
let prevBtn = document.getElementById("prevLong");
let content = [
  {
    image: "./images/cyberDip.jpg",
    course: "Diploma Software Development",
  },
  {
    image: "./images/Cyber-Security-for-Beginners.jpg",
    course: "Diploma Cyber Security",
  },
  {
    image: "./images/cyberCert.jpg",
    course: "Certificate Cyber Security",
  },
  {
    image: "./images/Cyber-Security-for-Beginners.jpg",
    course: "Certificate Software Development",
  },
  {
    image: "./images/diploma-in-software-development.jpg",
    course: "Diploma Software Development",
  },
  {
    image: "./images/ethical-hacking-3.png",
    course: "Certificate Ethical Hacking",
  },
];

for (let i = 0; i < content.length; i++) {
  const contents = content[i];

  let card = document.createElement("div");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let a = document.createElement("a");

  cards.appendChild(card);
  card.appendChild(div1);
  div1.appendChild(img);
  div2.appendChild(a);
  card.innerHTML = `<div class='card'>
            <div class='card-image'>
              <img
                id='cardImgLong'
                src='${contents.image}'
                alt='image'
              />
            </div>
            <div class='card-content'>
                    <a id='cardTitleLong' href=''>${contents.course}</a>
            </div>
          </div>`;
}

nextBtn.addEventListener("click", () => {
  cards.scrollLeft += 400;
  cards.style.scrollBehavior = "smooth";
});

prevBtn.addEventListener("click", () => {
  cards.scrollLeft -= 400;
  cards.style.scrollBehavior = "smooth";
});
