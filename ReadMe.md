# Architecture

This project has been implemented using the React feature architecture (since am using ReactJs). In this architecture, components are grouped by domain or feature (as the name implies). You can think of the feature as a collection of components laid out on the same branch of the tree.

Within each feature, components are further grouped by responsibility using the react recommended `container` => `presentation` (aka dumb) component pattern, where the container handles the business logic (api calls, state management etc) and the presentation handles the UI and users interaction on that UI. Here the `ControlsContainer` handles the core logic of showing the modal and form based on a state and also calls the `createNote` handler with the data passed from the `Form` ui when a user tries to create a note. The container component is also a great place to run integration tests whereas unit test can be run on presentation components.

Also as part of the feature architecture, the component driven development (CDD) pattern, as popularized by Storybook (though not used here), was somewhat used in this project. This pattern makes obvious the idea that web apps are made up of different building blocks (think Lego but for the web) and it also ensures components are as isolated as possible, reducing dependencies to minimum. You can see this in the way `NoteUI` has no tight dependencies to both `Controls` and `TrashUI` and vice versa. That way maintenance and scaling becomes easy since you can easily move components around and swap them out.

## Building project

To build the project, in your terminal,

- cd into the project directory:

```js
cd sticky-notes-app
```

- then run the command

```javascript
npm run build
```

## My Process

- Took the time to properly understand the requirements
- Broke up the task into sub tasks akin to creating sub tickets in Jira and took them on one after the other by time-boxing them, though some task took a bit longer than allocated.
  1. Install and setup project with vite [5mins]
  2. Sketched roughly the UI. Would've used Figma given more time for some eye candy and picture perfectness. [10mins]
  3. Built the UI by feature, starting with the NoteUI. [1hr]
  4. Implement core functionality on each UI and container component [2hrs]
  5. Implement bonus functionality on each UI and container component [1hrs]
  6. Wrote comprehensive integration and unit tests that matches the AC as much as possible. [45mins]
