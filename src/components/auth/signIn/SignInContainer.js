import { connect } from "react-redux";
import SignInView from "components/auth/signIn/SignInView";
import { authOperations } from "ducks";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (userName, password) => {
      dispatch(authOperations.doLogout());
      return dispatch(authOperations.doLogin(userName, password));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInView);
