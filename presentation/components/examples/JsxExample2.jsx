// Note use of className for HTML classes
const MyComponent = (props) => {
    const someString = "Something else to display";

    return (
        <div className="class1 class2">
            Hello World!
            {/* <div>Commented out code</div> */}
            <div>{someString}</div>
            <div>{28 + 14}</div>
        </div>
    );
}


// Illegal!
const BrokenComponent = () => (
    <div />
    <div />
);

