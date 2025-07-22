import './work.css';
import company1 from '../../assets/company1.jpeg';
import company2 from '../../assets/company2.jpeg';
import company3 from '../../assets/company3.png';
import company4 from '../../assets/company4.png';
import company5 from '../../assets/company5.png';
import company6 from '../../assets/company6.png';
import blog1 from '../../assets/hhwblog.png';
import blog2 from '../../assets/nineblog.png';
import blog3 from '../../assets/brandietblog.png';
import link from '../../assets/link.webp';

const data = [
    { photo: company1 },
    { photo: company2 },
    { photo: company3 },
    { photo: company4 },
    { photo: company5 },
    { photo: company6 }
];
const urlData = [
    { company: "HHW", photo: blog1, url: "https://hhwhotels.com/2025/06/21/wake-up-to-the-ganga-at-hhw-haridwar-a-riverside-stay/" },
    { company: "NineHotels", photo: blog2, url: "https://ninehotels.in/nainital-workcation-at-bhikampur-lodge-by-nine-hotels/" },
    { company: "Brnadiet", photo: blog3, url: "https://brandiet.in/get-seen-or-get-lost-winning-on-google-ai-search-engines/" }
]
function work() {
    return (
        <div id='work'>
            <div className='banner2'>
                <h1>Experience</h1>
            </div>
            <div className='tagline'><h2 className='client-tagline'><span className='empowering'>Empowering</span> Brands Across Industries</h2></div>
            <div class="slider-wrapper">
                <div class="slider-track">
                    {data.map((item, index) => (
                        <img className='company-image' src={item.photo} alt="company" />
                    ))}
                </div>
                <div class="slider-track">
                    {data.map((item, index) => (
                        <img className='company-image' src={item.photo} alt="company" />
                    ))}
                </div>
            </div>
            <div className='tagline'><h2 className='client-tagline'>These <span className='empowering'>blogs</span> made SEO smile and clients cheer!</h2></div>
            <div className='blog-container'>
                {urlData.map((item, index) => (
                    <div className='blog-card'>
                        <img className='blog-image' src={item.photo} alt="blog" />
                        <a href={item.url} target="_blank" rel="noopener noreferrer"><img className='link' src={link} alt="follow link"/></a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default work;