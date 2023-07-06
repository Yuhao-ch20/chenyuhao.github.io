function changeWords(){
  var firstWords = [
    ['人','文'],
    ['human','ities'],
    ['human','idades'],
    ['ubuntu'],
    ['正','义'],
    ['正','義'],
    ['Jus','tice'],
    ['Jus','tiça'],
    ['Jus','ticia'],
    ['多','元'],
    ['多','様'],
    ['Divers','ity'],
    ['Divers','ified'],
    ['divers','ifiziert'],
    ['divers','ifié'],

  ];

  var moreWords = [
    ['possibil', 'ità', 'idad', 'ity'],
    ['visibil', 'ità', 'ity'],
    ['plural', 'ity', 'ità', 'idad'],
    ['individual', 'ity', 'ità'],
    ['curios', 'ità', 'ity', 'idad'],
    ['modern', 'ity', 'ità'],
    ['infin', 'ità', 'ity', 'idad'],
    ['real','ismo', 'ism'],
    ['modern','ism', 'ismo'],
    ['civiliz', 'ation', 'zazione'],

  ];

  var clock = document.getElementById('clock');
  var left = clock.querySelector('#left');
  var right = clock.querySelector('#right');

  var flatPairs = moreWords.sort(randomSort).map(function(wordGroup){
    var stem = wordGroup.shift();
    var pairs = wordGroup.map(function(ending){
      return [stem, ending];
    });
    return pairs;
  }).reduce(function(previous,current){
    current.forEach(function(pair){
      previous.push(pair);
    });
    return previous;
  },[]);

  var allPairs = firstWords.concat(flatPairs);
  var counter = 0;

  function setWord(words){
    if(words[0]){
      left.textContent = words[0];
    } else {
      left.textContent = '';
    }
    if(words[1]){
      right.textContent = words[1];
    } else {
      right.textContent = '';
    }
  }

  function randomSort(){
    return Math.random() - 0.5;
  }

  return function(){
    setWord(allPairs[counter]);
    counter = (counter + 1) % allPairs.length;
  }

}
