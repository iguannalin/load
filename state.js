window.addEventListener("load", () => {
  let container = document.getElementById("container");
  let inc = +(container.dataset.state);
  console.log((container.dataset.state),{states,inc});
  inc+=1;
  const states = +(container.dataset.states);
  setInterval(() => {
    document.getElementById('state').innerText = states[inc%states.length];
  }, 500);
});