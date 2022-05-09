import {Cell, Pie, PieChart} from "recharts";
import React from "react";

export function PieChartComponent(props) {
    const Label = props.Components.label;
    const items = props.config.extraSettings.items;

    return <div>
        <Label {...props} />
        {(items && <PieChart width={400} height={300}>
            <Pie
                data={items}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                dataKey={"value"}
                label={(entry) => entry["label"]}
            >
                <Cell fill="#3e5c41" />
                <Cell fill="#7d3333" />
            </Pie>
        </PieChart>)}
    </div>;
}
