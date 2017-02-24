const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

class ListsExample extends React.Component {
    state = {speakers : allSpeakers}

    onSortClicked = () => {
        const sortedSpeakers = this.state.speakers.slice().sort();
        this.setState({speakers : sortedSpeakers})
    }

    onScottsClicked = () => {
        const onlyScotts = this.state.speakers.filter(name => name.startsWith("Scott"));
        this.setState({speakers : onlyScotts});
    }

    onResetClicked = () => {
        this.setState({speakers : allSpeakers});
    }

    render() {
        const {speakers} = this.state;

        const speakerListItems = speakers.map(speaker =>
            <li key={speaker}>{speaker}</li>
        );

        return (
            <div>
                <button onClick={this.onSortClicked}>Sort List</button>
                <br />
                <button onClick={this.onScottsClicked}>Scotts Only</button>
                <br />
                <button onClick={this.onResetClicked}>Reset List</button>
                <ul>
                    {speakerListItems}
                </ul>
            </div>
        );
    }
}
render(<ListsExample />, mountNode);