function basicLocaleFormat() {
  const date = new Date();
  
  console.log('Default:', date.toLocaleString());
  console.log('TH:', date.toLocaleString('th-TH'));
  console.log('English (US):', date.toLocaleString('en-US'));
  console.log('English (UK):', date.toLocaleString('en-GB'));
  console.log('Japanese:', date.toLocaleString('ja-JP'));
}

function customOptions() {  
  const date = new Date();

  console.log('full-th:', date.toLocaleDateString('th-TH', {
    weekday: 'long',    // พฤหัสบดี
    year: 'numeric',    // 2568
    month: 'long',      // พฤศจิกายน
    day: 'numeric'      // 26
  }));
  
  console.log('short-th:', date.toLocaleDateString('th-TH', {
    year: 'numeric',    // 2568
    month: 'short',     // พ.ย.
    day: 'numeric'      // 26
  }));
  
  console.log('month-number:', date.toLocaleDateString('th-TH', {
    year: 'numeric',    // 2568
    month: '2-digit',   // 11
    day: '2-digit'      // 26
  }));
  
  console.log('-');
}

function timeFormats() {  
  const date = new Date();
  
  console.log('24 hr:', date.toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }));
  
  console.log('12 hr:', date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }));
  
  // add second
  console.log('add-second:', date.toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));
  
  console.log('-');
}

function fullDateTime() {  
  const date = new Date();
  
  console.log('full-th:', date.toLocaleString('th-TH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }));
  
  console.log('full-en:', date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }));
  
  console.log('-');
}

function autoDetectLocale() {  
  const date = new Date();
  
  const userLocale = navigator.language || 'en-US';
  console.log('ภาษาของผู้ใช้:', userLocale);
  console.log('วันที่:', date.toLocaleDateString(userLocale));
  console.log('เวลา:', date.toLocaleTimeString(userLocale));
}


(()=>{
  basicLocaleFormat();
  customOptions();
  timeFormats();
  fullDateTime();
  autoDetectLocale();
})();

