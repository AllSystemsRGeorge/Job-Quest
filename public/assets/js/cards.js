// js functionality for front end of jobcards
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const clearBtn = document.querySelector('#clearBtn');
const cardsContainer = document.querySelector('#cards');
const editJobCard = document.getElementById('editBtn');


const makeGetRequest = async (url) => {

  try {
    const res = await fetch(url);
    const response = await res.json();

    return response;

  } catch (e) {
    console.error(e);
  }
};

const formatStringData = (data) => {
  if (!data) {
    return "N/A";
  }
  return data;
}

const moneyFormat = (data) => {
  if (!data) {
    return "$0.00";
  }
  return `$${parseInt(data).toFixed(2)}`;
}

const formatDateTime = (dateTime) => {
  if (!dateTime) {
    return "N/A";
  }
  const date = new Date(dateTime);
  return date.toUTCString();
}

// to display search results
const renderSearchResult = (jobs) => {
  cardsContainer.innerHTML = '';
  for (let job of jobs) {
    const cardContainer = document.createElement('div');
    cardContainer.style = "max-width: 20rem;";
    cardContainer.className = "card border-success mb-3";

    const cardName = document.createElement('div');
    cardName.id = "card-name";
    cardName.className = "card-header";

    cardName.innerHTML = `<h3>${job.company}</h3>`;

    const company = document.createElement('div');
    company.id = "company1";
    company.className = "card-body";
    company.innerHTML = `
        <h4 id="jobTitle1" class="card-title">${job.position}</h4>
        <h4>Job Description: <a href=${job.link} target="_blank">link</a></h4>
        <h4 id="jobInitialSalary" class="card-title">${job.salary}</h4>
        <h6>
          <label for="checkbox">
            Applied to job: 
            <input type="checkbox" id="appliedTo" ${job.haveApplied ? "checked" : ""} class="card-title"></input>
          </label>
          </h6>
          
        <h6>
        <label for="checkbox">
          Any feedback? 
          <input type="checkbox" id="feedback" ${job.feedback ? "checked" : ""} class="card-title"></input>
        </label>
        </h6>

        <div>
            <h4>Recruiter</h4>
          <h6>
            Name: ${formatStringData(job.recruiterName)}
          </h6>
          
          <h6>
            Phone Nbr: ${formatStringData(job.recruiterPhone)}
          </h6>
          <h6>
            Email: ${formatStringData(job.recruiterEmail)}
          </h6>
          </div>

          <div>
            <h4>Interview</h4>
            <h6>
              Screening Int.: ${formatDateTime(job.screeningInterview)}
            </h6>
            <h6>
              Technical Int.: ${formatDateTime(job.technicalInterview)}
            </h6>
            <h6>
              Final Int.: ${formatDateTime(job.finalInterview)}
            </h6>

          </div>

          <h6>
          <label for="checkbox">
            Job Offer: 
            <input type="checkbox" id="jobOffer" ${job.jobOffer ? "checked" : ""} class="card-title"></input>
          </label>
          </h6>
        `
    cardContainer.appendChild(cardName);
    cardContainer.appendChild(company);
    cardsContainer.appendChild(cardContainer);
  }
};

// search button on click
searchBtn.addEventListener('click', async (e) => {
  e.preventDefault;
  const companyName = searchInput.value.trim();
  const url = `/search?company=${companyName}`;
  const jobs = await makeGetRequest(url);
  renderSearchResult(jobs);
});

// renders jobform by its perspective job card in order to edit job card
function getJobForm(id) {
  window.location.href = '/jobform/' + id
};