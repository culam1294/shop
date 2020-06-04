import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMenuX } from '../action/SelectMenu';


export default function NotFound() {
  const dispatch = useDispatch();
  const history = useHistory();
  const goHome = () => {
    dispatch(selectMenuX(0))
    history.push("/");
  };

  return (
      <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={()=>goHome()} type="primary">Back Home</Button>}
  />
  )
}
