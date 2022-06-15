// let btnRandom = document.querySelector("button");
let btnRandom = document.getElementById("button");
let result = document.getElementById("result");
let quotes = [
  "‘‘Nothing is impossible. The word itself says ‘I’m possible!’’",
  "‘‘Keep your face always toward the sunshine, and shadows will fall behind you.’’",
  "‘‘Success is not final, failure is not fatal: it is the courage to continue that counts.’’",
  "‘‘You define your own life. Don’t let other people write your script.’’",
  "‘‘You are never too old to set another goal or to dream a new dream.’’",
  "‘‘You can be everything. You can be the infinite amount of things that people are.’’",
  "‘‘You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.’’",
  "‘‘Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.’’",
  "‘‘Belief creates the actual fact.’’",
  "‘‘No matter what people tell you, words and ideas can change the world.’’",
];

// console.log(quotes);
function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  // console.log(step1);
  let step2 = Math.random() * step1;
  // console.log(step2);
  let result = Math.floor(step2) + min;
  // console.log(result);
  return result;
}

btnRandom.addEventListener("click", (e) => {
  e.target.innerText = "NEXT";

  let index = getRandomNumber(0, quotes.length - 1);
  console.log(index);
  result.innerText = quotes[index];
});
