import React from "react";

export default function FEQ() {
  const renderList = (list) =>
    list.map((item, idx) => <li key={idx}>{item}</li>);

  const cssQuestions = ["[E] flex and grid"];

  const htmlQuestions = ["[E] span vs div"];

  const jsQuestions = [
    "[E] const vs let",
    "[E] Object.seal vs Object.freeze",
    "[E] The Core Principles of functional programming",
    "[E] bind() vs call() vs apply()",
    "[M] regular function vs arrow function",
    "[M] what happen in the backend when new an object",
    "[M] how to you deep clone an object",
    "[H] how does setTimeout works"
  ];

  const reactQuestions = [
    "[E] what's the best practise to use key in the list item?",
    "[M] can we call hooks conditionally?",
    "[M] Context vs Redux",
    "[M] how does useEffect work",
    "[M] useMemo and useCallback，when to use，can use each other",
    "[H] useLayoutEffect, diff with useEffect",
    "[H] useImperativeHandle, when to use"
  ];

  const otherQuestions = [
    "[M] how to you improve the performance on code level in react project",
    "[M] async and defer keywords in script tag, diffence between them",
    "[M] reflow; repaint;",
    "[M] Restful Api; Patch; PUT vs POST;",
    "[H] what will happen after input the url address till page was rendered"
  ];

  return (
    <div className="react">
      <h4>CSS Questions</h4>
      <ol>{renderList(cssQuestions)}</ol>

      <h4>Html Questions</h4>
      <ol>{renderList(htmlQuestions)}</ol>

      <h4>Javascript Questions</h4>
      <ol>{renderList(jsQuestions)}</ol>

      <h4>React Questions</h4>
      <ol>{renderList(reactQuestions)}</ol>

      <h4>Other Questions</h4>
      <ol>{renderList(otherQuestions)}</ol>
    </div>
  );
}
