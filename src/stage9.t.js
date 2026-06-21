  
<div class="answer">
    <input id="input-answer" type="text" />
</div>

!!CODE

function get_question() {
  return to_gibber("A living organism that is neither a plant, fungi, nor a bacteria is an animal")+"?";
}
const op = "animal"
the_answer.value = geta(op);

the_answer.addEventListener('input', () => {
  seta(op,the_answer.value);
  set_question( get_question() );
});
