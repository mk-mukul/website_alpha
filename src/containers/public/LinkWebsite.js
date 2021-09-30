// require("dotenv").config();
import React from "react";
import { LinkPage } from "./LinkPage";
import { PublicPage } from "../public/PublicPage";
// import { Redirect} from "react-router-dom";

const URL = process.env.REACT_APP_SERVER+"/link/";
// console.log(URL)

export default class LinkWebsite extends React.Component {
  state = {
    loading: true,
    data: null,
  };

  async componentDidMount() {
    // console.log(this.props.id)
    const res = await fetch(URL + this.props.id);
    if (res.status === 404) {
      this.setState({ loading: false });
    } else {
      const data = await res.json();
      this.setState({ data: data, loading: false });
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <section className="main_body">
            <h2> Loading... </h2>
          </section>
        ) : (
          <>
            {this.state.data ? (
              <>
                {this.props.id !== "btech20" ? (
                  <div>
                    <PublicPage data={this.state.data} />
                  </div>
                ) : (
                  <div>
                    <LinkPage data={this.state.data} />
                  </div>
                )}
              </>
            ) : (
              <>
                <section className="main_body">
                  <h2>Page not found</h2>
                </section>
                {/* <Redirect to="/" /> */}
              </>
            )}
          </>
        )}
      </>
    );
  }
}
