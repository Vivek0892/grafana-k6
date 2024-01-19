apilogin cm - kubectl create configmap k6-api-login --from-file api-login.js
averagelt cm - kubectl create configmap k6-average-load-test --from-file average-lt.js
breakpoint cm - kubectl create configmap k6-sample-break-test --from-file breakpoint.js
loadtest cm - kubectl create configmap k6-sample-load-test --from-file loadtest.js
smoketest cm - kubectl create configmap k6-sample-smoke-test --from-file smoke.js
soaktest cm - kubectl create configmap k6-sample-soak-test --from-file soak-test.js
spiketest cm - kubectl create configmap k6-sample-spike-test --from-file spike-test.js
stresstest cm - kubectl create configmap k6-sample-stress-test --from-file stress-test.js