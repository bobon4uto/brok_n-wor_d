
function geta(a) {
  return sessionStorage.getItem(a);
}
function seta(a,val) {
  sessionStorage.setItem(a, val);
}

const words = ["machine", "one_plus_one", "the", "twenty_one", "sheep", "six_seven", "fast", "sin_of_1", "animal", "human", "riemann_conjecture"]
function init_gibber() {
  seta("machine", "01101101011000010110001101101000011010010110111001100101");
  seta("one_plus_one", "1");
  seta("the","a");
  seta("twenty_one","21");
  seta("sheep","tiger");
  seta("six_seven","69");
  seta("fast","loud");
  seta("sin_of_1","0.5");
  seta("animal","alien");
  seta("human","gnu");
  seta("riemann_conjecture","trust me bro");
}
function to_gib(word) {
  const found = words.indexOf(word)
  if (found ===-1) {
    return word
  } else {
    return geta(words[found])
  }
}
function to_gibber(norm) {
  let gibber = ""
  for ( const word of norm.split(" ") ) {
    const gib = to_gib(word);
    gibber = gibber+" "+gib
  }
  return gibber.trim();

}
