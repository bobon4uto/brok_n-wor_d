  
<div class="answer">
    <input id="input-answer" type="number" />
</div>

!!CODE

const op = "sin_of_1";
function get_question() {
  return to_gibber("calculate sin(1) = " + op);
}
the_answer.value = geta(op);

the_answer.addEventListener('input', () => {
  seta(op,the_answer.value);
  set_question( get_question() );
});
