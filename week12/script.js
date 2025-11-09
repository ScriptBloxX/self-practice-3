async function testFetch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/999999');
    if (!response.ok) throw new Error(`err status: ${response.status}`);
    
    const data = await response.json();
    console.log('data:', data);
  } catch (err) {
    console.error('err:', err.message);
  }
}

(async()=>{await testFetch()})();
