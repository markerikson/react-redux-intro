
class HelloWorld extends React.Component {
    static propTypes = {
        name : React.PropTypes.string.isRequired
    }

    render() {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
}

render(
    <HelloWorld name="Mark"/>,
    mountNode
);