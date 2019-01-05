console.log("hello from app.js");

const appInfo = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
};

const removeAllOptions = () => {
    appInfo.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNumber];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? 'Here are the options' : 'No options'}</p>
            <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {appInfo.options.map((anOption) => <li key={anOption}>{anOption}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderApp();



//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public