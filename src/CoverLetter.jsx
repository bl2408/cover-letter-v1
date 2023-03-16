import "./style.css"
import "./style-print.css"
import { itemSocials } from "./content/items";
import { BODY } from "./content/body";

import { v4 as uuid } from 'uuid';
import { COMPANY } from "./content/company";
import { DATE } from "./content/date";


export default function CoverLetter(){

    return(

        <main>
            <header>
                <h1>Brian Lambert</h1>
                <div className="tagline">
                    Passionate problem-solver with a drive to learn and grow, seeking to transition into the world of Software Engineering.
                </div>
                <div className="socials">
                {
                    itemSocials.map(item=>{
                        return (
                            <a key={item.label} className="item item-grid" href={item.to} target="_blank">
                                <div>{item.icon}</div>
                                <div>{item.label}</div>
                            </a>
                        );
                    })
                }
                </div>
            </header>
            <section>
                <div></div>
                <div className="date">
                    <p>
                        { DATE }
                    </p>
                    
                </div>
                <div className="company">
                    {
                        COMPANY.map(item=><p key={uuid()} >{item}</p>)
                    }
                </div>
                <div></div>
                <h2>Dear Hiring team,</h2>
                <article>
                    {
                        BODY.map(item=><p key={uuid()}>{item}</p>)
                    }
                    
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    <p>
                        Sincerely,<br />
                        Brian Lambert
                    </p>
                </article>
                {/* <div className='page-break'></div> */}
                
            </section>
        </main>

    );

}