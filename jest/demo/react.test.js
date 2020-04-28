/*
 * @Descripttion: react.js测试
 * @Author: tianxiangbing
 * @Date: 2020-04-28 11:44:53
 * @LastEditTime: 2020-04-28 18:30:13
 * @github: https://github.com/tianxiangbing
 */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{shallow}  from 'enzyme';
import Test from './react';
Enzyme.configure({adapter:new Adapter()})
test('测试react组件',()=>{
    let test = shallow(<Test value="1"/>)
    console.log(test.find('div').text())
    // expect(test.prop('value')).toBe("1");
    console.log(test.props())
    console.log(test.state())
    expect(test.text()).toBe("2")
})
test('测试事件操作',()=>{
    let test = shallow(<Test value={1}/>);
    test.simulate('click')
    console.log(test.state('dv'))
    expect(test.text()).toBe("3");
    // test.html()
    test.simulate('click')
    expect(test.text()).toBe("4");
})