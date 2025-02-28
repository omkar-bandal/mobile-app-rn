import { bindActionCreators } from '@reduxjs/toolkit';
import { counterActions } from '../../store/slices';
import { useAppDispatch } from './useAppDispatch';

const useStateActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(
    {
      ...counterActions,
    },
    dispatch,
  );
};

export default useStateActions;
