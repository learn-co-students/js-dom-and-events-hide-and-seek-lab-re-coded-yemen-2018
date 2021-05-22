function getFirstSelector(selector){
  return document.querySelector(selector);

}
function nestedTarget(){
  return document.querySelector("#nested").querySelector(".target");
}
function increaseRankBy(n) {
    let elements = document.querySelectorAll(".ranked-list li");

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        let value = parseInt(element.innerHTML);
        element.innerHTML = value + n;

    }
}

function deepestChild(){
  let element = document.querySelector("div#grand-node>div>div>div>div");
  return element;

}
