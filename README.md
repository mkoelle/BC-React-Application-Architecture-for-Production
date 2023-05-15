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
>
> book - "later, calm down"

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

### ESLint setup overview

> linter - "can't you type anything normally?"
>
> mark - -_-;

The `.eslintrc.js` file from the lab is very flushed out, and the default has only only one value, perhaps we will fill it in over time in the book?

Had to change the package.json lint script from `next lint` to `eslint --ext .ts,.tsx ./src`

### Prettier setup overview

> prettier - sings "Oh, so pretty; I feel pretty, and witty and bright!"
>
> mark - puts on sunglasses

Dissent with book: I usually just use eslint for everything including enforcing styles, getting it to work nicely with prettier is more work than I think its work. Keeping both up to date and happy is another chore.

not mentioned in book, installing eslint extensions:
`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

copied `.prettierrc`, `.prettierignore` from lab.

Added package.json scripts from book. :notebook: The book author is having prettier run on all files, unlike eslint that they set to only the src folder. I like that something is checking all the files.

Added `prettier` to the list of extends for `.eslintrc.js`

:question: Did I miss anything else the author did not mention?

### Pre-committing checks setup overview

> husky - "Stop; Hammer-Time"
>
> mark - "Cant touch gits?"
>
> husky - "Break it down!"

To be honest, I like projects that prevent you from checking in poorly formatted code. husky's gotten easier too use recently as well.

Nitpick; author does not mention creating the `lint-staged.config.js` file, though they do provide the contents to do so with.

### Project structure overview

> mark - "Ive Got A Fever And The Only Prescription Is More Cowbell"
>
> crowd - "by cowbell do you mean feature based structures?"
>
> mark - acting cool, tilting his head and slicking his hair back; "You know it!"

The only folder under `src` we start off with compared to the book is loosely the pages folder, and we had to change things out to use that. Introducing the folders here seems ok, but I hope we talk about creating them again when they are needed, rather than putting in the placeholders like in the lab.

The author mentions four base sub folders / files for the feature folders then follows up with an image that shows 5 each in all the examples, why not include the `pages` subfolder in the list?

:notebook: enforcing features imports via the index.ts is an interesting way of making the implementation pseudo-private.

## Chapter 3
