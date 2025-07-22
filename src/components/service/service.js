import './service.css'
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import service5 from '../../assets/service5.png';
import service6 from '../../assets/service6.jpg';

const data = [
    { photo: service1, title: "Email Writing", description: "Crafting impactful, results-driven emails that engage, convert, and reflect your brand's voice with precision." },
    { photo: service2, title: "Social Media Content", description: "Scroll-stopping content made to share, like, and truly remember." },
    { photo: service3, title: "Content Strategy", description: "From blank Sheets to content calendars, I map what to say, when, where, and why." },
    { photo: service4, title: "SEO friendly Blog Writing", description: "Google loves structure. People love stories. I write for both." },
    { photo: service5, title: "Website Content", description: "Clear, compelling copy that drives clicks and conversions." },
    { photo: service6, title: "Branding Strategy/Planning", description: "Turning your chaos into a brand people crave one wild strategy session at a time." }
];
function service() {
    return (
        <div id='service'>
            <div className='banner1'>
                <h1>Most Popular Services</h1>
            </div>
            <div className='service-container'>
                <div className="grid-container">
                    {data.map((item, index) => (
                        <div className="card" key={index}>
                            <img className='image' src={item.photo} alt={item.title}/>
                            <h3 className='service-title'>{item.title}</h3>
                            <p className='service-content'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default service;