import React from 'react';

class Base extends React.Component {
    render() { 
        return (
            <div className="card" style={{marginTop: "20px"}}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Base;