import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ anecdote, votes }) => (
  <div>
    <div>{anecdote}</div>
    <div>has {votes} votes</div>
  </div>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  
  const handleNextAnecdote = () => {
    const selectRandom = Math.floor(Math.random() * anecdotes.length);
    return setSelected(selectRandom);
  };

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    return setVotes(copy);
  }

  const largeVotes = () => {
    return votes.indexOf(Math.max(...votes));
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display anecdote={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <Button handleClick={handleVotes} text="vote" />
        <Button handleClick={handleNextAnecdote} text="next anecdote" />
      </div>
      <h2>Anecdote with most votes</h2>
      <Display anecdote={anecdotes[largeVotes()]} votes={votes[largeVotes()]} />
    </div>
  );
};

export default App;