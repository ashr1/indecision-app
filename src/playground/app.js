class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        //console.log('fetching data');
        //does item exist in localstorage -> prevent null from being the new state -> if options condition
        //invalid json when parsing -> try catch
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options}));
            }
        } catch(e) {}
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    //handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((curroption) => curroption !== option)
            };
        });
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);        
    }
    handleAddOption(option) {
        if(!option){
            return 'Please enter a valid input field';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This item already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Title'
};

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>
                Remove All
            </button>
            {props.options.length === 0 && <p>Please enter an option to get started.</p>}
          {props.options.map((option) => (
            <Option 
                key={option} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
            />
          ))}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(evt) {
        evt.preventDefault();

        const textValue = evt.target.elements.optionText.value.trim();
        const error = this.props.handleAddOption(textValue);

        if(!error) {
            evt.target.elements.optionText.value = '';
        }
        
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
              <form onSubmit={this.handleAddOption}>
                <input type="text" name="optionText" />
                <button>Add Option</button>
              </form>
              {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

/*const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};*/

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));