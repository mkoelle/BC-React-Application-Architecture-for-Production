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
> crowd - "Right Meow!"

A light list of requirements suitable for a demo.

### Exploring the technical decisions

> book - "Feature, feature, i've got a feature"
>
> mark - "tell me more!"

Introduces the idea that we will structure the code on a feature level basis. Interested in finding out more on how it does so.

Auth is cookie-based because it is more secure. Would like to know more about how that is the case.

> :question: why is cookie-based auth better?

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

Folders compared to book:

- .next
  - exists after a `npm run build`
- public
  - yep, but different than lab
  - copied `favicon.ico` from `src/app`
  - deleted all else
- src/pages
  - nope, created, deleted `src/app`
  - :notebook: this is an alternative folder allowed by next convention w/o needing additional config
- src/pages/_app.tsx
  - more nope
  - created like lab, but removed code for providers
- src/pages/index.tsx
  - still nope
  - created like lab
- next.config.js
  - yeah, but different than lab
    - add settings for `reactStrictMode = true` 
    - did not set `experimental.esmExternals = false`
- package.json
  - totally, but different than lab
  - (which has everything from the final state)

### TypeScript setup overview and usage

> types - "check yo self before you wreck yo self"
>
> mark - "thanks types"

Generated file included `plugins:{[ "name": "next" ]}` which seems good, though not included in lab files. Also it already included the paths, thanks to answering the setup question for it in advance.

New to me:

- unknown type
  - :question: how is this better or different than `any`
- type alias
  - :question: why is type alias better than `interface`
  - > mark - "tell me more!"
    >
    > book - "no."
    >
    > mark - -_-
- intersections
  - create a new type by combining two other types with `&`; neat!
- generics
  - not really new to me, but i think they're cool

## Chapter 3
