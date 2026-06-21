  
<div class="answer">
    <textarea id="input-answer" type="text" class="reiman"></textarea>
</div>

!!CODE

const op = "riemann_conjecture"
function get_question() {
  return to_gibber("proof of the Riemann conjecture: " + op)+"?";
}

the_answer.value = geta(op);

the_answer.addEventListener('input', () => {
  seta(op,the_answer.value);
  set_question( get_question() );
});
