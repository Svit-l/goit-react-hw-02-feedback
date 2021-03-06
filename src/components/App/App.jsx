import React, { Component } from 'react';

import GlobalStyle from '../../common';
import Statistics from '../Statistics';
import Notification from '../Notification';
import ButtonsOptions from '../ButtonOptions';
import Section from '../Section';

import { FeedbackWrap } from './AppStyled';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Feedback />
    </div>
  );
}

export default App;

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, elem) => sum + elem);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const {
      handelIncrement,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const { good, neutral, bad } = this.state;
    return (
      <FeedbackWrap>
        <Section title="Please leave feedback">
          <ButtonsOptions
            options={this.state}
            onLeaveFeedback={handelIncrement}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </FeedbackWrap>
    );
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// export default App;

// class Feedback extends Component {
//   // static propTypes = {
//   //   //
//   // };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     // console.log(Object.values(this.state));
//     return Object.values(this.state).reduce((sum, elem) => sum + elem);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   handelIncrement = key => {
//     this.setState(prevState => {
//       return { [key]: prevState[key] + 1 };
//     });
//   };

//   // handelIncrement = e => {
//   //   this.setState(prevState => ({
//   //     [e.target.value]: prevState[e.target.value] + 1,
//   //   }));
//   // };

//   // incrementGood = () =>
//   //   this.setState(prevState => ({
//   //     good: prevState.good + 1,
//   //   }));

//   // incrementNeutral = () =>
//   //   this.setState(prevState => ({
//   //     neutral: prevState.neutral + 1,
//   //   }));

//   // incrementBad = () =>
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //   }));

//   render() {
//     return (
//       <FeedbackWrap>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handelIncrement}
//           />

//           {/* <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.handelIncrement()}
//         /> */}

//           {/* <ButtonsList>
//             {console.log(this.state)}
//             {Object.keys(this.state).map(key => (
//               <ButtonItem key={key}>
//                 <Button
//                   key={key}
//                   onClick={() => {
//                     this.handelIncrement(key);
//                     // this.incrementGood(e);
//                     // this.countTotalFeedback(e);
//                     // this.countPositiveFeedbackPercentage(e);
//                   }}
//                 >
//                   {key}
//                 </Button>
//               </ButtonItem>
//             ))}
//           </ButtonsList> */}
//         </Section>
//         {/* <ButtonItem>
//             <Button
//                 onClick={e => {
//                 this.incrementGood(e);
//                 this.countTotalFeedback(e);
//                 this.countPositiveFeedbackPercentage(e);
//               }}
//             >
//               Good
//             </Button>
//           </ButtonItem>

//           <ButtonItem>
//             <Button
//               onClick={e => {
//                 this.incrementNeutral(e);
//                 // this.total(e);
//               }}
//             >
//               Neutral
//             </Button>
//           </ButtonItem>
//           <ButtonItem>
//             <Button
//               onClick={e => {
//                 this.incrementBad(e);
//                 // this.total(e);
//               }}
//             >
//               Bad
//             </Button>
//           </ButtonItem> */}
//         {/* </ButtonsList> */}
//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//         {/* <Statistics>
//           <Subtitle>Statistics</Subtitle>
//           <FeedbacksOutput>
//             <OutputItem>Good: {this.state.good}</OutputItem>
//             <OutputItem>Neutral: {this.state.neutral}</OutputItem>
//             <OutputItem>Bad: {this.state.bad}</OutputItem>
//             <OutputItem>Total: {this.countTotalFeedback()}</OutputItem>
//             <OutputItem>
//               Positsve feedback: {this.countPositiveFeedbackPercentage()}%
//             </OutputItem>
//           </FeedbacksOutput>
//         </Statistics> */}
//       </FeedbackWrap>
//     );
//   }
// }
