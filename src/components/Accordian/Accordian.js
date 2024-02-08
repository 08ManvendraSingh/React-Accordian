import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const arr = [
  {
    question: "What is the Virtual DOM?",
    answer: "Virtual DOM is representation of an Actual Dom",
  },
  {
    question: "What is functional component?",
    answer:
      "It is a normal javascript function which returns some piece of jsx(react element).It is good to create function componenet with capital letter(it is not mandatory but it is common        convention so that react understand it that it is functional component)",
  },
  {
    question: "What is Hook?",
    answer:
      "Hooks are normal javascript function.Functions starting with use are called Hooks.The rules of using hook are:Hooks must be declared at the top level of componenet.Don't use hooks inside loop,conditions,nested function.Only call Hooks from React function components,not from normal js function.",
  },
  {
    question: "What is component composition?",
    answer: "It means rendering component inside the component.",
  },
  {
    question: "What are the components in React?",
    answer:
      "Everything in react is componenet.ex:button,header,card,etc.There are 2 type of component 1.Class based component(older way of writing component).2.Functional component(newer way of writing component).",
  },
];

const Accordian = () => {
  const [show, setShow] = useState(0);

  const toggleAccordian = (index) => {
    if (index === show) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  return (
    <div className="w-screen h-screen py-5 px-32 overflow-y-scroll bg-[url(https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-center bg- bg-cover">
      <div className="w-4/12 rounded-md shadow-md py-4 bg-[#dfce98fe] relative top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 ">
        <h3 className="mb-4 font-semibold text-center text-xl">
          React Interview Questions
        </h3>
        {arr.map((x, i) => (
          <AccordianItem
            data={x}
            showIndex={i === show}
            setShow={() => toggleAccordian(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
