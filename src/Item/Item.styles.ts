//import { CardContent } from '@material-ui/core';
//import { lightBlue } from '@material-ui/core/colors';
//import { AirlineSeatLegroomExtra, ContactPhoneTwoTone, ViewColumn } from '@material-ui/icons';
//import { findByLabelText } from '@testing-library/dom';
import styled from 'styled-components';
 
export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   width: 100%;
   border: 1px solid lightBlue;
   border-radius: 20px;
   height: 100%;
 
   button {
      border-radius: 0 0 20px 20px;
   }
   
   img{
      mzx-height: 250px;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
   }
   
   div {
      font-family: Arial, Helvetica, sans-sarif;
      padding: 1rem;
      height: 100%;
   }
   `;