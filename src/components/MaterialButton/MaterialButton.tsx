import React from 'react';
import styles from './MaterialButton.module.scss';
import { Button, ButtonProps as MButtonProps } from '@material-ui/core';

export interface ButtonProps extends MButtonProps {
  containerId?: string;
}

const MaterialButton = ({ children, containerId, ...rest }: ButtonProps) => {
  return (
    <div id={containerId} className={styles.container}>
      <Button {...rest}>
        {children}
      </Button>
    </div>
  );
};

export { MaterialButton };
