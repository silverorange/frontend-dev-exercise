silverorange Frontend Developer Exercise
==========================================
This exercise is designed to assess how you approach tasks representative of
the front-end developer role at silverorange. We are as interested in your
process as we are in the final results. Please include descriptive Git commit
messages and comments where you think your code may be unclear.

1 - Update Existing Page
------------------------
With the provided mini application, make the following changes to the existing
page. For this exercise we are inrested in HTML + CSS only. **No functionality
is required**. Mockups are not provided so work to make changes fit with the
existing visual page design:

1. Change the multi-line *Street Address* field into line1 and line2 fields.
   Line2 field should be optional
2. Add a check-mark to the *Account Information* section to opt in to beta
   features. Include the following descriptive text:
   > With our beta program, you get early access to new features, but they may
   > not always work perfectly. You can change your beta preference at any time
   > after you join.

### Runing the Development Server

```sh
cd existing-page/
yarn install
yarn start
```

### Files to Edit

 - The HTML template to edit is in `src/views/checkout.ejs`
 - The CSS to edit is in `src/assets/checkout.less`. You can use LESS features
   to implement your changes, or just use plain CSS.

### Testing

1. Open a browser.
2. Visit http://localhost:4000/checkout
3. Refresh the page in your browser after saving your changes.

2 - Build Out New Page
----------------------
Using the provided `create-react-app` base in the `/new-page` folder, implement
the page from this mockup:
https://www.figma.com/file/pirNL6mXMswfRkJQAZsDSK/devtest

If you create a free Figma account, you’ll have access to export assets and
inspect details in the mockup.

For this exercise we are just interested in replicating the visual appearance
of the mockup—**no functionality is required**. Use appropriate React
components, HTML elements and CSS. For your implementation, divide the page
into logical React components.

A basic responsive template is included in the project to get you started.

### Runing and Testing

Create-react-app bundles hot-reloading so starting the developemnt server will
open your default browser and the page will automaticaly refresh as you edit
and save components and CSS.

```sh
cd new-page/
yarn install
yarn start
```

Environment
-----------
For this exercise, you can use any stable versions of Node JS and Yarn.
