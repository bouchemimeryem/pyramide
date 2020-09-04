function displayPyramid(){
	var row=document.getElementById('row').value;
	
	if(row ==""){
		alert("Nombre des étage obligatoire !");
	}else if (row > 25){
		exit();
	}
	else{
		var html="";
		for(var i=1; i<=row; i++){
			for(var k=1; k<=(row-i); k++){
			
				html+="&nbsp;";
			}
			
			for(var j=1; j<=i; j++){
				html+="* ";
				
			}
			
			html+="<br />";
			
		}
		
		document.getElementById('result').innerHTML=html;
		
	}
}
