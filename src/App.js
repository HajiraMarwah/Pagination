import React from 'react';

import { HashRouter, Route } from 'react-router-dom';

// import UserList from './user.js';   //import the User File
  import Header from './header.js';
//  import Home from './home.js';
// import About from './about.js';
// import ContactUs from './contact.js';
//  import UserLogin from './login.js';
//  import Register from './signup.js';
// import Product from './product.js';

//  import StateOne from './state1.js';
//  import StateTwo from './state2.js';
//  import StateThree from './state3.js';
//  import StateFour from './state4.js';
//  import StateFive from './state5.js';
//  import StateSix from './state6.js';
// import StateSeven from './state7.js';

// import StateApiOne from './stateapi1.js';
// import StateApiTwo from './stateapi2.js';
// import StateApiThree from './stateapi3.js';
// import StateApiFour from './stateapi4.js';
// import StateApiFive from './stateapi5.js';
// import StateApiSix from './stateapi6.js';

// import HookOne from './hook1.js';
// import HookTwo from './hook2.js';
// import HookThree from './hook3.js';
// import HookFour from './hook4.js';
import HookFive from './hook5.js';


// import MyProps from './props.js';
// import Validation from './validation.js';





function App() {
  return (
    <HashRouter>
      <Header />
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/about.html" component={About} />
      <Route exact path="/userlist.html" component={UserList} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/product" component={Product} />  */}

       {/* <Route exact path="/state1" component={StateOne} />
      <Route exact path="/state2" component={StateTwo} />
      <Route exact path="/state3" component={StateThree} />
      <Route exact path="/state4" component={StateFour} />
      <Route exact path="/state5" component={StateFive} />
      <Route exact path="/state6" component={StateSix} />
      <Route exact path="/state7" component={StateSeven} />  */}
{/* 
      <Route exact path="/stateapi1" component={StateApiOne} />
      <Route exact path="/stateapi2" component={StateApiTwo} />
      <Route exact path="/stateapi3" component={StateApiThree} />
      <Route exact path="/stateapi4" component={StateApiFour} />
      <Route exact path="/stateapi5" component={StateApiFive} />
      <Route exact path="/stateapi6" component={StateApiSix} />
       */}
      {/* <Route exact path="/hook1" component={HookOne} />
      <Route exact path="/hook2" component={HookTwo} />
      <Route exact path="/:userid/hook3" component={HookThree} />
      <Route exact path="/:userid/:city/hook4" component={HookFour} />
      <Route exact path="/props" component={MyProps} />
      <Route exact path="/validation" component={Validation}/> */}
       <Route exact path="/:id/hook5" component={HookFive} /> 

      

    </HashRouter>
  )
}

export default App;
