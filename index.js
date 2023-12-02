window.addEventListener("load", () => {
  const button = document.getElementById("button");
  let int;
  let state = 0;
  const states = ["-","\\","|","/"];
  let angle = 0;
  let step = (2*Math.PI) / 12;
  function loadState() {
    if (state > 11) return clearInterval(int);
    let radius = 300;
    let x = 500 + radius * Math.cos(angle);
    let y = 375 + radius * Math.sin(angle);
    angle += step;
    const text = `<!DOCTYPE html><html><head><title>${states[state]}</title><meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0 auto;text-align:center;color: #f9faffde;text-shadow: #858ebc -2px 2px 8px; width:100vw;height:100vh;background-color:rgb(35, 35, 35);}</style><div id="container" data-states=${states} data-state=${state}><h1 id='state'>${states[state%states.length]}</h1><script src='https://iguannalin.github.io/load/state.js'></script></div></body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,location,status,scrollbars,resizable,width=100,height=100,top=${y},left=${x}`);
    window.URL.revokeObjectURL(blobUrl);
    state++;
  }

  button.onclick = () => {int = setInterval(loadState, 750);};
});