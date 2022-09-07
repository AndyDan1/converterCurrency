import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFirstValue, setSecondValue} from "../../redux/slice/valueSlice"
import axios from "axios";
import SelectLanguages from "../SelectLanguages";
import SecondSelectLanguages from "../SecondSelectLanguages";
import Ua from "../../constans/svg/Ua";
import Eur from "../../constans/svg/Eur";
import Usd from "../../constans/svg/Usd";
import Gbp from "../../constans/svg/GBP";
import classes from './styles.module.scss';

const Exchange = () => {
  const [data, setData] = useState([])

  const arrFlag = [<Gbp/>, <Usd/>, <Eur/>, <Ua/>]
  const checkedId1 = useSelector((state) => state.value.checkedId1)
  const checkedId2 = useSelector((state) => state.value.checkedId2)
  const dispatch = useDispatch()


  const handleAmount1Change = (amount1) => {
    dispatch(setSecondValue(amount1 * data[checkedId1].rate / data[checkedId2].rate))
    dispatch(setFirstValue(amount1))
  }

  const handleAmount2Change = (amount2) => {
    dispatch(setSecondValue(amount2))
    dispatch(setFirstValue(amount2 * data[checkedId1].rate / data[checkedId2].rate)
    )
  }
  useEffect(() => {
    axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
      .then((res) => {
        if (res && res.data) {
          const result = res.data.filter((item) => item.cc === "USD" || item.cc === "EUR" || item.cc === "GBP");
          result.push({
            cc: "UA",
            rate: 1,
            txt: "Гривня"
          })
          result.forEach((item, index) => {
            return [
              item.img = arrFlag[index],
              item.checked = false,
              item.checkedSecond = false,
              item.id = index
            ]
          })
          setData(result)
        }
      })
  }, [])


  return (
    <div className={classes.root}>
      <SelectLanguages
        data={data}
        handleAmountChange={handleAmount1Change}
      />
      <SecondSelectLanguages
        handleAmountChange={handleAmount2Change}
        data={data}
      />
    </div>
  );
};

export default memo(Exchange);