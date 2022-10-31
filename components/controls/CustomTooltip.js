// This file controls the shown information in the tooltipbox when hovering with the mouse over socioeconomic layers!

import { Tooltip } from "react-leaflet"

const CustomTooltip=(props)=>{
    const {direction,offset,opacity,count,bgcolor,textcolor,show_data,tooltipName_1,tooltipName_2, tooltipName_3, 
        normalizeDataValue, units, _mean, minMeanNumber, maxMeanNumber}=props;
    
    // const bg = getComputedStyle(document.documentElement).getPropertyValue('--custom_bg_color');
    // document.documentElement.style.setProperty('--custom_bg_color', bgcolor);
  
    return (
        <Tooltip direction={direction} offset={offset} className={`p-0 m-0 border-none`}>
            <p className={`p-1 ${textcolor}`}>
                {tooltipName_1 == null ? 'Oblast: no data' : `Oblast: ${tooltipName_1}`}
                <br/>
                {tooltipName_2 == null ? 'District: no data' : `District: ${tooltipName_2}`}
                <br/>
                {_mean == null ? 'Value: no data' : `Value: ${_mean} ${units}`}
                <br/>
            </p>
        </Tooltip>
    );
}
export default CustomTooltip;