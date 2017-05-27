axios.get('https://mighty-shelf-36224.herokuapp.com/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })