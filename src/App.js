import "./css/App.css";
import React from "react";

// import TimeClass from "./components/1_Component&Props/TimeClass";
// import TimeFunction from "./components/1_Component&Props/TimeFunction";

// import TimeClass from "./components/2_State&LifeCycle/TimeClass";
// import TimeFunction from "./components/2_State&LifeCycle/TimeFunction";

// import TimeClass from "./components/3_EventsHandling/TimeClass";
// import TimeFunction from "./components/3_EventsHandling/TimeFunction";

// import TimeClass from "./components/4_ConditionalRendering/TimeClass";
// import TimeFunction from "./components/4_ConditionalRendering/TimeFunction";

// import TimeClass from "./components/5_List&Keys/TimeClass";
// import TimeFunction from "./components/5_List&Keys/TimeFunction";

// import RegisterClass from "./components/6_FormHandling/RegisterClass";
// import RegisterFunction from "./components/6_FormHandling/RegisterFunction";

// import Calculator from "./components/7_Lifting_StateUp/Calculator";

// import ClickCounter from "./components/8_HOC/ClickCounter";
// import HoverCounter from "./components/8_HOC/HoverCounter";

// import Counter from "./components/9_Render_Props/Counter";
// import ClickCounter from "./components/9_Render_Props/ClickCounter";
// import HoverCounter from "./components/9_Render_Props/HoverCounter";
// import User from "./components/9_Render_Props/User";

// import ComponentC from "./components/10_ContextAPI/ComponentC";
// import { UserProvider } from "./components/10_ContextAPI/userContext";

// import Todo from "./hooks/11_useState/Todo";
// import TodoObject from "./hooks/11_useState/TodoObject";

// import TimeFunction from "./hooks/12_useEffect/TimeFunction";

// import Main from "./hooks/13_useCallback_useMemo/Main";

// import Form from "./hooks/14_useRef/Form";

// import Counter from "./hooks/15_useReducer/Counter";
// import ComplexCounter from "./hooks/15_useReducer/ComplexCounter";
// import ReducerContext from "./hooks/15_useReducer/ReducerContext";
// import GetPost from "./hooks/15_useReducer/GetPost";
// import GetPost2 from "./hooks/15_useReducer/GetPost2";

// import LayoutComponent from "./hooks/16_customHook/LayoutComponent";

// import Heading from "./stylesheets/Heading";

// import RegisterForm2 from "./formik/basicFormik/RegisterForm";
// import RegisterForm2 from "./formik/basicFormik/RegisterForm2";
// import FormikContainer from "./formik/reusableFormik/FormikContainer";

// import MainRouter from "./react-router-v6/MainRouter";

// import FetchPosts from "./fetchAPI/FetchPosts";
import AxiosPosts from "./axiosAPI/AxiosPosts";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Tutorial</h1>

      {/* --------------------Basic React 1.0-------------------- */}

      {/* Part- 01 */}
      {/* <TimeClass locale="bn-BD">Class Props Children</TimeClass>
      <TimeFunction locale="bn-BD">Functional Props Children</TimeFunction> */}

      {/* Part- 02 */}
      {/* <TimeClass locale="bn-BD">State Children</TimeClass>
      <TimeFunction locale="bn-BD" /> */}

      {/* Part- 03 */}
      {/* <TimeClass>Click Handling Children</TimeClass>
      <TimeFunction /> */}

      {/* Part- 04 */}
      {/* <TimeClass>Conditional Rendering Children</TimeClass>
      <TimeFunction /> */}

      {/* Part- 05 */}
      {/* <TimeClass locale="bn-BD">List & Keys Children</TimeClass>
      <TimeFunction /> */}

      {/* Part- 06 */}
      {/* <RegisterClass />
      <RegisterFunction /> */}

      {/* Part-07 */}
      {/* <Calculator /> */}

      {/* Part-08 */}
      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* Part-09 */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <User name={(isMale) => (isMale ? "Zaman" : "Miha")} /> */}

      {/* Another way to make it Children */}
      {/* <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* Part-10 */}
      {/* <UserProvider value={{ id: "191-16-403", name: "Muhammad Anisuzzaman" }}>
        <ComponentC />
      </UserProvider> */}

      {/* --------------------React Hooks 2.0-------------------- */}

      {/* Part-11 */}
      {/* <Todo /> */}
      {/* <TodoObject /> */}

      {/* Part-12 */}
      {/* <TimeFunction /> */}

      {/* Part-13 */}
      {/* <Main /> */}

      {/* Part-14 */}
      {/* <Form /> */}

      {/* Part-15 */}
      {/* <Counter /> */}
      {/* <ComplexCounter /> */}
      {/* <ReducerContext /> */}
      {/* <GetPost /> */}
      {/* <GetPost2 /> */}

      {/* Part-16 */}
      {/* <LayoutComponent /> */}

      {/* --------------------React Stylesheets-------------------- */}

      {/* <Heading /> */}

      {/* --------------------React Formik-------------------- */}

      {/* <RegisterForm2 /> */}
      {/* <div className="container">
        <FormikContainer />
      </div> */}

      {/* --------------------React Router Version 6-------------------- */}

      {/* <MainRouter /> */}

      {/* --------------------Fetch API-------------------- */}

      {/* <FetchPosts /> */}

      {/* --------------------Axios API-------------------- */}

      <AxiosPosts />
    </div>
  );
}

export default App;
