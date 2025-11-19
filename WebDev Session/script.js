let count = 0;
const submit = document.getElementById('submit');
const h4 = document.getElementById('count');
const form = document.getElementById('form');
const registered = document.getElementById('registered');
const full = document.getElementById('full');

function updateButtonStyle()
{
	if(form.checkValidity())
	{
		submit.style.backgroundColor = "rgb(200, 255, 200)";
		submit.style.cursor = "pointer";
		submit.style.width = "100%";
	}
	else
	{
		submit.style.backgroundColor = "rgb(100, 160, 100)";
		submit.style.cursor = "not-allowed";
		submit.style.width = "20%";
	}
}
function countStudents()
{
	if(form.checkValidity())
	{
		event.preventDefault();
		h4.innerText = "Number of Students Registered : " + ++count;
		addStudent();
		alert("Form Submission Successful!");
		form.reset();
		updateButtonStyle();
	}
	else
		alert("Form details are incomplete/invalid! Please check your details.");
}
function addStudent()
{
	const name = document.getElementById('name').value;
	const registrations = document.getElementById('registrations');
	registrations.innerHTML += count + '. ' + name + '<br>';
}
function showDetails()
{
	if(registrations.style.display == "none")
	{
		registrations.style.display = "block";
		registered.innerText = "Hide";
	}
	else
	{
		registrations.style.display = "none";
		registered.innerText = "Show Registered Students";
	}
}
function makeFullscreen()
{
	if(form.style.transform != "scale(1.6)")
	{
		form.style.transition = "transform .5s";
		form.style.transform = "scale(1.6)";
		full.innerText = "Windowed";
	}
	else
	{
		form.style.transition = "transform .5s";
		form.style.transform = "scale(1)";
		full.innerText = "Fullscreen";
	}
}
registered.onclick = showDetails;
form.addEventListener('input', updateButtonStyle);
submit.onclick = countStudents;
full.onclick = makeFullscreen;