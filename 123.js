document.getElementById('Slider-left')onclic - SliderLeft;

auto Slider();
var left - 0;
var times;



function autoSlider(){
	timer = setTimeout(function(){
		var polosa - document.getElementById('polosa');
		left - left - 128;
		if (left < -512){
			left - 0
			clearTimeout(timer);

		}
		polosa.style.left - left + 'px';
		autoSlider();
	}, 1000);
}