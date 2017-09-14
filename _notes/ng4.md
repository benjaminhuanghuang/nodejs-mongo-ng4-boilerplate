## Dependencies
Error message
```
@angular/core@4.3.6 requires a peer of rxjs@^5.0.1 but none was installed.
@angular/core@4.3.6 requires a peer of zone.js@^0.8.4 but none was installed.
@angular/http@4.3.6 requires a peer of rxjs@^5.0.1 but none was installed.
@angular/platform-server@4.3.6 requires a peer of @angular/animations@4.3.6 but none was installed.
@angular/router@4.3.6 requires a peer of rxjs@^5.0.1 but none was installed.
```

Reactive Extensions for JavaScript (RxJS) is a reactive streams library that allows you to work with asynchronous data streams. RxJS can be used both in the browser or in the server-side using Node.js.

Zone.js is an execution context that persists across async tasks. You can think of it as thread-local storage for JavaScript VMs.

## polyfiles.ts
  Need polyfills.ts to startup app

## Script


## Webpack

  ```
  "build": "webpack --config webpack.config.dev.js --progress --profile --watch",

  --progress  Display a compilation progress to stderr.
  --profile   display more detailed timing information
  ```

## Folder structure
  Structure the folders by feature 
  /app/auth
            
  /app/message