import React from 'react';
import { WeatherData } from '../../types/WeatherData';

type ResultProps = {
    data: WeatherData;
}

export default function Result({ data }: ResultProps) {
    console.log(data.city_name);

    return (
        <div>
            <p>{data.city_name}</p>
        </div>
    );
}
