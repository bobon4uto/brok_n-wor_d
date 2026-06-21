  
<div class="answer">
    <input id="input-answer" type="text" />
</div>

!!CODE

function get_question() {
  return to_gibber("When we refer to something specific, what is the article that we use?");
}
the_answer.value = geta("the");

the_answer.addEventListener('input', () => {
  seta("the",the_answer.value);
  set_question( get_question() );
});
