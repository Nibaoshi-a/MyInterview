import React, { Component } from 'react';
import PictureSelect from './PictureSelect';
export default function Pictures() {
  const [value, setValue] = React.useState(['1']);
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/7/9/3/29984_2_tru01050_15.jpg',
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/2/8/3/29984_1_tru01050_12.jpg',
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/3/8/3/29984_1_tru01050_2.jpg',
    },
  ];
  console.log('图片id:  '+value.join(','))
  return (
    <>
      <div>已选择{value.length}张图片</div>
      <PictureSelect
        pictures={pictures}
        value={value}
        onChange={(value: string[]) => setValue(value)}
      />
    </>
  );
}
