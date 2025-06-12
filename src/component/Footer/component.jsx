import './style.css'

import Logo from '../../assets/Logo.png'

import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t} = useTranslation()

  return (
    <footer>
        <div className="container flex">
            <div className="about flex">
                <img width="130px" src={Logo} alt="" />
                <p>{t('footer.slogan')}</p>
                <h6>{t('footer.copyright')}</h6>
            </div>

            <ul className='flex'>
                <h4>{t('footer.destinations')}</h4>
                <li>{t('footer.africa')}</li>
                <li>{t('footer.antarctica')}</li>
                <li>{t('footer.asia')}</li>
                <li>{t('footer.europe')}</li>
                <li>{t('footer.america')}</li>
            </ul>

            <ul className='flex'>
                <h4>{t('footer.interests')}</h4>
                <li>{t('footer.adventure_travel')}</li>
                <li>{t('footer.art_and_culture')}</li>
                <li>{t('footer.wildlife_and_nature')}</li>
                <li>{t('footer.family_holidays')}</li>
                <li>{t('footer.food_and_drink')}</li>
            </ul>

            <ul className="flex">
                <h4>{t('footer.contact_us')}</h4>
                <div className="flex">
                    <a href="https://x.com/"><RiTwitterXLine className='icon'/></a>
                    <a href="https://www.facebook.com/"><FaFacebookF className='icon'/></a>
                    <a href="https://www.instagram.com/"><FaInstagram className='icon'/></a>
                    <a href="https://www.linkedin.com/"><FaLinkedinIn className='icon'/></a>
                    <a href="https://www.youtube.com/"><FaYoutube className='icon'/></a>
                </div>
            </ul>

            <h6 className='rights'>©2025 Ziraat M Tour. All rights reserved</h6>
        </div>
    </footer>
  )
}

export default Footer;