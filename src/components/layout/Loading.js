import React from 'react'

const Loading = ({tam}) => {
    let circleCommonClasses = 'h-6 w-6 bg-blue-900 rounded-full';
    return (
        <div>
            <div className={`${tam} flex items-center justify-center`}>
                <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                <div
                    className={`${circleCommonClasses} mr-1 animate-bounce200`}
                ></div>
                <div className={`${circleCommonClasses} animate-bounce400`}></div>
            </div>
        </div>
    )
}

export default Loading
