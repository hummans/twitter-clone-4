import { connect } from 'react-redux';
import UserSettingPopupMenu from '../User/UserSettingPopupMenu';
import { hide } from '../actionCreators/userSettingPopup';
import { show as showModal, setup as setupModal } from '../actionCreators/modal';

const mapStateToProps = state => ({
  position: state.userSettingPopup.position,
});

const mapDispatchToProps = dispatch => ({
  hidePopup: () => dispatch(hide()),
  setModal: config => dispatch(setupModal(config)),
  showModal: () => dispatch(showModal()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSettingPopupMenu);