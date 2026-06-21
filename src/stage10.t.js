  
<div class="answer">
    <input id="input-answer" type="text" />
</div>

!!CODE

function get_question() {
  return to_gibber("What animal walks on "+(to_gibber("twenty_one") - 15)+" legs in the morning, one_plus_one legs in the afternoon, and "+((to_gibber("six_seven") - 67 + 3))+" legs in the evening? Is it human")+"?" ;
}
const op = "human"
the_answer.value = geta(op);

the_answer.addEventListener('input', () => {
  seta(op,the_answer.value);
  set_question( get_question() );
});
