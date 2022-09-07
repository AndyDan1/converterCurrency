import React, {memo, useEffect, useRef, useState} from 'react';
import clsx from "clsx";
// import {useDispatch, useSelector} from "react-redux";
// import {setFirstChecked, setFirstValue, setSecondValue} from "../../redux/slice/valueSlice";

import classes from './styles.module.scss';
import Arrow from "../../constans/svg/Arrow";
import {useDispatch} from "react-redux";

const MySelect = ({data, handleAmountChange}) => {
  const [activeSelect, setActiveSelect] = useState(false)
  const [option, setOption] = useState([])

  const dispatch = useDispatch()

  const selectLanguage = (value) => {
    const newOption = data.map(item => {
      if (item.cc === value) {
        item.checkedSecond = true
        dispatch(setSecondChecked(item.id))
      } else {
        item.checkedSecond = false
      }
      return item
    })
    setOption(newOption)
    setActiveSelect(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(ref.current)) {
        setActiveSelect(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <div className={classes.select}>
        <div className={classes.select_currency}>

          {
            option.length
              ?
              option.map((item) => {
                if (item.checkedSecond) {
                  return (
                    <p key={item.cc}>{item.img} {item.cc}</p>
                  )
                }
                return null
              })
              :
              <p>Оберіть Валюту</p>
          }

        </div>
        <Arrow
          onClick={() => setActiveSelect(!activeSelect)}
          className={clsx({
            [classes.arrow]: activeSelect
          })}
        />
        <ul
          className={clsx(classes.ul, {
            [classes.active]: activeSelect
          })}>
          {data.map(item => (
            <li key={item.cc}
                onClick={() => selectLanguage(item.cc)}
            >
              {item.img}
              <p>{item.cc}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(MySelect);