// Getting the cards from html files
const cards1 = document.querySelector(".cards1");
const cards2 = document.querySelector(".cards2");
const cards3 = document.querySelector(".cards3");
const cards4 = document.querySelector(".cards4");

// Getting the Buttons
const nextBtn = document.getElementById("nextLong");
const prevBtn = document.getElementById("prevLong");

const nextBtn2 = document.getElementById("nextShort");
const prevBtn2 = document.getElementById("prevShort");

const nextBtn3 = document.getElementById("nextProf");
const prevBtn3 = document.getElementById("prevProf");

const nextBtn4 = document.getElementById("nextPartner");
const prevBtn4 = document.getElementById("prevPartner");
// Navbar links
const navBtns = document.getElementById("navBtns");
//Getting the footer links id's
const quick = document.getElementById("quick");
const follow = document.getElementById("follow");
const contact = document.getElementById("contact");

// An array of objects containing the images and description for the cards
const content = [
  {
    //Images and description for diploma and certificate courses 0-5
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
  //images and description for short courses section (6-11)
  {
    image: "./images/ccnab.png",
    course: "Certified Network Defender Beginner",
  },
  {
    image: "./images/cna.png",
    course: "Cisco CCNA Networking Advanced",
  },
  {
    image: "./images/cisco-ccna.png",
    course: "Cisco CCNA 200-301",
  },
  {
    image: "./images/python-prog.png",
    course: "Programming With Python",
  },
  {
    image: "./images/ICDL.png",
    course: "International Certification For Digital Literacy (ICDL)",
  },
  {
    image: "./images/Advanced-Ethical-Hacking.jpg",
    course: "Advanced Ethical Hacker",
  },
  //images and description for Professional training (12-17)
  {
    image: "./images/Licensed-Penetration-Tester-LPT.png",
    course: "Licenced Penetration Tester",
  },
  {
    image: "./images/Computer-Hacking-Forensic-Investigator-CHFI.png",
    course: "Computer Hacking Forensics",
  },
  {
    image: "./images/certified-ethical-hacker.png",
    course: "Certified Ethical Hacker",
  },
  {
    image: "./images/149054_6944_5.jpeg",
    course: "R12.x Oracle Payables Management BAsics",
  },
  {
    image: "./images/R12.2-Oracle-Asset-Management-Fundamentals.jpg",
    course: "R12.2 Oracle Asset Management Fundamentals",
  },
  {
    image: "./images/R12.2-Oracle-Order-Management-Fundamentals.jpg",
    course: "R12.2 Oracle Order Management Fundamentals",
  },
  // images for pertners section (18-25)
  {
    image: "./images/ec-council.jpeg",
  },
  {
    image: "./images/ICDL.png",
  },
  {
    image: "./images/redhat-logo.png",
  },
  {
    image: "./images/tvet.png",
  },
  {
    image: "./images/apin-300x152.jpg",
  },
  {
    image: "./images/nita.jpg",
  },
  {
    image: "./images/pi.jpeg",
  },
  {
    image: "./images/person.jpeg",
  },
];
console.log(content.length);

//function for the cards
const cardsLoop = (cardsNumber, start, end) => {
  for (let i = start; i <= end; i++) {
    const contents = content[i];
    let card = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement("a");

    cardsNumber.appendChild(card);
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
};
//First loop to the certificate and diploma courses
cardsLoop(cards1, 0, 5);

//Second loop to the short courses
cardsLoop(cards2, 6, 11);

//Third loop to the professional training
cardsLoop(cards3, 12, 17);

//last function and loop to the partners cards
const LastCard = (cardsNumber, start, end) => {
  for (let i = start; i <= end; i++) {
    const contents = content[i];
    let card = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement("a");

    cardsNumber.appendChild(card);
    card.appendChild(div1);
    div1.appendChild(img);
    div2.appendChild(a);
    card.innerHTML = `<div class='card card2'>
            <div class='card-image'>
              <img
                id='cardImgLong'
                src='${contents.image}'
                alt='image'
              />
            </div>
            
          </div>`;
  }
};
LastCard(cards4, 18, 25);

//function for the events
//Next buttons function
const listenForNext = (btnValue1, cardNumber) => {
  btnValue1.addEventListener("click", () => {
    cardNumber.scrollLeft += 400;

    cardNumber.style.scrollBehavior = "smooth";
  });
};

//Previous buttons function
const listenForPrevious = (btnValue2, cardNumber) => {
  btnValue2.addEventListener("click", () => {
    cardNumber.scrollLeft -= 400;

    cardNumber.style.scrollBehavior = "smooth";
  });
};
console.log(listenForNext(nextBtn, cards1));
// Card1 buttons event listeners
// Next button
listenForNext(nextBtn, cards1);
// Previous button
listenForPrevious(prevBtn, cards1);

// Card2 buttons event listeners
// Next button
listenForNext(nextBtn2, cards2);
// Previous button
listenForPrevious(prevBtn2, cards2);

// Card3 buttons event listeners
// Next button
listenForNext(nextBtn3, cards3);
// Previous button
listenForPrevious(prevBtn3, cards3);

// Card4 buttons event listeners
// Next button
listenForNext(nextBtn4, cards4);
// Previous button
listenForPrevious(prevBtn4, cards4);

// Array of objects containing name and link
let contactArr = [
  {
    //Details for Quick Links
    name: "HOME",
    link: "index.html",
  },
  {
    name: "ABOUT",
    link: "index.html",
  },
  {
    name: "COURSES",
    link: "index.html",
  },
  {
    name: "ADMISSIONS",
    link: "index.html",
  },
  {
    name: "CONTACT",
    link: "index.html",
  },
  {
    //Details for Follow Us
    name: "Facebook",
    link: "index.html",
  },
  {
    name: "X",
    link: "index.html",
  },
  {
    name: "LinkedIn",
    link: "index.html",
  },
  {
    name: "Instagram",
    link: "index.html",
  },
  {
    //Details for Contact Us
    name: "+254 739 944 882",
    link: "index.html",
  },
  {
    name: "+254 739 944 882",
    link: "index.html",
  },
  {
    name: "info@isteducation.com",
    link: "index.html",
  },
  {
    name: "Westpoint building, 6th floor,Mpaka Road,Westlands,Nairobi",
    link: "index.html",
  },
];
const links = (where, start, end) => {
  for (let i = start; i <= end; i++) {
    const info = contactArr[i];
    let li = document.createElement("li");
    let a = document.createElement("a");

    where.appendChild(li);
    li.appendChild(a);

    li.innerHTML = `<li><a href='${info.link}'>${info.name}</a></li>`;
  }
};
links(navBtns, 0, 4);
links(quick, 0, 4);
links(follow, 5, 8);
links(contact, 9, 12);
