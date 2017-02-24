class Counter extends React.Component {
    state = {counter : 0}

    onClick = () => {
        this.setState({counter : this.state.counter + 1});
    }

    render() {
        const {counter} = this.state;

        return (
            <div>
                Button was clicked:
                <div>{counter} times</div>

                <button onClick={this.onClick}>Click Me</button>
            </div>
        );
    }
}
render(<Counter />, mountNode);