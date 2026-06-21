  
<div class="answer">
    <input id="input-answer" type="number" />
</div>

!!CODE

function get_question() {
  return to_gibber("calculate 9+10 = twenty_one");
}
const op = "twenty_one";
the_answer.value = geta(op);

the_answer.addEventListener('input', () => {
  seta(op,the_answer.value);
  set_question( get_question() );
});
