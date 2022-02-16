import React, { useEffect, useState, useCallback } from "react";
import EditorForm from "../components/EditorForm";
import logo from '../../../logo-420-x-108.png';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { fetchThunk } from "../../common/redux/thunk";
import { API_PATHS } from "../../../configs/api";
import { RESPONSE_STATUS_SUCCESS } from "../../../utils/httpResponseCode";
import { ROUTES } from "../../../configs/routes";
import { replace } from 'connected-react-router';
import { getErrorMessageResponse } from "../../../utils";

const EditorPage = () => {

  const getLocation = React.useCallback(async () => {

},[])

  return (
    <div
      className="container"
      style={{
        // height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <img src={logo} alt="" style={{ maxWidth: '250px', margin: '32px' }} /> */}

      <EditorForm />
    </div>
  );
};

export default EditorPage;