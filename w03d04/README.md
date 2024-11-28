# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* one way algorithm/process
* cannot be undone* 
* bcrypt blowfish
* plaintext password => hashing algo => hash (60 char string)
* rainbow table attacks
* salt => a string that is added to the password before hashing
'secret' + 'asdhfjahsdjfhjasd' => hashing algo => hash

### Encryption
* two way process
* cookie-session middleware
* plaintext cookie => cookie-session middleware => encrypt cookie
* encrypted cookie => cookie-session middleware => plaintext value


```js
// setting a cookie
res.cookie('cookieName', 'cookieValue');
req.session.cookieName = 'cookieValue';

// reading a cookie
req.cookies.cookieName;
req.session.cookieName;

// clearing a cookie
res.clearCookie('cookieName');
req.session.cookieName = null;
req.session = null;
```


http://localhost:8080/login

Man in the Middle (MitM)
Monster in the Middle

HTTPS HTTP Secure

### Asymetric Cryptography
* the key that locks the data isn't the same as the unlock key
* public key => publically accessible to everyone
* private key => kept secret

https://www.google.com/

### REST
* RESTful architecture
* REpresentational State Transfer
* naming convetion for routes
* resources are always plural
* actions are singular

GET /all-the-urls
POST /create-a-new-short-url

POST /login
POST /register

Browse  GET   /products
Read    GET   /products/:id
Edit    POST  /products/:id
Add     POST  /products
Delete  POST  /products/:id/delete

Browse  GET    /products
Read    GET    /products/:id
Edit    PATCH  /products/:id
Add     POST   /products
Delete  DELETE /products/:id

### More HTTP Methods
* all syntatic alternatives to POST
* PUT => replace the resource completely
* PATCH => replace a piece of a resource
* DELETE => deletes a resource

req.url
req.method
