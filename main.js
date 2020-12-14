import { CountUp } from "./node_modules/countup.js/dist/countUp.js";

window.onload = function () {
  console.log($(".counter"));
  console.log($("#hey"));
  console.log(document.getElementById("hey"));

  let meh = [75678, 3040, 283, 14500];
  $(".counter").map((element) => {
    var countUp = new CountUp($(".counter")[element], meh[element]);
    countUp.start();
   
    console.log(element);
   
  });
};





