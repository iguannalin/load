window.addEventListener("load", () => {
  let container = document.getElementById("container");
  const states = +(container.dataset.states);
  let inc = +(container.dataset.state);
  inc+=1;
  console.log((container.dataset.state),{states,inc});
  setInterval(() => {
    document.getElementById('state').innerText = states[inc%states.length];
  }, 500);
});