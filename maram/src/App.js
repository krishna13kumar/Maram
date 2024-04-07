import Flow from './components/tree';
import ReactFlow, { ReactFlowProvider } from 'reactflow';
import './App.css';

function App() {
  return (
    <ReactFlowProvider className="App">
      <Flow/>
    </ReactFlowProvider>
  );
}

export default App;
