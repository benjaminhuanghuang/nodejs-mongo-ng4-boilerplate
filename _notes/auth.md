## How Authentication works in a MEAN app
  Authentication status shouldn't be stored in session since client only reaches to server to fetch or put data
  Session is not the solution for authenticating in a Single Page App.

## Server side
Create token when user signin
```
router.post("/signin", function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: "Login failed",
        error: { message: "Invalid login credentials" }
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: "Login failed",
        error: { message: "Invalid login credentials" }
      });
    }
    var token = jwt.sign({ user: user }, "secret", { expiresIn: 7200 });
    res.status(200).json({
      message: "Successfully logged in",
      token: token,
      userId: user._id
    });
  });
});
```

## Protect route at server side
```
var jwt = require('jsonwebtoken');

//.use("/") mean each request will reach this method
router.use('/', function (req, res, next) {
    // check token before process the request
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
  })
});
```
## Get user info from token at server side
```
router.post('/', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    
  }
}
```



## Menu
Template
```
  <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
  <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>


```
Inject service into component
```
  export class AuthenticationComponent {
      constructor(private authService: AuthService) {}

      isLoggedIn() {
          return this.authService.isLoggedIn();
      }
  }
```