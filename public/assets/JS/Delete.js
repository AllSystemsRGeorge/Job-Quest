// Here is the function to delete the cards located in the jobCards.handlebars
async function deleteCard(id) {
    const result = await fetch(`/jobCards/${id}`, {
        method: 'DELETE'
    });
    window.location.reload();
};

