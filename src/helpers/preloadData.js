export function preloadList() {
  return getData();
}
    
function getData() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    let url = 'https://topus009.github.io/ets/geoData.json';

    xhr.open('GET', url, false);
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
      } 
      else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    
    xhr.onerror = function() {
      reject(new Error('Network Error'));
    };

    xhr.send();
  });
}