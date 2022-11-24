import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from "./components/SimpleForm";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Dashborad from './components/Dashboard';
import ExampleCls from './Example/ExampleCls';
import ExampleFn from './Example/ExampleFn';
import ParentComponent from './component2/parentComponent';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import ClickCounterComponent from './components/ClickCounterComponent';
import HoverCounterComponent from './components/HoverCounterComponent';
import BtnClkComponent from './ExampleTwoComponent/BtnClkComponent';
import HvrMouseComponent from './ExampleTwoComponent/HvrMouseComponent';
import Hello from './HOC/Hello';
import Test from './HOC/Test';
import WrappedComponent from './HOC/HocComponet';
import BtnClick from './HocCounter/BtnClick';
import HvrClick from './HocCounter/HvrMouse';
import User from './User';

const HelloStyle = WrappedComponent(Hello);
const TestStyle = WrappedComponent(Test);

function App() {
    return (
      <>
      <User name={() => "kumar"} />
      {/* <BtnClick name="Kumar" Skill="react" />
      <HvrClick name="Ranjith" Skill="Angular"/> */}
      {/* <Hello />
      <Test />
      <hr />
      <HelloStyle />
      <TestStyle /> */}
      {/* <BtnClkComponent name="kumar" />
      <HvrMouseComponent name="ranjith" /> */}

    {/* <ClickCounterComponent name="kumar" skill ="React"/>
    <HoverCounterComponent name="rajesh" /> */}

        {/* <ParentComponent /> */}
        {/* <ExampleCls name="kumar" age="29" />
        <ExampleFn skill="react" /> */}
          {/* <Router>
      <Routes>
          <Route path="/" element={<SimpleForm /> }></Route>
          <Route path="/dashboard" element={<Dashborad /> }></Route>
      </Routes>
    </Router> */}
    {/* <ClickCounter name="senthil"/>
    <Counter /> */}
    </>
    );   
}

export default App;
