const prompt = "こんにちは、どのようにお手伝いできますか？";

async function sendMessage() {
  const input = document.getElementById("input").value;
  const response = await fetch("https://api.openai.com/v1/engines/text-davinci-002/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer <API_KEY>`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: prompt,
      temperature: 0.5,
      response_format: "text",
      model: "text-davinci-002",
      prompt: input
    })
  });
  const json = await response.json();
  const answer = json.choices[0].text;
  document.getElementById("output").innerHTML = answer;
}

document.getElementById("submit").addEventListener("click", sendMessage);
