import React from 'react'
import Header5 from '../header/Header5'

export const Calendar = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyItems: "center", flexDirection: "column", margin: "auto", gap: "3vw", margin: "5vw 0vw" }}>
            <Header5 />
            <div style={{marginTop:"6rem"}}>
                <div>
                    <img src="/images/assets/AcademicCalendar.png" alt="images render" width="950px" />
                </div>
                <div>
                    <img src="public/images/assets/AcademicClaendar2.png" alt="image render" width="950px" />
                </div>
                <div>
                    <img src="/images/assets/AcademicCalendar3.png" alt="image render" width="950px" />
                </div>

            </div>
        </div>
    )
}
