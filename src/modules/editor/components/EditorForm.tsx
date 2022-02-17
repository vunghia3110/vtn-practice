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
  const [list, setList] = useState<any[]>([]);
  const [isInput, setIsInput] = useState(false);
  const [listInput, setListInput] = useState<any[]>([]);

  const fetchList = () => {
    // Where we're fetching data from
    return fetch("https://jsonplaceholder.typicode.com/photos?_start=1&_end=20")
    // We get the API response and receive data in JSON format
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setList(data)
      })
      .catch ((error) => {
        console.error(error)
        setLoading(true)
      });
}

  // console.log(list[1]?.title)

  useEffect(() => {
    fetchList()
  }, []);
//   const renderList = () => {
//     const arrList: JSX.Element[] = [
//       <div className="post-item" key={''}>
//         <img src="https://via.placeholder.com/150/92c952" className="post-item-avt" />
//         <div className="post-item-title">accusamus beatae ad facilis cum similique qui sunt</div>
//       </div>
//     ];

//     return arrList;
// };
  const css = `
    #editor-form {
        margin-top: 10px;
    }
    #content-container {}
    .post-item {
      display: flex;
      // justify-content: center;
      align-items: center;
      border: 1px solid gray;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 5px;
    }
    #buttons-container {
      max-width: 100vw;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
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
      padding: 5px;
    }
    .post-item-title:hover {
      outline: solid 5px #D3D3D3;
      border-radius: 5px;
    }
`
    const toInput = () => {
      setIsInput(true); 
      setListInput([...listInput, isInput])
      console.log(listInput)
    }
    console.log(listInput)
  return (
    <form id="editor-form">
      <style>{css}</style>
      <div id="buttons-container">
        <button className="btn" key={1}>Confirm</button>
        <button className="btn" key={2}>Reset</button>
      </div>
      {loading && <div className="spinner-border spinner-border-sm text-light mr-2" role="status" />}
      <div id="content-container">
        {list.map((item, index) => (
        <div className="post-item" key={index}>
            <img src={item.url} className="post-item-avt" />
            {!isInput? 
              (
                <div className="post-item-title" onClick={toInput}>
                  {item.title}
                </div>
              )
              :(
                <input type="text" value={item.title} />
              )
            }
          </div>
          )
        )}
        {/* <div className="post-item">
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
        </div> */}
      </div>
    </form>
  );
};

export default EditorForm;