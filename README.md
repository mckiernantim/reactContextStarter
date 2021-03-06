# Firebase Auth with Google and React Context API   

This project will walk you through the steps to set up User Authentiaction via Google sign in using Firebase, React and React Context.  

## What is Firebase?

Firebase is whats known as  a BAAS, or Back End As A Service, for creating mobile and web applications. It was originally an independent company founded in 2011.  In 2014, Google acquired the platformand it is now their flagship offering for app development. Its primary features include a Realtime noSQL database and user authentication that all come out of the box and ready to connect to a front end application.  While using Firebase is very convenient in many ways it also limits the scope of a full stack applicaiton by limiting the way we structure our database or backened functionality.  It is great for smaller applicaitons that do not need a large back end layer of complexity or to bring in certain features (LIKE AUTHENTICATION)

### What's So Special About it?

Firebase user Authentication is a streamlined, secure way to integrate multiple different sign in methods to our applications including Facebook, Google, Github, Twitter and more.  Additionally, Firebase provides analytics and a database functionality out of the box.  

In short - it's a powerful tool to help set up complex backend tasks in our applicaiton.

### How will this work?

To setup firebase on our apps we will need to perform the following:

* Signup for a Firebase account
* Set up a Create-React-App
* Register an applicaition on Firebase
* Enable Firebase Authentication
* Download our App credientials from Firebase to our `.env`
* Install Firebase via NPM
* Set up our React Context to provide auth data to components
* Set up route guards to allow  ONLY authenticated users acces
* Handle user logout

## What we're doing in React

Our React app is going to use a `service` ( just a function ) to create a 
`firebaseAuth()` instance and call the `signInWithPopUp()` 
method and pass it an instance of a `GoogleAuthProvider()`.   
This is very similar to how we import and set up our express server.  
We then take our app information from our `firebaseConfig` that Firebase 
gave us when we resitered our app.  We will then create a `Contex` 
by calling the `useContext()` hook.  Don't worry you are not familiar with `useContext()` 
we'll walk through it together (read up on it <https://reactjs.org/docs/context.html>,)
but for now thinkg of a `Context` as a way to share information between components
without them down as props.  Once our users sign in we save the information we get from Google
as state on our `Context` as `user`.  We then set up a `useEffect()` 
hook to watch our `user`.  When our `user` logs out we update state on our `Context` 
and then our `useEffect()` hook reroutes our application back to our login
page preventing our router from loading a view unless the `user` in our `Context` state is valid.



## Lets light this candle!

## Project Set Up

* Clone this repo!  

* Head to https://firebase.google.com/  and click `Get Started` to sign up for Firebase

* Firebase will biring you to the Project OverView Page.  Click the `</>` button to begin a web app.

    * Give your app a nickname (whatever you want it to be) 
    * You will be shown a `firebaseConfig` object.  Keep it close by - we'll need it 

* In our CRA app - create a `.env` file and paste the following in:


    ```
    REACT_APP_API_KEY=""
    REACT_APP_AUTH_DOMAIN=""
    REACT_APP_DATABASE_URL=""
    REACT_APP_PROJECT_ID=""
    REACT_APP_STORAGE_BUCKET=""
    REACT_APP_MESSAGING_SENDER_ID=""
    REACT_APP_APP_ID=""
    REACT_APP_MEASUREMENT_ID=""
    ```

* Now we need to map all the values from our `firebaseConfig` object to our `.env` file.

* run `npm i dotenv firebase` to bring in our dependencies

* Head to our `services` directory.  
