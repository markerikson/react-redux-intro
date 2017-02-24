// Presentational component: simply displays supplied data
const SpeakerListItem = ({speaker, selected, onClick}) => {
    const itemOnClick = () => onClick(speaker);

    const content = selected ? <b>{speaker}</b> : speaker;
    return <li onClick={itemOnClick}>{content}</li>;
}

// Container component: controls data and passes it down
class ListSelectionExample extends React.Component {
    state = {speakers : allSpeakers, selectedSpeaker : null}

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
                <ul>{speakerListItems}</ul>
            </div>
        );
    }
}
