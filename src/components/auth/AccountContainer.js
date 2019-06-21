import { connect } from "react-redux";
import Account from "components/auth/Account";
import { authOperations } from "ducks";

function mapStateToProps(state) {
  const keys = Object.values(state.entity.key);
  return {
    user: state.auth.user,
    keys: keys
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewKey: () => {
      dispatch(authOperations.addKey())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
