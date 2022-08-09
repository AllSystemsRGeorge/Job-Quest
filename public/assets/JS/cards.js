const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const cardsContainer = document.querySelector('#cards');


const makeGetRequest = async (url) => {
    
    try {
        const res = await fetch(url);
        const response = await res.json();

        return response;

    } catch (e) {
        console.error(e);
    }  
};

const renderSearchResult = (jobs) => {
    cardsContainer.innerHTML = '';
    for (let job of jobs) {
        const cardContainer = document.createElement('div');
        cardContainer.style = "max-width: 20rem;";
        cardContainer.className = "card border-success mb-3";
        
        const cardName = document.createElement('div');
        cardName.id = "card-name";
        cardName.className = "card-header";

        cardName.innerHTML = `<h3>${job.companyName}</h3>`;

        const company = document.createElement('div');
        company.id = "company1";
        company.className = "card-body";
        company.innerHTML = `
        <h4 id="jobTitle1" class="card-title">${job.position}</h4>
        <h4 id="jobLink" class="card-title">${job.link}</h4>
        <h4 id="jobInitialSalary" class="card-title">${job.initialSalary}</h4>
        `
        
        cardContainer.appendChild(cardName);
        cardContainer.appendChild(company);
        cardsContainer.appendChild(cardContainer);
    }
};

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault;
    const companyName = searchInput.value.trim();
    const url = `/search?company=${companyName}`;
    const jobs = await makeGetRequest(url);
    renderSearchResult(jobs);
});

// clearBtn.addEventListener('click', async (e) => {
//     e.preventDefault;
//     const userId = 1;
//     const url = `/jobCards`;
//     const jobs = await makeGetRequest(url);
//     renderSearchResult(jobs);
// });

