import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Login from './components/11-05/Login'

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Button from './components/Button';
import SingleProduct from './components/SingleProduct';
import DeclerativeWay from './components/DeclerativeWay';
import WrapperCompo from './components/WrapperCompo';
import ComplexJsxCondRend from './components/ComplexJsxCondRend';
import ComplexJsxpassDataAndCallbacks from './components/ComplexJsxpassDataAndCallbacks';
import ComplexJsxCSSinJSlibrariesforstyling from './components/ComplexJsxCSSinJSlibrariesforstyling';
import StateAndEvent from './components/StateAndEvent';
import InlineStyling from './components/InlineStyling';
import ClassesStyling from './components/ClassesStyling';
import RenderingList from './components/RenderingList';
import CondContent from './components/CondContent';
import StatefulList from './components/StatefulList';
import OutputtingConditionalContent from './components/OutputtingConditionalContent';
import ConditionalReturnStatement from './components/ConditionalReturnStatement';
import AddingDynamicStyles from './components/AddingDynamicStyles';
import SettingCSSClassesDynamically from './components/SettingCSSClassesDynamically';
import AddingnormalJSlogic from './components/AddingnormalJSlogic';
import SplittingCompo from './components/SplittingCompo';
import Composition from './components/Composition';
import FormsModerate from './components/FormsModerate';
import FormsExpert from './components/FormsExpert';
import ValidationReact from './components/ValidationReact';
import PracticeValidationReact from './components/PracticeValidationReact';
import FirstClassComponent from './components/06-05-2023/FirstClassComponent';
import PropsClassComponent from './components/06-05-2023/PropsClassComponent';
import DynamicUsePropsClass from './components/06-05-2023/DynamicUsePropsClass';
import CounterAppClass from './components/06-05-2023/CounterAppClass';
import ConstructorClass from './components/06-05-2023/ConstructorClass';
import ComponentDidMount from './components/06-05-2023/ComponentDidMount';
import ShouldComponentUpdate from './components/06-05-2023/ShouldComponentUpdate';
import RegistrationByClassCompo from './components/07-05-2023/RegistrationByClassCompo';
import PracticeRegistrationClass from './components/07-05-2023/PracticeRegistrationClass';
import Test1 from './components/Test/practiceTest1';
import Todo from './components/todo-09-05-2023/Todo';
import ButtonAction from './components/11-05/ButtonAction';
import FeedbackForm from './components/11-05/FeedbackForm';
import Quote from './components/11-05/Quote';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/test" element={<Test1 />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/button' element={<Button />} />
        <Route exact path='/singleproduct/:id' element={<SingleProduct />} />
        <Route exact path='/declrative-way' element={<DeclerativeWay items={['Lopa', 'Deepak', 'Nadim']} />} />
        <Route exact path='/wrapper-compo' element={<WrapperCompo />} />
        <Route exact path='/complex-jsx-cond-rend' element={<ComplexJsxCondRend isLoggedIn='false' />} />
        <Route exact path='/complex-jsx-pass-data-and-callbacks' element={<ComplexJsxpassDataAndCallbacks />} />
        <Route exact path='/complex-jsx-CSS-in-JS-libraries-for-styling' element={<ComplexJsxCSSinJSlibrariesforstyling />} />
        <Route exact path='/state-and-event' element={<StateAndEvent />} />
        <Route exact path='/inline-styling' element={<InlineStyling />} />
        <Route exact path='/classes-styling' element={<ClassesStyling />} />
        <Route exact path='/rendering-list' element={<RenderingList />} />
        <Route exact path='/cond-content' element={<CondContent />} />
        <Route exact path='/stateful-list' element={<StatefulList />} />
        <Route exact path='/Outputting-Conditional-Content' element={<OutputtingConditionalContent />} />
        <Route exact path='/Conditional-Return-statement' element={<ConditionalReturnStatement />} />
        <Route exact path='/Adding-Dynamic-Styles' element={<AddingDynamicStyles />} />
        <Route exact path='/Setting-CSS-Classes-Dynamically' element={<SettingCSSClassesDynamically />} />
        <Route exact path="/Adding-normal-JS-logic" element={<AddingnormalJSlogic />} />
        <Route exact path="/Spilliting-compo" element={<SplittingCompo />} />
        <Route exact path="/Composition" element={<Composition />} />
        <Route exact path="/Forms-moderate" element={<FormsModerate />} />
        <Route exact path="/Forms-expert" element={<FormsExpert />} />
        <Route exact path="/validation-react" element={<ValidationReact />} />
        <Route exact path="/Practice-validation-react" element={<PracticeValidationReact />} />

        <Route exact path="/first-class-component" element={<FirstClassComponent />} />
        <Route exact path="/props-class-component" element={<PropsClassComponent name="Newton School" age="10" />} />
        <Route exact path="/dynamic-use-props-class" element={<DynamicUsePropsClass initialCount={5} />} />
        <Route exact path="/counter-app-class" element={<CounterAppClass />} />
        <Route exact path="/Constructor-class" element={<ConstructorClass />} />
        <Route exact path="/component-did-mount" element={<ComponentDidMount />} />
        <Route exact path="/should-component-update" element={<ShouldComponentUpdate />} />
        <Route exact path="/registration-by-class-compo" element={<RegistrationByClassCompo />} />
        <Route exact path="/Practice-registration-class" element={<PracticeRegistrationClass />} />

        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/button-action" element={<ButtonAction />} />
        <Route exact path="/feedback-form" element={<FeedbackForm />} />
        <Route exact path="/quote" element={<Quote />} />
        {/* // <Route exact path="/" element={< />} /> */}
        {/* // <Route exact path="/" element={< />} /> */}
        {/* // <Route exact path="/" element={< />} /> */}

      </Routes>

    </div>
  );
}

export default App;
