import React from 'react'
import Clock from './Clock'

function HW9() {

//
// function superSum(num: number) {
//     if (num <= 0) return 0;
//     if (num === 1) return (n: number) => n;
//     let _args: number[] = []; // 2 ->
//     debugger
//     function helper(...args: number[]) {
//         _args = [..._args, ...args];
//         if(_args.length >= num) {
//             _args.length = num;
//             return _args.reduce((acc, number) => acc + number);
//         } else {
//             return helper;
//         }
//     }
//     return helper
// }
//     //@ts-ignore
//     console.log(superSum(4)(2)(5)(3)(6))


    return (
        <div>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
