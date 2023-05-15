# BC-React-Application-Architecture-for-Production

Book club exercises for React-Application-Architecture-for-Production

## Chapter 1 Understanding the Architecture of React Applications

### Benefits of having a good application architecture

> mark - "yep, yep." nods in agreement.

Standard setup, no new revelations here.

### Exploring the architectural challenges of React applications

> mark - "hmmm, questions, questions, and more questions"

Good to have some general outline to check off.

### Understanding architectural decisions when building React applications

> mark - "bad things are bad, good things are good   ...  Mmm-kay"

Fairly obvious setup of bad vs good. Somewhat weak or overly safe examples.

### Planning our application

> mark - "what do we want!?"
>
> crowd - "an application!"
>
> mark - "when do we want it!?"
>
> crowd - "Meow!"

A light list of requirements suitable for a demo.

### Exploring the technical decisions

> book - "Feature, feature, i've got a feature"
>
> mark - "tell me more!"

Introduces the idea that we will structure the code on a feature level basis. Interested in finding out more on how it does so.

Auth is cookie-based because it is more secure. Would like to know more about how that is the case.

## Chapter 2 Setup and Project Structure Overview

### Technical requirements

> mark - singing "clone, install, copy, switch"
>
> "clone, install, copy, switch"
>
> clone, install, copy ... switch?"

Was expecting to do a `git switch` to change to a specific tag or branch, running a script to swap folders out seems like it leaves clutter around and makes it slightly harder to pick out whats important in the demo.

### Next.js application overview

> mark - "DIY for the cool guy"

Running the create-next app (guessing at the answers to match the book):

- eslint - `y`
- tailwind - `n`
- src directory - `y`
- app router - `y`
- import alias (1) - `y`
- import alias (2) - `@/*`

Moving files to root of project

``` sh
rm jobs-app/README.md
mv jobs-app/* .
rm -rf jobs-app
```

## Chapter 3
