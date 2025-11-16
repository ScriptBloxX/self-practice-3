async function fetchWithTimeout(url,timeout) {
  try {
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(url, {signal: controller.signal});

    clearTimeout(timeoutId);

    const data = await response.json();
    console.log('data:', data.name || data.title);
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error(`Timeout ${timeout}ms)`);
    } else {
      console.error('Error:', err.message);
    }
  }
}

(async()=>{await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1',5000)})();
