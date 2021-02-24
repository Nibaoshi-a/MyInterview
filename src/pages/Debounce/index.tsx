import React, { Component } from 'react';
import { Input } from 'antd';
export default function Debounce() {
    const debounce = (fn:Function, wait:number) => {
        let timeout:any = null;
        return function(input:any) {
          input.persist();
          if (timeout !== null) clearTimeout(timeout);
          timeout = setTimeout(fn, wait, input);
        };
      };
     
      const search = e => {
        console.log(e.target.value);
      };
    
  return (
    <>
      <Input 
        onChange={debounce(search,1000)}
      />
    </>
  );
}
