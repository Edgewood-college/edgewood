import React from 'react'
import Header5 from '../header/Header5'
import Footer from "../../components/home-page/home-5/footer";
export const Calendar = () => {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyItems: "center", flexDirection: "column", margin: "auto", gap: "3vw", margin: "5vw 0vw" }}>
                <Header5 />
                <div style={{ marginTop: "6rem", display:"flex",flexDirection:"column",gap:"1.5rem" }}>
                    <div>
                        <img src="/images/assets/AcademicCalendar.png" alt="images render" width="950px" className='calendar_img'/>
                    </div>
                    <div>
                        <img src="public/images/assets/AcademicClaendar2.png" alt="image render" width="950px" className='calendar_img'/>
                    </div>
                    <div>
                        <img src="/images/assets/AcademicCalendar3.png" alt="image render" width="950px" className='calendar_img'/>
                    </div>

                </div>
             
            </div>
            <Footer />
        </div>
    )
}
