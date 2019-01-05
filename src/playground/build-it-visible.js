class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visible: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide Details':'Show Details'}</button>
                {this.state.visible && <p>Here are the details.</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*

let visibility = false;
const details = 'Here are the details';

const toggleVisibility = () => {
    visibility = !visibility;
    renderAppTemplate();
};

const renderAppTemplate = () => {
    const appTemplate = (
        <div>
           <h1>Visibility Toggle</h1>
           <button onClick={toggleVisibility}>{visibility ? 'Hide details': 'Show details'}</button>
           {visibility && <p>{details}</p>}
        </div>
    );
    
    const rootEl = document.getElementById('app');
    
    ReactDOM.render(appTemplate, rootEl);
};

renderAppTemplate();

*/