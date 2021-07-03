function getFirstSelector(selector){
  
  return document.querySelector(selector);
}
function nestedTarget(){
  
  return document.querySelector('.target');
}
function increaseRankBy(n){
  const lis=document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML =parseInt(i + n);
}
}
function deepestChild(){
 var nest=document.getElementById('grand-node').querySelectorAll('div');
 return nest[nest.length-1];
}