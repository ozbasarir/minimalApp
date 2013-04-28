## UPDATE:

Infinite loop problem can be avoided by setting base href to '/' instead of document.location and by prefixing templateUrls with '/'.

This fix is in commit #fe2e4dc7575cc09a1fb100ec3950aa106c67cd3f.

To see all comments: http://stackoverflow.com/questions/16259890/angularjs-infinite-loop


## Instructions

This project was created to replicate an infinite loop. To reproduce:

1- Download a version before the commit mentioned above 

2- Create node_modules by executing:

````
  sudo npm install

````

2- Run (I have tried it on plunker at http://plnkr.co/edit/DjzQu63eMkKWG2O16PMN and could not reproduce the infinite loop):

````
  node minimalApp.js

````

3- Request it from your browser. Something like:

````
    http://localhost:3000/

````

4- click on the p1p2 link on the page. This will cause the infinite loop. 

On the server side, the log produces:


````
    server request for * handled

    GET /p1/p2 304 8ms

    server request for * handled

    GET /p1/partials/template1 304 4ms

````

Note the '/p1' in front of '/partials/template1' here. 

Where did that come from? That is causing the infinite loop because AngularJS cannot find the template at this url and enters the loop as a result. Shortening this /p1/p2 AngularJS route to /p1 eliminates the problem somehow.  
