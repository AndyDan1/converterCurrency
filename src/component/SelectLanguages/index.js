import React, {memo, useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {setFirstChecked, setFirstValue, setSecondValue} from "../../redux/slice/valueSlice";

import classes from './styles.module.scss';
import Arrow from "../../constans/svg/Arrow";

const SelectLanguages = ({data, handleAmountChange}) => {
  const [activeSelect, setActiveSelect] = useState(false)
  const [option, setOption] = useState([])
  const firstValue = useSelector((state) => state.value.firstValue)
  const secondValue = useSelector((state) => state.value.secondValue)
  const checkedId1 = useSelector((state) => state.value.checkedId1)

  const dispatch = useDispatch()
  const ref = useRef()

  const selectLanguage = (value) => {
    const newOption = data.map((item) => {
      if (item.cc === value) {
        item.checked = true
        dispatch(setFirstChecked(item.id))
      } else {
        item.checked = false
      }
      return item
    })
    setOption(newOption)
    setActiveSelect(false)
  }

  useEffect(() => {
    if (data.length) {
      dispatch(setFirstValue(secondValue / (firstValue * data[checkedId1].rate)))
    }
  }, [activeSelect])

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
    <div ref={ref} className={classes.root}>
      <div className={classes.select}>
        <div className={classes.select_currency}>
          {
            option.length
              ?
              option.map((item) => {
                if (item.checked) {
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
          className={clsx(classes.arrow,{
            [classes.arrow_active]: activeSelect
          })}
        />
        <ul className={clsx(classes.ul, {
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
      <input
        type="number"
        disabled={!option.length}
        value={firstValue}
        onChange={e => handleAmountChange(e.target.value)}
      />
    </div>
  );
};

export default memo(SelectLanguages);