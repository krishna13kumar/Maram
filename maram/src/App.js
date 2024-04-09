import Flow from './components/tree';
import ReactFlow, { ReactFlowProvider } from 'reactflow';
import './App.css';
import customBackground from './components/customBackground';

function App() {
  customBackground()
  return (
    <ReactFlowProvider className="App">
      <Flow/>
    </ReactFlowProvider>
  );
}

export default App;
