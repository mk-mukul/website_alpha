import React from "react";
import { LinkPage } from "./LinkPage";
import { PublicPage } from "../public/PublicPage";
import { Loading } from "../../components/Loading";

const URL = process.env.REACT_APP_SERVER + "/link/";
export default class LinkWebsite extends React.Component {
  state = {
    loading: true,
    data: null,
  };

  async componentDidMount() {
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
          <Loading />
        ) : (
          <>
            {this.state.data ? (
              <>
                {this.props.id !== "btech20" ? (
                  <div className="min-h-screen bg-background-101">
                    <PublicPage data={this.state.data} />
                  </div>
                ) : (
                  <div className="min-h-screen bg-background-401">
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
