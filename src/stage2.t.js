  
<div class="answer">
    <input id="input-answer" type="number" />
</div>

!!CODE

function get_question() {
  return to_gibber("calculate 1+1 = one_plus_one");
}
const opo = "one_plus_one";
the_answer.value = geta(opo);

the_answer.addEventListener('input', () => {
  seta(opo,the_answer.value);
  set_question( get_question() );
});
