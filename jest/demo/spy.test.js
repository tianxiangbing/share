/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2020-04-28 17:20:33
 * @LastEditTime: 2020-04-28 17:43:31
 * @github: https://github.com/tianxiangbing
 */
import Test from './spy';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme,{shallow}  from 'enzyme';
Enzyme.configure({adapter:new Adapter()})

test('测试生命周期',()=>{
    const test = shallow(<Test/>);
    test.setProps({value:1});
    console.log(test.props())
})