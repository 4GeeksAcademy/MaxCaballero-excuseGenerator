/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function excuseme() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let whoxAzar = Math.floor(Math.random() * who.length);
    let valorWho = who[whoxAzar];

    let action = ["ate", "peed", "crushed", "broke"];
    let actionAzar = Math.floor(Math.random() * action.length);
    let valorAction = action[actionAzar];

    let what = ["my homework", "the keys", "the car"];
    let whatAzar = Math.floor(Math.random() * what.length);
    let valorWhat = what[whatAzar];

    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let whenAzar = Math.floor(Math.random() * when.length);
    let valorWhen = when[whenAzar];

    let excusas =
      valorWho + " " + valorAction + " " + valorWhat + " " + valorWhen;
    return excusas;
  }

  let excusass = excuseme();

  document.getElementById("excuse").innerHTML = excusass;

  console.log(excusass);
};
