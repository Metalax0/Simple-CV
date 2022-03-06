
// function is called when submit button is clicked
function validate_form()
{
	// locating elements based on given id
	fname_dom = document.getElementById("fname");
	email_dom = document.getElementById("email");
	msg_dom = document.getElementById("msg");
	submit_dom = document.getElementById("submit_button");

	// checks whether textbox for full name is empty
	if (fname_dom.value == "")
	{
		alert("full name field cannot be empty");
	}

	// checks whether textbox for email is empty
	else if (email_dom.value == "")
	{
		alert("email field cannot be empty");
	}

	// checks whether textbox for message is empty
	else if (msg_dom.value == "")
	{
		alert("message field cannot be empty");
	}

	// if none of the fields are empty, sends and alert message
	else
	{
		alert("Thank you ")

	}
}
