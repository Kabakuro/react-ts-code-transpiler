import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell: React.FC = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
       <div>
           <CodeEditor 
             initialValue="const a = 1;"
             onChange={(value) => setInput(value)}
           />
           <textarea 
                onChange={e => setInput(e.target.value)}
                value={input}
            >
           </textarea>
           <div>
               <button onClick={onClick}>
                   Submit
               </button>
           </div>
           <Preview code={code}/>
       </div>
    );
};

export default CodeCell;