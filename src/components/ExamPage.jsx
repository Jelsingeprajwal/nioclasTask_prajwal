import axios from "axios";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import React, { useEffect, useState } from "react";

function ExamPage() {
  const [data, setData] = useState("");
  const [chapArr, setChapArr] = useState([
    "AreaUnderTheCurve",
    "BinomialTheorem",
    "DifferentialCalculus2",
  ]);
  const [num, setNum] = useState(1);
  const [query, setQuery] = useState("AreaUnderTheCurve_6");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${query}`
      );
      setData(data[0]);
    };
    fetchData();
  }, [query]);

  function handleNext(e) {
    let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    setNum((prev) => prev + 1);
    setQuery(chapArr[i] + "_" + num);
  }

  function handlePrev() {
    let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (num > 2) {
      setNum((prev) => prev - 1);
      setQuery(chapArr[i] + "_" + num);
    }
  }

  return (
    <div>
      <header className="flex justify-center items-center text-xl w-full h-[54px] ">
        Online Math Demo test
      </header>
      <section className="">
        <MathJaxContext>
          <div className="p-4 flex flex-col gap-2">
            <div>Question No: {num}</div>
            <div className="flex items-center">
              <span>Tags:</span>
              <div className="border ml-2 bg-maroon text-sm p-[5px] h-8">
                {data.ChapterID}
              </div>
            </div>
          </div>
          <div className=" flex flex-col   overflow-auto items-start px-4">
            <MathJax>
              <p>{data.Question}</p>
            </MathJax>
            <h2>Explanation</h2>
            <MathJax>
              <span>{data.Explanation1}</span>
            </MathJax>
          </div>
        </MathJaxContext>
        <div className="flex gap-2 mt-4 mx-4">
          <button onClick={handlePrev} className=" primary bg-maroon">
            Prev
          </button>
          <button onClick={handleNext} className="primary bg-maroon">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default ExamPage;
