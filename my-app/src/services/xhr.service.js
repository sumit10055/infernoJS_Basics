
const createXHR = (apiData, resolve, reject) => {
    let url = apiData.url;
    let requestType = apiData.requestType;
    let data = null;
    let contentType = "application/json;charset=UTF-8";
    let async = true;
    let error = apiData.error;
    let config = null;
    let headers = apiData.headers;
    let isCache = null;
    let isTimeBaseCache = null;
    let success = apiData.success;
    let notGenericCall = null;

    let xhr = new XMLHttpRequest();
    xhr.open(requestType, url, async);
    xhr.timeout = 3000;
    if (headers) {
        for (let i in headers) {
            xhr.setRequestHeader(i, headers[i]);
        }
    }

    xhr.onerror = function () {
    };

    xhr.onreadystatechange = function () {
        let response = {};
        console.log(xhr, '$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        if (xhr.readyState === 4) {
            console.log('###############2')
            if (xhr.status == 200) {
                console.log('###############1')
                if (xhr.responseText) {
                    response = JSON.parse(xhr.responseText);
                } else {
                    console.log('###############3')
                    response = {};
                }
                if (response.code == 0) {
                    console.log('###############4')
                        resolve(response);
                }
            } else {
                if (notGenericCall) {
                    console.log('###############6')
                    resolve(response);
                } else {
                    if (error) {
                        console.log('###############5')
                        reject(response);
                    }
                }
            }
        }
    };

    xhr.send(requestType === "get" ? null : JSON.stringify(data));
};

export default createXHR;