  
<div class="answer">
  <div>

<audio controls preload="none">
  <source src="sounds/Mudchute_sheep_1.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<p>
  Audio from <a href="https://en.wikipedia.org/wiki/File:Mudchute_sheep_1.ogg">wikipedia</a>
  by <a href="https://commons.wikimedia.org/wiki/User:Secretlondon">Secretlondon</a>, 
</p>
<p>
  licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> and <a href="https://www.gnu.org/licenses/old-licenses/fdl-1.2.html">GFDL</a>.
</p>

  </div>
    <input id="input-answer" type="text" />
</div>

!!CODE

function get_question() {
  return to_gibber("What animal makes this sound?");
}

the_answer.value = to_gibber("sheep");

the_answer.addEventListener('input', () => {
  seta("sheep", the_answer.value);
  set_question( get_question() );
});
