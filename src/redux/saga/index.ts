import {all} from 'redux-saga/effects'
import contactAsync from "./contactSaga";

 function* rootSaga() {
    yield all([
        contactAsync(),
    ])
}

export default rootSaga
