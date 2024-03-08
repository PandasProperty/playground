import Image from 'next/image'

import MainImg from './assets/main.jpeg';
import Code1Img from './assets/code-1.png';
import Code2Img from './assets/code-2.png';
import Code3Img from './assets/code-3.webp';
import Code4Img from './assets/code-4.webp';
import Code5Img from './assets/code-5.png';
import Code6Img from './assets/code-6.png';
import Code7Img from './assets/code-7.webp';
import Code8Img from './assets/code-8.webp';
import Code9Img from './assets/code-9.png';
import Code10Img from './assets/code-10.png';
import Code11Img from './assets/code-11.png';
import Code12Img from './assets/code-12.png';
import Code13Img from './assets/code-13.png';
import Layout from '../Layout';

export const REACT_GRAPHQL_NODE_E2E_TESTING_TITLE = 'Integration and E2E testing with React, GraphQL, Node and Mongo, and mocking the time';
export const REACT_GRAPHQL_NODE_E2E_TESTING_IMG = MainImg;

export default function ReactGraphqlNodeE2eTesting() {
  return (
    <Layout
      title={REACT_GRAPHQL_NODE_E2E_TESTING_TITLE}
      img={REACT_GRAPHQL_NODE_E2E_TESTING_IMG}
    >
      <a href='https://medium.com/@andanenu/integration-and-e2e-testing-with-react-graphql-node-and-mongo-and-mocking-the-time-1659c3978b32' target='_blank' rel='noopener noreferrer'>See it on medium ...</a>
      <p>
        <i>
        Someone asked me why I write so many integration tests. Well, beside it being a mandatory practice, to reduce my level of anxiety when I go to production.
        </i>
      </p>
      <p>
        Testing is an important part of a software engineer job. If we don’t include automated testing in our work then we would rely only on manual testing, on human capabilities, and human sometimes make errors.
      </p>
      <p>
        Especially if you are a start-up and cannot afford a team of manual testers, having automated tests written garanties the maintenance of your existing features, if you start adding new ones, or simply leave the app on the hands of a junior engineer.
      </p>
      <p>
        So we have 3 types of tests: unit, integration and e2e.
      </p>
      <h4>
        Unit tests
      </h4>
      <p>
        Unit tests, are the basic ones, testing a function, no need for mocking APIs. You have a function like the one bellow, that tells you if a parameter date is today, or in the past or future. This is a simple unit tests. But will the tests be right tomorrow?
      </p>
      <Image
        src={Code1Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        Well …, no. Since the system time will be different tomorrow, so the first two tests will fail. Let’s mock the date, and for this I found a very easy to use library <a href='https://www.npmjs.com/package/mockdate' target='_blank' rel='noopener noreferrer'>mockdate</a>. So yes, now if we run the test on the 8, 9 of march, or whenever, the test will be accurate.
      </p>
      <Image
        src={Code2Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <h4>
        Integration and E2E tests
      </h4>
      <p>
        Let’s move on to integration and E2E difference. Because many people confuse them. Integration tests a module of the application (on the frontend or on the backend) while the E2E tests an entire flow from filling a form in the user interface, clicking submit, and being saved correctly in the database (from the frontend to the backend). Usually E2E tests are done by automation tool, which cost money, and for a company at the beginning of the road, that may not be ideal. Now, depending on the complexity of the project, the company should decide if to invest in E2E testing.
      </p>
      <p>
        Let’s take an example, I have a signup flow, user completes a form, press submit, a validation is performed, the request is made to the backend, in case of success a verification email is sent to the costumer, or an error is returned.
      </p>
        The following would be the steps for an E2E test for the signup module:
      <ul>
        <li>user completes the form</li>
        <li>submits the form it successfully</li>
        <li>user sees a successful message</li>
        <li>expect in the database to be created an user with his credentials</li>
        <li>expect in the user inbox to have an email of verification</li>
      </ul>
      <p>
        Other E2E test would be:
      </p>
      <ul>
        <li>
          user completes the form with an existing email address in the system
        </li>
        <li>
          submits the form
        </li>
        <li>
          user sees an error message with the text an account with this email already exists
        </li>
        <li>
          nothing was added to the database
        </li>
      </ul>
      <p>
        That would be great! But, if done right and with test coverage 100%, depending on the complexity of the app, integration tests can be enough.
      </p>
      <p>
        Let’s start with the backend endpoint. Since we are using <b>graphql</b>, if the input is invalid, we will get a validation error way before reaching this function (also a type one from typescript).
      </p>
      <p>
        So the signup function can do 3 things, throw an error if the <i>password</i> and <i>passwordConfirm</i> mismatch, throw an error if the email already exists, or create the user and call the function to send the verification email to him.
      </p>
      <Image
        src={Code3Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        Ohh that wasn’t so hard! It seems kind of classy also. So the first case, I sent a <i>passwordConfirm</i> field mismatching the <i>password</i> and since the function throws an error, you can handle that expecting to reject with a thrown error.
      </p>
      <p>
        In the second case, things get trickier. I have to mock my database. Here you can use <a href='https://www.npmjs.com/package/mongodb-memory-server' target='_blank' rel='noopener noreferrer'>mongodb-memory-server</a>.
      </p>
      <Image
        src={Code4Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p/>
      <Image
        src={Code5Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        Here you can choose were it is best to do all these operations, if you need the clean database after each test of not. So… after mocking my database, it’s pretty easy to check if there is already a record with that email in the database.
      </p>
      <p>
        For the third scenario, after my signup is called I am checking if it calls the send email function with the desired params. One of the integration testing patterns that I practice is the <b>black box</b>. Meaning another module of the application once it has been tested it’s considered a black box and I don’t need to test it in another place. This can be very useful especially if it is not straight forward like here. I would have to check if the nodemailer is set correctly, handle all scenarios. I don’t need to be doing that here, integration tests for sending emails will cover that scenario. I need to know that my black box is called correctly. And my job here is done.
      </p>
      <Image
        src={Code6Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
      This was straighforward, now let’s go back to the frontend. We will use <a href='https://www.npmjs.com/package/@testing-library/react' target='_blank' rel='noopener noreferrer'>@testing-library/react</a>. Let’s go ahead, write the snapshots, looking that everything is displayed correctly by <i>data-testId</i> (You don’t need me for this).
      </p>
      <p>
        Hmm, what do you do if your component should be wrapped inside a <i>Context</i>? And many other components that will be tested. We can wrap the original render method in many many decorators providing us the proper context.
      </p>
      <Image
        src={Code7Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        In our signup component we want to test how it behaves when receiving the posible response from the backend (the 3 scenarios that we saw when we tested the endpoint). For this we can mock our apollo provider. It’s part of <a href='https://www.npmjs.com/package/@apollo/client' target='_blank' rel='noopener noreferrer'>@apollo/client</a> so we don’t need something extra. We just need to add it to our decorators list that will wrap our component and receive the <i>apolloMocks</i> that we will provide when testing the component. Pretty simple, let’s see!
      </p>
      <p>
        So, lets create the array with the mocks provided to our fake apollo client. Each object will tell that for this <i>query</i> and this set of <i>variables</i> mock the <i>result</i> or <i>error</i> like this. You see here that I’ve differentiated the inputs by the email.
      </p>
      <Image
        src={Code8Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        So after I render my component:
      </p>
      <Image
        src={Code9Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        Waaw! Great news it worked!
      </p>
      <p>
        What about an error?
      </p>
      <Image
        src={Code10Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        Aaaaand fail! Why isn’t in the document? I was going crazy.
      </p>
      <p>
        The <a href='https://www.apollographql.com/docs/react/development-testing/testing/#testing-the-success-state' target='_blank' rel='noopener noreferrer'>documentation</a> says:
      </p>
      <p>
        <i>
          To test how your component is rendered after its query completes, you can await a zero-millisecond timeout before performing your checks. This delays the checks until the next “tick” of the event loop, which gives MockedProvider an opportunity to populate the mocked result.
        </i>
      </p>
      <Image
        src={Code11Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        And tata, the issue was solved! Great work! And a great journey!
      </p>
      <p>
        As a foot note, because I really said a lot, and I should wrap things quickly, another important aspect of react testing is testing hooks. For react hooks, I would recommend <a href='https://www.npmjs.com/package/@testing-library/react-hooks' target='_blank' rel='noopener noreferrer'>@testing-library/react-hooks</a>. It has types, and offers a clean interface, just create your decorators (mock contexts like I did above with the <i>render</i> from @testing-library/react) and apply it to the wrapper property:
      </p>
      <Image
        src={Code12Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        Add this in your test file:
      </p>
      <Image
        src={Code13Img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='code'
      />
      <p>
        So now you have a strong typed function for testing your custom hook 🥳
      </p>
      <p>
        <i>
          I wish you all the best and good luck!
        </i>
      </p>
    </Layout>
  );
};

