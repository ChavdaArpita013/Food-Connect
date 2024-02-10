import React from "react";
import "./../../App.css"; 

const listdata = [
    {
        "id": 1,
        "ProviderName": "abc hotels",
        "people": 20,
        "time": "7 am",
        "Location": "Kalawad Road",
    },
    {
        "id": 2,
        "ProviderName": "abc hotels",
        "people": 20,
        "time": "7 am",
        "Location": "Kalawad Road",
    },
    {
        "id": 3,
        "ProviderName": "abc hotels",
        "people": 20,
        "time": "7 am",
        "Location": "Kalawad Road",
    },
    {
        "id": 4,
        "ProviderName": "abc hotels",
        "people": 20,
        "time": "7 am",
        "Location": "Kalawad Road",
    }
]

function ListData() {
    return (
        <div>

            {/* This table is Data of hotel or anyone who filled the DonationForm */}
            {/* Later on this will come from API */}
            <table>
                <thead>
                    <tr>
                        <th>ProviderName</th>
                        <th>No of People</th>
                        <th>Location</th>
                        <th>Time</th>
                    </tr>

                </thead>
                <tbody>
                    {listdata.map((item) => (
                        <tr key={item.id}>
                            <td>{item.ProviderName}</td>
                            <td>{item.people}</td>
                            <td>{item.Location}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListData;