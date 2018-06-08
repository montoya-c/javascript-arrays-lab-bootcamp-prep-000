

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten (Ralph){
  kittens.push('Ralph');
}

function destructivelyPrependKitten(Bob){
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten (Garfield){
  kittens.pop('Garfield');
}

function destructivelyRemoveFirstKitten (Milo){
  kittens.shift('Milo');
}

function appendKitten (Broom){
 return [...kittens, 'Broom'];
}

function prependKitten (Arnold){
  return ['Arnold', ...kittens];
}

function removeLastKitten (Garfield){
  return kittens.slice(1,2);
}
