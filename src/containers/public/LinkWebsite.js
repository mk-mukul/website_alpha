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
    if (this.props.id !== "btech20") {
      const res = await fetch(URL + this.props.id);
      if (res.status === 404) {
        this.setState({ loading: false });
      } else {
        const data = await res.json();
        this.setState({ data: data, loading: false });
      }
    }else {
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

// data for btech 20
// semester 4

const data = [
  {
      "course": "HS 201 World Civilizations and Cultures",
      "time": [
          {
              "time": "Tue Wed Fri - 10:00 to 11:00",
              "section": [
                  {
                      "section": "Section 1: 7/209 (20110001-20110073) Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/97677099814?pwd=NlB5d0cyQ3c2Q29CVEIyWm9tU25Kdz09"
                  },
                  {
                      "section": "Section 2: 1/102 (20110075-20110154) Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/96131178645?pwd=dDlMWEl0UnVKR0pJMGhGRUJIZm9LZz09"
                  },
                  {
                      "section": "Section 3: 1/103 (20110155-20110245) Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/my/madhumita.sengupta"
                  }
              ]
          }
      ]
  },
  {
      "course": "MA 202 Mathematics IV",
      "time": [
          {
              "time": "LECTURE: Tue Thu Fri - 09:00 to 10:00",
              "section": [
                {
                    "section": "Section 1: 7/209 (20110001-20110073) Zoom Link (704803)",
                    "link": "https://iitgn-ac-in.zoom.us/j/97990407584?pwd=ekV5bDBxMU9LOWQybm14WHhCTmk5UT09"
                },
                {
                    "section": "Section 2: 1/102 (20110075-20110154) Zoom Link (704803)",
                    "link": "https://iitgn-ac-in.zoom.us/j/97990407584?pwd=ekV5bDBxMU9LOWQybm14WHhCTmk5UT09"
                },
                {
                    "section": "Section 3: 1/103 (20110155-20110245) Zoom Link (704803)",
                    "link": "https://iitgn-ac-in.zoom.us/j/97990407584?pwd=ekV5bDBxMU9LOWQybm14WHhCTmk5UT09"
                }
              ]
          },
          {
              "time": "TUTORIAL: Mon - 14:00 to 16:00",
              "section": [
                //   {
                //       "section": "Chetan Pahlajani (17110127 – 20110038) Zoom Link Passcode: 995788",
                //       "link": "https://iitgn-ac-in.zoom.us/j/92972276457?pwd=WlJRaWFqZkJzRENyM01seHlqUUtLQT09"
                //   },
                //   {
                //       "section": "Sampa Dey (20110039 – 20110077) Meet Link",
                //       "link": "https://meet.google.com/wfh-nozp-nev"
                //   },
                //   {
                //       "section": "Satyajit Pramanik (20110078 – 20110121) Zoom Link Passcode: 795185",
                //       "link": "https://iitgn-ac-in.zoom.us/j/95197071681?pwd=MktxeDExY1ZrdUlHMzNpZVlGU0xRZz09"
                //   },
                //   {
                //       "section": "Arpan Bhattacharyya (20110122 – 20110165) Zoom Link Passcode: 734727",
                //       "link": "https://iitgn-ac-in.zoom.us/j/91987721522?pwd=ZkN3ais5bzZFT2pyUWFNNXM4dmRLZz09"
                //   },
                //   {
                //       "section": "Baradhwaj Coleppa (20110166 – 20110206) Zoom Link Passcode: 106196",
                //       "link": "https://iitgn-ac-in.zoom.us/j/95932145896?pwd=cnNjZVIyZHFxZEVObVpjblJOS0tEQT09"
                //   },
                //   {
                //       "section": "Jagmohan Tyagi (20110207 – 20110245) Zoom Link",
                //       "link": "https://iitgn-ac-in.zoom.us/j/92890001746?pwd=RXRweHpQbkRORFhld29qNElaQ2owQT09"
                //   }
              ]
          }
      ]
  },
  {
      "course": "ES 202 Introduction to Materials (Except MSE)",
      "time": [
          {
              "time": "LEC: Mon Thu - 10:00 to 11:00, Wed - 09:00 to 10:00",
              "section": [
                {
                    "section": "Section 1: 7/209 (20110001-20110080) Zoom Link",
                    "link": "https://iitgn-ac-in.zoom.us/j/96526389474?pwd=bUNtSTZRajRjL0F5QXQxN0M1TGVnUT09"
                },
                {
                    "section": "Section 2: 1/102 (20110081-20110166) Zoom Link",
                    "link": "https://iitgn-ac-in.zoom.us/j/99331781507?pwd=SGY0eGRzS29qM21Ia2Q5VnI4eUVvUT09"
                },
                {
                    "section": "Section 3: 5/202 (20110167-20110245) Link to be updated",
                    // "link": "https://iitgn-ac-in.zoom.us/j/97990407584?pwd=ekV5bDBxMU9LOWQybm14WHhCTmk5UT09"
                }
              ]
          },
          {
              "time": "TUT: Wed - 16:00 to 17:00",
              "section": [
                //   {
                //       "section": "Zoom Link",
                //       "link": "https://iitgn-ac-in.zoom.us/j/92969822084"
                //   }
              ]
          }
      ]
  },
  {
      "course": "ES 221 Mechanics of Solids (CE, CL, ME, MSE)",
      "time": [
          {
              "time": "LEC: Mon Thu - 11:00 to 12:00, Wed - 12:00 to 13:00",
              "section": [
                {
                    "section": "Section 1: 1/101 (20110001-20110130) Link to be updated",
                    // "link": "https://iitgn-ac-in.zoom.us/j/96526389474?pwd=bUNtSTZRajRjL0F5QXQxN0M1TGVnUT09"
                },
                {
                    "section": "Section 2: 1/102 (20110131-20110244) Meet Link",
                    "link": "http://meet.google.com/cph-ovws-ovp"
                }
              ]
          },
          {
              "time": "TUT: Tue Fri - 12:00 to 13:00",
              "section": [
                //   {
                //       "section": "Quiz Link",
                //       "link": "https://lms.iitgn.ac.in/login/index.php"
                //   }
              ]
          }
      ]
  },
  {
      "course": "ES 212 Fluid Mechanics (CE, CL, ME, MSE)",
      "time": [
        {
            "time": "LEC: Mon Wed Fri - 08:00 to 09:00",
            "section": [
              {
                  "section": "Section 1: 6/201 (20110001-20110130) Meet Link",
                  "link": "http://meet.google.com/sgm-agst-mvb"
              },
              {
                  "section": "Section 2: 7/209 (20110131-20110244) Meet Link",
                  "link": "http://meet.google.com/sgm-agst-mvb"
              }
            ]
        },
        {
            "time": "TUT: Wed Thu - 14:00 to 15:00",
            "section": [
              //   {
              //       "section": "Quiz Link",
              //       "link": "https://lms.iitgn.ac.in/login/index.php"
              //   }
            ]
        }
    ]
  },
  {
      "course": "CE 202 Sustainability and Environment (CE)",
      "time": [
          {
              "time": "LEC: Thu - 12:00 to 13:00",
              "section": [
                  {
                      "section": "5/203 To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/98048384911?pwd=NzI1WktPOUF5VklBT2lFMmtOQktsdz09"
                  }
              ]
          },
          {
              "time": "LAB: Tue - 14:00 to 17:00",
              "section": [
                  {
                      "section": "5/203 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/7054910955?pwd=UDdKMWNLeE1VdHBjYWVoblQ4Z1hxUT09"
                  }
              ]
          }
      ]
  },
  {
      "course": "CL 251 Fluid Mechanics Lab (CL)",
      "time": [
          {
              "time": "LAB: Tue - 14:00 to 18:00",
              "section": [
                  {
                      "section": "CL Lab To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/94777918403?pwd=cHBQNXdGTG9NWXY3U3E1MFZ0UHBWdz09"
                  }
              ]
          }
      ]
  },
  {
      "course": "EE 331 Electrical Machines (EE)",
      "time": [
          {
              "time": "LEC: Mon Wed Fri - 08:00 to 09:00",
              "section": [
                  {
                      "section": "6/202 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/3383165934?pwd=RlgxYWQzbFc1RWtNRlpQYW45OWtXdz09"
                  }
              ]
          },
          {
              "time": "TUT: Thu - 15:00 to 16:00",
              "section": [
                  {
                      "section": "3/211 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/3383165934?pwd=RlgxYWQzbFc1RWtNRlpQYW45OWtXdz09"
                  }
              ]
          }
      ]
  },
  {
      "course": "ES 214 Discrete Mathematics (CS)",
      "time": [
          {
              "time": "LEC: Tue Wed Fri - 11:00 to 12:00",
              "section": [
                  {
                      "section": "5/202 To be updated",
                    //   "link": "http://meet.google.com/xmb-orck-deo"
                  }
              ]
          },
          {
              "time": "TUT: Wed - 14:00 to 15:00",
              "section": [
                  {
                      "section": "3/216 To be updated",
                    //   "link": "http://meet.google.com/yvn-posi-gkd"
                  }
              ]
          }
      ]
  },
  {
      "course": "ES 215 Computer Organization and Architecture (CS)",
      "time": [
          {
              "time": "LEC: Mon Wed Fri - 08:00 to 09:00",
              "section": [
                  {
                      "section": "5/202 To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/94430253941?pwd=ZjNRUzZrRkJmTTlka1JFK3VCTnBodz09"
                  }
              ]
          },
          {
              "time": "TUT: Thu - 11:00 to 12:00",
              "section": [
                  {
                      "section": "6/202 To be updated",
                    //   "link": "https://meet.google.com/kiv-ycxo-hah"
                  }
              ]
          }
      ]
  },
  {
      "course": "ES 216 Signals, Systems, and Networks (EE)",
      "time": [
          {
              "time": "LEC: Tue Wed Fri - 11:00 to 12:00",
              "section": [
                  {
                      "section": "6/201 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/93242854575?pwd=TGdCWUQ3T2JMZEg5LzNtUGNkV3A0Zz09"
                  }
              ]
          },
          {
              "time": "TUTORIAL: Thu - 12:00 to 13:00",
              "section": [
                  {
                      "section": "6/201 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/93242854575?pwd=TGdCWUQ3T2JMZEg5LzNtUGNkV3A0Zz09"
                  }
              ]
          }
      ]
  },
  {
      "course": "ES 301 Data Structures and Algorithms II (CS)",
      "time": [
          {
              "time": "LEC: Tue Thu Fri - 17:00 to 18:00",
              "section": [
                  {
                      "section": "1/103 To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/95585754594?pwd=TlRmYlJZanNZVml4UVkyR3JRcVhCQT09"
                  }
              ]
          },
          {
              "time": "TUT: Fri - 12:00 to 13:00",
              "section": [
                  {
                      "section": "1/103 To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/95585754594?pwd=TlRmYlJZanNZVml4UVkyR3JRcVhCQT09"
                  }
              ]
          }
      ]
  },
  {
      "course": "MSE 201 Microstructural Engineering(MSE)",
      "time": [
          {
              "time": "LEC: Tue Wed Fri - 11:00 to 12:00",
              "section": [
                  {
                      "section": "7/102 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/92662820335?pwd=Q3ZtZjk4U3JtL1JsZVV5c0pGRmhXZz09"
                  }
              ]
          },
          {
              "time": "LAB: Mon Thu - 16:00 to 18:00, Fri - 15:30 to 18:00",
              "section": [
                  {
                      "section": "MSE Lab Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/92662820335?pwd=Q3ZtZjk4U3JtL1JsZVV5c0pGRmhXZz09"
                  }
              ]
          }
      ]
  },
  {
      "course": "MSE 209 Material Thermodynamics and Kinetics (MSE)",
      "time": [
          {
              "time": "LEC: Mon - 09:00 to 10:00, Tue Thu - 08:00 to 09:00",
              "section": [
                  {
                      "section": "7/102 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/95204496900?pwd=aTAzQkVIWkpSSE9QUXhieWdZdG0ydz09"
                  }
              ]
          },
          {
              "time": "TUT: Wed - 15:00 to 16:00",
              "section": [
                  {
                      "section": "7/102 Zoom Link",
                      "link": "https://iitgn-ac-in.zoom.us/j/95204496900?pwd=aTAzQkVIWkpSSE9QUXhieWdZdG0ydz09"
                  }
              ]
          }
      ]
  },
  {
      "course": "PE 102 Physical Education",
      "time": [
          {
              "time": "To be updated",
              "section": [
                  {
                      "section": "To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/98701787639?pwd=WjRieGJtbzhSaW9zRXZZVWg2VnNjdz09"
                  }
              ]
          }
      ]
  },
  {
      "course": "IN 103 Comprehensive Viva Voce",
      "time": [
          {
              "time": "To be updated",
              "section": [
                  {
                      "section": "To be updated",
                    //   "link": "https://iitgn-ac-in.zoom.us/j/98701787639?pwd=WjRieGJtbzhSaW9zRXZZVWg2VnNjdz09"
                  }
              ]
          }
      ]
  }
]

// data for btech 20
// Semester 3

// const data_old = [
//   {
//       "course": "CH201 General Chemistry",
//       "time": [
//           {
//               "time": "Mon Wed Fri - 08:00 to 09:00",
//               "section": [
//                   {
//                       "section": "Section: 1 (20110001-20110075) Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92052350213?pwd=SldIdDlUK0t0T0dnUEJlalNJMWJBZz09"
//                   },
//                   {
//                       "section": "Section: 2  (20110076-20110164) Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/97451748039?pwd=YzIyaFpxNDdncEhLQnFJcC93NFlKZz09"
//                   },
//                   {
//                       "section": "Section: 3  (20110165-20110245) Meet Link",
//                       "link": "https://meet.google.com/lookup/bdv4wqw4nk"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "MA201 Mathematics III",
//       "time": [
//           {
//               "time": "LECTURE: Tue Thu Fri - 09:00 to 10:00",
//               "section": [
//                   {
//                       "section": "Section: 1 (20110001-20110077) Zoom Link Passcode: 847114",
//                       "link": "https://iitgn-ac-in.zoom.us/j/96388511945?pwd=UkI0RlczbVFLeG9aY2Z4MWQzbXdBQT09"
//                   },
//                   {
//                       "section": "Section: 2 (20110078-20110165) Zoom Link Passcode: MA201",
//                       "link": "https://iitgn-ac-in.zoom.us/j/94339059708?pwd=ZmFNQVA0RHVlZXZjejVpcWNKNTZwdz09"
//                   },
//                   {
//                       "section": "Section: 3 (20110166-20110245) Zoom Link Passcode: 001435",
//                       "link": "https://iitgn-ac-in.zoom.us/j/96380155769?pwd=TTNmZWh6K2ZxZFV0RUs5blVE"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Mon - 10:00 to 12:00",
//               "section": [
//                   {
//                       "section": "Chetan Pahlajani (17110127 – 20110038) Zoom Link Passcode: 995788",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92972276457?pwd=WlJRaWFqZkJzRENyM01seHlqUUtLQT09"
//                   },
//                   {
//                       "section": "Sampa Dey (20110039 – 20110077) Meet Link",
//                       "link": "https://meet.google.com/wfh-nozp-nev"
//                   },
//                   {
//                       "section": "Satyajit Pramanik (20110078 – 20110121) Zoom Link Passcode: 795185",
//                       "link": "https://iitgn-ac-in.zoom.us/j/95197071681?pwd=MktxeDExY1ZrdUlHMzNpZVlGU0xRZz09"
//                   },
//                   {
//                       "section": "Arpan Bhattacharyya (20110122 – 20110165) Zoom Link Passcode: 734727",
//                       "link": "https://iitgn-ac-in.zoom.us/j/91987721522?pwd=ZkN3ais5bzZFT2pyUWFNNXM4dmRLZz09"
//                   },
//                   {
//                       "section": "Baradhwaj Coleppa (20110166 – 20110206) Zoom Link Passcode: 106196",
//                       "link": "https://iitgn-ac-in.zoom.us/j/95932145896?pwd=cnNjZVIyZHFxZEVObVpjblJOS0tEQT09"
//                   },
//                   {
//                       "section": "Jagmohan Tyagi (20110207 – 20110245) Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92890001746?pwd=RXRweHpQbkRORFhld29qNElaQ2owQT09"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "HS221 Introduction to Philosophy",
//       "time": [
//           {
//               "time": "Mon Tue Fri - 12:00 to 13:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92969822084"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 106 Manufacturing and Workshop Practice",
//       "time": [
//           {
//               "time": "DISCUSSION: Wed - 14:30 to 15:30",
//               "section": [
//                   {
//                       "section": "Zoom Link Passcode: 377658",
//                       "link": "https://iitgn-ac-in.zoom.us/j/99827160694?pwd=cXZmTExpdVB2VEIwWHB1M05CL2EvZz09"
//                   }
//               ]
//           },
//           {
//               "time": "QUIZ: Fri - 17:30 to 18:30",
//               "section": [
//                   {
//                       "section": "Quiz Link",
//                       "link": "https://lms.iitgn.ac.in/login/index.php"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 105 Electrical and Electronics Lab",
//       "time": [
//           {
//               "time": "PRE-LAB TEACHING: Mon - 16:00 to 18:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/98822883433"
//                   }
//               ]
//           },
//           {
//               "time": "POST-LAB DISCUSSION: Thu - 16:00 to 18:00",
//               "section": [
//                   {
//                       "section": "Section: 1 Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/98822883433"
//                   },
//                   {
//                       "section": "Section: 2 Meet Link",
//                       "link": "https://meet.google.com/fyh-ambf-nfa"
//                   },
//                   {
//                       "section": "Section: 3 Meet Link",
//                       "link": "https://meet.google.com/wpf-tgkj-cud"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 211 Thermodynamics (CL, ME & MSE)",
//       "time": [
//           {
//               "time": "LECTURE: Mon - 09:00 to 10:00, Tue Thu - 08:00 to 09:00",
//               "section": [
//                   {
//                       "section": "Section: 1 Atul Bhargav Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/98048384911?pwd=NzI1WktPOUF5VklBT2lFMmtOQktsdz09"
//                   },
//                   {
//                       "section": "Section: 2 Uddipta Ghosh Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/6666205461"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Wed Fri - 11:00 to 12:00",
//               "section": [
//                   {
//                       "section": "Atul Bhargav Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92047439473?pwd=VGFBZWlWVDgwSWpTMFR1RVlOQkl5QT09"
//                   },
//                   {
//                       "section": "Soumyadip Sett Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/94875016250?pwd=TWdUOUh1TDljTHlrYUhNZDRoKy9NZz09"
//                   },
//                   {
//                       "section": "Uddipta Ghosh Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/6666205461"
//                   },
//                   {
//                       "section": "Sriharitha Rowthu Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/95269952529?pwd=US9uN1NmT3B5Q0JVZFhubVhiRmVGZz09"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 203 Digital Systems (EE & CSE)",
//       "time": [
//           {
//               "time": "LECTURE: Tue Thu - 08:00 to 09:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/94777918403?pwd=cHBQNXdGTG9NWXY3U3E1MFZ0UHBWdz09"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Mon - 09:00 to 10:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/94777918403?pwd=cHBQNXdGTG9NWXY3U3E1MFZ0UHBWdz09"
//                   }
//               ]
//           },
//           {
//               "time": "LAB: Fri - 14:00 to 17:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/94777918403?pwd=cHBQNXdGTG9NWXY3U3E1MFZ0UHBWdz09"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "EE 221 Electronic Devices (EE)",
//       "time": [
//           {
//               "time": "LECTURE: Tue Wed - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Zoom Link Passcode: 161340",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92229383572?pwd=UVVHdFZBeUtlMUFpZUpKemc3bVBuQT09"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Fri - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Zoom Link Passcode: 161340",
//                       "link": "https://iitgn-ac-in.zoom.us/j/92229383572?pwd=UVVHdFZBeUtlMUFpZUpKemc3bVBuQT09"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "CE 201 Earth Materials and Processes (CE)",
//       "time": [
//           {
//               "time": "LECTURE: Tue Thu - 08:00 to 09:00",
//               "section": [
//                   {
//                       "section": "Meet Link",
//                       "link": "http://meet.google.com/xmb-orck-deo"
//                   }
//               ]
//           },
//           {
//               "time": "LAB: Wed - 16:00 to 18:00, Fri - 16:00 to 17:00",
//               "section": [
//                   {
//                       "section": "Meet Link",
//                       "link": "http://meet.google.com/yvn-posi-gkd"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 242 Data Structures and Algorithms - I (CS)",
//       "time": [
//           {
//               "time": "LECTURE: Mon Tue - 17:30 to 18:30",
//               "section": [
//                   {
//                       "section": "Zoom Link Passcode: 065872",
//                       "link": "https://iitgn-ac-in.zoom.us/j/94430253941?pwd=ZjNRUzZrRkJmTTlka1JFK3VCTnBodz09"
//                   }
//               ]
//           },
//           {
//               "time": "LAB: Thu - 11:00 to 13:00",
//               "section": [
//                   {
//                       "section": "Lab 1 Meet Link",
//                       "link": "https://meet.google.com/kiv-ycxo-hah"
//                   },
//                   {
//                       "section": "Lab 2 Meet Link",
//                       "link": "https://meet.google.com/otz-iora-mmf"
//                   },
//                   {
//                       "section": "Lab 3 Meet Link",
//                       "link": "https://meet.google.com/mnx-rssn-dxx"
//                   },
//                   {
//                       "section": "Lab 4 Meet Link",
//                       "link": "https://meet.google.com/zqi-fvkn-eya"
//                   },
//                   {
//                       "section": "Lab 5 Meet Link",
//                       "link": "https://meet.google.com/swb-wwyf-uhb"
//                   },
//                   {
//                       "section": "Lab 6 Meet Link",
//                       "link": "https://meet.google.com/yop-ddom-oic"
//                   }
//               ]
//           },
//           {
//               "time": "Resources",
//               "section": [
//                   {
//                       "section": "Course Plan",
//                       "link": "https://people.iitgn.ac.in/~gmanoj/ES242-2021/"
//                   },
//                   {
//                       "section": "Replit",
//                       "link": "https://replit.com/team/DSA1"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "CL 201 Chemical Process Calculations (CL)",
//       "time": [
//           {
//               "time": "LECTURE: Tue - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Meet Link",
//                       "link": "https://meet.google.com/csq-zyvu-cwj"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Wed Fri - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Meet Link",
//                       "link": "https://meet.google.com/csq-zyvu-cwj"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 321 Dynamics and Vibrations (ME)",
//       "time": [
//           {
//               "time": "LECTURE: Tue Wed Fri - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/95585754594?pwd=TlRmYlJZanNZVml4UVkyR3JRcVhCQT09"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Thu - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/95585754594?pwd=TlRmYlJZanNZVml4UVkyR3JRcVhCQT09"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "course": "ES 202 Introduction to Materials (MSE)",
//       "time": [
//           {
//               "time": "LECTURE: Tue Wed Fri - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/98701787639?pwd=WjRieGJtbzhSaW9zRXZZVWg2VnNjdz09"
//                   }
//               ]
//           },
//           {
//               "time": "TUTORIAL: Thu - 10:00 to 11:00",
//               "section": [
//                   {
//                       "section": "Zoom Link",
//                       "link": "https://iitgn-ac-in.zoom.us/j/98701787639?pwd=WjRieGJtbzhSaW9zRXZZVWg2VnNjdz09"
//                   }
//               ]
//           }
//       ]
//   }
// ]

