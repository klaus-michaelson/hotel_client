import styles from '../styles/coverpage.module.css'
import {Row, Col, Button} from 'antd'
import Link from 'next/Link'
const CoverPage=()=>{
    return <div className={styles.coverPage}>
        <Row>
            <Col className={styles.colStyle} sm={{offset:2,span:22}} md={{offset:4,span:18}} lg={{offset:6,span:14}}>
                <h1 className={styles.title}>
                    Book Your Holidays
                </h1>
                <h2 className={styles.subText}>
                    Lorem Ipsum is just a dummy text of the printing and typesetting industry.
                </h2>
                <Button type="default" size="large"><Link className={styles.myLink} href='/home'>Home Page</Link></Button>
            </Col>
        </Row>
    </div>
}
export default CoverPage;