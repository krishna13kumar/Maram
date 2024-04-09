import ReactFlow, { Controls,
    Background,
    applyNodeChanges,
    BackgroundVariant ,
    ReactFlowProvider ,
    Panel,
    useReactFlow, } from 'reactflow';
import { useState, useCallback, useEffect } from 'react';
import 'reactflow/dist/style.css';
import StyledNode from './styledNode';
import background from '../asset/meric-dagli-7NBO76G5JsE-unsplash.jpg'
import background1 from '../asset/aron-visuals-bZZp1PmHI0E1-unsplash.jpg'
import background2 from '../asset/istockphoto-1026139608-1024x1024.jpg'

// relation mapping
const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

// data of the person
const initialNodes = [
  {
    id: '1',
    data: { label: 'Prabhakara' },
    position: { x: 100, y: 100 }, // position on graph
    type: 'avatar', // specifies the node style
  },
  {
    id: '2',
    data: { label: 'Pandiyan' },
    position: { x: 400, y: 400 },
  },
];

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
      );
    const { setViewport, zoomIn, zoomOut } = useReactFlow();
    useEffect(()=>{
        // add transition animation below
        // zoomIn({ duration: 800 })
        setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 1000 });
    },[])
  return (
    <div 
    style={{ height: '100vh', width:"100vw", 
    // backgroundImage:`url(${background2})`,backgroundRepeat:"round"
  }} 
    // className="demo-wrap"
    >
{/* custom background */}
      {/* <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div> */}
      <ReactFlow nodes={nodes} edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={{avatar: StyledNode}} // refers to the node style, add new attribute for different node styling
        fitView
      >
        {/* <Background /> graph background */}
        <Controls /> {/* graph controls */}
        {/* <Background
        id="1"
        gap={10}
        color="#f1f1f1"
        variant={BackgroundVariant.Cross}
      />
 
      <Background
        id="2"
        gap={100}
        color="#ccc"
        variant={BackgroundVariant.Lines}
      /> */}
      </ReactFlow>
    </div>
  );
}

export default Flow;
