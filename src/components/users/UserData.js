import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getItems } from '../../actions/itemActions'

class UserData extends Component {

    componentDidMount(){
        console.log('kkkk')
        this.props.getItems()
    }

    render() { 

        const { items } = this.props.items
        return ( 
            <div style={{
                margin : '10px',
                border : '2px solid #ec'
            }}>

              

                <Table hover responsive striped bordered>
                
                <tbody>
                
                 {items.data.map((item) => {
                     return(
                         <tr key={item._id}>
                            <td>{item.item_name}</td>
                            <td>{item.item_price}</td>
                        </tr>
                     )
                 })}
                 </tbody>
                </Table>

            </div>
         );
    }
}
 
UserData.propTypes = {
    getItems : PropTypes.func.isRequired
    ,
    items : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    items : state.items
})

export default connect(mapStateToProps, { getItems })(UserData);