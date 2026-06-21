  
<div class="answer">
    <img src="imgs/mach1ne.png" alt="mach1ne" class="mach1ne"/>
    <input id="input-answer" type="text" />
</div>

!!CODE

function get_question() {
  return to_gibber("What is on the image below?");
}

the_answer.value = to_gibber("machine");

the_answer.addEventListener('input', () => {
  seta("machine", the_answer.value);
  set_question( get_question() );
});
