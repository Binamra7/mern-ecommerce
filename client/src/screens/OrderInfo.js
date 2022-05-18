import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";

function OrderInfo() {
	const dispatch = useDispatch();
	const orderId = useParams().orderid;
	useEffect(() => {
		dispatch(getOrderById(orderId));
	}, []);
	const orderstate = useSelector((state) => state.getOrderByIdReducer);
	console.log("orderId", orderId);

	return <div>OrderInfo of {orderId}</div>;
}

export default OrderInfo;
