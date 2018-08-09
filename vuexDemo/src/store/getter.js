import state from "./state";
import { stat } from "fs";

// 定义store状态的 getter函数，默认state作为getter函数的第一个参数
export const sum = state => state.sum;

// 当我们需要对getter传参时，可以通过让getter返回一个参数
export const sumWithParam = state => (param) => {return param + state.sum};