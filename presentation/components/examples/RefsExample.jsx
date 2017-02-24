class RefsExample extends React.Component {
    onClick = () => {
        if(this.element) {
            this.element.textContent = "Modified text content";
        }
    }

    render() {
        return (
            <div>
                <div
                    ref={ element => this.element = element }
                >
                    Rendered text content
                </div>

                <button onClick={this.onClick}>Click Me</button>
            </div>
        );
    }
}
render(<RefsExample />, mountNode);