import styles from '../styles/home.module.css'
import {Carousel,Row,Col,Card} from 'antd'
import Image from 'next/image'
const {Meta} = Card
const Home=()=>{
    const onChange=(a, b, c)=>{
        // console.log(a, b, c);
    }
    const styler=(number)=>{
        const localStyles=['location','rooms','cozy','pets']
        let myStyles=styles.contentStyle+' ';
        myStyles+=styles[localStyles[number]]
        return myStyles;
    }
    const carouselDivs=[{'text':"Location easy to find",'title':'Location'},{'text':'Rooms are as awesome as they come','title':'Rooms'},{'text':'The most comfortable rooms','title':'Cozy'},{'text':'Pets are allowed','title':'Pets'}].map((element,index)=>(
        <Row key={index} className={styler(index)}>
            <Col xs={18} sm={12} md={9} lg={6} className={styles.textDiv}>
                <h1>{element.title}</h1>
                <h3>{element.text}</h3>
            </Col>
        </Row>
    ))
    return(
        <div className={styles.home}>
            <Carousel afterChange={onChange} autoplay>
                {carouselDivs}
            </Carousel>
            <br />
            <Row>
                <Col xs={24} sm={{offset:2,span:20}} md={{offset:3,span:18}} lg={{offset:4,span:16}}>
                    <Row>
                        <Col xs={0} sm={12} lg={12} md={12} className={styles.oceanView+' '+styles.bgImagePpt}>
                        </Col>
                        <Col xs={0} sm={12} lg={12} md={12} className={styles.lgSecondDiv}>
                            <div>
                                <h1>Welcome to Triangle Inc</h1>
                                <div>Enjoy our ocean view and multiple other favorites in the deluxe and King Sized type bed rooms</div>
                            </div>
                        </Col>
                        <Col xs={{offset:2,span:20}} sm={0} lg={0} md={0}>
                        <Card
                            hoverable
                            cover={<Image width="100%" height="350px" alt="Ocean View Image" src="/images/ocean_view.jpg"  />}
                        >
                            <Meta title={<h1>Welcome to Triangle Inc</h1>} description="Enjoy our ocean view and multiple other favorites in the deluxe and King Sized type bed rooms" />
                        </Card>,
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br />
        </div>
    )
}
export default Home;