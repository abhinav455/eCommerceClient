import axios from "axios";
import {GET_PRODUCTS, PRODUCT_ERROR, GET_PRODUCT} from "./types";
import {getServer} from "../util";

export const getProducts = () => async dispatch => {
    try{
        const res = await axios.get(`${getServer()}/api/products`);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        })
    } catch(err) {

        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response },
        })
    }
}

export const addProduct = (productData, navigate) => async dispatch => {
    const config = {
        headers:{
            "Content-Type": "application/json",          
        },     
    };
    try{
        await axios.post(`${getServer()}/api/products`, productData, config);
        navigate("/dashboard/products");

    } catch(err){
        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response },
        })
    }
};


export const getInstructorProducts = (id) => async dispatch =>{
    try{
        const res = await axios.get(`${getServer()}/api/products/instructors/${id}`);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        })
    } catch(err){
        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response },
        })
    }
};


export const getProduct = (id) => async dispatch =>{
    try{
        const res = await axios.get(`${getServer()}/api/products/${id}`);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data,
        })
    } catch(err){
        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response },
        })
    }
};