import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const itemSocials = [
    { icon: <FontAwesomeIcon icon={faAt}/>, label: "hi@brianlambert.dev", to: "mailto:hi@brianlambert.dev" },
    { icon: <FontAwesomeIcon icon={faPhone}/>, label: "0430 538 384", to: "tel:0430538384" },
    { icon: <FontAwesomeIcon icon={faLocationDot}/>, label: "Melbourne, Vic" },
    { icon: <FontAwesomeIcon icon={faGlobe}/>, label: "brianlambert.dev", to: "https://www.brianlambert.dev" },
    { icon: <FontAwesomeIcon icon={faGithub}/>, label: "@bl2408", to: "https://github.com/bl2408" },
    { icon: <FontAwesomeIcon icon={faLinkedin}/>, label: "/bl24", to : "https://www.linkedin.com/in/bl24/" },
];
