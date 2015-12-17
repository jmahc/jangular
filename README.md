## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

### Prereqs
* node/npm
* gulp
* bower


## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Run the tests using gulp:
```bash
gulp test
```

Unit tests are written using [jasmine](http://jasmine.github.io/).
Here is an example unit test:
```javascript
describe('User', function(){
  it('should create a new user', function(){
    var user = new User({
      email: 'me@test.com'
    });

    expect(user).not.toBe(null);
  });
});
```

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

### Gulp
Gulp can watch your files and lint or test them as they change:
```bash
gulp
```

### Coding Style
Style consistency is important. We'll follow the coding style of [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript/blob/master/README.md?utm_source=javascriptweekly&utm_medium=email#table-of-contents). [eslint](https://github.com/eslint/eslint) has been configured to help you conform to these styles.

## License

A short snippet describing the license (MIT, Apache, etc.)
