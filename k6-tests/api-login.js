import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 2, // number of virtual users
    duration: '5s', // duration of the test
};

export default function () {
    let loginUrl = 'http://34.71.17.180:3000/login';

    // Data to be sent in the POST request body
    let payload = JSON.stringify({
        email: 'admin@admin.com', 
        password: '1234'
    });

    // Headers
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Make the POST request
    let response = http.post(loginUrl, payload, params);

    // Logging the response for debugging
    console.log('Response status: ' + response.status);
    console.log('Response body: ' + response.body);

    // Check if the login was successful (example: expecting a 200 OK status)
    check(response, {
        'login successful (status 200)': (resp) => resp.status === 200,
    });

}
