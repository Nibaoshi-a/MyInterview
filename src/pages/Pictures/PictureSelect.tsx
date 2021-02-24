import React, { Component } from 'react';
import { Image, Checkbox } from 'antd';
import './PictureSelect.less';
const PictureSelect = (props: any) => {
//   console.log(props);
  const { pictures, value, onChange } = props;

  const isChecked = (id: string) => {
    return value.indexOf(id) === -1 ? false : true;
  };
  const changeSelect=(id:string)=>{
    if(value.indexOf(id)===-1){
        value.push(id);
        // console.log(value,'1111');
    }else{
        value.splice(value.indexOf(id),1);
        // console.log(value,'2222');

    }
    onChange(value);
  }
  const render = (data: any) =>
    data.map((item: any) => {
      return (
        <div>
          <Checkbox
            defaultChecked={isChecked(item.id)}
            className="select"
            onChange={()=>changeSelect(item.id)}
          />
          <Image width="200px" src={item.url} />
        </div>
      );
    });
  return (
  <div className="box">{render(pictures)}</div>
  );
};

export default PictureSelect;
