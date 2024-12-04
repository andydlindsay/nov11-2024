# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX / AJAJ
* Asynchronous JS And XML
* eXtensible Markup Language
* allows us to make HTTP requests via JS
* Microsoft Outlook
* XMLHTTPRequest (XHR)

```xml
<user>
  <email>alice@mail.com</email>
  <password>1234</password>
</user>
```

```JSON
{
  "email": "alice@mail.com",
  "password": "1234"
}
```

```js
$.ajax({
  url: '/products',
  method: 'GET',
  success: (data) => {},
  error: (err) => {}
});

$.ajax({
  url: '/products',
  method: 'GET',
}).then((data) => {})
  .catch((err) => {})
```


name=Hamburger&tagline=Tasty%20good%20food&price=2.99&calories=1500









