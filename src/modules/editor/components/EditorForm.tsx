import React, { useEffect, useState, useCallback } from "react";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { fetchThunk } from "../../common/redux/thunk";
import { AppState } from "../../../redux/reducer";
import { Action } from 'redux';
import { GetTheList } from "../../../models/auth";

const EditorForm = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [list, setList] = useState([]);

  const getList = React.useCallback(async () => {
    const API_PATHS = 'https://jsonplaceholder.typicode.com/photos';
    const json = await dispatch(fetchThunk(API_PATHS, 'get'));
    console.log(json[0].title);
    if(json?.code === 200) {
        setList(json)
        return json;
    }
},[])
  const renderList = () => {
    const arrList: JSX.Element[] = [
      <div className="post-item" key={''}>
        <img src="https://via.placeholder.com/150/92c952" className="post-item-avt" />
        <div className="post-item-title">accusamus beatae ad facilis cum similique qui sunt</div>
      </div>
    ];

    return arrList;
};
  // console.log(getPost())
  const css = `
    #editor-form {}
    #buttons-container {}
    #content-container {}
    .post-item {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 5px;
    }
    #buttons-container {
      display: flex;
      justify-content: flex-end;
    }
    #buttons-container .btn {
      min-width: 100px;
      background-color: #E5E5E5;
      margin: 0 0 10px 10px;
    }
    .post-item-avt {
      border-radius: 50%;
      width: 100px;
    }
    .post-item-title {
      margin-left: 20px;
    }
`
  return (
    <form id="editor-form">
      <style>{css}</style>
      <div id="buttons-container">
        <button className="btn" key={1}>Confirm</button>
        <button className="btn" key={2}>Reset</button>
      </div>
      <div id="content-container">
        {renderList()}
        <div className="post-item">
          <img src="https://via.placeholder.com/150/92c952" className="post-item-avt" />
          <div className="post-item-title">accusamus beatae ad facilis cum similique qui sunt</div>
        </div>
        <div className="post-item" style={{ backgroundColor: "#e5e5e5" }}>
          <img src="https://via.placeholder.com/150/92c952" className="post-item-avt" />
          <div className="post-item-title">accusamus beatae ad facilis cum similique qui sunt</div>
        </div>
        <div className="post-item">
          <img src="https://via.placeholder.com/150/92c952" className="post-item-avt" />
          <div className="post-item-title">accusamus beatae ad facilis cum similique qui sunt</div>
        </div>
        <div className="post-item" style={{ backgroundColor: "#e5e5e5" }}>
          <img src="https://via.placeholder.com/150/92c952" className="post-item-avt" />
          <div className="post-item-title">accusamus beatae ad facilis cum similique qui sunt</div>
        </div>
      </div>
    </form>
  );
};

export default EditorForm;