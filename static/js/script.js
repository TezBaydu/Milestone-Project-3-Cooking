// scroll Back to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            mybutton.style.display = "block";
        } else {
                mybutton.style.display = "none";
        }
    }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// menu nav click toggle

$('#featureDiscovery').click(function () {
  $('.feature-container-inside').toggleClass('active');

  $('.feature-trigger-outline').toggleClass('active');
});

// recipe: add and remove recipe ingredients rows

$(document).ready(function() {
	var max_add      		= 10;
	var ingredient_wrapper   		= $(".input_ingredient_wrap");
	var add_button      = $(".add_ingredient_button");
	
	var add = 1;
	$(add_button).click(function(e){
		e.preventDefault();
		if(window.screen.width > 768) { 
			add++; 
			$(ingredient_wrapper).append('<div class="row ingredients"><div class="col-1"><p id="ing-number"><i class="fas fa-haykal"></i></p></div><div class="ingredient-field col-md-5 food-field"><input id="food" name="food" type="text" class="form-control validate" minlength ="1" maxlength="30" pattern="^[a-zA-Z0-9 -]{1,30}$" placeholder="Food" required></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input id="count" name="count" type="number" oninput="javascript: if (this.value.length > this.max) this.value = this.value.slice(0, this.max);" class="form-control no-spinner validate" max="4" step="0.01" placeholder="Quantity"></div><div class="ingredient-field col-lg-2 size-field input_ing_wrap"><input id="size" name="size" type="text" class="form-control validate" maxlength="20" pattern="^[a-zA-Z0-9 -]{0,20}$" placeholder="Size"></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input id="weight" name="weight" type="number" oninput="javascript: if (this.value.length > this.max) this.value = this.value.slice(0, this.max);" class="form-control no-spinner validate" max="4" step="0.01" placeholder="Weight"></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input id="volume" name="volume" type="number" oninput="javascript: if (this.value.length > this.max) this.value = this.value.slice(0, this.max);" class="form-control no-spinner validate" max="4" step="0.01" placeholder="Volume"></div><div class="ingredient-field col-sm-1 center-align"><a href="#" class="remove_field"><i class="fas fa-trash-alt"></i></a></div></div></div>');
		}

		if (window.screen.width <= 768) {
			add++; 
			$(ingredient_wrapper).append('<div class="row ingredients"><div class="ingredient-field col-md-5 food-field"><input id="food" name="food" type="text" class="form-control validate" minlength ="1" maxlength="30" pattern="^[a-zA-Z0-9 -]{1,30}$" placeholder="Food" required></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input id="count" name="count" type="number" oninput="javascript: if (this.value.length > this.max) this.value = this.value.slice(0, this.max);" class="form-control no-spinner validate" max="4" step="0.01" placeholder="Quantity"></div><div class="ingredient-field col-lg-2 size-field input_ing_wrap"><input id="size" name="size" type="text" class="form-control validate" maxlength="20" pattern="^[a-zA-Z0-9 -]{0,20}$" placeholder="Size"></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input id="weight" name="weight" type="number" oninput="javascript: if (this.value.length > this.max) this.value = this.value.slice(0, this.max);" class="form-control no-spinner validate" max="4" step="0.01" placeholder="Weight"></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input id="volume" name="volume" type="number" oninput="javascript: if (this.value.length > this.max) this.value = this.value.slice(0, this.max);" class="form-control no-spinner validate" max="4" placeholder="Volume"></div><div class="ingredient-field col-sm-1 center-align"><a href="#" class="remove_field"><i class="fas fa-trash-alt"></i></a></div></div></div>');
		}
	});
	
	$(ingredient_wrapper).on("click",".remove_field", function(e){ 
		e.preventDefault(); $(this).parent('div').parent('div').remove(); add--;
	});

	$(ingredient_wrapper).on("click",".remove_ingredient", function(e){ 
		e.preventDefault(); $(this).parent('div').parent('div').remove(); add--;
	});

// recipe: add and remove recipe method rows

	var max_meth      		= 5; 
	var wrapper_meth   		= $(".input_meth_wrap"); 
	var add_meth_button      = $(".add_meth_button");
	
	var meth = 1; 
	$(add_meth_button).click(function(e){ 
		e.preventDefault();
		if(window.screen.width > 768) {
			meth++; 
			$(wrapper_meth).append('<div class="row ingredients"><div class="col-1"><p id="meth-number"><i class="fas fa-haykal"></i></p></div><div class="input-field col-10 method-input"><textarea id="recipe_method" name="recipe_method" class="form-control validate" placeholder="Method Step" minlength="2" maxlength="400" required></textarea></div></textarea><a href="#" class="remove_field"><i class="fas fa-trash-alt"></i></a></div></div>');
		}

		if (window.screen.width <= 768) {
			meth++; 
			$(wrapper_meth).append('<div class="row ingredients"><div class="input-field col-10 method-input"><textarea id="recipe_method" name="recipe_method" class="form-control validate" placeholder="Method Step" minlength="2" maxlength="400" required></textarea></div></textarea><a href="#" class="remove_field"><i class="fas fa-trash-alt"></i></a></div></div>');
		}
	});
	
	$(wrapper_meth).on("click",".remove_field", function(e){
		e.preventDefault(); $(this).parent('div').remove(); meth--;
	});

	$(wrapper_meth).on("click",".remove_method", function(e){
		e.preventDefault(); $(this).parent('div').parent('div').remove(); meth--;
	});
});

// Date in recipes

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

// sum ready in recipe time

let prep_time = document.getElementById('prep_time');
let cook_time = document.getElementById('cook_time');
let ready_time = document.getElementById('ready_time');


cook_time.addEventListener('change', () =>  {
    let prep_hours = parseInt(prep_time.value.split(':')[0]);
    let prep_minutes = parseInt(prep_time.value.split(':')[1]);
    // if an hour is exceeded, add it to hours instead
    if (prep_minutes >= 60) {
        prep_hours = prep_hours + 1;
        prep_minutes -= 60;
    }
	let cook_hours = parseInt(cook_time.value.split(':')[0]);
    let cook_minutes = parseInt(cook_time.value.split(':')[1]);
    // if an hour is exceeded, add it to hours instead
    if (cook_minutes >= 60) {
        cook_hours = cook_hours + 1;
        cook_minutes -= 60;
    }

	minutes = prep_minutes + cook_minutes
	hours = prep_hours + cook_hours

	if (minutes >= 60) {
		hours += 1;
		minutes -= 60;
	}

    hours = (hours < 10 ? `0${hours}` : `${hours}`);
    minutes = (minutes < 10 ? `0${minutes}` : `${minutes}`);

    ready_time.value = `${hours}:${minutes}`;
})

prep_time.addEventListener('change', () => {
	let prep_hours = parseInt(prep_time.value.split(':')[0]);
    let prep_minutes = parseInt(prep_time.value.split(':')[1]);
    // if an hour is exceeded, add it to hours instead
    if (prep_minutes >= 60) {
        prep_hours = prep_hours + 1;
        prep_minutes -= 60;
    }
	let cook_hours = parseInt(cook_time.value.split(':')[0]);
    let cook_minutes = parseInt(cook_time.value.split(':')[1]);
    // if an hour is exceeded, add it to hours instead
    if (cook_minutes >= 60) {
        cook_hours = cook_hours + 1;
        cook_minutes -= 60;
    }

	minutes = prep_minutes + cook_minutes
	hours = prep_hours + cook_hours

	if (minutes >= 60) {
		hours += 1;
		minutes -= 60;
	}

    hours = (hours < 10 ? `0${hours}` : `${hours}`);
    minutes = (minutes < 10 ? `0${minutes}` : `${minutes}`);

    ready_time.value = `${hours}:${minutes}`;
})
