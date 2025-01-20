import {useEffect, useState} from 'react';
import {getUserList} from '../components/redux/action';
import {useDispatch, useSelector} from 'react-redux';

export const UserListController = () => {
  const dispatch = useDispatch();
  const userList = useSelector((reduxState: any) => reduxState.userReducer);
  const [flattenedUserList, setFlattenedUserList] = useState<any>([]);

  useEffect(() => {
    if (userList && flattenedUserList.length < 1) {
      const uniqueData = Array.from(
        new Set(userList.flat().map((item: any) => item.id)),
      ).map(id => userList.flat().find((item: any) => item.id === id));
      setFlattenedUserList(uniqueData);
    }
  }, [userList]);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return {
    userList,
    flattenedUserList,
  };
};
