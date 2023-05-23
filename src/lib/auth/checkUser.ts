import { browser } from '$app/environment';
const keyName = 'sb-enikswebefbtdchwixmy-auth-token';

export const isSignedIn = browser ? window.localStorage.getItem(keyName) : false;

console.log(isSignedIn);
