import "./style.css"
import "./style-print.css"
import { itemSocials } from "./content/items";


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
                <div className="company">
                    <p>Date</p>
                    <p>COMPANY NAME</p>
                    <p>Address 1</p>
                    <p>Address 2</p>
                </div>
                <h2>Dear ________________,</h2>
                <article>
                    <p></p>
                </article>
                <div className='page-break'></div>
            </section>
        </main>

    );

}