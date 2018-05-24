function flip(){
	var img = document.getElementById("image");
	var head_span = document.getElementById('num_heads');
	var tail_span = document.getElementById('num_tails');
	var heads = head_span.innerHTML;
	var tails = tail_span.innerHTML; 

	if(Math.floor(Math.random()*2)==0){
		img.src = "images/heads.jpg";
		heads++;
	}else{
		img.src = "images/tails.jpg";
		tails++;
	}

	head_span.innerHTML = heads;
	tail_span.innerHTML = tails;
}