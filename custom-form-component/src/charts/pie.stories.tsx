import {Form, _} from "@flowable/forms";
import "@flowable/forms/flwforms.min.css";
import React from "react";
import {PieChartComponent} from "./pie.component";

export const TestStory = () =>
    <Form
        debug={true}
        payload={{}}
        Components={{
            chartPie: PieChartComponent
        }}
        config={_.sfs.parse("chartPie: label=Life size=12 col=0 [[items= || label:Awesome,value:99 || label:Stressful,value:1]]")}
    />

export default {
    title: 'PieChart'
}
