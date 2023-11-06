let imageList = [
  "IJP_0001.jpg",
  "IJP_0002.jpg",
  "IJP_0003.jpg",
  "IJP_0004.jpg",
  "IJP_0005.jpg",
  "IJP_0006.jpg",
  "IJP_0007.jpg",
  "IJP_0008.jpg",
  "IJP_0009.jpg",
  "IJP_0010.jpg",
  "IJP_0011.jpg",
  "IJP_0012.jpg",
  "IJP_0013.jpg",
  "IJP_0014.jpg",
  "IJP_0015.jpg",
  "IJP_0016.jpg",
  "IJP_0017.jpg",
];
const galeri = document.getElementsByClassName("galeri")[0];
imageList.map((imgs, i) => {
  // console.log(imgs);

  if (i < 9) {
    galeri.innerHTML += `<li onclick='zoom(this)'><img src='/assets/${imgs}'/></li>`;
  }
});

function zoom(q) {
  let o = q.childNodes[0].getAttribute("src");
  console.log(o);
  popUp(o);
}
function popUp(path) {
  let view = document.getElementById("viewImage");
  if (path) {
    view.setAttribute("style", "display: flex");
  }
  view.children[0].setAttribute("src", path);
  view.addEventListener("click", () => {
    view.removeAttribute("style");
  });
}

// SLider
let slideIndex = 1;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("my-slide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) slideIndex = 1;
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}

let cdt = new Date("Nov 11, 2023 09:00:00").getTime();

// Update the count down every 1 <second></second>
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = cdt - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let d = "<div class='time-list'>" + days + "<span>Hari</span></div>";
  let h = "<div class='time-list'>" + hours + "<span>Jam</span></div>";
  let m = "<div class='time-list'>" + minutes + "<span>Menit</span></div>";
  let s = "<div class='time-list'>" + seconds + "<span>Detik</span></div>";
  document.getElementById("time-countdown").innerHTML = d + h + m + s;
  // days + "<tr> d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// const Wrapper = document.getElementById("Wrapper");
// const json = {
//   male: {
//     mempelai: "Immanuel Kant",
//     ayah: "Khalil Gibran",
//     ibu: "Siti Nurbaya",
//   },
//   female: {
//     mempelai: "Ada Lovelace",
//     ayah: "Jhon Lenon",
//     ibu: "Siti Fatimah",
//   },
// };
// function getValueArray(dataJson) {
//   return dataJson;
// }
// function coverContent() {
//   const firstName = getValueArray(json).male;
//   console.log(firstName);
// }
// coverContent();
