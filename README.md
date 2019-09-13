silverorange Frontend Developer Exercise
==========================================
This exercise is designed to assess how you approach tasks representative of
the front-end developer role at silverorange. We are as interested in your
process as we are in the final results. Please include descriptive Git commit
messages and comments where you think your code may be unclear.

1 - Update Existing Page
------------------------
With the provided Express framework, implement the `/repos` API endpoint. The
endpoint should aggregate GitHub repository data from the following sources:

 - https://api.github.com/users/silverorange/repos
 - the provided JSON file (in `data/repos.json`). Assume this file can change
   while the service is running.
 
The API endpoint should only return repositories where `repository.fork` is
`false`.

The API endpoint should return JSON encoded data with a content-type of
`application/json`.

### Run

```sh
cd api/
yarn install
yarn start
```

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

### Run

```sh
cd new-page/
yarn install
yarn start
```

Environment
-----------
For this exercise, you can use any stable versions of Node JS and Yarn.
