class NoteBox extends React.Component {
    // ... more code ...
    render() {
        return (
            <div className="NoteBox">
                <h1>Notes</h1>
                <NoteList data={this.state.data} />
                <NoteForm onPost={this.handlePost} />
            </div>
        );
    }
};