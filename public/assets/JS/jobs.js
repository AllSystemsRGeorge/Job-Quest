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
const TechnicalIntInput = document.getElementById('technicalInterview');
const finalIntInput = document.getElementById('finalInterview');
const jobOfferInput = document.getElementById('jobOffer')
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const companyName = companyNameInput.value;
    const position = positionInput.value;
    const jobUrl = jobUrlInput.value;
    console.log(companyNameInput)
    if(companyName.trim().length === 0){
        alert('Company name cannot be empty');
        return;
    }
    if(position.trim().length === 0){
        alert('position title cannot be empty');
        return;
    }
    if(jobUrl.trim().length === 0){
        alert('Job posting URL cannot be empty');
        return;
    }
    
    try {
        const response = await fetch('/jobForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company: companyNameInput.value,
                position: positionInput.value,
                link: jobUrlInput.value
            })
        });

        await response.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
})