import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessage} from './../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => { 
    return {
        listData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
    }
}

export default compose
    (
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect,
    )(Dialogs);;