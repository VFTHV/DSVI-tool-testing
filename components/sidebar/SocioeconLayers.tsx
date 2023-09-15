import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext'
import {
  DollarIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  AdministrativeIcon,
} from '../SVGs'
import AdminLevels from './AdminLevels'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import OpacityRange from './OpacityRange'

export type Val2 = {
  id: number
  json_library: string
  reverse_meaning: boolean
  slug: string
  status: boolean
  title: string
  units: string
  value: string
  layer: string
}

function SocioeconLayers() {
  const { state, dispatch } = useContext(FilterContext)
  const { socioeconomic } = state

  const classNames =
    'flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 text-gray-700 transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600'

  const onChange = (val2: Val2, index: number, index2: number): void => {
    const newItem = { ...val2, status: !val2.status }
    dispatch({
      type: 'CHANGE_SOCIOECONOMIC',
      payload: newItem,
      index_1: index,
      index_2: index2,
    })

    dispatch({
      type: 'CHANGE_ACTIVE_LEGENDS',
      payload: newItem,
    })
  }

  const onDragEnd = (result: DropResult, index_1: number): void => {
    dispatch({
      type: 'DRAG_DROP_SIDEBAR_SOCIOECONOMIC',
      payload: result,
      index_1,
    })
  }

  return (
    <div className="relative" id="sidenavSecEx3">
      <a
        className={`h-12 cursor-pointer px-2 text-sm ${classNames}`}
        onClick={() => dispatch({ type: 'TOGGLE_SOCIOECONOMIC' })}
      >
        <DollarIcon />
        <span>Socioeconomic Layers</span>
        {socioeconomic.status ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </a>
      {socioeconomic.status && (
        <div className="relative">
          <span className={`h-12 px-5 text-sm ${classNames}`}>
            <AdministrativeIcon />
            <span>Select administrative level</span>
          </span>
          <AdminLevels />
        </div>
      )}
      {/* COMMENT #1 (AT THE BOTTOM OF THE FILE) WAS HERE */}

      <ul className="accordion-collapse collapse relative">
        {socioeconomic.status &&
          socioeconomic.data.map((val, index) => (
            <li className="relative" key={index}>
              <a
                href="#!"
                className={`mt-3 h-6 pl-12 pr-6 text-xs font-bold ${classNames}`}
              >
                {val.title}
              </a>
              <DragDropContext onDragEnd={(result) => onDragEnd(result, index)}>
                <Droppable droppableId={val.id.toString()}>
                  {(provided) => (
                    <ul
                      className={val.id.toString()}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {val.data &&
                        val.data.map((val2, index2) => (
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
                                <div className="i flex items-center">
                                  <input
                                    className="focus:ring-3 ml-5 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300"
                                    id={val2.title}
                                    type="checkbox"
                                    checked={val2.status}
                                    onChange={() =>
                                      onChange(val2, index, index2)
                                    }
                                  />
                                  <label
                                    className={`h-6 cursor-pointer pl-2 pr-6 text-xs ${classNames}`}
                                    htmlFor={val2.title}
                                  >
                                    {val2.title}
                                  </label>
                                </div>
                                {val2.status && (
                                  <OpacityRange
                                    val2={val2}
                                    index={index}
                                    index2={index2}
                                    changeType={'SOCIOECONOMIC'}
                                  />
                                )}
                                {/* COMMENT #2 (AT THE BOTTOM OF THE FILE) WAS HERE */}
                              </li>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SocioeconLayers

// COMMENT #1:
{
  /* {socioeconomic.status == true &&
    <ul className="flex">
      {
        [{
          slug: '_sum',
          title: 'Sum'
        },
        {
          slug: '_count',
          title: 'Count'
        },
        {
          slug: '_avg',
          title: 'AVG'
        }].map((val, index) => {
          return (
            <div key={index}>
              <div className="flex" onClick={ () => { dispatch({ type: "CHANGE_SOCIOECONOMIC_DATA_COLUMN", payload: val.slug }) }}>
                <input className="ml-5  bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" type="radio"
                  checked={val.slug == socioeconomic.data_column ? true : false}
                  onChange={() => {dispatch({ type: "CHANGE_SOCIOECONOMIC_DATA_COLUMN", payload: val.slug })}}
                />
                <a href="#!" className="flex items-center text-xs  pl-2  h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">{val.title}</a>
              </div>
              <div className="text-gray-700">
              </div>
            </div>
          )
        })
      }
    </ul>
  } */
}

// COMMENT #2:
{
  /* {val2.status && (  
  <div className="flex flex-col space-y-2 p-2 px-6">
        <span className="text-sm text-gray-700">
          opacity:
          <input
            type="number"
            className={inputClassNames}
            value={parseInt(val2.value)}
            onChange={(e) =>
              onClickChange(
                val2,
                index,
                index2,
                e
              )
            }
          />
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={val2.value}
            className="form-range h-6 p-0
                  focus:shadow-none focus:outline-none focus:ring-0"
            onChange={(event) => {
              console.log(event.target.value)
              const newItem = {
                id: val2.id,
                slug: val2.slug,
                title: val2.title,
                status: val2.status,
                value: event.target.value,
                reverse_meaning:
                  val2.reverse_meaning,
                units: val2.units,
                json_library: val2.json_library,
              }
              dispatch({
                type: 'CHANGE_SOCIOECONOMIC',
                payload: newItem,
                index_1: index,
                index_2: index2,
              })
            }}
          />
        </span>
      </div>
    )} */
}