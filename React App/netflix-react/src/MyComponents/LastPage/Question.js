import React from 'react';
import './Question.css';

const list = [
  {
    id:1,
    text:'What is Netflix?',
    subtext:'Netflix is a streaming service that offers a widely variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of interest-connected devices.'
  },
  {
    id:2,
    text:'How much does Netflix cost?',
    subtext:'Watch Netflix on your smartphone, tablet, Smart TV, Laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs,no contracts.'
  },
  {
    id:3,
    text:'Where can I watch?',
    subtext:'Watch anywhere, anytime. sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offer the Netflix app, including smart TVs, smartphone, tablets, streaming media players and game consoles.'
  },
  {
    id:4,
    text:'How do I cancel?',
    subtext:''
  },
  {
    id:5,
    text:'What can I watch on Netflix?',
    subtext:''
  },
  {
    id:6,
    text:'Is Netflix good for kids?',
    subtext:''
  },
]

const questionList = list.map(data=>(
  <div className="accordion" id="accordionExample{data.id}" key={data.id}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {data.text}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>{data.subtext}</strong>
      </div>
    </div>
  </div>
))
    
export const Question = () => {
  return (
    <>
      <hr style={{height:'10px',margin:'0',backgroundColor:'#808080'}}/>
        <div className='main-question'>
          <h1>Frequently Asked Questions</h1>
            <ul className='question'>
              {questionList}
            </ul>
        </div>
    </>
  )
}
