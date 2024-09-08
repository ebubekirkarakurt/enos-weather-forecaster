import React from 'react';
import '../../../styles/weather.table.styles.css';

type Props = {
    data: any;
};

export default function WeatherTable({ data }: Props) {

    function formatDate(isoDate: any) {
        const date = new Date(isoDate);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
        return formattedDate;
    }
    
    function getDayOfWeek(isoDate: any) {
        const date = new Date(isoDate);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()];
    }

    return (
        <div className="table-container">
            <h3 className="table-title">Weather Forecast for {data.city_name}</h3>
            <table cellPadding="10" cellSpacing="0" className="weather-table">
                <thead className="table-header">
                    <tr>
                        <th>Days</th>
                        <th>Dates</th>
                        <th>Lowest Temp</th>
                        <th>Highest Temp</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 7 }).map((_, rowIndex) => (
                        <tr key={rowIndex} className="table-row">
                            <td>{getDayOfWeek(data.data[rowIndex]?.datetime)}</td>
                            <td>{formatDate(data.data[rowIndex]?.datetime)}</td>
                            <td>{data.data[rowIndex]?.min_temp} °C</td>
                            <td>{data.data[rowIndex]?.max_temp} °C</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
