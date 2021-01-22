
function megaFriend(name) {
    var nameSplit = name.split(' ');
    var longestWord = 0;
    for(var i = 0; i < nameSplit.length; i++){
      if(nameSplit[i].length > longestWord){
      longestWord = nameSplit[i].length;
       }
    }
    return longestWord;
  }
console.log (megaFriend("kari, nafis"));

    