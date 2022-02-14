import {takeEvery, call, put, all} from 'redux-saga/effects'
import {
    setErrorContacts,
    setSuccessContacts,
    contactTypes
} from "../reducers/contactReducer";
import axios from "axios";
import { Contact } from "../../utils/types";

function* getUsersRequestAsync(): any {
    try {
        const { data }: { data: Contact[] } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')

        yield put(setSuccessContacts(data))
    } catch (e) {
        yield put(setErrorContacts())
    }
}

function* contactAsync() {
    yield all([
        takeEvery(contactTypes.GET_CONTACTS_TYPE, getUsersRequestAsync),
    ])
}

export default contactAsync
