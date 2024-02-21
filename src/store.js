import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './features/employeesSlice';

/**
 * Permet de centraliser les reducer et de les utiliser
 * @type {EnhancedStore<any, UnknownAction, Tuple<[StoreEnhancer<{dispatch: ExtractDispatchExtensions<Tuple<[ThunkMiddlewareFor<S>]>>}>, StoreEnhancer]>>}
 */
const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },


});


export default store;