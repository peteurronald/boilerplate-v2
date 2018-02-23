import React from 'react';
import {connect } from 'react-redux';

export const DashboardPage = (props) => {
    return (
        <div>  
         Dashboard page content
        </div>   
    );
};

const mapStateToProps = (state) => {
    return {
    }; 
};

export default connect(mapStateToProps)(DashboardPage);
