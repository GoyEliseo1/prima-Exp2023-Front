import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import backgroundImage from '../images/ola.png';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    color: 'white',
    height: 200,
    width: 200,
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 100,
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  },
}));

const CustomButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} onClick={onClick}>
      Click me!
    </Button>
  );
};

export default CustomButton;