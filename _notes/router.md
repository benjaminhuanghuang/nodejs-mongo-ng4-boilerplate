## Nest router

## Jump to url
```
import { Router } from "@angular/router";

export class SigninComponent {
    // Inject router into component
    constructor(private router: Router) {
    }

    onSubmit() {
      // Jump to url
      this.router.navigateByUrl('/');
    }
```  
