// Job form js for front end funtionalities

const companyNameInput = document.getElementById('companyName');
const positionInput = document.getElementById('positionTitle');
const salaryInput = document.getElementById('salary');
const jobUrlInput = document.getElementById('jobLink');
const createJobBtn = document.getElementById('createBtn');


function rangValfunc(val) {
    document.querySelector("#rangeVal").innerHTML = "$" + val;
    radius = val;
};

// for when user clicks 'create job card' button
createJobBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const companyName = companyNameInput.value;
    const position = positionInput.value;
    const jobUrl = jobUrlInput.value;
    if (companyName.trim().length === 0) {
        alert('Company name cannot be empty');
        return;
    }
    if (position.trim().length === 0) {
        alert('position title cannot be empty');
        return;
    }
    if (jobUrl.trim().length === 0) {
        alert('Job posting URL cannot be empty');
        return;
    }

    try {
        const response = await fetch('/jobform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company: companyNameInput.value,
                position: positionInput.value,
                link: jobUrlInput.value,
                salary: salaryInput.value
            })
        });
        await response.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
});
