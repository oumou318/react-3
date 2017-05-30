axios.get('https://afternoon-journey-45420.herokuapp.com')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })