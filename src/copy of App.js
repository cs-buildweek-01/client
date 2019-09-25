import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'react-vis';
import room_data from './data/room_data';
import styled from 'styled-components';

const Styles = styled.div`
  .wrap {
    max-width: 800px;
    width: 700px;
    max-height: 500px;
  }
  .divTable {
    display: table;
    width: 100%;
  }
  .divTableRow {
    display: table-row;
  }
  .divTableHeading {
    background-color: #eee;
    display: table-header-group;
  }
  .divTableCell,
  .divTableHead {
    border: 1px solid #999999;
    display: table-cell;
    padding: 3px 10px;
  }
  .divTableHeading {
    background-color: #eee;
    display: table-header-group;
    font-weight: bold;
  }
  .divTableFoot {
    background-color: #eee;
    display: table-footer-group;
    font-weight: bold;
  }
  .divTableBody {
    display: table-row-group;
  }
`;

class Map extends Component {
  render() {
    return (
      <Styles>
        <div class='wrap'>
          <div class='divTable'>
            <div class='divTableBody'>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
              <div class='divTableRow'>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
                <div class='divTableCell'>&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Map;
