import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [valueArray, setValueArray] = useState<number[]>([0, 100])

    const callbackSetValueArray = (newNumber: number) => {
        setValueArray([newNumber, valueArray[1]])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{valueArray[0]}</span>
                <SuperRange firstValue={valueArray[0]}
                            callbackSetValueArray={callbackSetValueArray}
                />
            </div>

            <div>
                <span>{valueArray[0]}</span>
                <SuperDoubleRange valueArray={valueArray} setValueArray={setValueArray}/>
                <span>{valueArray[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
