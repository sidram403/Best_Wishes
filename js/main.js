
function random(){
	var category =document.getElementById('Category').value;

	if(category == 'Name_Initials'){
		var array = ['Select item', 'Multicolored Couple Initial','Glowing Single Name','Glowing Double Name','LED Name Table Top','Glowing Couple Initial', 'LED Initial'];
	}else if(category == 'Personalized_Keychains'){
		var array = ['Selct item','Personalized LED Keychain','Spotify Keychain','Couple Keychain', 'Drive Safe Keychain','Spotify Keychain','the day we become one keychain', 'Save the date keychain', 'Baby foot keychain'];
	}else if(category == 'Table_tops'){
		var array = ['Selct item','photo Table Top','Combo', 'Spotify plaque','LED double mosaic table top','Multicolored Heart'];
	}else{
		var array=[''];
	}
	var string ='';
	for(var i=0;i<array.length;i++){
		string = string + '<option>' + array[i] + '</option>';
		document.getElementById('items').innerHTML=string;
	}
}