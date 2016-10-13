# Feedback Directive

This is a simple AngularJS feedback directive to help you easily add feedback / contact capability for application.

#### Install via NPM 

```shell
npm install angular-directive-boilerplate
```

#### Include directive in your HTML
```shell
<feedback callback="onFeedbackSent"></feedback>
```

#### Implement callback in your controller
```shell
$scope.doSomething = function(data) {
    console.log("feedback from " + data.email ": " + feedback.content);
}
```

### License
MIT
