# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* reinforce the first 5 weeks
* learning to work as a team

### Pick a Project

### User Stories
* describes how a user can interact with our app
* As a _____, I can _____, because ______

* As a non-logged in user, I can see a list of available maps, because I'm interested in things in my area
* As a user, I can put many points on a map, because I want to show people what's in my area

* As a non-logged in user, I cannot edit a url, because it doesn't belong to me

planning/user-stories.md

### Nouns === Resources
* tables
* ERD

planning/erd.png
planning/erd-stretch.png

### Routes
* RESTful routing

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* focus on the demo
* if you're not gonna show it, don't build it

### User Login/Registration
* don't

```js
// http://localhost:3000/login/2
app.get('/login/:id', (req, res) => {
  // plaintext cookies
  res.cookie('userId', req.params.id);

  // encrypted cookies
  req.session.userId = req.params.id;

  // send the user somewhere
  res.redirect('/');
});
```

### Wireframes/Mockups

planning/wireframe.png

### Tech Choices
* Back end: Node, Express, Postgres
* Front end: HTML, CSS, JS, jQuery, bootstrap, tailwind


1. create a scss file in styles (`styles/layout.scss`)
2. create a Link tag in your HTML that requests the css version of the file
3. middleware picks up the request and compiles your scss
4. express static public will serve up the css

### Splitting up the work
* vertical => one person working on a full-stack feature (FE, BE, and DB)
* horizontal => one person working on a single layer of the stack (FE, BE, or DB)
* pair programming

### Communication
* scrum channel
* please do it
