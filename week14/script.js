function basicPromise() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
      reject('error');
    }, 1000);
  });
  
  console.log('start...');
  promise1.then(result => {
    console.log('result:', result);
  });
}

(()=>{basicPromise();})();
