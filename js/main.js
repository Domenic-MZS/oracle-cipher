import { cipher, decipher } from "./cipher.js";

const snippet = document.getElementById("result_snippet").content;
const results = document.getElementsByClassName("results")[0];
const buttons = document.getElementsByClassName("actions")[0];
const textarea = document.getElementById("input-message");

async function copyText(text) {
  let query = { name: "clipboard-write" };
  let clipPerm = await navigator.permissions?.query(query);

  if (navigator.clipboard && clipPerm.state !== "denied") {
    return await navigator.clipboard.writeText(text);
  }

  // create holder and inject text to copy
  let holder = document.createElement("textarea");
  holder.textContent = text;
  holder.style = { ...holder.style, display: "none", position: "fixed" };

  // focus and select the holder 
  document.body.appendChild(holder);
  holder.focus() || holder.select();

  // yank and dispose the holder
  document.execCommand("copy"); // deprecated
  holder.remove();
}

const addResult = (text) => {
  results.childNodes.forEach((node) => node.remove());

  if (text.length < 1) {
    results.appendChild(snippet.cloneNode(true));
    return;
  }

  let result = snippet.cloneNode(true);

  result.querySelector("img").remove();
  result.querySelector("h4").innerText = "Mensaje:";
  result.querySelector("p").innerText = text;

  let copyButton = document.createElement("button");
  copyButton.classList.add("btn");
  copyButton.innerText = "Copiar";
  copyButton.onclick = (_) => copyText(text) && alert("Copiado");

  result.querySelector("#result").appendChild(copyButton);

  results.appendChild(result);
};

// first run add the snippet as it is
results.append(snippet?.cloneNode(true));

buttons?.addEventListener("click", (e) => {
  const button = e.target;
  const dataset = button.dataset;
  const text = textarea?.value;

  if (button.nodeName !== "BUTTON") return;

  // do encrypt
  if (dataset.action === "encrypt") return addResult(cipher(text));

  // else do decrypt
  return addResult(decipher(text));
});
