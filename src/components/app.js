import ButtonPanel from "./buttonPanel";
import Display from "./display";
import React from "react";
import calculate from "../logic/calculate";

export default function App () {

    calculate({"next": 0,
        "operation": "+",
        "total": 0});
    return (
        <>

            <Display />

            <ButtonPanel />

        </>);

}
