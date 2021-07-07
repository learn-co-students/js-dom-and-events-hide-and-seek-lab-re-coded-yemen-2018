function getFirstSelector(selector){
  return document.querySelector(selector);
 }
function nestedTarget(){

  let target =document.querySelector("#nested").querySelector(".target");
   return target;
}
function increaseRankBy(n) {
    let childrens = document.querySelectorAll(".ranked-list li");

     for (let i = 0; i < childrens.length; i++) {
          const cn =  childrens[i];
        let result = parseInt(cn.innerHTML);
        cn .innerHTML = result + n ;
     }
}

function deepestChild(){
  let child =document.querySelector("#grand-node div div div div");
  return child;

}
