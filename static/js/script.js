// menu nav click toggle

$('#featureDiscovery').click(function () {
  $('.feature-container-inside').toggleClass('active');

  $('.feature-trigger-outline').toggleClass('active');
});

// recipe: add and remove recipe ingredients rows

$(document).ready(function() {
	var max_add      		= 20;
	var ingredient_wrapper   		= $(".input_ingredient_wrap");
	var add_button      = $(".add_ingredient_button");
	
	var add = 1;
	$(add_button).click(function(e){
		e.preventDefault();
		if(add < max_add) { 
			add++; 
			$(ingredient_wrapper).append('<div class="row ingredients"><div class="ingredient-field col-md-5"><input class ="form-control" id="food" name="food" type="text" class="validate" placeholder="Food" required></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input class ="form-control" id="count" name="count" type="text" class="validate" placeholder="Quantity" required></div><div class="ingredient-field col-lg-3 input_ing_wrap"><input class ="form-control" id="size" name="size" type="text" class="validate" placeholder="Size" required></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input class ="form-control" id="weight" name="weight" type="text" class="validate" placeholder="Weight" required></div><div class="ingredient-field col-sm-1 input_ing_wrap"><input class ="form-control" id="volume" name="volume" type="text" class="validate" placeholder="Volume" required></div><a href="#" class="remove_field"><i class="fas fa-trash-alt"></i></a></div></div>');
		}
	});
	
	$(ingredient_wrapper).on("click",".remove_field", function(e){ 
		e.preventDefault(); $(this).parent('div').remove(); add--;
	});

// recipe: add and remove recipe method rows

	var max_meth      		= 10; 
	var wrapper_meth   		= $(".input_meth_wrap"); 
	var add_meth_button      = $(".add_meth_button");
	
	var meth = 1; 
	$(add_meth_button).click(function(e){ 
		e.preventDefault();
		if(meth < max_meth) {
			meth++; 
			$(wrapper_meth).append('<div class="row ingredients"><div class="input-field col input_meth_wrap"><textarea id="recipe_method" name="recipe_method" class="form-control" placeholder="Method Step 1"></textarea><a href="#" class="remove_field"><i class="fas fa-trash-alt"></i></a></div></div>'); 
		}
	});
	
	$(wrapper_meth).on("click",".remove_field", function(e){
		e.preventDefault(); $(this).parent('div').remove(); meth--;
	});
});


// profile: replace public and private recipes
