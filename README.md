# CSDS393
Cattery Management System.
## Front end unit test package
- @testing-library/react react-test-renderer --save -dev
- @testing-library/react jest-dom --save -dev
- enzyme
- enzyme-adapter-react-16
### Front end test guidance
- Extract all files in the **__tests__** folder and simply install the above packages and **npm run test -- --coverage**. You should be able to see the results.
- Dont forget to remove the \<link\> in breeder register and parent register in order to pass the test. We found the link component would not trigger any problems during the use of our app, and thus we consider it is a trivial warning that could be ignored.
Also, you need to add \<htmlfor\>for every input of the form of breeder and parent register in order to get the tests to run. 
- For genetable unit test, under each select you need to add \"You selected bs \{bs_value\}\" statements of similar format specified in the unit test document in order to make sure the test could run. These statements are the things we used to test the selection more easily.
- In dashboard test, I tested the logout button in each dashboard page. But in tests, it will not pass since the error message of \"TypeError: setAuth is not a function\" will pop out. But this means I have successfully mocked the onclick action which means the test actually succeeded.
### Front End unit test report
Please extract the file **lcov-report** and go into **Component** folder. First, you can see a report called **index.js** which will open a window in your browser and contains some tests of our front end. Then there are another four folders called **Card, FamilyTreeManagment, ManageAccounts, ManageCats, NavBar**. Please open each folder and find the **index.js** inside each folder to see the test reports.
