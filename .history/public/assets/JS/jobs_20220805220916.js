const companyNameInput = document.getElementById('campanyName');
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

addTodoBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if(todoInput.value.trim().length === 0){
        alert('todo cannot be empty');
        return;
    }

    try {
        const response = await fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                todo: todoInput.value,
            })
        });

        await response.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
})