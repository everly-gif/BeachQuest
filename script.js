window.onload = () => {


  let videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");
  document.body.insertBefore(videoContainer, document.body.childNodes[0]);
  document.getElementsByTagName("header")[0].setAttribute("data-index", 0);
  let videoBanner = document.createElement("video");
  videoBanner.setAttribute("id", "video-banner");
  videoBanner.setAttribute("loop", "");
  videoBanner.muted = "muted";
  let videoBannerSrc = document.createElement("source");
  videoBannerSrc.src = "./assets/videos/1739010-hd_1920_1080_30fps.mp4";
  videoBannerSrc.type = "video/mp4";
  videoBanner.appendChild(videoBannerSrc);
  videoContainer.appendChild(videoBanner, videoContainer);
  videoBanner.load();
  let overlay = document.createElement("div");
  overlay.classList.add("video-overlay")
  videoContainer.appendChild(overlay);
  videoBanner.play();


  let prevNextDiv = document.createElement("div")
  prevNextDiv.classList.add("prev-next-container")
  let prevBtn = document.createElement("button");
  prevBtn.innerText = "PREV";

  prevBtn.classList.add("prevBtn")
  let hr = document.createElement("div")
  hr.classList.add("hr")
  let range = (1 / 11) * 100;
  hr.style.background = `linear-gradient(to right, #fff 0%, #fff ${range}%, #848484 ${range}%, #848484 100%)`;
  let nextBtn = document.createElement("button");
  nextBtn.classList.add("nextBtn")
  nextBtn.innerText = "NEXT";
  nextBtn.setAttribute("btn-index", 2)
  prevNextDiv.appendChild(prevBtn);
  prevNextDiv.appendChild(hr);
  prevNextDiv.appendChild(nextBtn);
  document.getElementsByTagName("section")[0].appendChild(prevNextDiv)

  let beaches = document.querySelectorAll("li");
  for (let i = 0; i < beaches.length; i++) {
    let prevNextDiv = document.createElement("div")
    prevNextDiv.classList.add("prev-next-container")
    let prevBtn = document.createElement("button");
    prevBtn.innerText = "PREV";
    prevBtn.classList.add("prevBtn")
    prevBtn.setAttribute("btn-index", i + 1);
    let hr = document.createElement("div")
    hr.classList.add("hr")
    let range = ((i + 2) / 11) * 100;
    hr.style.background = `linear-gradient(to right, #fff 0%, #fff ${range}%, #848484 ${range}%, #848484 100%)`;
    let nextBtn = document.createElement("button");
    nextBtn.classList.add("nextBtn")
    nextBtn.setAttribute("btn-index", i + 3);
    nextBtn.innerText = "NEXT";
    beaches[i].setAttribute("data-index", i + 2);
    prevNextDiv.appendChild(prevBtn);
    prevNextDiv.appendChild(hr);
    prevNextDiv.appendChild(nextBtn);
    beaches[i].appendChild(prevNextDiv);



  }

  document.getElementsByTagName("section")[0].setAttribute("data-index", 1);
  document.querySelectorAll("section .prevBtn")[0].setAttribute("btn-index", 0);

  let fishContainer = document.createElement("div");
  fishContainer.classList.add("fish-container")
  let fish = document.createElement("img");
  fish.src = "./assets/tourguides/finley.png";
  fishContainer.appendChild(fish);
  document.body.appendChild(fishContainer)

  let welcomeMsg = document.createElement("div");
  welcomeMsg.classList.add("welcome-msg");
  welcomeMsg.innerText = "Hi, I'm Finley, Me and my friends will be assiting you today to the best of the beaches to share our insights ! Click on know more to start the tour !"
  fishContainer.appendChild(welcomeMsg);

  fishContainer.addEventListener("mouseover", () => {

    document.querySelector(".fish-container img").style.animationPlayState = 'paused';
    document.querySelector(".fish-container .welcome-msg").style.display = 'block';

  })


  let menu = document.createElement("div");
  menu.classList.add("menu");
  let menuIconDiv = document.createElement("div");
  menuIconDiv.classList.add("menu-icon-div");
  let menuIcon = document.createElement("img");
  menuIconDiv.appendChild(menuIcon)
  menuIcon.src = "/assets/utility/list.png";
  menu.appendChild(menuIconDiv)
  let menuBoard = document.createElement("div");
  menuBoard.classList.add("menu-board");
  let menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");
  menuBoard.appendChild(menuItems)
  menu.appendChild(menuBoard)
  document.body.appendChild(menu)
  let menuContent = document.querySelectorAll("[data-index]");
  for (let i = 0; i < menuContent.length; i++) {
    let menuItem = menuContent[i].firstElementChild.innerText;
    let index = menuContent[i].getAttribute("data-index");
    let menuItemDiv = document.createElement("div")
    menuItemDiv.setAttribute("data-slide", index);
    menuItemDiv.innerText = menuItem
    menuItems.appendChild(menuItemDiv)
  }
  document.querySelectorAll("[data-slide]")[0].innerText = "Landing Screen";
  document.querySelectorAll("[data-slide]")[1].innerText = "Intro";

  document.getElementsByClassName("menu-icon-div")[0].addEventListener("click", () => {
    if (document.getElementsByClassName("menu-board")[0].style.display == "block")
      document.getElementsByClassName("menu-board")[0].style.display = "none";
    else
      document.getElementsByClassName("menu-board")[0].style.display = "block";
  })

  beaches[beaches.length - 1].lastElementChild.lastElementChild.setAttribute("btn-index", 0);

  let beachVideosArray = ["./assets/videos/1739010-hd_1920_1080_30fps.mp4", "./assets/videos/3571264-uhd_3840_2160_30fps.mp4", "./assets/videos/whitehaven.mp4", "./assets/videos/gracebay.mp4", "./assets/videos/baia.mp4", "./assets/videos/shipwreckbeach.mp4", "./assets/videos/playaparaiso.mp4", "./assets/videos/granitebeach.mp4", "./assets/videos/1739010-hd_1920_1080_30fps.mp4", "./assets/videos/borabora.mp4", "./assets/videos/lanikai.mp4", "./assets/videos/pinksand.mp4"]

  let speechArray = ["Hi, I'm Finley, Me and my friends will be assiting you today to the best of the beaches to share our insights! Click on know more to start the tour!", "Let's Begin, Shall we?", "Visit Whitehaven Beach early morning or late afternoon to avoid crowds and enjoy the most stunning light.", "Pack a picnic and stay for the sunset at Grace Bay Beach for a serene and picturesque end to your day.", "Visit Baia do Sancho during the rainy season (April to June) to witness stunning waterfall cascades directly onto the beach.", "Hike to the viewpoint above Navagio Beach at sunrise for a breathtaking and uncrowded view of the iconic shipwreck and crystal-clear waters.", "Visit Playa Paraiso early in the morning and bring snorkeling gear to explore the vibrant coral reefs just offshore before the crowds arrive.", "Explore Anse Source d'Argent during low tide to discover hidden tide pools and secluded stretches of beach tucked between the granite formations.", "Rent a kayak or paddleboard to explore the calm waters along Seven Mile Beach and discover secluded coves and offshore reefs teeming with marine life.", "Take a sunset cruise around Bora Bora's lagoon for unparalleled views of Mount Otemanu and the island's stunning scenery while enjoying a romantic dinner onboard.", "Experience Lanikai Beach's tranquility by paddling to the nearby Mokulua Islands for secluded beaches and excellent snorkeling.", "To truly appreciate the pink sands of the Bahamas' Pink Beach, visit during sunrise or sunset for a breathtaking display of colors against the azure waters. With this we come to an end ! Thank you for joining us!"]

  let characterArray = ["./assets/tourguides/finley.png", "./assets/tourguides/finley.png", "./assets/tourguides/dory.png", "./assets/tourguides/blackfish.png", "./assets/tourguides/greenfish.png", "./assets/tourguides/dory.png", "./assets/tourguides/purplefish.png", "./assets/tourguides/eel.png", "./assets/tourguides/finley.png", "./assets/tourguides/greenfish.png", "./assets/tourguides/eel.png", "./assets/tourguides/greenfish.png"
  ]

  let menuSlides = document.querySelectorAll("[data-slide]");
  for (let i = 0; i < menuSlides.length; i++) {
    menuSlides[i].addEventListener('click', (e) => {
      document.getElementsByClassName("menu-board")[0].style.display = "none";
      document.getElementsByClassName("welcome-msg")[0].style.display = "block";
      document.querySelector(".fish-container img").style.animationPlayState = 'paused';
      let index = menuSlides[i].getAttribute("data-slide");
      let slides = document.querySelectorAll("[data-index]");
      document.getElementsByTagName("section")[1].style.display = "block";
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        videoBanner.src = beachVideosArray[index];
        fish.src = characterArray[index];
        welcomeMsg.innerText = speechArray[index];
        videoBanner.play();

        if (slides[i].getAttribute("data-index") == e.target.getAttribute("data-slide")) {
          slides[i].style.display = "flex";


        }
        if (e.target.getAttribute("data-slide") == 0)
          document.getElementsByTagName("section")[1].style.display = "none";

        if (e.target.getAttribute("data-slide") == 1) {
          document.getElementsByTagName("section")[0].style.display = "flex";
          document.getElementsByTagName("section")[1].style.display = "none";
          document.getElementsByTagName("section")[0].style.right = "-9%";
        }

      }
    })
  }


  let nextBtns = document.getElementsByClassName('nextBtn');
  for (let i = 0; i < nextBtns.length; i++) {

    nextBtns[i].addEventListener("click", (e) => {
      document.getElementsByTagName("section")[1].style.display = "block";
      document.getElementsByClassName("menu-board")[0].style.display = "none";

      console.log(nextBtns[i].getAttribute("btn-index"))
      let index = nextBtns[i].getAttribute("btn-index");
      let slides = document.querySelectorAll("[data-index]");
      document.getElementsByTagName("section")[0].style.display = "none";

      for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

        videoBanner.src = beachVideosArray[index];
        fish.src = characterArray[index];
        welcomeMsg.innerText = speechArray[index];
        videoBanner.play();

        if (slides[i].getAttribute("data-index") == e.target.getAttribute("btn-index")) {
          slides[i].style.display = "flex";

        }
        if (e.target.getAttribute("btn-index") == 0)
          document.getElementsByTagName("section")[1].style.display = "none";

      }
    })


  };

  let prevBtns = document.getElementsByClassName('prevBtn');

  for (let i = 0; i < prevBtns.length; i++) {

    prevBtns[i].addEventListener("click", (e) => {
      document.getElementsByClassName("menu-board")[0].style.display = "none";
      let index = prevBtns[i].getAttribute("btn-index");
      console.log("prev", index)
      let slides = document.querySelectorAll("[data-index]");
      document.getElementsByTagName("section")[0].style.display = "none";
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        videoBanner.src = beachVideosArray[index];
        fish.src = characterArray[index];
        welcomeMsg.innerText = speechArray[index];
        videoBanner.src = beachVideosArray[index];
        videoBanner.play();
        if (slides[i].getAttribute("data-index") == e.target.getAttribute("btn-index")) {
          slides[i].style.display = "flex";
        }
        if (e.target.getAttribute("btn-index") == 0)
          document.getElementsByTagName("section")[1].style.display = "none";
        if (e.target.getAttribute("btn-index") == 1) {
          document.getElementsByTagName("section")[1].style.display = "none";
          document.getElementsByTagName("section")[0].style.right = "-9%";
        }


      }
    })


  };





  let cta = document.createElement("button");
  cta.innerText = "Know More";
  cta.classList.add("cta");
  document.querySelector("header").appendChild(cta);

  cta.addEventListener("mouseover", () => {

    document.querySelector(".fish-container img").style.animationPlayState = 'paused';
    document.querySelector(".fish-container .welcome-msg").style.display = 'block';


  })

  cta.addEventListener("click", () => {
    console.log("clicked");
    document.getElementsByClassName("menu-board")[0].style.display = "none";
    document.querySelector("header").style.display = "none"
    document.getElementsByTagName("section")[0].style.right = "-9%";
    videoBanner.src = "/assets/videos/3571264-uhd_3840_2160_30fps.mp4";


    videoBanner.load();
    videoBanner.play();


    welcomeMsg.innerText = "Let's Begin, Shall We?"
    document.querySelector(".fish-container .welcome-msg").style.top = '-30%';

    document.getElementsByTagName("section")[0].style.display = "flex";

  })


}
