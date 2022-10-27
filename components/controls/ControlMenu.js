import { useContext, useState } from 'react';
import Control from 'react-leaflet-custom-control'
import { FilterContext } from '../../context/FilterContext';
import { Modal } from 'react-responsive-modal';
import Dropdown from 'react-dropdown';
import { Carousel } from 'react-responsive-carousel';
import MapControls from '../controls/MapControls';
import { Tooltip } from '@mui/material';
import { Rnd } from 'react-rnd';


const dropDownOptions = [
  'Select One', 'Vulnerability', 'GDP'
]


const ControlMenu = (props) => {
  const { position, show_data, show_sidebar_data, show_infoBox_data } = props;
  const { dispatch } = useContext(FilterContext);
  const [dropdownValue, setDropdownValue] = useState(dropDownOptions[0])
  return (<>
    <Control position={position}>
      <div className="border-black flex items-center">
        {/* <svg xmlns="http://www.w3.org/2000/svg"
                          className={`transition ease-in-out delay-150 hover:scale-110 hover:bg-white-500 duration-300 bg-white cursor-pointer border-blue-600 border-2 p-1 h-11 w-11 bg-opacity-75 ${show_data === true ? 'stroke-blue-500' : 'stroke-black-50'}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();

                              dispatch({type: "TOGGLE_SHOW_DATA", payload: {}})
                          }}>
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                      </svg> */}

        <Tooltip
          title="Trigger Info Box"
          placement='left-start'
          PopperProps={{
            sx: {
              // right: "10px !important",
              "& .MuiTooltip-tooltip": {
                color: 'black',
                backgroundColor: 'white',
                height: 40,
                borderRadius: '5px',
                fontSize: 12,
                textAlign: 'center',
              }
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className={`transition ease-in-out delay-150 hover:scale-110 hover:bg-white-500 duration-300 ml-2 cursor-pointer bg-white border-gray-600 border-2 p-1 h-11 w-11 bg-opacity-75 ${show_infoBox_data === true ? 'stroke-blue-500' : 'stroke-black-50'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            onClick={(e) => {

              e.stopPropagation();
              e.preventDefault();
              if (show_infoBox_data === false) {
                Array.from(document.getElementsByClassName("info-box")).forEach(e => e.style.display = 'block');
              }
              else {
                Array.from(document.getElementsByClassName("info-box")).forEach(e => e.style.display = "none");
              }
              console.log('dispatching');

              dispatch({ type: "TOGGLE_INFOBOX_DATA", payload: {} });

            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </Tooltip>

      </div>
    </Control>
    {props.children && <Control position={position}>
      {props.children}
    </Control>}
    <MapControls position={position} />
    {
      <div style={{ height: "100%", width: "100%" }}>
        <Rnd
          minWidth={442}
          minHeight={360}
          bounds="parent"
          className="info-box"
          style={{ display: "none", bottom: '100px', left: '-250px', top: "auto", right: "auto" }}
        >
          <button className="button-infoBox" onClick={() => {
            Array.from(document.getElementsByClassName("info-box")).forEach(e => e.style.display = "none");
            dispatch({ type: "TOGGLE_INFOBOX_DATA", payload: {} })
          }}>X</button>
          <Tabs />
          <Dropdown menuClassName='max-w-11/12 left-4p rounded-xl' controlClassName='rounded-xl w-11/12 m-auto' options={dropDownOptions} onChange={(e) => setDropdownValue(e.value)} value={dropdownValue} placeholder="Select an option" />
          <div className='max-w-md px-4 mt-5'>
            <h2 className='font-bold'>Social Vulnerability Platform</h2>
            <p className='my-3'>This tool visualizes Social Vulnerability and Data Relevant for Social Vulnerability in Tajikistan.</p>
          </div>
        </Rnd>
      </div>

    }

  </>
  )
}
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex items-start mb-3">
        <ul
          className="nav nav-tabs mr-4 flex w-1/2 list-none flex-col flex-wrap border-b-0 pl-0"
          role="tablist"
        >
          <li
            className="nav-item flex-grow text-left"
            style={{
              background: openTab === 1 ? '#9d969659' : 'transparent',
            }}
          >
            <a
              className={
                'block rounded px-5 py-3 text-xs leading-normal text-black '
              }
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(1)
              }}
              data-toggle="tab"
              href="https://sdgailab.org/"
              role="tablist"
            >
              What is Social Vulnerability
            </a>
          </li>
          <li
            className="nav-item flex-grow text-left"
            style={{
              background: openTab === 2 ? '#9d969659' : 'transparent',
            }}
          >
            <a
              className={
                'block rounded px-5 py-3 text-xs leading-normal text-black '
              }
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(2)
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Data Exploration
            </a>
          </li>
          <li
            className="nav-item flex-grow text-left"
            style={{
              background: openTab === 3 ? '#9d969659' : 'transparent',
            }}
          >
            <a
              className={
                'block rounded px-5 py-3 text-xs leading-normal text-black'
              }
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(3)
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Methods
            </a>
          </li>
        </ul>
        <div className="tab-content w-1/2">
          <div className="flex-auto px-2 py-3">
            <div
              className={`${openTab === 1 ? 'block' : 'hidden'
                } tab-pane fade show active`}
              style={{ width: '200px' }}
              id="link1"
            >
              <Carousel
                className="info_carousel"
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
              >
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg1.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg2.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg3.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg4.png"
                  alt="poverty"
                />
              </Carousel>
            </div>
            <div
              className={`${openTab === 2 ? 'block' : 'hidden'
                } tab-pane fade show active`}
              style={{ width: '200px' }}
              id="link2"
            >
              <Carousel
                className="info_carousel"
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
              >
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg1.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg2.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg3.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg4.png"
                  alt="poverty"
                />
              </Carousel>
            </div>
            <div
              className={`${openTab === 3 ? 'block' : 'hidden'
                } tab-pane fade show active`}
              style={{ width: '200px' }}
              id="link3"
            >
              <Carousel
                className="info_carousel"
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
              >
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg1.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg2.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg3.png"
                  alt="poverty"
                />
                <img
                  style={{ width: '100px' }}
                  src="https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg4.png"
                  alt="poverty"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default ControlMenu;
