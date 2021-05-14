# CSDS393
Cattery Management System.
## Front end unit test package
- @testing-library/react react-test-renderer --save -dev
- @testing-library/react jest-dom --save -dev
- enzyme
- enzyme-adapter-react-16
### Front end test guidance
Dont forget to remove the /<link/> in breeder register and parent register in order to pass the test. We found the link component would not trigger any problems during the use of our app, and thus we consider it is a trivial warning that could be ignored.
Also, you need to add /<htmlfor/>for every input of the form of breeder and parent register in order to get the tests to run. 
