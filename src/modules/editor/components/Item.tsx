// Code lai code cua Duy for Studying , manh dan inbox hoi anh Tuan Le
import React from "react";
import { memo } from "react";
import { Iitem } from '../../../models/list';
import { useDispatch } from 'react-redux';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { setSingleItem } from '../redux/listReducer';
import { ThunkDispatch } from "redux-thunk";

interface Props {
  item: Iitem;
}

const Item = (prop: Props) => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const { id, title, thumbnailUrl } = prop.item;
  const [isEdit, setIsEdit] = React.useState(false);
  const [text, setText] = React.useState(title)
  // const bgColor = id % 2 === 0 ? '#d3d3d3' : '#fff';
  const bgColor = id % 2 === 0 ? 'gray' : 'white';
  const color = id % 2 === 0 ? 'white' : 'black';
  const onBlur = React.useCallback(
    (text: string) => {
      if (id && text) {
        dispatch(setSingleItem({ id: +id, value: text }));
        setIsEdit(false);
      }
    },
    [dispatch, id],
  );
  React.useEffect(() => {
    setText(title);
  }, [title]);
  const css = `
    .post-item {
      display: flex;
      background-color: ${bgColor};
      // justify-content: center;
      align-items: center;
      border: 1px solid gray;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 5px;
    }
    .post-item-avt {
      border-radius: 50%;
      width: 100px;
    }
    .post-item-content {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }
    .post-item-title {
      padding: 5px;
    }
    .post-item-title:hover {
      outline: solid 5px #D3D3D3;
      border-radius: 5px;
    }
`
  return (
    <div>
      <style>{css}</style>
      <div className="post-item">
          <img src={thumbnailUrl} className="post-item-avt" />
          <div className="post-item-content">
            {isEdit ? (
              <input
              type="text"
              style={{ borderColor: '#79CBFA', backgroundColor: bgColor, marginTop: '5px', color: color }}
              className="form-control"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              autoFocus
              onBlur={(e) => {
                onBlur(e.target.value);
              }}
            />
            ) : (
              <div 
                className="post-item-title" 
                onClick={() => setIsEdit(true)}>
                  {title}
              </div>
            )}
            <p style={{ fontSize: '15px', padding: '5px', marginBottom: '0' }}>{Date.now()}</p>
          </div>
        </div>
    </div>
  );
};

export default memo(Item);