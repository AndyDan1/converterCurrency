import React, {memo, useEffect, useState} from 'react';
import classes from './styles.module.scss';
import Container from "../Container";
import {useGetCurrentQuery} from "../../features/apiSliceCurrent";

const Header = () => {
  const {data = [], isLoading, isSuccess} = useGetCurrentQuery()
  let current
  if (isLoading) {
    current = <li><p>Loading...</p></li>
  } else if (isSuccess) {
    const arrFilter = data.filter((item) => item.cc === "USD" || item.cc === "EUR" || item.cc === "GBP")
    current = arrFilter.map(item=><li  key={item.cc}> <p>{item.cc}</p> <span>{item.rate} UAH</span></li>)
  }
  return (
    <header className={classes.root}>
      <Container className={classes.container}>
        <h1>Convertio</h1>
        <ul>
          {current}
        </ul>
      </Container>
    </header>
  );
};

export default memo(Header);