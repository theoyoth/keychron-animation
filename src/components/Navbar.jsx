import {motion} from 'framer-motion'

function Navbar() {
    const navigation = {
        init:{
            y:-50,
        },
        visible:{
            y:0,
            transition:{
                delay:1.6,
                ease:"easeIn",
                duration:1,
            }
        }
    }
  return (
    <div>
        <motion.nav
        variants={navigation}
        initial="init"
        animate="visible"
        >
            <div className="nav-menu">
                <a href="https://www.keychron.com/" target='__blank' className='logo-link'><img src="/logo.webp" alt="logo" />Keychron</a>
                <ul>
                    <li className="home"><a href="#" >Home</a></li>
                    <li className="product"><a href="#" >Product</a></li>
                    <li className="about"><a href="#" >About</a></li>
                    <li className="contact"><a href="#" >Contact</a></li>
                </ul>
            </div>
        </motion.nav>
    </div>
  )
}

export default Navbar