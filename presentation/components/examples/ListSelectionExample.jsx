const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

const SpeakerListItem = ({speaker, selected, onClick}) => {
    const itemOnClick = () => onClick(speaker);

    const content = selected ? <b><i>{speaker}</i></b> : speaker;
    return <li onClick={itemOnClick}>{content}</li>;
}

class ListSelectionExample extends React.Component {
    state = {speakers : allSpeakers, selectedSpeaker : null}

    onSortClicked = () => {
        const sortedSpeakers = this.state.speakers.slice().sort();
        this.setState({speakers : sortedSpeakers})
    }

    onScottsClicked = () => {
        const onlyScotts = this.state.speakers.filter(name => name.startsWith("Scott"));
        this.setState({speakers : onlyScotts});
    }

    onResetClicked = () => {
        this.setState({speakers : allSpeakers, selectedSpeaker : null});
    }

    onSpeakerClicked = (speaker) => {
        this.setState({selectedSpeaker : speaker});
    }

    render() {
        const {speakers, selectedSpeaker} = this.state;

        const speakerListItems = speakers.map(speaker => (
            <SpeakerListItem
                key={speaker}
                speaker={speaker}
                selected={speaker === selectedSpeaker}
                onClick={this.onSpeakerClicked}
            />
        ));

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
render(<ListSelectionExample />, mountNode);