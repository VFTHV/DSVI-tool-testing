import React, { useState, useContext, useEffect } from 'react'
import { Modal } from 'react-responsive-modal'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { FilterContext } from '../../context/FilterContext'
import DHS_COLUMN from '../../public/static/color_gradient_lookup.json'
import { HeartIcon, ResetIcon } from '../SVGs'
import SidebarToggle from './SidebarToggle'
import VulnerabilityOptions from './VulnerabilityOptions'
import SocioeconLayers from './SocioeconLayers'

const Sidebar = (props) => {
  const { state, dispatch } = useContext(FilterContext)
  const areaofInterestStatus2 = state['show_area_of_interest']

  const geodata = state['geodata']
  const dataColumn = state['data_column']
  const dhsDataColumn = state['dhs_data_column']
  const selectedDataColumn = state['selected_data_column']
  const selectedDhsDataColumn = state['selected_dhs_data_column']

  const [dsvModal, setDsvModal] = useState(false)
  const [dhsModal, setDhsModal] = useState(false)
  const onCloseDsvModal = () => setDsvModal(false)
  const onCloseDhsModal = () => setDhsModal(false)

  /* COMMENT #1 (AT THE BOTTOM OF THE FILE) WAS HERE */

  useEffect(() => {
    dispatch({ type: 'FETCH_DHS_COLUMN', payload: DHS_COLUMN })
  }, [])

  // COMMENT #2 (AT THE BOTTOM OF THE FILE) WAS HERE

  return (
    <>
      <div
        className={`h-[calc(100vh-110px)] w-[330px] min-w-[100px] max-w-[500px] resize-x overflow-auto bg-white`}
        id="sidenavSecExample"
      >
        <div>
          <hr className="my-0" />
          <div className="flex h-8 items-center justify-center">
            <p className="text-l h-4 font-bold">Map Settings</p>
          </div>
          <hr className="my-2" />

          <ul className="relative px-3">
            <li className="relative">
              <SidebarToggle
                onClick={() => {
                  dispatch({ type: 'TOGGLE_RESET_SETTINGS' })
                  setTimeout(
                    () =>
                      dispatch({
                        type: 'RESET_INITIAL_STATE_SETTINGS',
                        payload: props.originalInitialState,
                      }),
                    0
                  )
                }}
              >
                <>
                  <ResetIcon />
                  <span>Reset tool</span>
                </>
              </SidebarToggle>
            </li>

            <li className="relative">
              <SidebarToggle
                onClick={() => dispatch({ type: 'TOGGLE_AREA_OF_INTEREST' })}
              >
                <>
                  <HeartIcon />
                  <span>
                    {areaofInterestStatus2 ? 'Hide' : 'Show'} Area of Interest
                  </span>
                </>
              </SidebarToggle>
            </li>
            {/* TOGGLE VULNERABILITY POINTS */}
            <VulnerabilityOptions />
            {/* socioeconomic layers in sidebar  */}

            <li>
              <SocioeconLayers />
            </li>

            <li className="relative" id="sidenavSecEx3">
              <a
                className="flex h-12 cursor-pointer items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4
                    px-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx3"
                onClick={() => dispatch({ type: 'TOGGLE_GEODATA' })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>High Res. Layers</span>
                {geodata.status == true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-16 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-16 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
              <ul
                className="accordion-collapse collapse relative"
                id="collapseSidenavSecEx3"
                aria-labelledby="sidenavSecEx3"
                data-bs-parent="#sidenavSecExample"
              >
                {geodata.status == true &&
                  geodata.data.map((val, index) => {
                    return (
                      <li className="relative" key={index}>
                        <a
                          href="#!"
                          className=" mt-3 flex h-6 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4
                              pl-12 pr-6 text-xs font-bold text-gray-700
                              transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="primary"
                        >
                          {val.title}
                        </a>
                        <DragDropContext
                          onDragEnd={(result) =>
                            dispatch({
                              type: 'DRAG_DROP_SIDEBAR_GEODATA',
                              payload: result,
                              index_1: index,
                            })
                          }
                        >
                          <Droppable droppableId={val.id.toString()}>
                            {(provided) => (
                              <ul
                                className={val.id.toString()}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {val.data &&
                                  val.data.map((val2, index2) => {
                                    return (
                                      <Draggable
                                        key={index2}
                                        draggableId={index2.toString()}
                                        index={index2}
                                      >
                                        {(provided) => (
                                          <li
                                            className="relative"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                          >
                                            <div
                                              className="i flex items-center"
                                              onClick={() => {
                                                const newItem = {
                                                  id: val2.id,
                                                  slug: val2.slug,
                                                  title: val2.title,
                                                  status: !val2.status,
                                                  value: val2.value,
                                                  layer: val2.layer,
                                                }
                                                dispatch({
                                                  type: 'CHANGE_GEODATA',
                                                  payload: newItem,
                                                  index_1: index,
                                                  index_2: index2,
                                                })
                                                dispatch({
                                                  type: 'CHANGE_ACTIVE_LEGENDS',
                                                  payload: newItem,
                                                })
                                              }}
                                            >
                                              <input
                                                className="focus:ring-3 ml-5 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300"
                                                id="flowbite"
                                                aria-describedby="flowbite"
                                                type="checkbox"
                                                checked={val2.status}
                                                onChange={(event) => {
                                                  const newItem = {
                                                    id: val2.id,
                                                    slug: val2.slug,
                                                    title: val2.title,
                                                    status: !val2.status,
                                                    value: val2.value,
                                                    layer: val2.layer,
                                                  }
                                                  dispatch({
                                                    type: 'CHANGE_GEODATA',
                                                    payload: newItem,
                                                    index_1: index,
                                                    index_2: index2,
                                                  })
                                                }}
                                              />
                                              <a
                                                href="#!"
                                                className="flex h-6 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded
                                                      py-4 pl-2 pr-6 text-xs text-gray-700
                                                      transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="primary"
                                              >
                                                {val2.title}
                                              </a>
                                            </div>
                                            {val2.status == true ? (
                                              <div className="flex flex-col space-y-2 p-2">
                                                <div className="px-6">
                                                  <span className="text-sm text-gray-700">
                                                    opacity:
                                                    <input
                                                      type="number"
                                                      className="input-sm mx-2 w-14 rounded border border-solid
                                                                border-gray-300 bg-white bg-clip-padding text-base font-normal text-gray-700
                                                                transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700
                                                                focus:outline-none"
                                                      value={parseInt(
                                                        val2.value
                                                      )}
                                                      onChange={(event) => {
                                                        const newItem = {
                                                          id: val2.id,
                                                          slug: val2.slug,
                                                          title: val2.title,
                                                          status: val2.status,
                                                          value:
                                                            event.target.value,
                                                          layer: val2.layer,
                                                        }
                                                        dispatch({
                                                          type: 'CHANGE_GEODATA',
                                                          payload: newItem,
                                                          index_1: index,
                                                          index_2: index2,
                                                        })
                                                      }}
                                                    />
                                                    <div>
                                                      <div>
                                                        <input
                                                          type="range"
                                                          min="1"
                                                          max="100"
                                                          step="1"
                                                          value={val2.value}
                                                          className="form-range h-6 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                                                          onChange={(event) => {
                                                            const newItem = {
                                                              id: val2.id,
                                                              slug: val2.slug,
                                                              title: val2.title,
                                                              status:
                                                                val2.status,
                                                              value:
                                                                event.target
                                                                  .value,
                                                              layer: val2.layer,
                                                            }
                                                            dispatch({
                                                              type: 'CHANGE_GEODATA',
                                                              payload: newItem,
                                                              index_1: index,
                                                              index_2: index2,
                                                            })
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                  </span>
                                                </div>
                                              </div>
                                            ) : null}
                                          </li>
                                        )}
                                      </Draggable>
                                    )
                                  })}
                                {provided.placeholder}
                              </ul>
                            )}
                          </Droppable>
                        </DragDropContext>
                      </li>
                    )
                  })}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Modal open={dsvModal} onClose={() => onCloseDsvModal()} center>
        <div></div>

        <div className="my-2 max-w-md overflow-y-auto rounded-lg bg-white py-4 px-8 shadow-lg">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Select Columns
          </h2>

          <hr />
          <div>
            {dataColumn.map((val, index) => {
              return (
                <div key={index}>
                  <input
                    className=" focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 px-5 focus:ring-blue-300"
                    type="radio"
                    checked={val.id == selectedDataColumn}
                    onClick={() => {
                      dispatch({ type: 'SELECT_DATA_COLUMN', payload: val.id })
                    }}
                  />

                  <span className="px-2 text-sm text-gray-700"></span>
                  {val.title}
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="inline-block rounded bg-blue-600 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              onClick={() => {
                if (selectedDataColumn == 0) {
                  alert('Select Column First')
                } else {
                  onCloseDsvModal()
                }
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={dhsModal}
        onClose={() => {
          onCloseDhsModal()
          dispatch({
            type: 'CHANGE_ACTIVE_LEGENDS',
            payload: DHS_COLUMN[selectedDhsDataColumn],
          })
        }}
        styles={{
          modal: {
            overflowY: 'visible',
            margin: 'auto',
            maxHeight: '75vh',
            maxWidth: '40vw',
            float: 'left',
            position: 'relative',
            marginLeft: '290px',
            marginTop: '85px',
          },
          overlay: { backgroundColor: 'rgb(0, 0, 0, 0)' },
        }}
      >
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Select DHS Indicator
        </h2>
        <div className="ax-w-md mx-auto rounded-xl bg-white">
          <hr />
          <div
            className="overflow-y-scroll "
            style={{ height: '50vh', width: 'auto' }}
          >
            {dhsDataColumn.map((val, index) => {
              return (
                <div key={index}>
                  <input
                    className="focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300"
                    type="radio"
                    checked={val.id == selectedDhsDataColumn}
                    onChange={() => {
                      dispatch({
                        type: 'SELECT_DHS_DATA_COLUMN',
                        payload: val.id,
                      })
                    }}
                  />
                  <span className="px-2 text-xs text-gray-700">{val.Name}</span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="inline-block rounded bg-blue-600 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              onClick={() => {
                if (selectedDhsDataColumn == 0) {
                  alert('Select Column First')
                } else {
                  onCloseDhsModal()
                  dispatch({
                    type: 'CHANGE_ACTIVE_LEGENDS',
                    payload: DHS_COLUMN[selectedDhsDataColumn],
                  })
                }
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default Sidebar

// COMMENT #1

// const { show_infoBox_data } = props
// const socioeconomic = state['socioeconomic']
// const level = state['level']
// const show_sidebar = state['show_sidebar']
// const reset_settings = state['reset_settings']
// const categories = state['categories']
// const socioEconomicLayers = state['socioeconomic']['data']
// const activeLegends = state['activeLegends']
// const vulnerability = state['vulnerability']
// const dsvIndicator = state['dsv_indicator']
// const dhsIndicator = state['dhs_indicator']
// const drawofInterestStatus = state['draw_area_of_interest']
// const statisticsStatus = state['statistics']
// const geodataLayers = state['geodata']['data']
// const onOpenDsvModal = () => setDsvModal(true)
// const onOpenDhsModal = () => setDhsModal(true)
// function handleOnDragEnd(result) {
//   if (!result.destination) return
//   const items = Array.from(socioEconomicLayers)
//   const [reorderedItem] = items.splice(result.source.index, 1)
//   items.splice(result.destination.index, 0, reorderedItem)
//   dispatch({ type: 'CHANGE_SOCIOECONOMIC', payload: items })
// }
// function handleOnDragEndCategory(result) {
//   if (!result.destination) return
//   const items = Array.from(categories)
//   const [reorderedItem] = items.splice(result.source.index, 1)
//   items.splice(result.destination.index, 0, reorderedItem)
//   dispatch({ type: 'CHANGE_CATEGORIES', payload: items })
// }

// COMMENT #2:
// /* PLS NOT USE */
// function handleOnDragEnd2(result, index) {
//   if (!result.destination) return;

//   const items = Array.from(geodataLayers);
//   const index = parseInt(result.source.droppableId) - 1;
//   const [reorderedItem] = items[index]['data'].splice(result.source.index, 1);
//   items[index]['data'].splice(result.destination.index, 0, reorderedItem);
//   dispatch({ type: "CHANGE_GEODATA", payload: items });
// }
// /* END */
