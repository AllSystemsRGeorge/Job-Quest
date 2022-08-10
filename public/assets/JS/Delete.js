// const deleteBtn = document.getElementById('deleteBtn');
async function deleteCard(id) {
    const result = await fetch(`/jobCards/${id}`, {
        method: 'DELETE'
    });
    window.location.reload();
};

