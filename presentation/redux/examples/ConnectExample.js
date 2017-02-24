import {connect} from "react-redux";
import Account from "components/Account";
import {deposit} from "actions/transactions";

function mapStateToProps(state, ownProps) {
    return {
        balance : state.balance
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        makeDeposit : (amount) => dispatch(deposit(amount))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);