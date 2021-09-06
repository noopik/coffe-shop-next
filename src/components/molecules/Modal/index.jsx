import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import { Button } from '../../atoms';
import PropTypes from 'prop-types';
import { Breakpoints } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ModalAlertValidation({ show, onClose, actionDelete }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={show}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <StyledModalDeleteAlert>
            <h1>Are you sure want to delete the selected items?</h1>
            <div className="btn-wrapper">
              <Button theme="brown" className="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button theme="brown" onClick={actionDelete}>
                Delete
              </Button>
            </div>
          </StyledModalDeleteAlert>
        </Fade>
      </Modal>
    </div>
  );
}
ModalAlertValidation.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  actionDelete: PropTypes.func.isRequired,
};

const StyledModalDeleteAlert = styled.div`
  padding: 50px 60px;
  border-radius: 20px;
  background: #ffffff;
  max-width: 600px;
  ${Breakpoints.lessThan('sm')`
      flex-direction: column-reverse;
      gap: 1rem;
      margin: 0 20px;
    `}
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #000000;
    ${Breakpoints.lessThan('xsm')`
          font-size: 24px;
    `}
  }
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    ${Breakpoints.lessThan('sm')`
      flex-direction: column-reverse;
      gap: 1rem;
    `}
    button {
      width: 194px;
      ${Breakpoints.lessThan('sm')`
        width: 100%; 
      `}
      &.outline {
        background-color: transparent;
        border: 3px solid #6a4029;
        box-shadow: none;
        color: #6a4029;
      }
    }
  }
`;
