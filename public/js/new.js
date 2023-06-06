const newFormHandler = async function(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="post-name"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);