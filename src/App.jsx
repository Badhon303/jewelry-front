import { useState, useEffect } from "react"
import Listitem from "./components/Listitem"

function App() {
  const [items, setItems] = useState([])
  // const [timestamp, setTimestamp] = useState(Date.now());
  const Location = [
    "Storage Room",
    "Fitting Room",
    "Repair/Service Area",
    "Entrances",
    "Display Cases",
    "Sales Counter",
    "Exits",
  ]

  // const url = "http://localhost:5173"
  // const url = "https://jewelry-front.vercel.app"

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLocations = []
      // setTimestamp(Date.now());

      while (randomLocations.length < 2) {
        const randomIndex = Math.floor(Math.random() * Location.length)
        const randomLocation = Location[randomIndex]
        if (!randomLocations.includes(randomLocation)) {
          randomLocations.push(randomLocation)
        }
      }

      setItems((prevItems) => {
        const fromLocation = randomLocations[0]
        const toLocation = randomLocations[1]
        // const timeAgo = `${elapsedTime} seconds ago`

        if (prevItems.length >= 15) {
          return [
            <Listitem
              key={Date.now()}
              fromLocation={fromLocation}
              toLocation={toLocation}
              number={Math.floor(Math.random() * 20) + 1}
              timeInMilliseconds={new Date().getTime()}
            />,
            ...prevItems.slice(0, 14),
          ]
        } else {
          return [
            <Listitem
              key={Date.now()}
              fromLocation={fromLocation}
              toLocation={toLocation}
              number={Math.floor(Math.random() * 20) + 1}
              timeInMilliseconds={new Date().getTime()}
            />,
            ...prevItems,
          ]
        }
      })
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setItems((prevItems) => {
  //       const newItems = [...prevItems]
  //       if (items.length === 8) {
  //         newItems.pop() // Remove the last item
  //       }
  //       newItems.unshift(<Listitem key={Date.now()} />) // Add a new item at the beginning
  //       return newItems
  //     })
  //   }, 5000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  return (
    <div className="page-container">
      <div className="page-header">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
          <div className="" id="navbarNav">
            <ul className="navbar-nav" id="leftNav">
              <li className="nav-item">
                <a className="nav-link" id="sidebar-toggle" href="#">
                  <i data-feather="arrow-left"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="logo">
            <a className="navbar-brand" href="index.html"></a>
          </div> */}
          <div className="" id="headerNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link search-dropdown"
                  href="#"
                  id="searchDropDown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i data-feather="search"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-lg search-drop-menu"
                  aria-labelledby="searchDropDown"
                >
                  <form>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Type something.."
                      aria-label="Search"
                    />
                  </form>
                  <h6 className="dropdown-header">Recent Searches</h6>
                  <a className="dropdown-item" href="#">
                    charts
                  </a>
                  <a className="dropdown-item" href="#">
                    new orders
                  </a>
                  <a className="dropdown-item" href="#">
                    file manager
                  </a>
                  <a className="dropdown-item" href="#">
                    new users
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link notifications-dropdown"
                  href="#"
                  id="notificationsDropDown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  3
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end notif-drop-menu"
                  aria-labelledby="notificationsDropDown"
                >
                  <h6 className="dropdown-header">Notifications</h6>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge bg-info text-white">
                          <i className="fas fa-bullhorn"></i>
                        </span>
                      </div>
                      <div className="notif-text">
                        <p className="bold-notif-text">
                          faucibus dolor in commodo lectus mattis
                        </p>
                        <small>19:00</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge bg-primary text-white">
                          <i className="fas fa-bolt"></i>
                        </span>
                      </div>
                      <div className="notif-text">
                        <p className="bold-notif-text">
                          faucibus dolor in commodo lectus mattis
                        </p>
                        <small>18:00</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge bg-success text-white">
                          <i className="fas fa-at"></i>
                        </span>
                      </div>
                      <div className="notif-text">
                        <p>faucibus dolor in commodo lectus mattis</p>
                        <small>yesterday</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge">
                          <img
                            // src={`${url}//assets/images/avatars/profile-image.png`}
                            src="/assets/images/avatars/profile-image.png"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p>faucibus dolor in commodo lectus mattis</p>
                        <small>yesterday</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge">
                          <img
                            // src={`${url}//assets/images/avatars/profile-image-3.jpg`}
                            src="/assets/images/avatars/profile-image-3.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p>faucibus dolor in commodo lectus mattis</p>
                        <small>yesterday</small>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link profile-dropdown"
                  href="#"
                  id="profileDropDown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/images/avatars/profile-image-1.png"
                    alt=""
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end profile-drop-menu"
                  aria-labelledby="profileDropDown"
                >
                  <a className="dropdown-item" href="#">
                    <i data-feather="user"></i>Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i data-feather="inbox"></i>Messages
                  </a>
                  <a className="dropdown-item" href="#">
                    <i data-feather="edit"></i>Activities
                    <span className="badge rounded-pill bg-success">12</span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <i data-feather="check-circle"></i>Tasks
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i data-feather="settings"></i>Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i data-feather="unlock"></i>Lock
                  </a>
                  <a className="dropdown-item" href="#">
                    <i data-feather="log-out"></i>Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="page-sidebar">
        <ul className="list-unstyled accordion-menu">
          <li className="sidebar-title">Main</li>
          <li className="active-page">
            <a href="index.html">
              <i data-feather="home"></i>Dashboard
            </a>
          </li>
          <li className="sidebar-title">Apps</li>
          <li>
            <a href="email.html">
              <i data-feather="inbox"></i>Email
            </a>
          </li>
          <li>
            <a href="calendar.html">
              <i data-feather="calendar"></i>Calendar
            </a>
          </li>
          <li>
            <a href="social.html">
              <i data-feather="user"></i>Social
            </a>
          </li>
          <li>
            <a href="file-manager.html">
              <i data-feather="message-circle"></i>File Manager
            </a>
          </li>
          <li className="sidebar-title">Elements</li>
          <li>
            <a href="index.html">
              <i data-feather="code"></i>Components
              <i className="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul className="">
              <li>
                <a href="alerts.html">
                  <i className="far fa-circle"></i>Alerts
                </a>
              </li>
              <li>
                <a href="typography.html">
                  <i className="far fa-circle"></i>Typography
                </a>
              </li>
              <li>
                <a href="icons.html">
                  <i className="far fa-circle"></i>Icons
                </a>
              </li>
              <li>
                <a href="badge.html">
                  <i className="far fa-circle"></i>Badge
                </a>
              </li>
              <li>
                <a href="buttons.html">
                  <i className="far fa-circle"></i>Buttons
                </a>
              </li>
              <li>
                <a href="dropdowns.html">
                  <i className="far fa-circle"></i>Dropdowns
                </a>
              </li>
              <li>
                <a href="list-group.html">
                  <i className="far fa-circle"></i>List Group
                </a>
              </li>
              <li>
                <a href="toasts.html">
                  <i className="far fa-circle"></i>Toasts
                </a>
              </li>
              <li>
                <a href="modal.html">
                  <i className="far fa-circle"></i>Modal
                </a>
              </li>
              <li>
                <a href="pagination.html">
                  <i className="far fa-circle"></i>Pagination
                </a>
              </li>
              <li>
                <a href="popovers.html">
                  <i className="far fa-circle"></i>Popovers
                </a>
              </li>
              <li>
                <a href="progress.html">
                  <i className="far fa-circle"></i>Progress
                </a>
              </li>
              <li>
                <a href="spinners.html">
                  <i className="far fa-circle"></i>Spinners
                </a>
              </li>
              <li>
                <a href="accordion.html">
                  <i className="far fa-circle"></i>Accordion
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">
              <i data-feather="gift"></i>Plugins
              <i className="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul className="">
              <li>
                <a href="block-ui.html">
                  <i className="far fa-circle"></i>Block UI
                </a>
              </li>
              <li>
                <a href="session-timeout.html">
                  <i className="far fa-circle"></i>Session Timeout
                </a>
              </li>
              <li>
                <a href="tree-view.html">
                  <i className="far fa-circle"></i>Tree View
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">
              <i data-feather="edit"></i>Form
              <i className="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul className="">
              <li>
                <a href="form-elements.html">
                  <i className="far fa-circle"></i>Form Elements
                </a>
              </li>
              <li>
                <a href="form-layout.html">
                  <i className="far fa-circle"></i>Form Layout
                </a>
              </li>
              <li>
                <a href="form-validation.html">
                  <i className="far fa-circle"></i>Form Validation
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="cards.html">
              <i data-feather="layers"></i>Cards
            </a>
          </li>
          <li>
            <a href="index.html">
              <i data-feather="list"></i>Tables
              <i className="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul className="">
              <li>
                <a href="tables.html">
                  <i className="far fa-circle"></i>Basic Tables
                </a>
              </li>
              <li>
                <a href="data-tables.html">
                  <i className="far fa-circle"></i>Data Tables
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="charts.html">
              <i data-feather="pie-chart"></i>Charts
            </a>
          </li>
          <li className="sidebar-title">Other</li>
          <li>
            <a href="index.html">
              <i data-feather="star"></i>Pages
              <i className="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul className="">
              <li>
                <a href="invoice.html">
                  <i className="far fa-circle"></i>Invoice
                </a>
              </li>
              <li>
                <a href="404.html">
                  <i className="far fa-circle"></i>404 Page
                </a>
              </li>
              <li>
                <a href="500.html">
                  <i className="far fa-circle"></i>500 Page
                </a>
              </li>
              <li>
                <a href="blank-page.html">
                  <i className="far fa-circle"></i>Blank Page
                </a>
              </li>
              <li>
                <a href="login.html">
                  <i className="far fa-circle"></i>Login
                </a>
              </li>
              <li>
                <a href="register.html">
                  <i className="far fa-circle"></i>Register
                </a>
              </li>
              <li>
                <a href="lockscreen.html">
                  <i className="far fa-circle"></i>Lockscreen
                </a>
              </li>
              <li>
                <a href="price.html">
                  <i className="far fa-circle"></i>Price
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i data-feather="check-circle"></i>Documentation
            </a>
          </li>
        </ul>
      </div>
      <div className="page-content">
        <div className="main-wrapper">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Storage Room</h5>
                  <h2 id="StorageRoom">0</h2>
                  <p>Current data of Storage Room </p>
                  <div className="progress">
                    <div
                      className="progress-bar bar1 bg-info progress-bar-striped"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Repair/Service Area</h5>
                  <h2 id="Repair">0</h2>
                  <p>Current data of Repair/Service Area</p>
                  <div className="progress">
                    <div
                      className="progress-bar bar2 bg-success progress-bar-striped"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Display Cases</h5>
                  <h2 id="Display">0</h2>
                  <p>Current data of Display Cases</p>
                  <div className="progress">
                    <div
                      className="progress-bar bar3 bg-danger progress-bar-striped"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Exits</h5>
                  <h2 id="Exits">0</h2>
                  <p>Current data of Exits</p>
                  <div className="progress">
                    <div
                      className="progress-bar bar4 bg-primary progress-bar-striped"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Jewelry Items</h5>
                  <div id="apex3"></div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 col-xl-4">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Social Media</h5>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                          <i data-feather="thumbs-up"></i>
                        </div>
                        <div className="tr-text">
                          <h4>New post reached 7k+ likes</h4>
                          <p>02 March</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                          <i data-feather="twitch"></i>
                        </div>
                        <div className="tr-text">
                          <h4>Developer AMA is now live</h4>
                          <p>01 March</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-danger text-danger">
                          <i data-feather="instagram"></i>
                        </div>
                        <div className="tr-text">
                          <h4>52 unread messages</h4>
                          <p>23 February</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-warning text-warning">
                          <i data-feather="shopping-bag"></i>
                        </div>
                        <div className="tr-text">
                          <h4>2 new orders from shop page</h4>
                          <p>17 February</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                          <i data-feather="twitter"></i>
                        </div>
                        <div className="tr-text">
                          <h4>Hashtag #circl is trending</h4>
                          <p>03 February</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-sm-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div
                    className="email-list container-fluid"
                    style={{ maxHeight: "420px", overflowY: "scroll" }}
                  >
                    <ul className="list-unstyled">{items}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8">
                      <h2>Top Jewelry Items</h2>
                    </div>
                  </div>
                  <div className="row p-4">
                    <div className="col-sm-12 col-md-6">
                      <div className="row g-3 align-items-center">
                        <div className="col-auto">
                          <label
                            htmlFor="inputSearch"
                            className="col-form-label"
                          >
                            Search
                          </label>
                        </div>
                        <div className="col-auto">
                          <input
                            type="text"
                            id="inputSearch"
                            className="form-control"
                            aria-describedby="searchHelpInline"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="table-responsive">
                      <table className="table invoice-table">
                        <thead>
                          <tr>
                            <th scope="col" style={{ textAlign: "center" }}>
                              SKU
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                              Item
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                              Out of tray/Back to tray
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              62d1b06dbecaa09a50696791
                            </td>
                            <td style={{ textAlign: "center" }}>Earrings</td>
                            <td style={{ textAlign: "center" }}>342</td>
                            <td style={{ textAlign: "center" }}>
                              <span className="badge bg-success">Sold</span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              62de7346ac54db78589e9c50
                            </td>
                            <td style={{ textAlign: "center" }}>Necklace</td>
                            <td style={{ textAlign: "center" }}>215</td>
                            <td style={{ textAlign: "center" }}>
                              <span className="badge bg-success">Sold</span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              62f8a41c023a0884ccf0fcac62
                            </td>
                            <td style={{ textAlign: "center" }}>Bracelet</td>
                            <td style={{ textAlign: "center" }}>212</td>
                            <td style={{ textAlign: "center" }}>
                              <span className="badge bg-danger">Not Sold</span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              640eef5fff9bf9db3793cb4e51
                            </td>
                            <td style={{ textAlign: "center" }}>Ring</td>
                            <td style={{ textAlign: "center" }}>211</td>
                            <td style={{ textAlign: "center" }}>
                              <span className="badge bg-success">Sold</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <nav
                    aria-label="Page navigation example"
                    style={{ marginTop: "20px" }}
                  >
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="/users">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/users">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/users">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/users">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/users">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div
                    className="modal fade"
                    id="exampleModalCenter1"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle"
                          >
                            View
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModalCenter2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabe2"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle"
                          >
                            Delete
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="modal fade"
                    id="exampleModalCenter3"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabe2"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle"
                          >
                            Create new upazilla
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="card">
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-5">
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Email"
                                      aria-label="Email"
                                      value=""
                                    />
                                  </div>
                                  <div className="col-sm">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Name"
                                      aria-label="Name"
                                      value=""
                                    />
                                  </div>
                                  <div className="col-sm">
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Password"
                                      aria-label="Password"
                                      value=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Create new upazilla
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-12 col-lg-8">
              <div className="card table-widget">
                <div className="card-body">
                  <h5 className="card-title">Recent Orders</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Invoice</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <img
                              src="/assets/images/avatars/profile-image-1.png"
                              alt=""
                            />
                            Anna Doe
                          </td>
                          <td style={{ textAlign: "center" }}>Modern</td>
                          <td style={{ textAlign: "center" }}>#53327</td>
                          <td style={{ textAlign: "center" }}>$20</td>
                          <td style={{ textAlign: "center" }}>
                            <span className="badge bg-info">Shipped</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <img
                              src="/assets/images/avatars/profile-image-2.png"
                              alt=""
                            />
                            John Doe
                          </td>
                          <td style={{ textAlign: "center" }}>Alpha</td>
                          <td style={{ textAlign: "center" }}>#13328</td>
                          <td style={{ textAlign: "center" }}>$25</td>
                          <td style={{ textAlign: "center" }}>
                            <span className="badge bg-success">Paid</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <img
                              src="/assets/images/avatars/profile-image-1.png"
                              alt=""
                            />
                            Anna Doe
                          </td>
                          <td style={{ textAlign: "center" }}>Lime</td>
                          <td style={{ textAlign: "center" }}>#35313</td>
                          <td style={{ textAlign: "center" }}>$20</td>
                          <td style={{ textAlign: "center" }}>
                            <span className="badge bg-danger">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <img
                              src="/assets/images/avatars/profile-image.png"
                              alt=""
                            />
                            John Doe
                          </td>
                          <td style={{ textAlign: "center" }}>Circl Admin</td>
                          <td style={{ textAlign: "center" }}>#73423</td>
                          <td style={{ textAlign: "center" }}>$23</td>
                          <td style={{ textAlign: "center" }}>
                            <span className="badge bg-primary">Shipped</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <img
                              src="/assets/images/avatars/profile-image-1.png"
                              alt=""
                            />
                            Nina Doe
                          </td>
                          <td style={{ textAlign: "center" }}>Space</td>
                          <td style={{ textAlign: "center" }}>#54773</td>
                          <td style={{ textAlign: "center" }}>$20</td>
                          <td style={{ textAlign: "center" }}>
                            <span className="badge bg-success">Paid</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-sm-6 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Record</h5>
                  <div id="apex1"></div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Average</h5>
                  <div id="apex2"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Tasks Overview</h5>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                          <i data-feather="user"></i>
                        </div>
                        <div className="tr-text">
                          <a href="#">
                            <h4>Project Managment</h4>
                          </a>
                          <p>Management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                          <i data-feather="user"></i>
                        </div>
                        <div className="tr-text">
                          <a href="#">
                            <h4>Design</h4>
                          </a>
                          <p>Creative</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-secondary">
                          <i data-feather="user"></i>
                        </div>
                        <div className="tr-text">
                          <a href="#">
                            <h4>Financial Accounting</h4>
                          </a>
                          <p>Finance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                          <i data-feather="user"></i>
                        </div>
                        <div className="tr-text">
                          <a href="#">
                            <h4>Testing</h4>
                          </a>
                          <p>Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                          <i data-feather="user"></i>
                        </div>
                        <div className="tr-text">
                          <a href="#">
                            <h4>Development</h4>
                          </a>
                          <p>Developers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="card">
                <img
                  src="url//assets/images/card-bg.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="card-meet-header">
                    <div className="card-meet-day">
                      <h6>WED</h6>
                      <h3>7</h3>
                    </div>
                    <div className="card-meet-text">
                      <h6>Developer AMA</h6>
                      <p>Meet project developers</p>
                    </div>
                  </div>
                  <p className="card-text m-b-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <a href="#" className="btn btn-info">
                    Join
                  </a>
                  <a href="#" className="btn btn-primary">
                    Invite
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card stat-widget">
                <div className="card-body">
                  <h5 className="card-title">Transactions</h5>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                          <i data-feather="thumbs-up"></i>
                        </div>
                        <div className="tr-text">
                          <h4>Facebook</h4>
                          <p>02 March</p>
                        </div>
                      </div>
                      <div className="tr-rate">
                        <p>
                          <span className="text-success">+ $24</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-success text-success">
                          <i data-feather="credit-card"></i>
                        </div>
                        <div className="tr-text">
                          <h4>Visa</h4>
                          <p>02 March</p>
                        </div>
                      </div>
                      <div className="tr-rate">
                        <p>
                          <span className="text-success">+ $300</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-danger text-danger">
                          <i data-feather="tv"></i>
                        </div>
                        <div className="tr-text">
                          <h4>Netflix</h4>
                          <p>02 March</p>
                        </div>
                      </div>
                      <div className="tr-rate">
                        <p>
                          <span className="text-danger">- $17</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-warning text-warning">
                          <i data-feather="shopping-cart"></i>
                        </div>
                        <div className="tr-text">
                          <h4>Themeforest</h4>
                          <p>02 March</p>
                        </div>
                      </div>
                      <div className="tr-rate">
                        <p>
                          <span className="text-danger">- $220</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-list">
                    <div className="tr-item">
                      <div className="tr-company-name">
                        <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                          <i data-feather="dollar-sign"></i>
                        </div>
                        <div className="tr-text">
                          <h4>PayPal</h4>
                          <p>02 March</p>
                        </div>
                      </div>
                      <div className="tr-rate">
                        <p>
                          <span className="text-success">+20%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
