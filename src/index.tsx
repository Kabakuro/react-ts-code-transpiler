import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <TextEditor />
            </div>
        </Provider>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);