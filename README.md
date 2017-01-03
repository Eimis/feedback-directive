# Feedback Directive

This is a simple AngularJS feedback directive to help you easily add feedback / contact capability for application.

## Demo
Checkout the [demo page].
## Usage

#### Install via NPM 

```shell
npm install feedback-directive
```

#### Add 'feedback.module' to modules list

```javascript
var app = angular.module('easywork', ['feedback.module']);
```

#### Include directive in your HTML
```html
<feedback callback="onFeedbackSent"></feedback>
```

#### Implement callback in your controller
```javascript
$scope.onFeedbackSent = function(data) {
    console.log("feedback from " + data.email ": " + feedback.content);
}
```

### License
MIT

[demo page]: <https://chenop.github.io/feedback-directive>
