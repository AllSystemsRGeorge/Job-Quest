// Job form js for front end funtionalities

const companyNameInput = document.getElementById('companyName');
const positionInput = document.getElementById('positionTitle');
const salaryInput = document.getElementById('salary');
const jobUrlInput = document.getElementById('jobLink');
const appliedInput = document.getElementById('applicationStatus');
const feedbackInput = document.getElementById('feedbackStatus');
const recruiterNameInput = document.getElementById('recruiterName');
const recruiterPhoneInput = document.getElementById('recruiterPhone');
const recruiterEmailInput = document.getElementById('recruiterEmail');
const screeeningIntInput = document.getElementById('screeningInterview');
const technicalIntInput = document.getElementById('technicalInterview');
const finalIntInput = document.getElementById('finalInterview');
const jobOfferInput = document.getElementById('jobOffer')
const updateJobBtn = document.getElementById('updateBtn');

function rangValfunc(val) {
    document.querySelector("#rangeVal").innerHTML = "$" + val;
    radius = val;
};

// for UPDATING job card
async function updateJob(id) {
    try {
        const response = await fetch('/jobform', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                company: companyNameInput.value,
                position: positionInput.value,
                link: jobUrlInput.value,
                salary: salaryInput.value,
                haveApplied: appliedInput.checked,
                feedback: feedbackInput.checked,
                recruiterName: recruiterNameInput.value,
                recruiterPhone: recruiterPhoneInput.value,
                recruiterEmail: recruiterEmailInput.value,
                screeningInterview: screeeningIntInput.value,
                technicalInterview: technicalIntInput.value,
                finalInterview: finalIntInput.value,
                jobOffer: jobOfferInput.value
            })
        });
        await response.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
};
