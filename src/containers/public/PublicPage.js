import "../../script/link_page"

export const PublicPage = (props) => {
    const data = props.data;
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
    return (<>
        <div className="status course">
            <a href={props.data.link} target="blank">{props.data.title}</a>
        </div>
    </>)
}