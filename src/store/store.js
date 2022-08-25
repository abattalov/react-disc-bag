import {createStoreHook} from 'react-redux';
import bagReducer from './bagReducer';

export default createStoreHook(bagReducer);