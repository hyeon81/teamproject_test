import React from 'react';
import {useSearchParams} from "react-router-dom";
import data from "../json/question";

function ResultPage() {
    let [searchParams] = useSearchParams();
    const params = searchParams.get("res");
    let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;

    for (let c = 0; c <= params.length; c++) {
        if (params[c] === 'E')
            e++;
        else if (params[c] === 'I')
            i++;
        else if (params[c] === 'S')
            s++;
        else if (params[c] === 'N')
            n++;
        else if (params[c] === 'T')
            t++;
        else if (params[c] === 'F')
            f++;
        else if (params[c] === 'J')
            j++;
        else
            p++;
    }

    console.log(e);

    let result = [e <= 2 ? 'E' : 'I',
        s <= 2 ? 'S' : 'N',
        t <= 2 ? 'T' : 'F',
        j <= 2 ? 'J' : 'P'
    ];

    console.log(result);
    return (
        <div>This is result</div>
    )
}

export default ResultPage;