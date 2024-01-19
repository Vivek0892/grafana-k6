import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 50000,
    iterations: 50000
}

export default function () {
    http.get('http://35.223.252.239:30036');
    sleep(1)
  }
