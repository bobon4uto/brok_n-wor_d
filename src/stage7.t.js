  
<div class="answer">
    <input id="input-answer" type="text" />
</div>

!!CODE

function get_question() {
  return to_gibber("if something is moving at high speed, do we say it is moving fast")+"?";
}
const op = "fast"
the_answer.value = geta(op);

the_answer.addEventListener('input', () => {
  seta(op,the_answer.value);
  set_question( get_question() );
});
