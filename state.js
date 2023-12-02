window.addEventListener("load", () => {
  let container = document.getElementById("container");
  const states = container.dataset.states.split(",");
  let inc = +(container.dataset.state);
  console.log((container.dataset.state),{states,inc});
  setInterval(() => {
    inc+=1;
    document.getElementById('state').innerText = states[inc%states.length];
  }, 500);
});