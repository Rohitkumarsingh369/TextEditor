function OnTextKeyUp(txt)
{
	document.getElementById("copytext").value=txt.value;
}
/*function to trim the textarea before validation*/
function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}
var text1=document.getElementById("originaltext");

/* make the text bold*/
function bold() {
	if(trimfield(text1.value) != ''){
		document.getElementById("copytext").style.fontWeight = "900";
		return true;
	}
	if(trimfield(text1.value) == ''){
		swal("Please enter your text!", "You clicked the button!", "warning");
		return false;
	}
}

/* make the text italic*/
function italic() {
	if(trimfield(text1.value) != ''){
		document.getElementById("copytext").style.fontStyle = "italic";
		return true;
	}
	if(trimfield(text1.value) == ''){
		swal("Please enter your text!", "You clicked the button!", "warning");
		return false;
	}
}

/* make the text underline*/
function underline() {
	if(trimfield(text1.value) != ''){
		document.getElementById("copytext").style.textDecoration = "underline";
		return true;
	}
	if(trimfield(text1.value) == ''){
		swal("Please enter your text!", "You clicked the button!", "warning");
		return false;
	}
}
/* make the text UPPERCASE*/
function UPPERCASE() {
	if(trimfield(text1.value) != ''){
		document.getElementById("copytext").style.textTransform = "uppercase";
		return true;
	}
	if(trimfield(text1.value) == ''){
		swal("Please enter your text!", "You clicked the button!", "warning");
		return false;
	}
}

/* make the text lowercase*/
function lowercase() {
	if(trimfield(text1.value) != ''){
		document.getElementById("copytext").style.textTransform = "lowercase";
		return true;
	}
	if(trimfield(text1.value) == ''){
		swal("Please enter your text!", "You clicked the button!", "warning");
		return false;
	}
}

function alignleft() {
	document.getElementById("copytext").style.textAlign = "left";
}

function aligncenter() {
	document.getElementById("copytext").style.textAlign = "center";
}

function alignright() {
	document.getElementById("copytext").style.textAlign = "right";
}


document.getElementById("copytext").readOnly = true;
