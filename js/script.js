class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // set the default internal state
    this.state = {
      clicks: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
  }

  clickHandler() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    let children = this.props.children;

    return (
      <div className='my-component' ref='myComponentDiv'>
        <h2>My Component ({this.state.clicks} clicks)</h2>
        {this.props.headerText && <h3>{this.props.headerText}</h3>}
        {children}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
