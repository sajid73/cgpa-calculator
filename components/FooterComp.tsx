import { Footer } from 'antd/lib/layout/layout';
import Image from 'next/image';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const FooterComp = () => {
    return (
        <Footer className='footer'>
            <p id='connect'><span id='connectText'>connect with me</span></p>
            <div style={{ margin: '5px 0' }}><a href="https://github.com/sajid73" target="_blank"><Image alt='github' style={{ marginBottom: '-4px', marginRight: '5px' }} src={github} width='20' height={'20'} /><span style={{ height: '25px' }}>sajid73</span></a></div>
            <div><a href="https://www.linkedin.com/in/sajid73"><Image alt='linked' style={{ marginBottom: '-2px', marginRight: '5px' }} src={linkedin} width='15' height={'15'} /><span style={{ height: '25px' }}>sajid73</span></a></div>
        </Footer>
    );
};

export default FooterComp;