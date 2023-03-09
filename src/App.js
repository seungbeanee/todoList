import './App.css';
import Todo from './Todo';

const todoList = [
  {
    todo1: "1번입니다",
    todo2: "2번입니다",
    todo3: "3번입니다",
    todo4: "4번입니다",
  }
]

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;
