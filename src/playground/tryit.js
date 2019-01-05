//class try it app
class TryIt extends React.Component {
    handleAddOption() {
        console.log('from tryit component');
    }
    render() {
        const options = ['a', 'b','c'];
        return (
            <div>
                <h1>Try it!</h1>
                <OptionsList options={options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
//class list
class OptionsList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.options.map((option) => <OptionsItem key={option} optionText={option}/>)}
            </ul>
        );
    }
}
// class list item
class OptionsItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.optionText}
            </li>
        );
    }
}
//class input add option
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(evt) {
        evt.preventDefault();
        console.log(evt.target.optionField.value);
        this.props.handleAddOption();
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="optionField" />
                <button>Add Option</button>
            </form>
        );
    }
}

const jsx = (
    <div>
        <h1>Try it!</h1>
        <ul>
            <li>Option one</li>
        </ul>
        <input type="text" />
        <button>add option</button>
    </div>
);

ReactDOM.render(<TryIt />, document.getElementById('app'));