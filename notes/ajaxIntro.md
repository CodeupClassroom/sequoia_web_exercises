Ajax 
    sends requests w/o a complete page load
    requests => request is sent in the background
       
    examples:
        - social media newsfeed
        - infinite scroll 
        - anywhere where new contents loads without a complete page reload
        - notifications
        - comments show up while you're looking at a page
        - you submit a form and the page doesn't reload everything
        - new comment shows up on a page while you're looking at original post

Request -> HTTP requests
    when a client asks or tells something to a server.
    when a browser asks or tells something to code running on the server hosting that webpage

    GET request => gimme request => asking a question of the server => download request
        examples
            - navigating your browser to an address (codeup.com)
            - loading a web page
            - click a link
            - search google 
            - submit a form where the method attribute is set to GET (search forms)
        - you can bookmark a GET request
        - you can create an anchor tag href that performs that GET request when clicked

        <a href="apartments.com/search?zipcode=78205&min_price=1000">Search apartments in 78205</a>

    POST requests => we're telling the server something => upload request => attempt to change data on the server
        - submitting a form where the method attribute is set to POST
        examples
            - register form
            - login form
            - create my profile 
            - edit my account

Example Scenario:
    Bob needs to login to his bank account and check the latest statement of transactions.

    Bob navigates his browser to http://myawesomebank.com (GET request)
    myawesomebank.com loads the index.html. (RESPONSE => determined by server side code)

    Bob clicks the login link at the top right of the page (GET request)
    myawesomebank.com loads login.html (RESPONSE => deliver the html/css/js/images for the login page)

    Bob fills out the username and password inputs (this is only changing the .value of those input elements)
    Bob clicks the submit button (POST request)

    myawesomebank.com reads in the username, checks to see if that user exists, then checks the password associated w/ that user (RESPONSE => if "all good" redirect)

    myawesomebank.com automatically redirects to /transactions.html on successful login (GET)
    Bob gets to see all of the latest transactions (just Bob reading the HTML)

