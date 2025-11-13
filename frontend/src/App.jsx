import axios from "axios"
import { useState } from "react";

function App() {
  const [input,setInput]=useState("");
  const [evalResult, setEvalResult] =useState("");
  const [transResult,setTransResult] =useState("");

  const onTranslate=async()=>{
    try{
      if (!input){
        setEvalResult("");
        setTransResult("");
        console.log("입력 필요")
        return;
      }
      const translated = await axios.post(`http://localhost:8000/translate`,{
        input : input
      });
      console.log("translated",translated);
      console.log(translated.data[0]["translation_text"]);
      
      const senti =  await axios.post(`http://localhost:8000/evaluate`,{
        input : translated.data[0]["translation_text"]
      });
      console.log("senti",senti);

      setEvalResult(senti.data[0]);
      setTransResult({"original":input, "translation":translated.data[0]["translation_text"]});

    }catch(e){
      console.log("Failed to get translate result ", e);
    }
  }

  return (
    <>
    <div className="flex justify-center flex-col pl-32 w-screen">
      <div>
        <div className="text-xl">리뷰 감정 분석기 
          <div className="text-lg pl-36"> - translator en to kor</div>
        </div>
        <input type="text" className="w-3/5 pl-3 justify-center h-12" 
        onChange={(e)=>setInput(e.target.value)} placeholder="감정을 분석하고자 하는 리뷰를 입력해주세요"/>
        <button className="ml-5" onClick={onTranslate}>translate </button>
      </div>
     {
      transResult&& <div> 
        <div>
          <div> <span>원문 : </span> {transResult["original"]} </div>
          <div> <span>번역 : </span>{transResult["translation"]} </div>
        </div>
        <div><span>점수</span> {Math.round(evalResult["score"]*100)}점</div>
        <div>별점 출력 {evalResult["label"]}</div>
      </div>
     }
    </div>
    </>
  )
}

export default App
