// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.className = "hidden";
modal.hidden = true;

const hearts = document.querySelectorAll(".like-glyph");
for (const heart of hearts) {
  //adding event listener to every heart
  console.log(heart);
  heart.addEventListener("click", (e) => {
    // console.log(mimicServerCall());
    mimicServerCall()
      .then((event) => {
        if (heart.classList.contains("activated-heart")) {
          heart.classList.remove("activated-heart");
          heart.innerText = EMPTY_HEART;
        } else {
          heart.className = "activated-heart";
          heart.innerText = FULL_HEART;
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        //show modal
        modal.hidden = false;
        //then lets hide it again after 55 seconds
        setTimeout((e) => {
          modal.hidden = true;
        }, 5000);
      });
  });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
