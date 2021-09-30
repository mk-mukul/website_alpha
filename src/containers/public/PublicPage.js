
// import "../style/link_page.css"
import "../../script/link_page"


export const PublicPage = (props) => {
    const data = props.data;
    //   console.log(data);
    return (
        <>
            <div id="link-page">

                <section className="body">
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <Card
                                        key={ind}
                                        data={val}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    );
};

const Card = (props) => {
    // console.log(props.data)
    return (<>
        <div className="status course">
            <a href={props.data.link} target="blank">{props.data.title}</a>
        </div>
    </>)
}

// const Timing = (props) => {
//     // console.log(props.data)
//     return (
//         <>
//             <h4 className="time">{props.data.time}</h4>
//             {
//                 props.data.section.map((val, ind) => {
//                     return (
//                         <ClassLink
//                             key={ind}
//                             data={val}
//                         />
//                     )
//                 })
//             }
//         </>
//     )
// }

// const ClassLink = (props) => {
//     // console.log(props.data)
//     return (<>
//         <h5>
//             <a href={props.data.link} target="blank">{props.data.section}</a>
//         </h5>
//     </>)
// }
