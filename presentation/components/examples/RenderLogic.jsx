class ParentComponent extends Component {
    render() {
        // My basic render function structure:

        // 1) Extract values from props and state
        const {a, b, someBoolean, someList} = this.props;

        // 2) Render any dependent items into temporary variables,
        //    such as conditional components or lists
        const conditionalComponent = someBoolean ? <SomeComponent /> : null;
        const listItems = someList.map(item => <ListItem item={item} />);

        // 3) Use a single JSX structure, with the temporary variables in
        //    the correct spots. Note that I avoid logic inline in my JSX.
        //    Inline logic is perfectly legal, but I prefer to make the use of
        //    that logic as clear as possible by keeping it outside the JSX.
        return (
            <div>
                <div>A: {a}, B: {b}</div>
                {conditionalComponent}
                {listItems}
            </div>
        );
    }
}