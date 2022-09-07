import React, {memo} from 'react';
import classes from './styles.module.scss';
import clsx from "clsx";

const Container = ({children, className}) => {
  return (
    <div className={clsx(classes.root, className)}>
      {children}
    </div>
  );
};

export default Container;