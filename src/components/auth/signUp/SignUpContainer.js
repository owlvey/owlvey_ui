import { connect } from "react-redux";
import SignUpView from "components/auth/signUp/SignUpView";
import { authOperations } from "ducks";

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => {
      return dispatch(authOperations.createUser(user));
    },
  };
}

export default connect(
  undefined,
  mapDispatchToProps,
)(SignUpView);
