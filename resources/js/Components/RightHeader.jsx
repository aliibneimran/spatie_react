import { useState } from "react";
import Modal from "./Modal";


export default function RightHeader() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
<div className="header">
  <div className="header-content">
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse justify-content-between">
        <div className="header-left">
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </a>
          </li>
          {showModal && (
            <div className="modal show fade d-block" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" id="modalBody">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">All Module</h5>
                    <button type="button" className="btn-close bg-danger p-3" onClick={handleClose} aria-label="Close">
                      {/* <span aria-hidden="true">×</span> */}
                    </button>
                  </div>
                  <div className="modal-body">
                    <Modal></Modal>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleClose}>Close</button>
                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="header-right d-flex align-items-center">
          <div className="input-group search-area">
            <input type="text" className="form-control" placeholder="Search here..." />
            <span className="input-group-text"><a href="javascript:void(0)">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_450)">
                    <path opacity="0.3" d="M14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929C14.6834 14.9024 15.3166 14.9024 15.7071 15.2929L19.7071 19.2929C20.0976 19.6834 20.0976 20.3166 19.7071 20.7071C19.3166 21.0976 18.6834 21.0976 18.2929 20.7071L14.2929 16.7071Z" fill="#452B90" />
                    <path d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23859 13.7614 6.00002 11 6.00002C8.23858 6.00002 6 8.23859 6 11C6 13.7614 8.23858 16 11 16ZM11 18C7.13401 18 4 14.866 4 11C4 7.13402 7.13401 4.00002 11 4.00002C14.866 4.00002 18 7.13402 18 11C18 14.866 14.866 18 11 18Z" fill="#452B90" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_450">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a></span>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown notification_dropdown">
              <a className="nav-link bell dz-theme-mode" href="javascript:void(0);">
                <svg id="icon-light" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <rect x={0} y={0} width={24} height={24} />
                    <path d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z" fill="#000000" fillRule="nonzero" />
                    <path d="M19.5,10.5 L21,10.5 C21.8284271,10.5 22.5,11.1715729 22.5,12 C22.5,12.8284271 21.8284271,13.5 21,13.5 L19.5,13.5 C18.6715729,13.5 18,12.8284271 18,12 C18,11.1715729 18.6715729,10.5 19.5,10.5 Z M16.0606602,5.87132034 L17.1213203,4.81066017 C17.7071068,4.22487373 18.6568542,4.22487373 19.2426407,4.81066017 C19.8284271,5.39644661 19.8284271,6.34619408 19.2426407,6.93198052 L18.1819805,7.99264069 C17.5961941,8.57842712 16.6464466,8.57842712 16.0606602,7.99264069 C15.4748737,7.40685425 15.4748737,6.45710678 16.0606602,5.87132034 Z M16.0606602,18.1819805 C15.4748737,17.5961941 15.4748737,16.6464466 16.0606602,16.0606602 C16.6464466,15.4748737 17.5961941,15.4748737 18.1819805,16.0606602 L19.2426407,17.1213203 C19.8284271,17.7071068 19.8284271,18.6568542 19.2426407,19.2426407 C18.6568542,19.8284271 17.7071068,19.8284271 17.1213203,19.2426407 L16.0606602,18.1819805 Z M3,10.5 L4.5,10.5 C5.32842712,10.5 6,11.1715729 6,12 C6,12.8284271 5.32842712,13.5 4.5,13.5 L3,13.5 C2.17157288,13.5 1.5,12.8284271 1.5,12 C1.5,11.1715729 2.17157288,10.5 3,10.5 Z M12,1.5 C12.8284271,1.5 13.5,2.17157288 13.5,3 L13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 L10.5,3 C10.5,2.17157288 11.1715729,1.5 12,1.5 Z M12,18 C12.8284271,18 13.5,18.6715729 13.5,19.5 L13.5,21 C13.5,21.8284271 12.8284271,22.5 12,22.5 C11.1715729,22.5 10.5,21.8284271 10.5,21 L10.5,19.5 C10.5,18.6715729 11.1715729,18 12,18 Z M4.81066017,4.81066017 C5.39644661,4.22487373 6.34619408,4.22487373 6.93198052,4.81066017 L7.99264069,5.87132034 C8.57842712,6.45710678 8.57842712,7.40685425 7.99264069,7.99264069 C7.40685425,8.57842712 6.45710678,8.57842712 5.87132034,7.99264069 L4.81066017,6.93198052 C4.22487373,6.34619408 4.22487373,5.39644661 4.81066017,4.81066017 Z M4.81066017,19.2426407 C4.22487373,18.6568542 4.22487373,17.7071068 4.81066017,17.1213203 L5.87132034,16.0606602 C6.45710678,15.4748737 7.40685425,15.4748737 7.99264069,16.0606602 C8.57842712,16.6464466 8.57842712,17.5961941 7.99264069,18.1819805 L6.93198052,19.2426407 C6.34619408,19.8284271 5.39644661,19.8284271 4.81066017,19.2426407 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                  </g>
                </svg>
                <svg id="icon-dark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <rect x={0} y={0} width={24} height={24} />
                    <path d="M12.0700837,4.0003006 C11.3895108,5.17692613 11,6.54297551 11,8 C11,12.3948932 14.5439081,15.9620623 18.9299163,15.9996994 C17.5467214,18.3910707 14.9612535,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C12.0233848,4 12.0467462,4.00010034 12.0700837,4.0003006 Z" fill="#000000" />
                  </g>
                </svg>	
              </a>
            </li>
            <li className="nav-item dropdown notification_dropdown">
              <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.5 12H19C19.8284 12 20.5 12.6716 20.5 13.5C20.5 14.3284 19.8284 15 19 15H6C5.17157 15 4.5 14.3284 4.5 13.5C4.5 12.6716 5.17157 12 6 12H7.5L8.05827 6.97553C8.30975 4.71226 10.2228 3 12.5 3C14.7772 3 16.6903 4.71226 16.9417 6.97553L17.5 12Z" fill="#222B40" />
                  <path opacity="0.3" d="M14.5 18C14.5 16.8954 13.6046 16 12.5 16C11.3954 16 10.5 16.8954 10.5 18C10.5 19.1046 11.3954 20 12.5 20C13.6046 20 14.5 19.1046 14.5 18Z" fill="#222B40" />
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <div id="DZ_W_Notification1" className="widget-media dz-scroll p-2" style={{height: 380}}>
                  <ul className="timeline">
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2">
                          <img alt="image" width={50} src="assets/images/avatar/1.jpg" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Dr sultads Send you Photo</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-info">
                          KG
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Resport created successfully</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-success">
                          <i className="fa fa-home" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Reminder : Treatment Time!</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2">
                          <img alt="image" width={50} src="assets/images/avatar/1.jpg" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Dr sultads Send you Photo</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-danger">
                          KG
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Resport created successfully</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-primary">
                          <i className="fa fa-home" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Reminder : Treatment Time!</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2">
                          <img alt="image" width={50} src="assets/images/avatar/1.jpg" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Dr sultads Send you Photo</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-info">
                          KG
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Resport created successfully</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-success">
                          <i className="fa fa-home" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Reminder : Treatment Time!</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2">
                          <img alt="image" width={50} src="assets/images/avatar/1.jpg" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Dr sultads Send you Photo</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-danger">
                          KG
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Resport created successfully</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2 media-primary">
                          <i className="fa fa-home" />
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Reminder : Treatment Time!</h6>
                          <small className="d-block">29 July 2020 - 02:26 PM</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a className="all-notification" href="javascript:void(0);">See all notifications <i className="ti-arrow-end" /></a>
              </div>
            </li>
            <li className="nav-item dropdown notification_dropdown">
              <a className="nav-link bell-link" href="javascript:void(0);">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              </a>
            </li>
            <li className="nav-item ps-3">
              <div className="dropdown header-profile2">
                <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="header-info2 d-flex align-items-center">
                    <div className="header-media">
                      <img src="assets/images/user.jpg" alt />
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end" style={{}}>
                  <div className="card border-0 mb-0">
                    <div className="card-header py-2">
                      <div className="products">
                        <img src="assets/images/user.jpg" className="avatar avatar-md" alt />
                        <div>
                          <h6>Hanuman Prajapati</h6>
                          <span>Web Designer</span>	
                        </div>	
                      </div>
                    </div>
                    <div className="card-body px-0 py-2">
                      <a href="app-profile-1.html" className="dropdown-item ai-icon ">
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z" stroke="var(--primary)" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ms-2">Profile </span>
                      </a>
                      <a href="page-login.html" className="dropdown-item ai-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                        <span className="ms-2">Logout </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>

  )
}
